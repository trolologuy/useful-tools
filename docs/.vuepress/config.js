module.exports = {
    title: 'Useful Tools',
    base: "/useful-tools/",
    themeConfig: {
      algolia: {
        apiKey: '5b665c1ca2a775d036f6783485c4b41d',
        indexName: 'trolologuy_useful-tools'
      },
      sidebar: 'auto',
      nav: [
        { text: 'Github', link: 'https://github.com/trolologuy/useful-tools' },
      ]
    },
    plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }, '@vuepress/search', {
        searchMaxSuggestions: 10
      }],
}