declare module "*.json" {
  const value: {
    companyName: string;
    tagline: string;
    hero: {
      title: string;
      subtitle: string;
      description: string;
      ctaText: string;
      ctaLink: string;
      secondaryCtaText: string;
      secondaryCtaLink: string;
      image: string;
      clientCount: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
      link: string;
    }>;
    testimonials: Array<{
      quote: string;
      author: string;
      position: string;
      avatar: string;
    }>;
    services: Array<{
      title: string;
      description: string;
      icon: string;
      link: string;
    }>;
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      secondaryText: string;
      secondaryLink: string;
    };
    navigation: {
      logo: string;
      links: Array<{
        text: string;
        url: string;
        hasDropdown?: boolean;
        dropdownItems?: Array<{
          text: string;
          url: string;
        }>;
      }>;
      ctaButton: {
        text: string;
        url: string;
      };
    };
    footer: {
      companyName: string;
      tagline: string;
      copyright: string;
      links: Array<{
        title: string;
        items: Array<{
          text: string;
          url: string;
        }>;
      }>;
      socialLinks: Array<{
        platform: string;
        icon: string;
        url: string;
      }>;
    };
  };
  export default value;
} 