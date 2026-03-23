// Sanity CMS Data Types
// Generated from Landing Page schema

export interface SanityImage {
  asset?: {
    url: string;
  };
  alt?: string;
}

export interface HeroSectionData {
  label?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  videoUrl?: string;
  heroImage?: SanityImage;
  stats?: Array<{ value: string; label: string }>;
}

export interface ProblemCard {
  number?: string;
  title?: string;
  body?: string;
  tag?: string;
  image?: SanityImage;
}

export interface ProblemSectionData {
  label?: string;
  heading?: string;
  description?: string;
  cards?: ProblemCard[];
}

export interface SolutionFeature {
  icon?: string;
  title?: string;
  body?: string;
}

export interface SolutionSectionData {
  label?: string;
  heading?: string;
  description?: string;
  features?: SolutionFeature[];
  image1?: SanityImage;
  image2?: SanityImage;
}

export interface MagicItem {
  title?: string;
  description?: string;
}

export interface MagicSectionData {
  label?: string;
  heading?: string;
  description?: string;
  items?: MagicItem[];
  videoUrl?: string;
}

export interface UseCase {
  title?: string;
  description?: string;
  icon?: string;
  image?: SanityImage;
}

export interface UseCasesSectionData {
  label?: string;
  heading?: string;
  description?: string;
  cases?: UseCase[];
}

export interface BoxItem {
  title?: string;
  description?: string;
  image?: SanityImage;
}

export interface FortBoxSectionData {
  label?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  items?: BoxItem[];
}

export interface Insight {
  title?: string;
  description?: string;
  image?: SanityImage;
}

export interface InsightsSectionData {
  label?: string;
  heading?: string;
  description?: string;
  insights?: Insight[];
}

export interface ContactSectionData {
  label?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: SanityImage;
}

export interface Partner {
  name?: string;
  logo?: SanityImage;
}

export interface PartnersSectionData {
  heading?: string;
  partners?: Partner[];
}

export interface LandingPageData {
  title?: string;
  heroSection?: HeroSectionData;
  problemSection?: ProblemSectionData;
  solutionSection?: SolutionSectionData;
  magicSection?: MagicSectionData;
  useCasesSection?: UseCasesSectionData;
  fortBoxSection?: FortBoxSectionData;
  insightsSection?: InsightsSectionData;
  contactSection?: ContactSectionData;
  partnersSection?: PartnersSectionData;
}
