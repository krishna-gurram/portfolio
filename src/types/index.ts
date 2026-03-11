export interface ExperienceItem {
  id: number;
  company: string;
  period: string;
  role: string;
  team: string;
  location: string;
  bullets: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export type ProjectIcon = 'brain' | 'globe' | 'shield' | 'layers' | 'activity' | 'search';

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  impact: string;
  metrics: Metric[];
  stack: string[];
  icon: ProjectIcon;
}

export interface SkillCategory {
  label: string;
  items: string[];
  primary?: string[];
}

export interface SkillGroups {
  [key: string]: SkillCategory;
}

export interface EducationItem {
  id: number;
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}
