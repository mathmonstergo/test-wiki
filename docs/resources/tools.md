# 常用开发工具推荐

工欲善其事，必先利其器。以下列举团队推荐的研发辅助工具与环境配置建议。

## 编辑器与 IDE

- **Visual Studio Code / Cursor**：
  - 推荐插件：
    - `Vue - Official`: Vue 语法支持
    - `Markdown All in One`: Markdown 便捷快捷键与目录生成
    - `Prettier - Code formatter`: 自动化代码格式化
    - `ESLint`: 实时语法与代码规范提示
    - `GitLens`: 查看单行代码提交历史与变更追踪

## 命令行与效率工具

- **Git & GitHub CLI (`gh`)**：
  - 推荐使用 `gh` 进行命令行 PR 创建、审查与状态查询。
- **Node 版本管理**：
  - `nvm` 或 `fnm`（Fast Node Manager），方便在不同项目间无缝切换 Node.js 版本。
- **接口调试与网络抓包**：
  - Postman / Bruno / Hoppscotch / Apifox
  - Charles / Wireshark

## 推荐统一设置

为保证团队协作时不产生换行符冲突或缩进不一致，建议在仓库根目录保留 `.editorconfig` 配置。
