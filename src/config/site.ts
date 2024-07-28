export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  metadata: {
    defaultName: "Zillur Tax & Insurance Services",
    description:
      "Zillur Tax & Insurance Services provides legal tax and insurance services in dubai for the alst 20 year.",
    about: "About us - Zillur Tax & Insurance Services",
    taxAndAccount: "Tax & Account - Zillur Tax & Insurance Services",
    insurance: "Insurance - Zillur Tax & Insurance Services",
    contact: "Contact - Zillur Tax & Insurance Services",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about-us",
    },
    {
      label: "Tax  & Accounting",
      href: "/tax-and-accounting",
    },
    {
      label: "Insurance",
      href: "/insurance",
    },
    {
      label: "Real Estate",
      href: "/real-estate",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
};
