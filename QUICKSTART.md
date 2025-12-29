# 🚀 快速开始 - 5 分钟部署到 GitHub Pages

按照以下简单步骤，5 分钟内将您的 cto.new 中文网站部署到 GitHub Pages。

## 步骤 1: 创建 GitHub 仓库

### 选项 A: 使用 GitHub 网页界面

1. 访问 https://github.com/new
2. 仓库名称：`cto-new-zh`（或您喜欢的名称）
3. 选择 `Public`（公开）
4. **不要** 勾选 "Initialize this repository with a README"
5. 点击 **Create repository**

### 选项 B: 使用 GitHub CLI

```bash
gh repo create cto-new-zh --public --source=. --remote=origin
```

## 步骤 2: 推送代码

```bash
# 添加远程仓库（如果还没添加）
git remote add origin https://github.com/YOUR_USERNAME/cto-new-zh.git

# 推送代码
git add .
git commit -m "Initial commit: cto.new 中文网站"
git branch -M main
git push -u origin main
```

> 💡 **提示**: 将 `YOUR_USERNAME` 替换为您的 GitHub 用户名

## 步骤 3: 启用 GitHub Pages

1. 打开您的 GitHub 仓库页面
2. 点击 **Settings** (设置)
3. 在左侧菜单点击 **Pages**
4. 在 **Source** 下拉菜单中选择：`GitHub Actions`
5. 页面会自动保存

## 步骤 4: 等待部署完成

1. 返回仓库主页
2. 点击顶部的 **Actions** 标签
3. 查看 "部署到 GitHub Pages" 工作流
4. 等待绿色勾号 ✅（通常 2-5 分钟）

## 步骤 5: 访问您的网站

部署完成后，访问：

```
https://YOUR_USERNAME.github.io/cto-new-zh/
```

> 💡 **提示**: 将 `YOUR_USERNAME` 和 `cto-new-zh` 替换为实际值

## 🎉 完成！

您的网站现已上线！每次推送代码到 main 分支都会自动更新。

---

## 📝 日常使用

### 更新网站内容

```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "更新内容"
git push

# 3. 等待自动部署（2-5 分钟）
```

### 本地预览

```bash
# 开发模式（实时预览）
npm run dev
# 访问 http://localhost:3000

# 构建并预览（生产模式）
npm run build
npm run preview
# 访问 http://localhost:3000
```

---

## 🔧 进阶配置（可选）

### 使用自定义域名

1. 创建 `public/CNAME` 文件：
   ```bash
   echo "your-domain.com" > public/CNAME
   git add public/CNAME
   git commit -m "添加自定义域名"
   git push
   ```

2. 配置 DNS（在域名提供商处）：
   - 添加 CNAME 记录：`www` → `YOUR_USERNAME.github.io`
   - 或添加 A 记录指向 GitHub Pages IP

3. 在 GitHub 设置：
   - Settings > Pages > Custom domain
   - 输入域名并保存
   - 启用 "Enforce HTTPS"

### 配置子路径

如果仓库名不是 `username.github.io`，需要配置 basePath：

编辑 `.github/workflows/deploy.yml`：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /cto-new-zh  # 您的仓库名
  run: npm run build
```

然后推送更改：

```bash
git add .github/workflows/deploy.yml
git commit -m "配置 basePath"
git push
```

---

## ❓ 遇到问题？

### 部署失败

```bash
# 1. 查看 Actions 日志找到错误
# 2. 本地测试构建
npm run build

# 3. 修复错误后重新推送
git push
```

### 页面显示 404

- 等待 5-10 分钟让 CDN 更新
- 确认 GitHub Pages 已启用
- 检查仓库是否为 Public

### 样式或资源未加载

- 检查浏览器控制台错误
- 确认 basePath 配置正确
- 清除浏览器缓存

---

## 📚 更多资源

- 📖 [完整部署指南](./DEPLOYMENT.md)
- 📋 [部署检查清单](./DEPLOYMENT_CHECKLIST.md)
- 🔧 [GitHub Pages 设置](./.github/GITHUB_PAGES_SETUP.md)
- 📊 [配置摘要](./DEPLOYMENT_SUMMARY.md)

---

## 💡 小贴士

### 加速部署

1. **启用缓存**：已在工作流中配置 ✅
2. **并行构建**：使用多个 worker（已配置）✅
3. **减少依赖**：只安装必要的包

### 监控网站

- 查看部署历史：Actions 标签
- 查看网站状态：Deployments 标签
- 设置通知：Settings > Notifications

### 安全建议

- 定期更新依赖：`npm update`
- 启用 Dependabot：Settings > Security
- 使用 Secrets 存储敏感信息

---

## ✅ 检查清单

部署前确认：

- [ ] 代码已推送到 GitHub
- [ ] GitHub Pages 已启用（Source: GitHub Actions）
- [ ] 工作流运行成功（绿色勾号）
- [ ] 网站可以访问
- [ ] 所有页面正常显示
- [ ] 样式和资源加载正常

---

## 🎯 下一步

现在您的网站已上线，可以：

1. ✨ 自定义网站内容和样式
2. 🌐 配置自定义域名
3. 📊 添加网站分析（Google Analytics 等）
4. 🔍 优化 SEO
5. 🚀 提升性能

---

**需要帮助？**

- 查看详细的 [DEPLOYMENT.md](./DEPLOYMENT.md)
- 在 GitHub Issues 中提问
- 查阅 [Next.js 文档](https://nextjs.org/docs)
- 查阅 [GitHub Pages 文档](https://docs.github.com/pages)

**祝您部署顺利！** 🚀
