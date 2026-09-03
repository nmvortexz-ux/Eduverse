import { prisma } from '@/lib/prisma';
import SubjectSelectionClient, { ClassData, SubjectInfo, ChapterInfo } from './SubjectSelectionClient';

// Force dynamic rendering so latest seeded questions and chapters always appear immediately
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function sortChaptersSequential(chapters: ChapterInfo[]): ChapterInfo[] {
  return [...chapters].sort((a, b) => {
    const numA = parseInt(a.name.match(/(?:Ch|Chapter)\s*(\d+)/i)?.[1] || '999', 10);
    const numB = parseInt(b.name.match(/(?:Ch|Chapter)\s*(\d+)/i)?.[1] || '999', 10);
    if (numA !== numB) return numA - numB;
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });
}

// Canonical grade tier ordering
const ALL_GRADES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

export default async function SubjectSelectionPage({
  searchParams,
}: {
  searchParams?: Promise<{ class?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialClass = resolvedParams?.class || 'Class 7';

  // Query the database directly as requested, getting all class/subject/chapter/difficulty groupings
  const rawCurriculum = await prisma.question.groupBy({
    by: ['class', 'subject', 'chapter', 'difficulty'],
    _count: { _all: true },
  });

  // Organize into a structured nested map without relying on any static mock lists
  const gradeMap: Record<
    string,
    {
      totalQuestions: number;
      subjectMap: Record<
        string,
        {
          count: number;
          chapters: Record<string, ChapterInfo>;
        }
      >;
    }
  > = {};

  // Initialize all canonical grades
  ALL_GRADES.forEach((grade) => {
    gradeMap[grade] = {
      totalQuestions: 0,
      subjectMap: {},
    };
  });

  // Populate data straight from the raw query
  rawCurriculum.forEach((group) => {
    const rawClass = group.class || '';
    const numMatch = rawClass.match(/\d+/);
    const canonicalGrade = numMatch ? `Class ${numMatch[0]}` : rawClass;

    if (!gradeMap[canonicalGrade]) {
      gradeMap[canonicalGrade] = { totalQuestions: 0, subjectMap: {} };
    }

    const count = group._count._all;
    gradeMap[canonicalGrade].totalQuestions += count;

    if (!gradeMap[canonicalGrade].subjectMap[group.subject]) {
      gradeMap[canonicalGrade].subjectMap[group.subject] = {
        count: 0,
        chapters: {},
      };
    }
    
    // Add to subject total count
    gradeMap[canonicalGrade].subjectMap[group.subject].count += count;

    // Handle chapter breakdown if present
    if (group.chapter) {
      const chaptersMap = gradeMap[canonicalGrade].subjectMap[group.subject].chapters;
      if (!chaptersMap[group.chapter]) {
        chaptersMap[group.chapter] = {
          name: group.chapter,
          count: 0,
          easy: 0,
          medium: 0,
          hard: 0,
        };
      }
      
      chaptersMap[group.chapter].count += count;
      
      // Map difficulty
      const diff = group.difficulty?.toLowerCase();
      if (diff === 'easy') chaptersMap[group.chapter].easy += count;
      else if (diff === 'medium') chaptersMap[group.chapter].medium += count;
      else if (diff === 'hard') chaptersMap[group.chapter].hard += count;
    }
  });

  // Build final serialized ClassData array
  const classesData: ClassData[] = ALL_GRADES.map((grade) => {
    const entry = gradeMap[grade];

    // Read subjects directly from the database map - NO static fallback mock lists
    const dbSubjects = Object.keys(entry.subjectMap);

    const subjects: SubjectInfo[] = dbSubjects.map((subjName) => {
      const dbSubj = entry.subjectMap[subjName];
      const chapters = dbSubj ? sortChaptersSequential(Object.values(dbSubj.chapters)) : [];
      return {
        name: subjName,
        count: dbSubj.count,
        chapters,
      };
    });

    // Sort subjects so ones with questions appear first
    subjects.sort((a, b) => b.count - a.count);

    return {
      name: grade,
      totalQuestions: entry.totalQuestions,
      subjects,
    };
  });

  return (
    <SubjectSelectionClient
      classesData={classesData}
      defaultSelectedClass={initialClass}
    />
  );
}
