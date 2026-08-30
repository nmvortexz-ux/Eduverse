import { prisma } from '@/lib/prisma';
import SubjectSelectionClient, { ClassData, SubjectInfo, ChapterInfo } from './SubjectSelectionClient';

// Force dynamic rendering so latest seeded questions and chapters always appear immediately
export const dynamic = 'force-dynamic';

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

// Default subjects for secondary vs senior secondary
const DEFAULT_SECONDARY_SUBJECTS = ['Science', 'Mathematics', 'English', 'Hindi Grammar', 'GK', 'Social Studies'];
const DEFAULT_COMMERCE_SUBJECTS = ['Accountancy', 'Business Studies', 'Economics', 'English', 'GK'];

export default async function SubjectSelectionPage() {
  // 1. Fetch distinct classes and subjects with live question counts via prisma.question.groupBy
  const classSubjectGroups = await prisma.question.groupBy({
    by: ['class', 'subject'],
    _count: { id: true },
    orderBy: [{ class: 'asc' }, { subject: 'asc' }],
  });

  // 2. Fetch chapter counts grouped by class, subject, and chapter
  const chapterGroups = await prisma.question.groupBy({
    by: ['class', 'subject', 'chapter'],
    where: {
      chapter: { not: null },
    },
    _count: { id: true },
    orderBy: { chapter: 'asc' },
  });

  // 3. Organize into a structured nested map
  const gradeMap: Record<
    string,
    {
      totalQuestions: number;
      subjectMap: Record<
        string,
        {
          count: number;
          chapters: ChapterInfo[];
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

  // Populate actual question counts from classSubjectGroups
  classSubjectGroups.forEach((group) => {
    const rawClass = group.class || '';
    const numMatch = rawClass.match(/\d+/);
    const canonicalGrade = numMatch ? `Class ${numMatch[0]}` : rawClass;

    if (!gradeMap[canonicalGrade]) {
      gradeMap[canonicalGrade] = { totalQuestions: 0, subjectMap: {} };
    }

    const count = group._count.id;
    gradeMap[canonicalGrade].totalQuestions += count;

    if (!gradeMap[canonicalGrade].subjectMap[group.subject]) {
      gradeMap[canonicalGrade].subjectMap[group.subject] = {
        count,
        chapters: [],
      };
    } else {
      gradeMap[canonicalGrade].subjectMap[group.subject].count += count;
    }
  });

  // Populate chapter breakdowns from chapterGroups
  chapterGroups.forEach((chGroup) => {
    if (!chGroup.chapter) return;
    const rawClass = chGroup.class || '';
    const numMatch = rawClass.match(/\d+/);
    const canonicalGrade = numMatch ? `Class ${numMatch[0]}` : rawClass;

    if (gradeMap[canonicalGrade]?.subjectMap[chGroup.subject]) {
      gradeMap[canonicalGrade].subjectMap[chGroup.subject].chapters.push({
        name: chGroup.chapter,
        count: chGroup._count.id,
      });
    }
  });

  // 4. Build final serialized ClassData array
  const classesData: ClassData[] = ALL_GRADES.map((grade) => {
    const entry = gradeMap[grade];
    const isCommerce = grade === 'Class 11' || grade === 'Class 12';
    const fallbackSubjects = isCommerce ? DEFAULT_COMMERCE_SUBJECTS : DEFAULT_SECONDARY_SUBJECTS;

    // Merge DB subjects with fallback list
    const presentSubjectNames = Object.keys(entry.subjectMap);
    const allSubjectNames = Array.from(new Set([...presentSubjectNames, ...fallbackSubjects]));

    const subjects: SubjectInfo[] = allSubjectNames.map((subjName) => {
      const dbSubj = entry.subjectMap[subjName];
      const chapters = dbSubj ? sortChaptersSequential(dbSubj.chapters) : [];
      return {
        name: subjName,
        count: dbSubj?.count || 0,
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
      defaultSelectedClass="Class 7"
    />
  );
}
