# DeepSeek Super Agent 源码适配与改造方案

DeepSeek 最新推出的 **Super Agent (DeepSeek Harness)** 是一款通用型任务规划、工具编排与多步执行的自主智能体。

---

## 为什么选择以 Apex Wiki 作为练手与探索试点？

1. **Super Agent 原生能力的通用性**：
   DeepSeek Super Agent 官方推出的初衷不是专门用来搭建特定网站或 Wiki 的，而是一个面向广泛工程任务、具有强大通用逻辑流程的 Agent 系统。
2. **整体逻辑流程的广泛适应性**：
   从“感知外部输入 ➔ 任务拆解与规划 ➔ 调用工具执行 ➔ 结果验证与错误反思 ➔ 自动化输出与交付”，这一套严密闭环可以泛化至软件研发、数据分析、文档运维等海量场景。
3. **练手试点的价值**：
   游戏 Wiki（特别是高频更新的 Apex Legends）拥有海量实体、复杂的平衡性数值与密集发布的新版本，是验证通用 Agent 在**高时效、强一致性领域知识库自动维护**中的绝佳练手沙盒。

---

## 源码与流程适配重点

为将通用的 Super Agent 适配为自治 Wiki 运维 Agent，需进行以下维度的改造：

### 1. 消息源适配器与工单生成 (Source Feeds & Ingestion)
- **改造点**：在 Agent 外围扩展信源监听适配器（EA 官网、Steam API、Trello、Twitter），将非结构化网页或推文转译为标准化的工单上下文。

### 2. 领域实体抽取与结构化数值对比 (Domain Entity & Diff Extraction)
- **改造点**：注入《Apex 英雄》专用 Prompt 与实体词典（英雄名称、战术技能、枪械、配件、护甲类型中英文映射），确保提取数值准确（如爆头倍率、每秒伤害 DPS、散布角度）。

### 3. 多文档拓扑更新与原子性保障 (Multi-Doc Topology Updater)
- **改造点**：一次官方补丁往往同时牵扯传奇档案、武器详情、赛季总览三个层级的文档。通过在 Agent 中引入工作区文件拓扑关系，确保所有关联文件被原子化修改。

### 4. 基于 GitHub 的全自动协作链路 (GitHub-Native Ops)
- **改造点**：深度对接 GitHub API，赋予 Agent 自动检索已开放 Issue、创建特性分支、发起包含规范变更报告的 Pull Request 并响应后续 Review 的能力。
