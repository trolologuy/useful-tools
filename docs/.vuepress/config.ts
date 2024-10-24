import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { linksCheckPlugin } from '@vuepress/plugin-links-check'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  title: 'Useful Tools',
  base: "/useful-tools/",
  theme: defaultTheme({
    repo: 'trolologuy/useful-tools',
    docsDir: 'docs',
    sidebar: 'heading',
  }),
  plugins: [
    activeHeaderLinksPlugin({
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }),
    docsearchPlugin({
      apiKey: '5b665c1ca2a775d036f6783485c4b41d',
      indexName: 'trolologuy_useful-tools'
    }),
    backToTopPlugin(),
    nprogressPlugin(),
    linksCheckPlugin({
      dev: true,
      build: "error"
    }),
  ],
})
