# Apex Legends Wiki (基于 DeepSeek Super Agent 自动维护)

> 🎮 **以 GitHub 仓库为原生 Wiki · 以 GitHub 为中枢管理工具 · 由 DeepSeek Super Agent 全自动驱动维护**

本项目是运行在 **DeepSeek 最新推出的 Super Agent (DeepSeek Harness)** 框架下、由 AI 自动化维护的 **《Apex 英雄》(Apex Legends)** 知识库。

---

## 核心理念与定位

### 1. 以 GitHub 本身作为 Wiki，以 GitHub 作为管理工具
本项目**并非单纯搭建一个对外独立展示的网站**，而是**将 GitHub 项目本身作为 Wiki 知识库，并全面使用 GitHub 原生能力作为整个 Wiki 的管理中枢**：
- **知识库载体**：利用 GitHub 仓库中的 Markdown 规范体系、目录索引、文件历史追踪（Git History）与行级追溯（Blame），作为游戏数据的“单一真实数据源 (Single Source of Truth)”。
- **工单与消息源追踪 (Issues)**：通过 GitHub Issues 对接与登记官方消息源变动事件（如新补丁发布、紧急热修、数据源异常等）以及社区反馈。
- **内容评审与合流 (Pull Requests)**：AI Agent 抓取并解析官方信息后，自主在仓库内发起 Pull Request，附带官方消息源对照与变更解析，由人类或自动化流程进行 Review 与合流。
- **版本归档 (Releases / Tags)**：以 GitHub Releases 对应 Apex 的大赛季与核心补丁版本，记录各周期的 Wiki 快照。
- **自动化流转 (GitHub Actions)**：作为调度底座，实现 Markdown 链接检查、格式校验以及可选的文档预览同步。

### 2. 针对 Apex 官方消息源进行添加与持续维护
知识库聚焦于《Apex 英雄》官方一手权威信源：
- **EA / Respawn 官方公告与博客** (Official Patch Notes, Dev Blogs)
- **Steam 社区官方更新日志** (Steam Community Hub & Client Updates)
- **官方技术支持与已知问题追踪** (Apex Legends Trello Board)
- **官方紧急热修动态** (Respawn / Apex Legends 官方推特/X 动态)

Agent 负责监控以上信源的变动，对官方文本中涉及的英雄技能数值、武器参数（伤害、弹夹、衰减）、排位赛积分机制等进行结构化提取与对比，并自动同步更新 Wiki 中的对应文档。

### 3. 基于 DeepSeek Super Agent 的源码改造与练手探索
- **通用框架与更广泛的应用潜力**：DeepSeek 官方推出的 Super Agent 框架是一个具备通用任务规划、工具调用、环境交互与自我反思能力的通用智能体框架，其原生设计并非专用于搭建 Wiki。其底层的整体逻辑流程具备通用性和极大的扩展空间，能够胜任更广泛的自动化系统构建。
- **练手试点项目**：本项目选择以“AI 自动维护的 Apex Legends Wiki”作为切入点和练手项目，探索对 Super Agent 的整体逻辑流程进行针对性改动与源码适配：
  - 增加**持续性消息源监听与事件分发机制**；
  - 扩展面向游戏补丁与专有名词的**领域抽取与对比引擎 (Diff Engine)**；
  - 强化 Agent 基于 Git/GitHub 平台的**自主文档编辑、分支创建与 Pull Request 提交流程**；
  - 为未来将 Super Agent 推广应用于自动化工程文档维护、开源社区治理等更广泛场景沉淀宝贵经验。

---

## Wiki 知识库快速导航

直接在 GitHub 中点击下方链接即可查阅对应 Wiki 文档：

