import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.BASE_URL || '/test-wiki/',
  lang: 'zh-CN',
  title: 'Apex Legends Wiki',
  description: '基于 DeepSeek Super Agent 自动维护的 Apex Legends 知识库与 Wiki 框架',

  themeConfig: {
    siteTitle: 'Apex Wiki (Super Agent)',
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
      { text: 'Apex 知识库', link: '/apex/overview' },
      { text: '架构设计', link: '/architecture/overview' },
      { text: '开发规范', link: '/standards/git-workflow' },
      { text: '消息源与资料', link: '/resources/references' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '项目简介与背景', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '目录结构说明', link: '/guide/structure' }
          ]
        }
      ],
      '/apex/': [
        {
          text: 'Apex 知识库',
          items: [
            { text: '知识库总览', link: '/apex/overview' },
            { text: '官方消息源接入规划', link: '/apex/sources' },
            { text: '版本与补丁跟踪机制', link: '/apex/patch-notes' }
          ]
        }
      ],
      '/architecture/': [
        {
          text: '架构设计',
          items: [
            { text: 'Agent 自动维护全景架构', link: '/architecture/overview' },
            { text: 'Super Agent 适配与改造', link: '/architecture/agent-adaptation' },
            { text: '技术选型分析', link: '/architecture/tech-stack' },
            { text: '核心模块划分', link: '/architecture/modules' }
          ]
        }
      ],
      '/standards/': [
        {
          text: '开发规范',
          items: [
            { text: 'Git 工作流与分支规范', link: '/standards/git-workflow' },
            { text: '代码规范与审查指南', link: '/standards/code-style' },
            { text: '文档编写与自动化规范', link: '/standards/documentation' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资料与工具',
          items: [
            { text: '官方消息源与参考索引', link: '/resources/references' },
            { text: '常用开发工具', link: '/resources/tools' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mathmonstergo/test-wiki' }
    ],

    footer: {
      message: '基于 DeepSeek Super Agent 自动维护 · VitePress 构建',
      copyright: 'Copyright © 2026-present'
    }
  }
})
