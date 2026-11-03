# 官方消息源接入规划

为保证 Wiki 信息的真实性、权威性与时效性，AI 自动维护管线聚焦于以下官方与第一手数据源。

## 核心消息源列表

| 渠道类别 | 数据源名称 | 监控方式 | 涉及内容 |
| :--- | :--- | :--- | :--- |
| **官方新闻** | EA Apex Legends News / Blog | RSS / 页面定时抓取 | 赛季更新概览、开发者访谈、赛季通行证情报 |
| **版本日志** | EA Official Patch Notes | Webhook / DOM 监听 | 详细平衡性变动、Bug 修复列表、武器/传奇具体数值 |
| **Steam 社区** | Steam Community News & Updates | Steam Web API | 客户端补丁、热修复及更新公告 |
| **官方社交媒体** | Respawn / Apex Legends 官方推特 | 动态抓取 | 突发已知问题、临时维护通知及紧急热修说明 |
| **社区反馈** | Apex Trello Board (Issue Tracker) | Trello API / 抓取 | 官方已知问题调查进度、计划修复清单 |

## 数据采集与清洗流程

```text
[ 官方消息源 ]
      │
      ▼ (抓取 / Webhook)
[ 原始情报收集器 (Raw Collector) ]
      │ (HTML / JSON / 文本提取)
      ▼
[ 变化检测引擎 (Diff Detector) ]
      │ (过滤旧版本，识别全新或变更条目)
      ▼
[ DeepSeek Super Agent 核心推理器 ]
      │ (语义提炼、数值对比、结构化 Markdown 生成)
      ▼
[ Wiki 文档更新与 PR 提交 ]
```
