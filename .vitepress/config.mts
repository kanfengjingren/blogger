import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  outDir: "docs",//打包的输出在根目录下的docs
  base:"/blogger/",//这是你的git仓库的名字
  title: "看风景人的博客",
  description: "看风景人的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'nodejs', link: '/nodejs/prisma' }
    ],

    sidebar: [
      {
        text: '前端工程化',
        items: [
          { text: 'webpack', link: '/前端工程化/webpack' },
          
        ]
      },
      {
        text: 'nodejs',
        items: [
          { text: 'prisma', link: '/nodejs/prisma' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
