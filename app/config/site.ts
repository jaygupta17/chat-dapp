export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chat Dapp",
  description: "Made by Jay Gupta.",
  navItems: [
    {
      label: "Home",
      href: "/",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
