import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "@/components/Navbar/NavIcons";

export const getLinks = (t: (key: string) => string) => [
  { href: "/", title: t("navbar.title1"), className: "mr-4" },
  { href: "/about", title: t("navbar.title2"), className: "mx-4" },
  { href: "/services", title: t("navbar.title5"), className: "mx-4" },
  { href: "/projects", title: t("navbar.title3"), className: "mx-4" },
  { href: "/articles", title: t("navbar.title4"), className: "ml-4" },
];

export const socialLinks = [
  {
    href: "https://twitter.com/224_support",
    Icon: TwitterIcon,
    alt: "Twitter",
    className: "w-6 mr-2",
  },
  {
    href: "https://github.com/iska1234",
    Icon: GithubIcon,
    alt: "GitHub",
    className: "w-6 mr-2",
  },
  {
    href: "https://www.linkedin.com/in/sadhu-cavero-egusquiza/",
    Icon: LinkedInIcon,
    alt: "LinkedIn",
    className: "w-6 mr-2",
  },
  {
    href: "https://www.pinterest.es/shinonsupp/",
    Icon: PinterestIcon,
    alt: "Pinterest",
    className: "w-6 mr-2 dark:bg-light rounded-full",
  },
];
