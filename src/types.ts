export type SiteConfig = {
  company_name: string;
  legal_name: string;
  title: string;
  description: string;
  canonical_url: string;
  locale?: string; // default en
  telephone: string;
  email: string;
  address: string;
  vat_number?: string;
  og_image: string;

  twitter?: {
    creator?: string; // twitter handle
    card?: "summary" | "summary_large_image" | "app" | "player";
  };

  socials: Social[];

  dev?: {
    name: string;
    url: string;
  };
};

export type Social = {
  name: string;
  icon: string;
  label: string;
  href: string;
};
