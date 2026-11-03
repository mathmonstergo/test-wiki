# 官方消息源清单与监控规范

为了保证 Wiki 内容的权威性、准确性与时效性，AI 自动维护管线聚焦于以下官方一手消息渠道。

---

## 1. 官方消息源矩阵

| 渠道名称 | 官方链接 / 接入点 | 监控频次 | 提取重点 |
| :--- | :--- | :--- | :--- |
| **EA Apex 官方新闻** | [EA Apex Legends News](https://www.ea.com/games/apex-legends/news) | 每日 2 次定时轮询 | 赛季主题、新传奇登场、通行证机制、开发者日志 |
| **EA 官方补丁日志** | [EA Apex Patch Notes](https://www.ea.com/games/apex-legends/news#patch-notes) | 补丁日高频轮询 / RSS | 传奇技能调整、武器平衡性改动、Bug 修复、排位赛规则 |
| **Steam 社区中心** | [Steam Community News](https://store.steampowered.com/news/app/1172470) | Webhook / API | 客户端更新说明、热修复补丁 (Hotfix)、服务器维护通知 |
| **Apex 官方 Trello** | [Apex Legends Community Trello](https://trello.com/b/ZVrHV3Bq/apex-legends-community-trello) | 每日 1 次 | 官方已知问题调查进度 (Investigating / Coming in Future Patch) |
| **官方社交媒体 (X)** | [@PlayApex](https://twitter.com/PlayApex) & [@Respawn](https://twitter.com/Respawn) | 实时推文监听 | 突发已知问题、临时禁用声明、紧急热修说明 |

---

## 2. 消息采集与处理规范

### 采集原则
1. **官方第一手信源**：除官方 EA、Respawn、Steam 官方渠道外，不采纳非官方爆料或社区传闻。
2. **全文快照归档**：抓取到的原始公告文本保存在历史工单记录中，确保数据变更有据可查。
3. **多语言对齐**：以官方英文原文作为数值与术语核对的标准基准，中文官方翻译为辅助。

### 提取与结构化流程
- **实体抽取**：从非结构化文本中识别被修改的实体（如英雄名、技能名、枪械名、配件名）。
- **数值对比 (Diff)**：
  - 原数值：`Old Value`
  - 新数值：`New Value`
  - 变动幅度：绝对值与百分比变动（如伤害由 15 提升至 16，+6.7%）
- **影响范围判定**：确定需同步修改的 `wiki/` 文件列表，并生成规范的 Pull Request。
