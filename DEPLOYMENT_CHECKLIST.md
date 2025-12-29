# GitHub Pages 部署检查清单 ✅

使用此检查清单确保顺利部署到 GitHub Pages。

## 部署前检查

- [ ] 所有代码已提交到本地 Git 仓库
- [ ] 本地构建测试通过 (`npm run build`)
- [ ] ESLint 检查通过 (`npm run lint`)
- [ ] 已创建 GitHub 仓库
- [ ] 已设置正确的仓库权限

## 配置文件检查

- [x] `next.config.ts` 配置了静态导出 (`output: 'export'`)
- [x] `.github/workflows/deploy.yml` 工作流文件已创建
- [x] `public/.nojekyll` 文件已创建
- [x] `.gitignore` 包含了必要的忽略规则

## GitHub 仓库设置

### 推送代码

```bash
# 1. 添加远程仓库（首次）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 2. 推送代码
git add .
git commit -m "准备部署到 GitHub Pages"
git push -u origin main
```

### 配置 GitHub Pages

1. - [ ] 进入仓库 Settings
2. - [ ] 导航到 Pages 设置
3. - [ ] Source 选择 "GitHub Actions"
4. - [ ] 保存设置

## 部署检查

- [ ] GitHub Actions 工作流已触发
- [ ] 构建步骤成功完成
- [ ] 部署步骤成功完成
- [ ] 网站可以访问

## 访问网站

您的网站将在以下地址可用：

### 默认 GitHub Pages 地址
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

### 自定义域名（可选）
```
https://your-custom-domain.com
```

## 常见问题排查

### 构建失败
- [ ] 检查 Actions 日志中的错误
- [ ] 确认 Node.js 版本兼容
- [ ] 验证所有依赖已正确安装

### 404 错误
- [ ] 确认 GitHub Pages 已启用
- [ ] 检查 basePath 配置
- [ ] 验证 .nojekyll 文件存在

### 样式或资源加载失败
- [ ] 检查浏览器控制台错误
- [ ] 确认 basePath 设置正确
- [ ] 验证资源路径

## 使用子路径（如果仓库名不是 username.github.io）

如果您的仓库名是 `my-repo`，网站会在 `username.github.io/my-repo/` 访问。

需要更新 `.github/workflows/deploy.yml`：

```yaml
- name: 构建项目
  env:
    NEXT_PUBLIC_BASE_PATH: /YOUR_REPO_NAME  # 替换为实际仓库名
  run: npm run build
```

## 测试命令

```bash
# 本地开发
npm run dev

# 构建测试
npm run build

# 预览构建结果
npm run preview

# Lint 检查
npm run lint
```

## 更新部署

每次推送到 main 分支会自动触发新的部署：

```bash
# 修改文件后
git add .
git commit -m "更新网站内容"
git push origin main
```

## 手动触发部署

1. 进入仓库的 Actions 标签
2. 选择 "部署到 GitHub Pages" 工作流
3. 点击 "Run workflow"
4. 选择分支并确认

## 监控部署状态

- GitHub Actions 页面：实时查看构建日志
- Deployments 页面：查看所有部署历史
- Environment 页面：查看当前环境状态

## 自定义域名设置（可选）

### 1. 创建 CNAME 文件

```bash
echo "your-domain.com" > public/CNAME
git add public/CNAME
git commit -m "添加自定义域名"
git push
```

### 2. 配置 DNS

在域名提供商处添加：
- A 记录指向 GitHub Pages IP
- 或 CNAME 记录指向 username.github.io

### 3. GitHub 设置

1. Settings > Pages > Custom domain
2. 输入域名
3. 等待 DNS 检查
4. 启用 HTTPS

## 性能优化检查

- [x] 静态导出已启用
- [x] 图片优化已配置
- [x] 尾部斜杠已启用
- [ ] 考虑添加 CDN（可选）
- [ ] 配置缓存策略（可选）

## 安全检查

- [ ] HTTPS 已启用
- [ ] 没有敏感信息在代码中
- [ ] 环境变量正确配置
- [ ] 依赖项已更新

## 完成后的验证

访问网站并检查：
- [ ] 首页正常显示
- [ ] 所有链接可以点击
- [ ] 导航菜单工作正常
- [ ] 文档页面可以访问
- [ ] 样式正确加载
- [ ] 响应式设计在移动端正常
- [ ] 没有控制台错误

## 后续维护

定期执行：
- [ ] 更新依赖包
- [ ] 检查安全漏洞
- [ ] 审查 Actions 日志
- [ ] 监控网站性能
- [ ] 备份重要数据

## 快速参考

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发服务器 |
| `npm run build` | 构建静态网站 |
| `npm run preview` | 预览构建结果 |
| `npm run lint` | 代码检查 |

| 地址 | 说明 |
|------|------|
| GitHub Actions | `https://github.com/USERNAME/REPO/actions` |
| 仓库设置 | `https://github.com/USERNAME/REPO/settings` |
| Pages 设置 | `https://github.com/USERNAME/REPO/settings/pages` |

## 技术支持资源

- 📖 [Next.js 文档](https://nextjs.org/docs)
- 📖 [GitHub Pages 文档](https://docs.github.com/pages)
- 📖 [GitHub Actions 文档](https://docs.github.com/actions)
- 📖 [完整部署指南](./DEPLOYMENT.md)

---

**准备好了吗？** 按照上面的检查清单一步步操作，您的网站很快就会上线！🚀

**需要帮助？** 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取详细说明。
