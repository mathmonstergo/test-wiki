# 目录结构

本项目采用 VitePress 推荐的标准文档目录架构，将文档源文件集中存放于 `docs/` 目录下，便于管理和维护。

## 仓库根目录结构

```text
test-wiki/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动化部署流程
├── docs/                       # 知识库文档根目录
│   ├── .vitepress/             # VitePress 站点核心配置
│   │   ├── config.mts          # 站点导航、侧边栏、搜索、SEO等配置
│   │   └── dist/               # 静态构建产物（已加入 gitignore）
│   ├── index.md                # 知识库主页（Hero & 特性布局）
│   ├── guide/                  # 指南板块
│   │   ├── index.md            # 项目简介
│   │   ├── quick-start.md      # 快速开始
│   │   └── structure.md        # 目录结构说明
│   ├── architecture/           # 架构设计板块
│   │   ├── overview.md         # 架构总览
│   │   ├── tech-stack.md       # 技术选型
│   │   └── modules.md          # 核心模块设计
│   ├── standards/              # 开发与协作规范
│   │   ├── git-workflow.md     # Git 工作流规范
│   │   ├── code-style.md       # 代码与审查规范
│   │   └── documentation.md    # 文档编写规范
│   └── resources/              # 参考资料与工具
│       ├── references.md       # 资料索引
│       └── tools.md            # 开发工具推荐
├── .gitignore                  # Git 忽略配置
├── package.json                # 项目依赖与脚本定义
└── README.md                   # 仓库基础说明文件
```

## 文档路径与路由规则

- 每个 `.md` 文件对应站点中的一个网页路径。
- `docs/guide/quick-start.md` 对应的 URL 路由为 `/guide/quick-start`。
- 每个子目录下的 `index.md` 对应其根路由，例如 `docs/guide/index.md` 对应 `/guide/`。
- 新增或调整文档时，请同步更新 `docs/.vitepress/config.mts` 中的 `sidebar` 配置，确保侧边栏能够正常展示。
