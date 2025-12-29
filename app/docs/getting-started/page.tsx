export default function GettingStartedPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>快速开始</h1>
      
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        欢迎来到 cto.new！本指南将帮助您快速上手，在几分钟内创建您的第一个项目。
      </p>

      <h2>第一步：创建账号</h2>
      
      <p>
        访问 <a href="https://cto.new">cto.new</a> 并使用您的 GitHub 账号登录。
        我们使用 GitHub 授权来确保您的代码安全，并能够直接访问您的代码库。
      </p>

      <h2>第二步：创建新项目</h2>
      
      <p>
        登录后，您可以通过以下方式创建新项目：
      </p>

      <ol>
        <li>点击 "新建项目" 按钮</li>
        <li>选择项目类型（从头开始或从模板创建）</li>
        <li>输入项目名称和描述</li>
        <li>选择您想使用的技术栈</li>
      </ol>

      <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 提示</div>
        <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
          如果您不确定使用哪个技术栈，可以在创建项目时询问 AI 助手的建议。
          AI 会根据您的项目需求推荐最合适的技术选择。
        </p>
      </div>

      <h2>第三步：开始对话</h2>
      
      <p>
        项目创建完成后，您会进入对话界面。在这里，您可以：
      </p>

      <ul>
        <li>用自然语言描述您想要构建的功能</li>
        <li>询问技术问题</li>
        <li>请求代码审查或优化建议</li>
        <li>寻求调试帮助</li>
      </ul>

      <h3>示例对话</h3>
      
      <div className="not-prose my-6 space-y-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">您：</div>
          <p className="text-zinc-900 dark:text-zinc-100 m-0">
            我想创建一个用户登录页面，包含邮箱和密码输入框，以及一个登录按钮。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">AI 助手：</div>
          <p className="text-zinc-900 dark:text-zinc-100 m-0">
            好的，我来帮您创建一个登录页面。我会创建一个响应式的登录表单，包含表单验证和错误处理。
            让我为您生成代码...
          </p>
        </div>
      </div>

      <h2>第四步：审查和应用代码</h2>
      
      <p>
        当 AI 生成代码后，您可以：
      </p>

      <ol>
        <li>在右侧面板中查看生成的代码</li>
        <li>审查代码变更</li>
        <li>如果满意，点击 "应用" 按钮</li>
        <li>如果需要修改，可以继续与 AI 对话进行调整</li>
      </ol>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
        <div className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ 重要</div>
        <p className="text-sm text-amber-800 dark:text-amber-200 m-0">
          在应用任何代码变更之前，请务必仔细审查。虽然 AI 生成的代码质量很高，
          但您仍然需要确保它符合您的项目需求和编码标准。
        </p>
      </div>

      <h2>第五步：测试和迭代</h2>
      
      <p>
        代码应用后，您可以：
      </p>

      <ul>
        <li>在本地运行项目进行测试</li>
        <li>如果发现问题，继续与 AI 对话进行修复</li>
        <li>请求添加新功能或优化现有代码</li>
        <li>让 AI 帮您编写测试用例</li>
      </ul>

      <h2>使用任务进行开发</h2>
      
      <p>
        除了对话，您还可以使用任务功能来管理开发工作：
      </p>

      <ol>
        <li>创建一个新任务，描述您要实现的功能</li>
        <li>AI 会分析任务并自动开始实现</li>
        <li>您可以在任务页面中跟踪进度</li>
        <li>任务完成后，审查并合并代码变更</li>
      </ol>

      <p>
        详细了解任务功能，请查看 <a href="/docs/essentials/tasks">任务管理文档</a>。
      </p>

      <h2>常见问题</h2>
      
      <h3>我可以使用现有的代码库吗？</h3>
      <p>
        可以！您可以导入现有的 GitHub 仓库，AI 会分析您的代码库结构，
        并在此基础上帮您进行开发。
      </p>

      <h3>AI 支持哪些编程语言？</h3>
      <p>
        cto.new 支持主流的编程语言和框架，包括但不限于：
        JavaScript/TypeScript、Python、Go、Rust、React、Vue、Next.js、Django 等。
      </p>

      <h3>代码的版本控制如何处理？</h3>
      <p>
        所有的代码变更都会自动提交到 Git。您可以查看提交历史，
        并在需要时回滚到之前的版本。
      </p>

      <h3>如何部署我的应用？</h3>
      <p>
        您可以直接询问 AI 关于部署的问题，AI 会根据您的项目类型
        推荐合适的部署方案，并帮助您完成部署配置。
      </p>

      <h2>下一步</h2>
      
      <p>
        现在您已经了解了基础知识，可以深入探索 cto.new 的更多功能：
      </p>

      <div className="not-prose my-6 space-y-4">
        <a
          href="/docs/essentials/chats"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 深入了解对话功能</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习如何更有效地与 AI 协作
          </div>
        </a>
        
        <a
          href="/docs/essentials/tasks"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 探索任务管理</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            了解如何使用任务组织开发工作
          </div>
        </a>
        
        <a
          href="/docs/essentials/projects"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 管理您的项目</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习项目管理的最佳实践
          </div>
        </a>
      </div>
    </div>
  );
}
