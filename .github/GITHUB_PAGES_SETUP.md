# GitHub Pages 设置步骤

## 方法一：通过 GitHub 网页界面

### 1. 推送代码到 GitHub

```bash
# 如果还没有远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 打开您的 GitHub 仓库页面
2. 点击顶部的 **Settings** (设置)
3. 在左侧菜单中找到 **Pages**
4. 在 "Build and deployment" 部分：
   - **Source**: 选择 `GitHub Actions`
5. 点击 **Save** (保存)

### 3. 触发部署

推送任何更改到 main 分支都会自动触发部署：

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 4. 查看部署状态

1. 进入仓库的 **Actions** 标签
2. 查看 "部署到 GitHub Pages" 工作流的运行状态
3. 等待构建完成（通常 2-5 分钟）

### 5. 访问您的网站

部署完成后，网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 方法二：使用 GitHub CLI

如果您安装了 GitHub CLI：

```bash
# 登录 GitHub
gh auth login

# 创建仓库
gh repo create YOUR_REPO --public --source=. --remote=origin

# 推送代码
git push -u origin main

# 启用 Pages（手动在网页界面完成）
gh browse
```

## 设置自定义域名

### 1. 添加 CNAME 文件

```bash
# 创建 CNAME 文件
echo "your-domain.com" > public/CNAME

# 提交并推送
git add public/CNAME
git commit -m "添加自定义域名"
git push
```

### 2. 配置 DNS 记录

在您的域名提供商处添加以下记录：

**选项 A: 使用 A 记录（顶级域名）**

| 类型 | 名称 | 值 |
|------|------|-----|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**选项 B: 使用 CNAME 记录（子域名）**

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | www | YOUR_USERNAME.github.io |

### 3. 在 GitHub 中配置域名

1. 进入 **Settings** > **Pages**
2. 在 **Custom domain** 输入框中输入您的域名
3. 点击 **Save**
4. 等待 DNS 检查完成
5. 勾选 **Enforce HTTPS**

## 使用子路径部署

如果您的仓库名不是 `username.github.io`，网站会在子路径下：

```
https://username.github.io/repo-name/
```

需要更新部署配置：

编辑 `.github/workflows/deploy.yml`，在构建步骤添加环境变量：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /YOUR_REPO_NAME
  run: npm run build
```

## 故障排查

### 构建失败

```bash
# 本地测试构建
npm run build

# 检查错误日志
# 在 GitHub Actions 页面查看详细日志
```

### 页面显示 404

1. 确认 GitHub Pages 已正确启用
2. 检查部署状态（Actions 页面）
3. 确认文件已正确生成（查看 out 目录）
4. 等待几分钟让 CDN 更新

### 样式或资源未加载

1. 检查浏览器控制台的错误
2. 确认 basePath 配置正确
3. 检查网络请求是否返回 404

## 监控和维护

### 查看部署历史

```bash
# 访问 Actions 页面
https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

### 查看网站状态

```bash
# 访问 Deployments 页面
https://github.com/YOUR_USERNAME/YOUR_REPO/deployments
```

### 手动触发部署

1. 进入 **Actions** 标签
2. 选择 "部署到 GitHub Pages" 工作流
3. 点击 **Run workflow** 按钮
4. 选择分支（通常是 main）
5. 点击 **Run workflow** 确认

## 环境变量配置

如果需要使用环境变量：

1. 进入 **Settings** > **Secrets and variables** > **Actions**
2. 点击 **New repository secret**
3. 添加变量名和值
4. 在 workflow 文件中引用

示例：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}
  run: npm run build
```

## 权限设置

确保 GitHub Actions 有正确的权限：

1. 进入 **Settings** > **Actions** > **General**
2. 滚动到 "Workflow permissions"
3. 选择 "Read and write permissions"
4. 勾选 "Allow GitHub Actions to create and approve pull requests"
5. 点击 **Save**

## 分支保护

如果您设置了分支保护规则：

1. 确保 GitHub Actions 可以推送到保护的分支
2. 或者使用不同的分支进行部署

## 清理缓存

如果遇到缓存问题：

1. 进入 **Actions** 标签
2. 点击 **Caches** 查看所有缓存
3. 删除旧的缓存
4. 重新运行工作流

## 性能优化

### 启用缓存

工作流已配置了 npm 缓存：

```yaml
- name: 设置 Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'
```

### 并行构建

如果项目较大，可以考虑：
- 拆分构建步骤
- 使用矩阵构建
- 启用增量构建

## 安全最佳实践

1. ✅ 不要在代码中硬编码密钥
2. ✅ 使用 GitHub Secrets 存储敏感信息
3. ✅ 定期更新依赖项
4. ✅ 启用 Dependabot 安全警报
5. ✅ 使用 HTTPS（GitHub Pages 默认启用）

## 备份策略

GitHub 仓库本身就是备份，但您也可以：

1. 定期导出部署产物
2. 使用 Git tags 标记重要版本
3. 设置自动备份到其他位置

## 常用命令参考

```bash
# 查看 git 状态
git status

# 查看远程仓库
git remote -v

# 拉取最新代码
git pull origin main

# 推送代码
git push origin main

# 查看提交历史
git log --oneline

# 创建新分支
git checkout -b feature-name

# 合并分支
git merge feature-name
```

## 获取帮助

如果遇到问题：

1. 📖 查看 [完整部署指南](../DEPLOYMENT.md)
2. 📋 使用 [部署检查清单](../DEPLOYMENT_CHECKLIST.md)
3. 🔍 搜索 GitHub Issues
4. 💬 在 GitHub Discussions 中提问
5. 📚 查阅官方文档

## 快速链接

- [GitHub Pages 文档](https://docs.github.com/pages)
- [GitHub Actions 文档](https://docs.github.com/actions)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**祝您部署顺利！** 🚀

如有任何问题，请查看完整的 [DEPLOYMENT.md](../DEPLOYMENT.md) 文档。
