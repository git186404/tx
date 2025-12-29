export default function ProjectsPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>项目 (Projects)</h1>
      
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        项目是 cto.new 中组织代码、对话和任务的容器。
        每个项目对应一个代码库，包含所有相关的开发活动和历史记录。
      </p>

      <h2>什么是项目？</h2>
      
      <p>
        在 cto.new 中，项目代表一个完整的软件应用或服务。每个项目包含：
      </p>

      <ul>
        <li>代码库（可以是新创建的或从 GitHub 导入的）</li>
        <li>所有相关的对话历史</li>
        <li>任务列表和状态</li>
        <li>配置和设置</li>
        <li>部署信息</li>
      </ul>

      <h2>创建新项目</h2>
      
      <p>
        cto.new 提供多种方式创建项目：
      </p>

      <h3>方式一：从头开始</h3>
      
      <ol>
        <li>点击 "新建项目" 按钮</li>
        <li>选择 "从头开始"</li>
        <li>输入项目名称和描述</li>
        <li>选择技术栈（React、Next.js、Vue、Python 等）</li>
        <li>AI 会自动创建项目结构和基础文件</li>
      </ol>

      <h3>方式二：使用模板</h3>
      
      <ol>
        <li>点击 "新建项目" 按钮</li>
        <li>选择 "使用模板"</li>
        <li>浏览可用的模板库：
          <ul>
            <li>Web 应用模板</li>
            <li>移动应用模板</li>
            <li>API 服务模板</li>
            <li>全栈应用模板</li>
          </ul>
        </li>
        <li>选择合适的模板并自定义配置</li>
      </ol>

      <h3>方式三：导入现有代码库</h3>
      
      <ol>
        <li>点击 "新建项目" 按钮</li>
        <li>选择 "导入 GitHub 仓库"</li>
        <li>授权访问您的 GitHub 账号</li>
        <li>选择要导入的仓库</li>
        <li>AI 会分析代码库结构和依赖</li>
      </ol>

      <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 提示</div>
        <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
          导入现有项目时，AI 会自动分析代码结构、使用的技术栈和编码风格，
          以便在后续开发中保持一致性。
        </p>
      </div>

      <h2>项目设置</h2>
      
      <p>
        每个项目都有详细的设置选项：
      </p>

      <h3>基本信息</h3>
      
      <ul>
        <li><strong>项目名称：</strong>显示在项目列表中的名称</li>
        <li><strong>描述：</strong>项目的简短说明</li>
        <li><strong>仓库 URL：</strong>关联的 Git 仓库地址</li>
        <li><strong>主分支：</strong>默认工作分支</li>
      </ul>

      <h3>技术栈配置</h3>
      
      <ul>
        <li><strong>编程语言：</strong>主要使用的语言</li>
        <li><strong>框架：</strong>使用的前端/后端框架</li>
        <li><strong>包管理器：</strong>npm、yarn、pnpm 等</li>
        <li><strong>构建工具：</strong>Webpack、Vite、Rollup 等</li>
      </ul>

      <h3>AI 偏好设置</h3>
      
      <ul>
        <li><strong>代码风格：</strong>指定偏好的编码规范</li>
        <li><strong>注释风格：</strong>选择注释的详细程度</li>
        <li><strong>测试要求：</strong>是否自动生成测试用例</li>
        <li><strong>文档生成：</strong>是否自动更新文档</li>
      </ul>

      <h3>部署配置</h3>
      
      <ul>
        <li><strong>部署平台：</strong>Vercel、Netlify、AWS 等</li>
        <li><strong>环境变量：</strong>生产和开发环境的配置</li>
        <li><strong>构建命令：</strong>自定义构建脚本</li>
        <li><strong>部署分支：</strong>自动部署的分支</li>
      </ul>

      <h2>项目结构</h2>
      
      <p>
        cto.new 会自动识别和展示项目结构：
      </p>

      <div className="not-prose my-6 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-medium">典型项目结构</div>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
            <div>📁 my-project/</div>
            <div className="ml-4">📁 src/</div>
            <div className="ml-8">📁 components/</div>
            <div className="ml-8">📁 pages/</div>
            <div className="ml-8">📁 utils/</div>
            <div className="ml-4">📁 public/</div>
            <div className="ml-4">📁 tests/</div>
            <div className="ml-4">📄 package.json</div>
            <div className="ml-4">📄 tsconfig.json</div>
            <div className="ml-4">📄 README.md</div>
          </div>
        </div>
      </div>

      <h2>多项目管理</h2>
      
      <p>
        您可以同时管理多个项目：
      </p>

      <h3>项目列表视图</h3>
      
      <ul>
        <li>查看所有项目的概览</li>
        <li>按名称、最近更新、状态排序</li>
        <li>搜索和筛选项目</li>
        <li>标记收藏的项目</li>
      </ul>

      <h3>项目切换</h3>
      
      <ul>
        <li>快速切换工作区</li>
        <li>最近访问的项目列表</li>
        <li>键盘快捷键支持</li>
      </ul>

      <div className="not-prose my-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <div className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ 快捷键</div>
        <div className="text-sm text-green-800 dark:text-green-200 space-y-1">
          <div><kbd className="px-2 py-1 bg-white dark:bg-black rounded">Cmd/Ctrl + K</kbd> - 快速打开项目</div>
          <div><kbd className="px-2 py-1 bg-white dark:bg-black rounded">Cmd/Ctrl + P</kbd> - 搜索文件</div>
          <div><kbd className="px-2 py-1 bg-white dark:bg-black rounded">Cmd/Ctrl + Shift + N</kbd> - 新建项目</div>
        </div>
      </div>

      <h2>项目协作</h2>
      
      <h3>团队成员</h3>
      
      <p>
        邀请团队成员协作开发：
      </p>

      <ol>
        <li>进入项目设置页面</li>
        <li>点击 "团队成员" 标签</li>
        <li>输入成员的邮箱地址</li>
        <li>设置权限级别：
          <ul>
            <li><strong>所有者：</strong>完全控制权限</li>
            <li><strong>维护者：</strong>可以管理设置和部署</li>
            <li><strong>开发者：</strong>可以创建对话和任务</li>
            <li><strong>访客：</strong>只读权限</li>
          </ul>
        </li>
      </ol>

      <h3>活动日志</h3>
      
      <p>
        查看项目中的所有活动：
      </p>

      <ul>
        <li>代码提交历史</li>
        <li>任务创建和完成</li>
        <li>对话记录</li>
        <li>成员加入和离开</li>
        <li>设置更改</li>
      </ul>

      <h2>项目模板</h2>
      
      <p>
        cto.new 提供丰富的项目模板：
      </p>

      <h3>Web 应用模板</h3>
      
      <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">React SPA</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            使用 React、React Router 和现代工具链的单页应用模板
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Next.js 全栈</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            服务端渲染、API 路由和数据库集成的完整方案
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Vue 3 应用</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            使用 Vue 3 Composition API 和 Vite 的现代应用
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Svelte 应用</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            轻量级、高性能的 Svelte 应用模板
          </div>
        </div>
      </div>

      <h3>后端服务模板</h3>
      
      <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Node.js API</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Express/Fastify RESTful API 服务
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Python FastAPI</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            现代 Python API 框架，自动生成文档
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">Go 服务</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            高性能 Go 微服务模板
          </div>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2">GraphQL 服务</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Apollo Server GraphQL API
          </div>
        </div>
      </div>

      <h2>项目归档和删除</h2>
      
      <h3>归档项目</h3>
      
      <p>
        不再活跃但需要保留的项目可以归档：
      </p>

      <ul>
        <li>归档的项目不会出现在主列表中</li>
        <li>仍然可以查看历史记录和代码</li>
        <li>可以随时恢复归档的项目</li>
      </ul>

      <h3>删除项目</h3>
      
      <div className="not-prose my-6 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
        <div className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ 警告</div>
        <p className="text-sm text-red-800 dark:text-red-200 m-0">
          删除项目是不可逆的操作。删除后，所有的对话历史、任务记录都会被永久删除。
          建议在删除前先归档项目，或者导出重要数据。
        </p>
      </div>

      <h2>项目导出和备份</h2>
      
      <p>
        定期备份项目数据很重要：
      </p>

      <h3>导出选项</h3>
      
      <ul>
        <li><strong>代码导出：</strong>将项目代码导出为 ZIP 文件</li>
        <li><strong>对话导出：</strong>导出所有对话记录（Markdown 格式）</li>
        <li><strong>任务导出：</strong>导出任务列表和状态（CSV 格式）</li>
        <li><strong>完整备份：</strong>包含所有项目数据的完整备份</li>
      </ul>

      <h3>自动备份</h3>
      
      <p>
        启用自动备份功能：
      </p>

      <ul>
        <li>设置备份频率（每日、每周、每月）</li>
        <li>选择备份存储位置（GitHub、Google Drive、S3 等）</li>
        <li>配置备份保留策略</li>
      </ul>

      <h2>项目统计和分析</h2>
      
      <p>
        查看项目的详细统计信息：
      </p>

      <h3>代码统计</h3>
      
      <ul>
        <li>代码行数和文件数量</li>
        <li>编程语言分布</li>
        <li>代码复杂度分析</li>
        <li>技术债务评估</li>
      </ul>

      <h3>活动统计</h3>
      
      <ul>
        <li>提交频率和趋势</li>
        <li>任务完成情况</li>
        <li>对话数量和活跃度</li>
        <li>团队成员贡献</li>
      </ul>

      <h3>性能指标</h3>
      
      <ul>
        <li>构建时间趋势</li>
        <li>测试覆盖率</li>
        <li>部署成功率</li>
        <li>错误率监控</li>
      </ul>

      <h2>最佳实践</h2>
      
      <div className="not-prose my-6 space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">清晰的项目命名</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              使用描述性的项目名称，便于识别和管理
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">完善的项目描述</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              详细说明项目目标、技术栈和特殊要求
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">合理的权限管理</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              根据团队成员的角色分配适当的权限
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">定期备份</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              启用自动备份，防止数据丢失
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">保持项目整洁</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              及时归档不活跃的项目，保持工作区清爽
            </div>
          </div>
        </div>
      </div>

      <h2>下一步</h2>
      
      <div className="not-prose my-6 space-y-4">
        <a
          href="/docs/getting-started"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 快速开始指南</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习如何创建和设置您的第一个项目
          </div>
        </a>
        
        <a
          href="/docs/essentials/chats"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 对话功能</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            开始与 AI 助手协作开发
          </div>
        </a>
      </div>
    </div>
  );
}
