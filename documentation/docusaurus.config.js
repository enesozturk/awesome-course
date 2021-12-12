// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Awesome Course",
  tagline: "Create awesome courses that let your audience learn by coding.",
  url: "https://enesozturk.github.io",
  organizationName: "enesozturk",
  projectName: "awesome-course",
  baseUrl: "/awesome-course/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  deploymentBranch: "gh-pages",
  themeConfig: {
    navbar: {
      title: "Awesome Course",
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/enesozturk/awesome-course",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documents",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/enesozt_",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/enesozturk",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enes Öztürk.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          lastVersion: "current",
        },
        blog: {
          path: "blog",
          routeBasePath: "/blog",
          showReadingTime: false,
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-EJT5HJFCYV",
          anonymizeIP: true,
        },
      },
    ],
  ],
};

module.exports = config;
