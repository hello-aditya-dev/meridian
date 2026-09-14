export const site = {
  name: "Meridian",
  legalName: "Meridian Systems, Inc.",
  tagline: "The operating layer for modern enterprise",
  description:
    "Meridian unifies planning, monitoring, analytics and optimization into one system of record — so operations teams move faster than their complexity grows.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://meridian-witejackel-4928s-projects.vercel.app",
  email: {
    sales: "sales@meridianhq.com",
    support: "support@meridianhq.com",
    press: "press@meridianhq.com",
    security: "security@meridianhq.com",
  },
  founded: 2021,
  hq: "San Francisco, CA",
};

export const siteUrl = site.url;
