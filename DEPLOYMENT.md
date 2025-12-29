# 部署到 GitHub Pages 指南

本文档说明如何将 cto.new 中文网站部署到 GitHub Pages。

## 前置要求

- 已有 GitHub 账号
- 已安装 Git
- 项目代码已推送到 GitHub 仓库

## 部署步骤

### 1. 推送代码到 GitHub

如果还没有创建 GitHub 仓库，请按以下步骤操作：

```bash
# 初始化 Git 仓库（如果还没有初始化）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: cto.new 中文网站"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO 为实际值）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings** (设置)
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** (来源) 部分：
   - 选择 **GitHub Actions** 作为部署源

### 3. 等待自动部署

推送代码后，GitHub Actions 会自动运行：

1. 进入仓库的 **Actions** 标签
2. 查看 "部署到 GitHub Pages" 工作流
3. 等待构建和部署完成（通常需要 2-5 分钟）

### 4. 访问网站

部署完成后，您的网站将可通过以下地址访问：

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 自定义域名（可选）

如果您想使用自定义域名：

### 1. 添加 CNAME 文件

创建 `public/CNAME` 文件并添加您的域名：

```bash
echo "your-domain.com" > public/CNAME
```

### 2. 配置 DNS

在您的域名提供商处添加以下 DNS 记录：

**使用 A 记录：**
```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
```

**或使用 CNAME 记录（针对子域名）：**
```
类型: CNAME
名称: www（或其他子域名）
值: YOUR_USERNAME.github.io
```

### 3. 在 GitHub 设置自定义域名

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Custom domain** 部分输入您的域名
3. 等待 DNS 检查完成
4. 勾选 **Enforce HTTPS**

## 使用子路径部署

如果您的 GitHub Pages 使用仓库名作为子路径（如 `username.github.io/repo-name`），需要额外配置：

### 1. 设置 basePath

在 `next.config.ts` 中，basePath 已经配置为使用环境变量：

```typescript
basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
```

### 2. 配置 GitHub Actions

在 `.github/workflows/deploy.yml` 的构建步骤中添加环境变量：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /YOUR_REPO_NAME
  run: npm run build
```

## 本地测试构建

在推送到 GitHub 之前，建议先在本地测试构建：

```bash
# 构建项目
npm run build

# 预览构建结果（需要安装 serve）
npx serve@latest out
```

然后在浏览器中访问 `http://localhost:3000` 查看效果。

## 问题排查

### 部署失败

1. 检查 GitHub Actions 日志中的错误信息
2. 确保 `package.json` 中的依赖版本正确
3. 验证 Node.js 版本兼容性

### 页面 404 错误

1. 确认 GitHub Pages 设置正确
2. 检查 `basePath` 配置是否正确
3. 确保 `.nojekyll` 文件存在于 `public` 目录

### 样式或资源加载失败

1. 检查浏览器控制台的错误信息
2. 确认 `basePath` 设置正确
3. 验证所有资源路径都是相对路径

### 路由不工作

GitHub Pages 只支持静态文件，确保：
1. `next.config.ts` 中设置了 `output: 'export'`
2. 没有使用服务器端功能（如 API 路由、getServerSideProps）
3. 所有页面都可以静态生成

## 更新网站

每次推送到 main 分支时，GitHub Actions 会自动重新构建和部署网站：

```bash
# 修改文件后
git add .
git commit -m "更新内容"
git push origin main
```

## 手动触发部署

您也可以在 GitHub Actions 页面手动触发部署：

1. 进入仓库的 **Actions** 标签
2. 选择 "部署到 GitHub Pages" 工作流
3. 点击 **Run workflow** 按钮
4. 选择分支并确认

## 监控和分析

### 查看部署历史

在 **Actions** 标签中可以查看所有部署记录：
- 构建时间
- 成功/失败状态
- 详细日志

### GitHub Pages 分析

GitHub 不提供内置分析，您可以添加：
- Google Analytics
- Plausible
- Umami
等分析工具

## 环境变量

如果需要使用环境变量（如 API 密钥），请在 GitHub 仓库设置中添加：

1. 进入 **Settings** > **Secrets and variables** > **Actions**
2. 点击 **New repository secret**
3. 添加变量名和值
4. 在 `deploy.yml` 中引用这些密钥

## 性能优化

已经应用的优化：
- ✅ 静态导出
- ✅ 图片优化禁用（GitHub Pages 不支持）
- ✅ 尾部斜杠（SEO 友好）

可选优化：
- 启用 CDN（Cloudflare）
- 压缩资源
- 缓存策略

## 安全性

GitHub Pages 默认启用 HTTPS，确保：
- ✅ 所有资源使用 HTTPS
- ✅ 没有敏感信息在代码中
- ✅ 依赖项定期更新

## 备份

建议定期备份：
1. 代码已在 GitHub 上
2. 可以下载构建产物
3. 导出 Git 历史

## 技术支持

遇到问题时的资源：
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [GitHub Actions 文档](https://docs.github.com/actions)

## 快速参考

```bash
# 本地开发
npm run dev

# 构建
npm run build

# 检查 lint
npm run lint

# 预览构建
npx serve@latest out
```

## 总结

完成以上步骤后，您的 cto.new 中文网站将：
- ✅ 自动部署到 GitHub Pages
- ✅ 每次推送自动更新
- ✅ 通过 HTTPS 访问
- ✅ 完全免费托管

祝您部署顺利！🚀
