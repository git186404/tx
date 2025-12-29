# GitHub 配置文件

此目录包含 GitHub Pages 自动部署所需的配置文件。

## 📁 文件结构

```
.github/
├── workflows/
│   └── deploy.yml              # GitHub Actions 自动部署工作流
├── GITHUB_PAGES_SETUP.md       # GitHub Pages 详细设置指南
└── README.md                    # 本文件
```

## 📄 文件说明

### workflows/deploy.yml

GitHub Actions 工作流配置文件，用于自动构建和部署网站到 GitHub Pages。

**触发条件**：
- 推送到 `main` 或 `master` 分支时自动运行
- 可以通过 Actions 界面手动触发

**主要步骤**：
1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖
4. 构建项目（生成静态文件）
5. 上传构建产物
6. 部署到 GitHub Pages

**权限**：
- `contents: read` - 读取仓库内容
- `pages: write` - 写入 GitHub Pages
- `id-token: write` - 部署验证

### GITHUB_PAGES_SETUP.md

详细的 GitHub Pages 设置指南，包括：
- 通过网页界面启用 Pages
- 使用 GitHub CLI
- 配置自定义域名
- DNS 设置
- 故障排查
- 安全和权限配置

## 🚀 快速开始

### 1. 推送代码到 GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 进入仓库 Settings
2. 导航到 Pages
3. Source 选择 "GitHub Actions"

### 3. 自动部署

推送代码后，GitHub Actions 会自动：
- 构建网站
- 部署到 GitHub Pages
- 提供访问链接

## 🔧 自定义配置

### 修改触发分支

编辑 `workflows/deploy.yml`：

```yaml
on:
  push:
    branches: ["main", "your-branch"]  # 添加其他分支
```

### 添加环境变量

如果需要使用环境变量：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /your-repo-name
    NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}
  run: npm run build
```

### 配置子路径

如果仓库名不是 `username.github.io`：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /YOUR_REPO_NAME
  run: npm run build
```

## 📊 监控部署

### 查看部署状态

- **Actions 标签**：查看工作流运行状态和日志
- **Deployments 标签**：查看所有部署历史
- **Environments 标签**：查看当前环境状态

### 手动触发部署

1. 进入 Actions 标签
2. 选择 "部署到 GitHub Pages" 工作流
3. 点击 "Run workflow"
4. 选择分支并确认

## 🔍 故障排查

### 构建失败

1. 查看 Actions 日志找到错误信息
2. 本地运行 `npm run build` 测试
3. 检查依赖和 Node.js 版本

### 权限错误

确保在 Settings > Actions > General 中：
- Workflow permissions: "Read and write permissions"
- 勾选 "Allow GitHub Actions to create and approve pull requests"

### 部署失败

1. 确认 Pages 已启用
2. 检查 Source 设置为 "GitHub Actions"
3. 验证构建产物已正确生成

## 📚 相关文档

- [快速开始指南](../QUICKSTART.md) - 5 分钟快速部署
- [完整部署指南](../DEPLOYMENT.md) - 详细说明和最佳实践
- [部署检查清单](../DEPLOYMENT_CHECKLIST.md) - 逐步检查项
- [配置摘要](../DEPLOYMENT_SUMMARY.md) - 所有配置概览

## 🛡️ 安全最佳实践

1. **不要提交密钥**
   - 使用 GitHub Secrets 存储敏感信息
   - 在 Settings > Secrets and variables > Actions 中添加

2. **定期更新依赖**
   ```bash
   npm update
   npm audit fix
   ```

3. **启用 Dependabot**
   - Settings > Security > Dependabot
   - 自动检测和修复安全漏洞

4. **分支保护**
   - 考虑为 main 分支启用保护规则
   - 要求 PR 审查和状态检查通过

## 🔄 工作流说明

### 并发控制

```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

这确保同一时间只有一个部署在进行，避免冲突。

### 两阶段部署

1. **Build 阶段**
   - 构建项目
   - 上传构建产物

2. **Deploy 阶段**
   - 等待 Build 完成
   - 部署到 GitHub Pages

### 缓存优化

```yaml
- name: 设置 Node.js
  uses: actions/setup-node@v4
  with:
    cache: 'npm'
```

这会缓存 npm 依赖，加快后续构建速度。

## 📈 性能优化

1. **依赖缓存**：已启用 ✅
2. **并行构建**：使用多个 worker ✅
3. **增量构建**：可根据需要启用

## 🆘 获取帮助

遇到问题？

1. 📖 查看 [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
2. 🔍 搜索 GitHub Issues
3. 💬 在 Discussions 中提问
4. 📚 查阅官方文档：
   - [GitHub Pages](https://docs.github.com/pages)
   - [GitHub Actions](https://docs.github.com/actions)
   - [Next.js](https://nextjs.org/docs)

---

**需要更多帮助？** 查看项目根目录的部署文档：
- [QUICKSTART.md](../QUICKSTART.md)
- [DEPLOYMENT.md](../DEPLOYMENT.md)
- [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md)
