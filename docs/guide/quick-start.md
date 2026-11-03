# 快速开始

本章节介绍如何在本地快速克隆项目、安装依赖并启动 Wiki 文档站点。

## 环境要求

在开始之前，请确保本地已安装以下环境：

- **Node.js**: `>= 18.0.0` (推荐 LTS 版本，如 Node.js 20 或 22)
- **包管理器**: `npm` / `pnpm` / `yarn` (推荐使用 `npm` 或 `pnpm`)
- **Git**: 用于版本控制与拉取代码

```bash
# 验证 Node.js 与 npm 版本
node -v
npm -v
```

## 安装与启动

### 1. 克隆代码仓库

```bash
git clone https://github.com/mathmonstergo/test-wiki.git
cd test-wiki
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动本地开发服务

```bash
npm run docs:dev
```

启动成功后，终端会输出本地访问地址（通常为 `http://localhost:5173/test-wiki/`），浏览器打开即可实时预览文档，并支持热重载（HMR）。

### 4. 构建与预览

在提交前，建议执行构建测试，确保无死链或语法报错：

```bash
# 构建静态站点
npm run docs:build

# 本地预览构建产物
npm run docs:preview
```

## 常见问题排查

::: tip 提示
- 若遇到端口冲突，可在运行命令时追加 `--port <指定端口>` 参数。
- 若 Markdown 内部链接跳转 404，请检查路径是否与文件名大小写一致。
:::
