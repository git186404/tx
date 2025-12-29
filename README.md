# cto.new 中文网站

这是 cto.new 的中文文档网站，使用 [Next.js](https://nextjs.org) 构建。

[![部署到 GitHub Pages](https://img.shields.io/badge/部署-GitHub_Pages-blue?style=for-the-badge&logo=github)](https://github.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

> 🚀 **快速部署**: 查看 [快速开始指南](./QUICKSTART.md) 了解如何在 5 分钟内部署到 GitHub Pages。

## 关于 cto.new

cto.new 是一个 AI 驱动的开发平台，旨在帮助开发者更快、更智能地构建应用程序。通过自然语言对话，您可以快速创建项目、编写代码、管理任务，并将您的应用程序部署到生产环境。

## 主要功能

- 🤖 **AI 驱动开发** - 通过自然语言与 AI 助手交互
- 💬 **智能对话** - 描述需求，AI 帮您生成代码
- ✅ **任务管理** - 结构化的开发任务跟踪
- 📁 **项目管理** - 管理多个项目和代码库
- 🚀 **快速部署** - 从想法到部署的无缝体验

## 开发指南

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

您可以通过修改 `app/page.tsx` 来编辑页面。页面会随着编辑自动更新。

## 文档结构

- `/` - 首页
- `/docs` - 文档主页
- `/docs/getting-started` - 快速开始指南
- `/docs/essentials/chats` - 对话功能文档
- `/docs/essentials/tasks` - 任务管理文档
- `/docs/essentials/projects` - 项目管理文档

## 技术栈

- **Next.js 16** - React 框架
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架

## 了解更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 特性和 API
- [学习 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

## 构建和预览

```bash
# 构建静态网站
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 部署到 GitHub Pages

本项目已配置为可以轻松部署到 GitHub Pages：

### 快速部署

1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages（Source 选择 "GitHub Actions"）
3. 代码推送后会自动构建和部署

### 详细步骤

查看 [部署指南](./DEPLOYMENT.md) 获取完整的部署说明。

### 部署检查清单

查看 [部署检查清单](./DEPLOYMENT_CHECKLIST.md) 确保所有步骤都已完成。

### 其他部署选项

- **Vercel**: [部署到 Vercel](https://vercel.com/new)
- **Netlify**: 支持静态站点托管
- **Cloudflare Pages**: 高性能边缘托管

查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多选项。

## 贡献

欢迎提交问题和改进建议！

## 许可证

© 2024 cto.new. 保留所有权利。