| 知识板块 | 核心文档 | 说明 |
| :--- | :--- | :--- |
| **🧭 导航与索引** | [Wiki 总目录](wiki/README.md) · [项目指南](wiki/guide/index.md) | Wiki 整体组织与贡献指南 |
| **📡 官方消息源** | [消息源清单与监控规范](wiki/sources/official-sources.md) | EA、Steam、Trello 等官方监听源与提取规则 |
| **🎖️ 传奇档案** | [传奇总览](wiki/legends/README.md) · [突击](wiki/legends/assault.md) · [散兵](wiki/legends/skirmisher.md) · [侦察](wiki/legends/recon.md) · [控制](wiki/legends/controller.md) · [支援](wiki/legends/support.md) | 包含各职阶传奇的被动、战术、绝招数值与版本变迁 |
| **🔫 武器军械库** | [武器总览](wiki/weapons/README.md) · [突击步枪](wiki/weapons/assault-rifles.md) · [冲锋枪](wiki/weapons/smgs.md) · [霰弹枪](wiki/weapons/shotguns.md) · [狙击枪](wiki/weapons/snipers.md) | 基础伤害、弹药衰减、配件效果与 DPS/TTK 数据 |
| **📅 赛季与补丁** | [版本变迁总览](wiki/seasons/README.md) · [当前赛季动态](wiki/seasons/current-season.md) · [补丁跟踪机制](wiki/seasons/patch-tracking.md) | 历代大赛季改动与平衡性 Patch Notes 归档 |
| **🤖 架构与设计** | [Agent 自动维护架构](wiki/architecture/overview.md) · [Super Agent 源码适配与改造](wiki/architecture/agent-adaptation.md) | DeepSeek Super Agent 核心改造方案与工作流 |

---

## 仓库结构说明

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/         # GitHub Issue 工单模板（消息源更新、错误反馈等）
│   │   ├── source_update.md    # 官方消息源变动登记工单
│   │   └── wiki_feedback.md    # Wiki 内容修正与补充建议
│   ├── PULL_REQUEST_TEMPLATE.md# Super Agent 提交更新时的 PR 标准模板
│   └── workflows/              # GitHub Actions 自动化工作流
│       ├── deploy.yml          # GitHub Pages 静态文档构建与部署（可选预览）
│       └── wiki-ci.yml         # Markdown 语法、死链与规范自动化检查
├── wiki/                       # GitHub 原生 Wiki 核心数据目录
│   ├── README.md               # Wiki 全站总索引
│   ├── guide/                  # 项目指南与架构定位
│   ├── sources/                # Apex 官方消息源清单与监听规范
│   ├── legends/                # 传奇档案与技能数值
│   ├── weapons/                # 武器参数与配件体系
│   ├── seasons/                # 赛季更新与补丁日志
│   └── architecture/           # Super Agent 自动维护架构与改造方案
├── docs/                       # VitePress 文档入口（可选网页版预览）
│   └── .vitepress/             # 站点导航与主题配置
├── package.json
└── README.md                   # 仓库主页与 Wiki 快速门户
```

---

## GitHub 管理工作流

1. **消息源触发**：
   - 当官方发布新版本或热修时，监控模块在 GitHub 中创建带有 `official-source` 标签的 Issue，包含原文链接与原始公告。
2. **Super Agent 自主分析与更新**：
   - Super Agent 认领工单，拉取对应官方文本进行比对，定位受影响的 `wiki/` 文件（例如武器调整、英雄数值）。
   - Agent 本地修改 Markdown，生成符合规范的 Diff 内容与提交说明。
3. **Pull Request 评审合流**：
   - Agent 创建以 `agent/*` 为命名的分支并发起 Pull Request，关联对应的 Issue。
   - 触发 CI 自动化检查，通过后由人类或授权流程合并入 `main`。
4. **历史存档**：
   - 每次合并自动记录进 Git 提交树，随时可通过 GitHub 网页端查阅任意英雄或武器的历史变迁。

---

## 本地开发与预览（可选）

虽然本项目以 GitHub 仓库为核心载体，同时也保留了基于 VitePress 的本地静态预览支持：

```bash
# 1. 安装依赖
npm install

# 2. 启动本地实时预览
npm run docs:dev

# 3. 运行构建校验
npm run docs:build
```
