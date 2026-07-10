import { defineConfig } from 'vitepress';

const GH = 'https://github.com/chizhangucb/chronicle';

export default defineConfig({
  title: 'Chronicle',
  description: 'A local-first time machine for AI coding sessions — replay, control, and secure your Claude Code, Codex, Cursor, OpenCode, Gemini, and Copilot sessions.',
  lang: 'en-US',
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  // Content pages live under /docs/*; anything else is the marketing home.
  ignoreDeadLinks: [/^https?:\/\/localhost/],

  head: [
    ['meta', { name: 'theme-color', content: '#0e1116' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Chronicle — a time machine for AI coding sessions' }],
    ['meta', { property: 'og:description', content: 'Import your AI coding logs and travel back to the exact code behind any message. Local-first, no cloud, no LLM calls.' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/guide/quickstart', activeMatch: '/docs/guide/' },
      { text: 'Reference', link: '/docs/reference/keyboard-shortcuts', activeMatch: '/docs/reference/' },
      { text: 'Architecture', link: '/docs/architecture/overview', activeMatch: '/docs/architecture/' },
      {
        text: 'v0.1.7',
        items: [
          { text: 'Changelog', link: `${GH}/blob/main/CHANGELOG.md` },
          { text: 'Releases', link: 'https://github.com/chizhangucb/homebrew-chronicle/releases' },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Overview', link: '/docs/' },
            { text: 'Contributing', link: '/docs/contributing' },
          ],
        },
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/docs/guide/installation' },
            { text: 'Quickstart', link: '/docs/guide/quickstart' },
            { text: 'Importing sessions', link: '/docs/guide/importing-sessions' },
            { text: 'Time travel', link: '/docs/guide/time-travel' },
            { text: 'Search & filtering', link: '/docs/guide/search-and-filtering' },
            { text: 'Session insights', link: '/docs/guide/session-insights' },
            { text: 'Refine mode', link: '/docs/guide/refine-mode' },
            { text: 'Replay mode', link: '/docs/guide/replay-mode' },
            { text: 'Project management', link: '/docs/guide/project-management' },
            { text: 'Context causality', link: '/docs/guide/context-causality' },
            { text: 'Live streaming', link: '/docs/guide/live-streaming' },
            { text: 'MCP Hub', link: '/docs/guide/mcp-hub' },
            { text: 'Skills Hub', link: '/docs/guide/skills-hub' },
            { text: 'Security & sharing', link: '/docs/guide/security-and-sharing' },
          ],
        },
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'Keyboard shortcuts', link: '/docs/reference/keyboard-shortcuts' },
            { text: 'Compatibility', link: '/docs/reference/compatibility' },
            { text: 'Configuration', link: '/docs/reference/configuration' },
            { text: 'Privacy & data', link: '/docs/reference/privacy-and-data' },
          ],
        },
        {
          text: 'Architecture',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/docs/architecture/overview' },
            { text: 'Data model', link: '/docs/architecture/data-model' },
            { text: 'Parsers & ingestion', link: '/docs/architecture/parsers-and-ingestion' },
            { text: 'Git snapshot engine', link: '/docs/architecture/git-snapshot-engine' },
            { text: 'MCP & Skills internals', link: '/docs/architecture/mcp-and-skills-internals' },
            { text: 'Security, live & replay', link: '/docs/architecture/security-live-replay' },
            { text: 'API reference', link: '/docs/architecture/api-reference' },
            { text: 'Desktop & packaging', link: '/docs/architecture/desktop-packaging' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    socialLinks: [{ icon: 'github', link: GH }],

    editLink: {
      pattern: `${GH}/edit/main/:path`,
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2026 Chi Zhang · Local-first, no cloud, no LLM calls.',
    },
  },
});
