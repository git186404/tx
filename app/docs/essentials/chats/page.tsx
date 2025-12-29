export default function ChatsPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>对话 (Chats)</h1>
      
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        对话是 cto.new 的核心功能。通过自然语言与 AI 助手交互，您可以快速构建功能、
        解决问题、优化代码，就像与一位经验丰富的开发伙伴协作一样。
      </p>

      <h2>什么是对话？</h2>
      
      <p>
        对话（Chats）是您与 AI 助手进行交互的主要方式。在对话中，您可以：
      </p>

      <ul>
        <li>用自然语言描述您想要实现的功能</li>
        <li>询问技术问题和寻求建议</li>
        <li>请求代码审查和优化</li>
        <li>获取调试帮助</li>
        <li>学习新的技术和最佳实践</li>
      </ul>

      <h2>创建对话</h2>
      
      <p>
        在项目中创建新对话非常简单：
      </p>

      <ol>
        <li>在项目页面中点击 "新建对话" 按钮</li>
        <li>输入您的问题或需求描述</li>
        <li>AI 助手会立即开始处理您的请求</li>
      </ol>

      <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 提示</div>
        <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
          为每个主要功能或问题创建独立的对话，这样可以保持对话的焦点清晰，
          也便于日后查找和参考。
        </p>
      </div>

      <h2>如何有效地与 AI 对话</h2>
      
      <p>
        要从对话中获得最佳效果，请遵循以下最佳实践：
      </p>

      <h3>1. 清晰描述您的需求</h3>
      
      <p>
        提供足够的上下文信息，让 AI 理解您的目标。例如：
      </p>

      <div className="not-prose my-6 space-y-4">
        <div className="border-l-4 border-red-500 pl-4">
          <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">❌ 不太好的例子：</div>
          <p className="text-zinc-600 dark:text-zinc-400 m-0">
            "创建一个表单"
          </p>
        </div>
        
        <div className="border-l-4 border-green-500 pl-4">
          <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ 好的例子：</div>
          <p className="text-zinc-600 dark:text-zinc-400 m-0">
            "创建一个用户注册表单，包含用户名、邮箱、密码字段，需要进行表单验证，
            密码至少8位且包含大小写字母和数字。提交后调用 /api/register 接口。"
          </p>
        </div>
      </div>

      <h3>2. 分步骤进行</h3>
      
      <p>
        对于复杂的功能，建议分解成多个小步骤，逐步实现：
      </p>

      <div className="not-prose my-6">
        <ol className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>1. 先创建基础的 UI 组件</li>
          <li>2. 添加表单验证逻辑</li>
          <li>3. 实现 API 集成</li>
          <li>4. 添加错误处理</li>
          <li>5. 优化用户体验</li>
        </ol>
      </div>

      <h3>3. 提供示例和参考</h3>
      
      <p>
        如果您有特定的设计或实现偏好，可以提供示例代码或参考链接：
      </p>

      <div className="not-prose my-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
          "我想实现类似 Stripe 结账页面的支付表单，需要支持信用卡输入和实时验证。
          可以参考他们的 UI 设计风格。"
        </p>
      </div>

      <h3>4. 及时反馈和调整</h3>
      
      <p>
        审查 AI 生成的代码后，如果有任何不符合预期的地方，立即提出：
      </p>

      <ul>
        <li>"这个函数可以简化，我们不需要那么多参数"</li>
        <li>"请使用 TypeScript 而不是 JavaScript"</li>
        <li>"能否添加更详细的注释？"</li>
        <li>"这个 API 调用应该包含错误重试逻辑"</li>
      </ul>

      <h2>对话中的常见场景</h2>
      
      <h3>创建新功能</h3>
      
      <div className="not-prose my-6 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-medium">示例对话</div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">您：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              我需要在首页添加一个博客文章列表，每篇文章显示标题、摘要、发布日期和作者。
              数据从 /api/posts 获取。
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">AI：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              好的，我来帮您创建博客文章列表组件。我会创建一个响应式的卡片布局，
              包含数据获取、加载状态和错误处理。让我开始实现...
            </p>
          </div>
        </div>
      </div>

      <h3>调试和修复问题</h3>
      
      <div className="not-prose my-6 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-medium">示例对话</div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">您：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              用户提交表单后出现 "Network Error"，但 API 在 Postman 中测试正常。
              请帮我检查问题。
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">AI：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              让我检查一下您的表单提交代码。可能的原因包括 CORS 配置、请求头设置、
              或者超时问题。我会查看相关代码文件...
            </p>
          </div>
        </div>
      </div>

      <h3>代码审查和优化</h3>
      
      <div className="not-prose my-6 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-medium">示例对话</div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">您：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              请审查 src/components/UserList.tsx 文件，看看有没有性能问题或可以改进的地方。
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">AI：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              我会分析这个组件的性能和代码质量。让我检查是否有不必要的重渲染、
              内存泄漏、或者可以使用 React.memo 等优化的地方...
            </p>
          </div>
        </div>
      </div>

      <h3>学习和探索</h3>
      
      <div className="not-prose my-6 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-medium">示例对话</div>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">您：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              在我们的项目中使用 React Server Components 有什么好处？应该如何迁移？
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">AI：</div>
            <p className="text-zinc-900 dark:text-zinc-100 m-0 text-sm">
              React Server Components 可以帮助减少客户端 JavaScript 包大小，
              提高首次加载性能。对于您的项目，我建议从静态内容页面开始迁移...
            </p>
          </div>
        </div>
      </div>

      <h2>对话历史和管理</h2>
      
      <p>
        所有的对话都会被保存，您可以：
      </p>

      <ul>
        <li>随时返回查看之前的对话</li>
        <li>继续之前的对话，AI 会记住上下文</li>
        <li>搜索历史对话中的内容</li>
        <li>导出对话记录</li>
        <li>为重要的对话添加标签或备注</li>
      </ul>

      <h2>对话的上下文理解</h2>
      
      <p>
        AI 助手具有强大的上下文理解能力：
      </p>

      <ul>
        <li>
          <strong>项目上下文：</strong>AI 了解您的整个项目结构、使用的技术栈和编码风格
        </li>
        <li>
          <strong>对话上下文：</strong>在同一个对话中，AI 会记住之前讨论的内容
        </li>
        <li>
          <strong>代码上下文：</strong>AI 可以分析相关的代码文件，理解依赖关系
        </li>
      </ul>

      <div className="not-prose my-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <div className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ 高级技巧</div>
        <p className="text-sm text-green-800 dark:text-green-200 m-0">
          您可以在对话中引用具体的文件名或代码片段，AI 会自动定位并理解相关代码。
          例如："请优化 utils/api.ts 中的 fetchUser 函数"
        </p>
      </div>

      <h2>对话与任务的区别</h2>
      
      <p>
        虽然对话和任务都可以用来开发功能，但它们有不同的用途：
      </p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="text-left p-3 text-sm font-semibold">对话 (Chats)</th>
              <th className="text-left p-3 text-sm font-semibold">任务 (Tasks)</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="p-3">交互式、探索性的开发过程</td>
              <td className="p-3">结构化、目标明确的开发任务</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="p-3">适合讨论、学习、调试</td>
              <td className="p-3">适合功能开发、bug 修复</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="p-3">灵活的对话流程</td>
              <td className="p-3">明确的开始和结束</td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="p-3">实时交互和调整</td>
              <td className="p-3">自动化执行</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        了解更多关于任务的内容，请查看 <a href="/docs/essentials/tasks">任务管理文档</a>。
      </p>

      <h2>最佳实践总结</h2>
      
      <div className="not-prose my-6 space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">保持对话专注</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              每个对话集中讨论一个主题或功能
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">提供清晰的需求</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              详细描述功能要求、约束条件和预期行为
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">及时审查代码</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              在应用代码前仔细审查，确保符合预期
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">迭代改进</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              通过多轮对话逐步完善功能，不要期望一次到位
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">善用历史记录</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              查看之前的对话记录，避免重复讨论相同问题
            </div>
          </div>
        </div>
      </div>

      <h2>下一步</h2>
      
      <div className="not-prose my-6 space-y-4">
        <a
          href="/docs/essentials/tasks"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 了解任务管理</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习如何使用任务功能进行结构化开发
          </div>
        </a>
        
        <a
          href="/docs/essentials/projects"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 项目管理</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            了解如何有效管理多个项目
          </div>
        </a>
      </div>
    </div>
  );
}
