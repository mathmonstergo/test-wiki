# 目录结构与组织规范

本项目以 **GitHub 仓库本身作为原生 Wiki**，并以 GitHub 工具链作为核心管理中枢。仓库内目录分为核心知识库目录 `wiki/`、GitHub 管理目录 `.github/` 以及可选的站点预览目录 `docs/`。

---

## 仓库根目录结构

```text
test-wiki/
├── .github/
│   ├── ISSUE_TEMPLATE/         # GitHub Issue 工单模板（消息源更新、反馈等）
│   │   ├── source_update.md    # 官方消息源变动登记工单
│   │   └── wiki_feedback.md    # 社区内容勘误与建议
│   ├── PULL_REQUEST_TEMPLATE.md# Super Agent 提交更新的标准 PR 模板
│   └── workflows/              # GitHub Actions 自动化工作流
│       ├── deploy.yml          # GitHub Pages 自动化构建与部署
│       └── wiki-ci.yml         # Markdown 语法、死链与规范自动化检查
├── wiki/                       # GitHub 原生 Wiki 核心数据目录（直接在 GitHub 浏览）
│   ├── README.md               # Wiki 全站总索引与快速导航
│   ├── guide/                  # 项目指南与架构定位
│   ├── sources/                # 官方消息源清单与监控规范
│   ├── legends/                # 传奇档案与职阶技能数值
│   ├── weapons/                # 武器军械库与弹药配件
│   ├── seasons/                # 赛季与补丁跟踪日志
│   └── architecture/           # Agent 自动维护架构与改造方案
├── docs/                       # VitePress 站点文档（用于可选的网页端快速预览）
│   ├── .vitepress/             # 站点导航、侧边栏、本地全文搜索配置
│   ├── index.md                # 网页版主页
│   ├── guide/                  # 指南板块
│   ├── apex/                   # Apex 知识库板块
│   ├── architecture/           # 架构设计板块
│   ├── standards/              # 开发与协作规范
│   └── resources/              # 参考资料与工具
├── .editorconfig               # 团队统一缩进与换行符配置
├── .gitignore                  # Git 忽略配置
├── package.json                # 项目依赖与构建脚本
└── README.md                   # 仓库主页与 Wiki 门户导航
```

---

## 双轨查阅机制

1. **GitHub 网页与客户端直接查阅（推荐）**：
   - 直接浏览 `wiki/` 目录或通过根目录 `README.md` 的快速导航跳转。
   - 利用 GitHub 原生的文件导航、Commit 历史、Blame 追踪与全网搜索，直接获取最新情报。
2. **本地/静态网页预览 (VitePress)**：
   - 执行 `npm run docs:dev`，可以在本地浏览器中以文档站点形式交互查阅与检索。
