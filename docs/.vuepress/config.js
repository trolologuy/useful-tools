module.exports = {
    title: 'Useful Tools',
    base: "/useful-tools/",
    themeConfig: {
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