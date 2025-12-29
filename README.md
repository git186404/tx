# cto.new 中文网站

这是 cto.new 的中文文档网站，一个基于 **Next.js 16** 和 **React 19** 构建的现代静态网站项目。

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev)

## 关于本项目

本项目是 cto.new 平台的中文文档网站，采用静态网站生成（SSG）架构，通过 Next.js 的 `output: 'export'` 配置生成纯静态 HTML 文件，可部署到任何静态托管平台。

### 项目特点

- **静态导出**：生成纯静态文件，无需服务器端渲染
- **中文内容**：完整的中文文档体系
- **现代化技术栈**：Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **响应式设计**：完美支持各种设备尺寸
- **暗色模式**：原生支持明暗主题切换

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.0.7 | React 框架 |
| React | 19.2.1 | UI 库 |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | 4.x | 样式框架 |
| ESLint | 9.x | 代码检查 |

## 项目结构

```
├── app/                    # Next.js App Router 页面目录
│   ├── layout.tsx          # 全局布局组件
│   ├── page.tsx            # 首页
│   └── docs/               # 文档页面
│       ├── page.tsx        # 文档主页
│       ├── layout.tsx      # 文档布局
│       ├── getting-started/ # 快速开始指南
│       └── essentials/     # 核心功能文档
│           ├── chats/      # 对话功能
│           ├── tasks/      # 任务管理
│           └── projects/   # 项目管理
├── public/                 # 静态资源目录
├── .github/                # GitHub Actions 工作流
├── eslint.config.mjs       # ESLint 配置
├── next.config.ts          # Next.js 配置
├── postcss.config.mjs      # PostCSS 配置
├── tailwind.config.ts      # Tailwind CSS 配置
└── tsconfig.json           # TypeScript 配置
```

### 关键文件说明

- `next.config.ts`：配置静态导出 (`output: 'export'`) 和图像优化
- `app/layout.tsx`：定义全局 HTML 结构、字体和元数据
- `app/page.tsx`：首页组件，包含导航、功能展示等
- `app/docs/*`：文档页面的路由结构

## 快速开始

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建静态网站

```bash
# 构建静态文件（输出到 out/ 目录）
npm run build
# 或
npm run export

# 预览构建结果
npm run preview
```

### 代码检查

```bash
# 运行 ESLint
npm run lint
```

## 部署

本项目已配置为可部署到任何静态托管平台：

- **GitHub Pages**：通过 GitHub Actions 自动构建和部署
- **Vercel**：原生支持一键部署
- **Netlify**：支持静态站点托管
- **Cloudflare Pages**：高性能边缘托管

查看 [快速开始指南](./QUICKSTART.md) 了解详细部署步骤。

## 主要功能页面

| 路由 | 说明 |
|------|------|
| `/` | 首页，展示平台介绍和功能特性 |
| `/docs` | 文档主页导航 |
| `/docs/getting-started` | 快速开始指南 |
| `/docs/essentials/chats` | 对话功能文档 |
| `/docs/essentials/tasks` | 任务管理文档 |
| `/docs/essentials/projects` | 项目管理文档 |

## 贡献

欢迎提交问题和改进建议！

## 许可证

© 2024 cto.new. 保留所有权利。
