// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fvuarjs',
  tagline: 'Fast Visual User Alerts Resource',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fvuar.js.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fvuarjs', // Usually your GitHub org/user name.
  projectName: 'fvuarjs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'fvuarjs',
        logo: {
          alt: 'fvuarjs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fvuarjs/fvuarjs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Inroduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: "Other Projects",
            items: [
              {
                label: "Domain List Generator",
                href: "https://github.com/ahmetcanisik/mydomainlist"
              },
              {
                label: "Tailwindcss Color Scheme",
                href: "https://github.com/ahmetcanisik/mycolorscheme"
              },
              {
                label: "Stopwatch",
                href: "https://github.com/ahmetcanisik/stopwatch"
              },
              {
                label: "Bsmatik",
                href: "https://bsmatik.netlify.app/"
              },
              {
                label: "fvonts",
                href: "https://github.com/ahmetcanisik/fvonts"
              },
              {
                label: "fvmodal",
                href: "https://github.com/ahmetcanisik/fvmodal"
              },
              {
                label: "fvcursor",
                href: "https://github.com/ahmetcanisik/mycursor"
              }
            ]
          },
          {
            title: 'Follow on social media',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/ahmetcan_isik35',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/acanisik0',
              },
              {
                label: 'BlueSky',
                href: 'https://canisik.bsky.social',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fvuarjs/fvuarjs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} fvuarjs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
