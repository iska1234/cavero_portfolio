import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "@/components/Navbar/NavIcons";

export const getNavMobileLinks = (t: (key: string) => string) => [
  { href: "/", title: t("navbar.title1") },
  { href: "/about", title: t("navbar.title2") },
  { href: "/projects", title: t("navbar.title3") },
  { href: "/articles", title: t("navbar.title4") },
];

export const socialMobileLinks = [
  { href: "https://twitter.com/224_support", Icon: TwitterIcon, alt: "Twitter", className: 'w-6 mr-3 sm:mx-1' },
  { href: "https://github.com/iska1234", Icon: GithubIcon, alt: "GitHub", className: 'w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1' },
  { href: "https://www.linkedin.com/in/sadhu-cavero-egusquiza/", Icon: LinkedInIcon, alt: "LinkedIn", className: 'w-6 mx-3 sm:mx-1' },
  { href: "https://www.pinterest.es/shinonsupp/", Icon: PinterestIcon, alt: "Pinterest", className: 'w-6 ml-3 bg-light rounded-full sm:mx-1' },
];