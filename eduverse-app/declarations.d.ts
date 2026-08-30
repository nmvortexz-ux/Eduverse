declare module 'lucide-react' {
  import * as React from 'react';
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Database: LucideIcon;
  export const UploadCloud: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const XCircle: LucideIcon;
  export const FileCode2: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Trash2: LucideIcon;
  export const Copy: LucideIcon;
  export const Layers: LucideIcon;
  export const BookOpen: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Clock: LucideIcon;
  export const Check: LucideIcon;
  export const Code: LucideIcon;
  export const FileUp: LucideIcon;
  export const Loader2: LucideIcon;
  export const FlaskConical: LucideIcon;
  export const Calculator: LucideIcon;
  export const Languages: LucideIcon;
  export const Globe2: LucideIcon;
  export const Landmark: LucideIcon;
  export const Scale: LucideIcon;
  export const Briefcase: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Swords: LucideIcon;
  export const Play: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Flame: LucideIcon;
  export const Zap: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Building2: LucideIcon;
  export const Atom: LucideIcon;
  export const Target: LucideIcon;
  export const Shield: LucideIcon;

  const icons: { [key: string]: LucideIcon };
  export default icons;
}
