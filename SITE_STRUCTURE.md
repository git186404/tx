# cto.new 中文网站结构

本文档描述了 cto.new 中文网站的完整结构和内容。

## 页面结构

### 主页面
- **`/` (app/page.tsx)** - 首页
  - 产品介绍
  - 主要功能展示
  - 使用流程说明
  - CTA 按钮和导航

### 文档页面

#### 根文档页面
- **`/docs` (app/docs/page.tsx)** - 文档主页
  - cto.new 简介
  - 主要特性概览
  - 快速开始链接
  - 相关资源导航

#### 入门指南
- **`/docs/getting-started` (app/docs/getting-started/page.tsx)** - 快速开始
  - 创建账号
  - 创建项目
  - 开始对话
  - 审查和应用代码
  - 测试和迭代
  - 常见问题解答

#### 核心功能文档
- **`/docs/essentials/chats` (app/docs/essentials/chats/page.tsx)** - 对话功能
  - 对话功能介绍
  - 创建和管理对话
  - 有效对话的最佳实践
  - 常见使用场景
  - 对话与任务的区别
  
- **`/docs/essentials/tasks` (app/docs/essentials/tasks/page.tsx)** - 任务管理
  - 任务功能介绍
  - 创建和配置任务
  - 任务生命周期
  - 审查和修改任务结果
  - 任务管理技巧
  - 批量任务管理
  
- **`/docs/essentials/projects` (app/docs/essentials/projects/page.tsx)** - 项目管理
  - 项目功能介绍
  - 创建项目的多种方式
  - 项目设置和配置
  - 多项目管理
  - 团队协作
  - 项目模板
  - 备份和归档

## 组件结构

### 布局组件
- **`app/layout.tsx`** - 根布局
  - 全局元数据（中文标题和描述）
  - 语言设置（zh-CN）
  - 字体配置
  
- **`app/docs/layout.tsx`** - 文档布局
  - 顶部导航栏
  - 侧边栏导航
  - 文档内容区域
  - 页脚

### 样式
- **`app/globals.css`** - 全局样式
  - Tailwind CSS 配置
  - 主题颜色
  - Prose 样式（用于文档内容）
  - 响应式设计

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 库**: React 19
- **类型系统**: TypeScript
- **样式**: Tailwind CSS 4
- **字体**: Geist Sans 和 Geist Mono

## 特性

### 国际化
- 完全中文内容
- HTML lang 属性设置为 zh-CN
- 中文元数据和 SEO

### 响应式设计
- 移动端友好的导航
- 响应式网格布局
- 自适应排版

### 用户体验
- 清晰的导航结构
- 侧边栏快速导航
- 丰富的示例和最佳实践
- 视觉提示（提示框、警告框等）

### SEO 优化
- 语义化 HTML
- 适当的标题层级
- 描述性的元数据
- 静态生成的页面

## 内容特点

### 文档风格
- 清晰易懂的说明
- 实用的示例代码和对话
- 详细的步骤指导
- 最佳实践建议
- 常见问题解答

### 视觉元素
- Emoji 图标增强可读性
- 颜色编码的提示框（蓝色-提示，黄色-警告，红色-危险，绿色-技巧）
- 表格和列表组织信息
- 对话示例框

## 构建和部署

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 代码检查
```bash
npm run lint
```

## 文件清单

### 应用文件
- `app/page.tsx` - 首页
- `app/layout.tsx` - 根布局
- `app/globals.css` - 全局样式

### 文档文件
- `app/docs/page.tsx` - 文档主页
- `app/docs/layout.tsx` - 文档布局
- `app/docs/getting-started/page.tsx` - 快速开始
- `app/docs/essentials/chats/page.tsx` - 对话功能
- `app/docs/essentials/tasks/page.tsx` - 任务管理
- `app/docs/essentials/projects/page.tsx` - 项目管理

### 配置文件
- `package.json` - 项目依赖
- `tsconfig.json` - TypeScript 配置
- `next.config.ts` - Next.js 配置
- `eslint.config.mjs` - ESLint 配置
- `postcss.config.mjs` - PostCSS 配置
- `.gitignore` - Git 忽略文件

### 文档文件
- `README.md` - 项目说明（中文）
- `SITE_STRUCTURE.md` - 本文件

## 未来扩展

可以考虑添加的内容：
- API 文档
- 高级功能指南
- 集成指南
- 部署教程
- 常见问题（FAQ）页面
- 博客或更新日志
- 搜索功能
- 多语言切换
