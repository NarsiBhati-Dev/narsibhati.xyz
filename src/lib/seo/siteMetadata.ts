import { SITE_URL } from "@/config";

if (!SITE_URL) {
  throw new Error(
    "❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file.",
  );
}

const siteMetadata = {
  title: "Narsi Bhati",
  description:
    "Narsi Bhati is a full-stack developer, devops engineer, and web3 developer.",

  header: "Narsi Bhati",

  siteUrl: SITE_URL,

  language: "en-US",
  locale: "en-US",

  socialBanner: `${SITE_URL}/images/social-banner.webp`,

  // dashboard
  dashboard: "/dashboard",

  // social links
  github: "https://github.com/NarsiBhati-Dev",
  linkedIn: "https://www.linkedin.com/in/narsi-bhati-b43459224/",
  twitter: "https://x.com/NarsiBhati31",

  // contacts
  email: "narsibhati2000@gmail.com",
};

export default siteMetadata;
