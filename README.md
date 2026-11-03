# 项目知识库 (Wiki)

基于 [VitePress](https://vitepress.dev/) 构建的项目初始知识库与技术文档中心，用于统一团队技术共识、规范研发流程及沉淀项目资产。

## 特性亮点

- ⚡ **极速冷启动与热重载**：基于 Vite 与 Vue 3，提供流畅的文档编写与实时预览体验。
- 🔍 **内置全文检索**：集成客户端轻量全文搜索，支持快速定位文档内容。
- 📱 **响应式与深色模式**：开箱即用支持移动端适配与明暗主题平滑切换。
- 📚 **规范化目录组织**：涵盖项目指南、系统架构、开发规范与资料索引四大核心板块。
- 🤖 **自动化部署**：配置 GitHub Actions 工作流，代码合并至 `main` 分支后自动编译并发布至 GitHub Pages。

## 目录结构

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动化构建与部署工作流
├── docs/                       # Wiki 文档根目录
│   ├── .vitepress/             # 站点与导航配置
│   ├── guide/                  # 项目指南（简介、快速上手、结构说明）
│   ├── architecture/           # 架构设计（分层总览、技术选型、核心模块）
│   ├── standards/              # 协作规范（Git 工作流、代码规范、文档规范）
│   └── resources/              # 参考资料（外部文档索引、开发工具）
├── package.json
└── README.md
```

## 本地开发指南

### 环境准备

- **Node.js** >= 18.0.0 (推荐 Node.js 20 或 22)
- **npm** >= 9.0.0 (或 pnpm / yarn)

### 常用命令

```bash
# 1. 安装项目依赖
npm install

# 2. 启动本地开发服务 (支持实时热重载)
npm run docs:dev

# 3. 构建静态站点产物
npm run docs:build

# 4. 本地预览构建产物
npm run docs:preview
```

本地服务启动后，默认可通过浏览器访问 `http://localhost:5173/test-wiki/`。

## 协作与贡献

1. 所有文档均采用 Markdown 编写，存放于 `docs/` 目录下。
2. 新增或移动文档章节时，请同步更新 `docs/.vitepress/config.mts` 中的 `nav` 或 `sidebar` 导航配置。
3. 提交代码时请遵循 Conventional Commits 规范，并在本地执行 `npm run docs:build` 验证无语法及死链报错后再发起 Pull Request。
