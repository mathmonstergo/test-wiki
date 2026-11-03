# 项目指南与架构定位

本项目是基于 **DeepSeek Super Agent** 驱动、以 **GitHub 为原生 Wiki 与管理工具** 的《Apex 英雄》自动化知识库。

---

## 核心设计理念

1. **GitHub Native**：
   摒弃复杂臃肿的外部独立网站体系，直接利用 GitHub 仓库的 Markdown 文件树、版本历史（Git Commits）、追溯（Blame）与全网检索能力，作为 Wiki 知识库的统一载体。
2. **GitHub As Management Hub**：
   将 GitHub Issues（消息源与需求跟踪）、Pull Requests（AI 提交与人工评审）、Actions（自动化构建校验）全面整合为 Wiki 运维的管理工具。
3. **AI Autonomous Maintenance**：
   DeepSeek Super Agent 自动追踪 EA/Respawn 官方渠道，自主解析与提取游戏数值，提交结构化更新。

---

## 快速导航

- [查看 Wiki 总目录](../README.md)
- [官方消息源清单](../sources/official-sources.md)
- [传奇档案库](../legends/README.md)
- [武器军械库](../weapons/README.md)
- [赛季与补丁跟踪](../seasons/README.md)
- [Agent 架构设计](../architecture/overview.md)
