export interface AppContent {
  preface: string;
  docTitle: string;
  header: HeaderProps;
  footer: FooterProps;
  hero: HeroProps;
  about: AboutProps;
  career: CareerProps;
  recommendations: RecommendationsProps;
  projects: ProjectsProps;
  skills: SkillsProps;
}

export interface HeaderProps {
  title: string;
  nav: string[];
}

export interface FooterProps {
  copyright: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  iconCredits: {
    websiteLinkUrl: string;
    websiteLinkText: string;
    iconUrl: string;
    iconName: string;
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface HeroProps {
  strapline: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface AboutProps {
  title: string;
  content: string;
}

export interface CareerProps {
  title: string;
  text: string;
  resumeLink: {
    text: string;
    url: string;
  };
  jobHistory: {
    company: string;
    url?: string;
    duration: string;
    positionsHeld: string[];
  }[];
}

export interface RecommendationsProps {
  title: string;
  items: {
    referee: string;
    jobTitle: string;
    content: string;
  }[];
}

export interface ProjectsProps {
  title: string;
  items: {
    title: string;
    description: string;
    url: string;
    techUsed: string[];
    isFeatured?: boolean;
    icon?: string;
  }[];
}

export interface SkillsProps {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}
