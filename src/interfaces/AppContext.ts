export interface IAppContext {
  content: {
    docTitle: string;
    header: IHeader;
    footer: IFooter;
    hero: IHero;
    preface: string;
    bio: IBio;
    career: ICareer;
    recommendations: IRecommendations;
    projects: IProjects;
  };
}

export interface IHeader {
  title: string;
  nav: string[];
}

export interface IFooter {
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

export interface IHero {
  strapline: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface IBio {
  title: string;
  content: string;
}

export interface ICareer {
  title: string;
  text: string;
  resumeLink: {
    text: string;
    url: string;
  };
  jobHistory: {
    url: string;
    duration: string;
    company: string;
    positionHeld: string[];
  }[];
}

export interface IRecommendations {
  title: string;
  items: {
    referee: string;
    jobTitle: string;
    content: string;
  }[];
}

export interface IProjects {
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

export interface Skills {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}
