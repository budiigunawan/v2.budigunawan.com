// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Budi Indra Gunawan',
  tagline: 'I love to write codes and words.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://budigunawan.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'budiigunawan', // Usually your GitHub org/user name.
  projectName: 'v2.budigunawan.com', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/budiigunawan/v2.budigunawan.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/budiigunawan/v2.budigunawan.com',
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
        title: 'Budi Gunawan',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/projects',
            label: 'Projects',
            position: 'right',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/contact', label: 'Contact', position: 'right' },
          // {
          //   href: 'https://github.com/budiigunawan',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'right',
          //   label: 'Tutorial',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social Media',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/buigun/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/buigun',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/buigun',
              },
            ],
          },
          {
            title: 'Page',
            items: [
              {
                label: 'Projects',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/budiigunawan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Budi Indra Gunawan.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          name: 'Budi Gunawan',
          content: 'web development, frontend development, book summaries',
        },
      ],
    }),
};

export default config;
