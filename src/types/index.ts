
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  period: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationType {
  degree: string;
  institution: string;
  period?: string;
  location?: string;
  achievements?: string[];
  results?: string[];
  skills: string[];
}

export interface SkillCategoryType {
  category: string;
  skills: string[];
}
