# 官方补丁追踪与更新机制

本文档说明 Super Agent 如何通过 GitHub 原生协作机制处理从官方补丁发布到 Wiki 更新的全流程。

---

## 自动化更新流程图

```text
1. 监控触发
   [ EA Official / Steam / X ] 发布新补丁
                │
                ▼
2. 工单登记 (GitHub Issue)
   自动创建 Issue: "New Patch Detected: EA Apex Notes 2026-XX-XX"
   标记 labels: [official-source, pending-agent]
                │
                ▼
3. Agent 增量推理 (DeepSeek Super Agent)
   - 拉取公告原文
   - 提取变更实体 (Entity Extraction)
   - 对比已有 wiki/ 数据计算 Diff
   - 批量更新对应 Markdown
                │
                ▼
4. 发起 Pull Request
   - 创建分支: agent/patch-update-<id>
   - 自动生成变更对照表与关联 Issue
   - 触发 CI 检查 (Markdown 语法、死链测试)
                │
                ▼
5. 审查合流与归档
   - 人类或审查流程核准 Merge
   - Issue 自动关闭，Git Commit 永久归档变更历史
```

---

## 补丁文档版本规范

- 所有平衡性改动在对应武器/传奇文档末尾追加“版本变迁日志”表格。
- 每次赛季大更新同步在 `wiki/seasons/` 生成对应的独立大版本纪要。
