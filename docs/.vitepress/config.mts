import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.BASE_URL || '/test-wiki/',
  lang: 'zh-CN',
  title: '项目知识库',
  description: '项目初始阶段 Wiki 知识库框架与开发协作指南',

  themeConfig: {
    siteTitle: '项目知识库',
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色主题',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '架构设计', link: '/architecture/overview' },
      { text: '开发规范', link: '/standards/git-workflow' },
      { text: '资料索引', link: '/resources/references' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '项目简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '目录结构', link: '/guide/structure' }
          ]
        }
      ],
      '/architecture/': [
        {
          text: '架构设计',
          items: [
            { text: '系统架构总览', link: '/architecture/overview' },
            { text: '技术选型分析', link: '/architecture/tech-stack' },
            { text: '核心模块设计', link: '/architecture/modules' }
          ]
        }
      ],
      '/standards/': [
        {
          text: '开发规范',
          items: [
            { text: 'Git 工作流与分支规范', link: '/standards/git-workflow' },
            { text: '代码规范与审查指南', link: '/standards/code-style' },
            { text: '文档编写规范', link: '/standards/documentation' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资料与工具',
          items: [
            { text: '参考资料索引', link: '/resources/references' },
            { text: '常用开发工具', link: '/resources/tools' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mathmonstergo/test-wiki' }
    ],

    footer: {
      message: '基于 VitePress 构建的初始项目知识库框架',
      copyright: 'Copyright © 2026-present'
    }
  }
})
