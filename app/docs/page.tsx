export default function DocsPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>欢迎使用 cto.new</h1>
      
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        cto.new 是一个 AI 驱动的开发平台，旨在帮助开发者更快、更智能地构建应用程序。
      </p>

      <h2>什么是 cto.new？</h2>
      
      <p>
        cto.new 是一个革命性的开发工具，它结合了人工智能的强大能力和传统开发工作流程的灵活性。
        通过自然语言交互，您可以快速创建项目、编写代码、管理任务，并将您的应用程序部署到生产环境。
      </p>

      <h2>主要特性</h2>
      
      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">💬 智能对话</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            通过对话界面与 AI 助手交互，使用自然语言描述您的需求，AI 会理解并帮助您实现。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">✅ 任务管理</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            创建和跟踪开发任务，AI 会自动理解需求并生成相应的代码变更。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">📁 项目管理</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            管理多个项目，在不同的代码库之间轻松切换，保持工作井然有序。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">🚀 快速部署</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            从想法到部署，整个流程无缝衔接，让您专注于创新而非繁琐的配置。
          </p>
        </div>
      </div>

      <h2>为什么选择 cto.new？</h2>
      
      <ul>
        <li>
          <strong>提高生产力：</strong>AI 助手可以帮您完成重复性的编码任务，让您专注于解决更有价值的问题。
        </li>
        <li>
          <strong>降低学习曲线：</strong>通过自然语言交互，即使是复杂的技术栈也能快速上手。
        </li>
        <li>
          <strong>代码质量保证：</strong>AI 生成的代码遵循最佳实践和行业标准。
        </li>
        <li>
          <strong>灵活可控：</strong>您始终掌控全局，可以审查、修改和定制 AI 生成的任何代码。
        </li>
      </ul>

      <h2>快速开始</h2>
      
      <p>
        准备好开始使用 cto.new 了吗？以下是一些入门资源：
      </p>

      <div className="not-prose my-6 space-y-4">
        <a
          href="/docs/getting-started"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">快速开始指南</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            了解如何创建您的第一个项目和对话
          </div>
        </a>
        
        <a
          href="/docs/essentials/chats"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">对话功能</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            深入了解如何通过对话与 AI 协作
          </div>
        </a>
        
        <a
          href="/docs/essentials/tasks"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">任务管理</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习如何使用任务来组织您的开发工作
          </div>
        </a>
      </div>

      <h2>需要帮助？</h2>
      
      <p>
        如果您在使用过程中遇到任何问题，或者有任何建议，请随时通过以下方式联系我们：
      </p>

      <ul>
        <li>查看我们的完整文档</li>
        <li>加入社区讨论</li>
        <li>提交问题反馈</li>
      </ul>
    </div>
  );
}
