# Git 工作流与分支规范

规范的 Git 工作流是保障多人高效协作与代码版本安全的基础。

## 分支模型

我们采用基于特性分支（Feature Branch）的协作模型：

| 分支类型 | 命名格式 | 说明 |
| :--- | :--- | :--- |
| **主干分支** | `main` | 生产稳定分支，受保护分支，禁止直接 push，仅接受 PR 合并 |
| **特性分支** | `feature/<name>` 或 `feat/<name>` | 承接新功能开发，从 `main` 切出，开发完成后提 PR |
| **修复分支** | `fix/<name>` 或 `hotfix/<name>` | 修复缺陷或线上紧急问题 |
| **文档分支** | `docs/<name>` | 专门用于补充或完善 Wiki 与项目文档 |

## Commit 信息格式规范

建议遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范，保持提交记录清晰可读：

```text
<type>(<scope>): <subject>
```

### 常用 Type 标识

- `feat`: 引入新功能
- `fix`: 修复 bug
- `docs`: 文档变更（Wiki、README、注释等）
- `style`: 代码格式调整（不影响代码运行的变动，如空格、分号等）
- `refactor`: 重构（既不是新增功能也不是修复 bug 的代码变动）
- `perf`: 性能优化
- `test`: 增加或修改测试用例
- `chore`: 构建过程或辅助工具的变动

### 提交示例

```bash
git commit -m "feat(auth): add JWT token refresh endpoint"
git commit -m "docs(wiki): add git workflow and commit guidelines"
git commit -m "fix(router): resolve 404 issue on dynamic routes"
```

## Pull Request 与 Code Review 流程

1. **自测验证**：发起 PR 前必须在本地运行通过所有单元测试和构建命令。
2. **清晰描述**：PR 需说明修改原因、改动范围、测试结果以及对其他模块的影响。
3. **同行评审**：至少需要一名核心成员 Review 通过后方可合并至 `main` 分支。
4. **分支清理**：PR 合并后及时删除远程特性分支。
