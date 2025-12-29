export default function TasksPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>任务 (Tasks)</h1>
      
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        任务是 cto.new 中用于管理和跟踪开发工作的结构化方式。
        通过创建任务，AI 可以自动理解需求、规划实现步骤，并生成相应的代码变更。
      </p>

      <h2>什么是任务？</h2>
      
      <p>
        任务（Tasks）是一个目标明确的开发工作单元。与对话不同，任务具有：
      </p>

      <ul>
        <li>明确的目标和完成标准</li>
        <li>自动化的执行流程</li>
        <li>清晰的状态跟踪</li>
        <li>可追溯的变更历史</li>
      </ul>

      <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 何时使用任务？</div>
        <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
          当您有明确的功能需求或 bug 需要修复时，使用任务。
          如果您需要探索性地讨论技术方案或学习新知识，使用对话更合适。
        </p>
      </div>

      <h2>创建任务</h2>
      
      <p>
        创建任务的步骤：
      </p>

      <ol>
        <li>在项目页面点击 "新建任务" 按钮</li>
        <li>输入任务标题（简短描述）</li>
        <li>提供详细的任务描述，包括：
          <ul>
            <li>功能需求或问题描述</li>
            <li>验收标准</li>
            <li>技术约束或偏好</li>
            <li>相关的设计或文档链接</li>
          </ul>
        </li>
        <li>点击 "创建" 按钮</li>
      </ol>

      <h3>任务描述的最佳实践</h3>
      
      <div className="not-prose my-6 space-y-4">
        <div className="border-l-4 border-green-500 pl-4">
          <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">✅ 好的任务描述示例：</div>
          <div className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
            <p className="font-semibold m-0">标题：实现用户个人资料页面</p>
            <p className="m-0">描述：</p>
            <ul className="mt-2 space-y-1">
              <li>创建 /profile 路由页面</li>
              <li>显示用户头像、用户名、邮箱、注册日期</li>
              <li>添加编辑按钮，允许用户更新个人信息</li>
              <li>需要表单验证（用户名 3-20 字符，邮箱格式验证）</li>
              <li>更新成功后显示提示消息</li>
              <li>使用现有的 API endpoint: GET /api/user, PUT /api/user</li>
              <li>样式需要响应式设计，与现有页面风格保持一致</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>任务的生命周期</h2>
      
      <p>
        任务会经历以下状态：
      </p>

      <div className="not-prose my-6 space-y-3">
        <div className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div className="flex-shrink-0 w-24 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            待处理
          </div>
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            任务已创建，等待 AI 开始处理
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">
            进行中
          </div>
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            AI 正在分析需求并生成代码
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div className="flex-shrink-0 w-24 text-sm font-semibold text-amber-600 dark:text-amber-400">
            待审查
          </div>
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            代码已生成，等待您审查和确认
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div className="flex-shrink-0 w-24 text-sm font-semibold text-green-600 dark:text-green-400">
            已完成
          </div>
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            您已审查并应用了代码变更
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div className="flex-shrink-0 w-24 text-sm font-semibold text-red-600 dark:text-red-400">
            需要修改
          </div>
          <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            代码不符合预期，需要 AI 进行调整
          </div>
        </div>
      </div>

      <h2>审查任务结果</h2>
      
      <p>
        当任务状态变为 "待审查" 时，您需要：
      </p>

      <ol>
        <li>
          <strong>查看变更摘要</strong>
          <p>AI 会提供一个清晰的摘要，说明进行了哪些更改</p>
        </li>
        <li>
          <strong>审查代码差异</strong>
          <p>逐个文件查看代码变更，确保符合预期</p>
        </li>
        <li>
          <strong>测试功能</strong>
          <p>在本地环境中测试新功能或修复</p>
        </li>
        <li>
          <strong>做出决定</strong>
          <ul>
            <li>如果满意，点击 "应用变更" 按钮</li>
            <li>如果需要修改，点击 "请求修改" 并说明需要调整的地方</li>
            <li>如果要放弃，可以关闭任务</li>
          </ul>
        </li>
      </ol>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
        <div className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ 重要提醒</div>
        <p className="text-sm text-amber-800 dark:text-amber-200 m-0">
          应用代码变更前，请务必审查所有修改。虽然 AI 生成的代码质量很高，
          但您仍然需要确保它完全符合您的需求和项目标准。
          建议在应用前先在本地测试。
        </p>
      </div>

      <h2>请求修改</h2>
      
      <p>
        如果生成的代码需要调整，您可以请求修改：
      </p>

      <ol>
        <li>点击 "请求修改" 按钮</li>
        <li>清楚地描述需要更改的地方</li>
        <li>AI 会根据您的反馈重新生成代码</li>
        <li>您可以多次请求修改，直到满意为止</li>
      </ol>

      <h3>请求修改的示例</h3>
      
      <div className="not-prose my-6 space-y-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            "表单验证逻辑可以，但错误提示信息应该显示在输入框下方，而不是顶部。
            另外，请添加一个取消按钮。"
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            "API 调用部分需要添加 loading 状态和错误处理。
            当请求失败时，应该显示用户友好的错误消息。"
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            "代码结构很好，但请将样式提取到单独的 CSS 模块文件中，
            保持组件文件简洁。"
          </p>
        </div>
      </div>

      <h2>任务管理技巧</h2>
      
      <h3>1. 任务大小适中</h3>
      
      <p>
        将大型功能拆分成多个小任务：
      </p>

      <div className="not-prose my-6">
        <div className="mb-2 text-sm font-semibold">❌ 太大的任务：</div>
        <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          "实现完整的电商系统，包括商品浏览、购物车、结账、支付、订单管理"
        </div>
        
        <div className="mb-2 text-sm font-semibold">✅ 合理的任务拆分：</div>
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>任务 1: 实现商品列表页面</li>
          <li>任务 2: 实现商品详情页面</li>
          <li>任务 3: 实现购物车功能</li>
          <li>任务 4: 实现结账流程</li>
          <li>任务 5: 集成支付网关</li>
          <li>任务 6: 实现订单管理</li>
        </ul>
      </div>

      <h3>2. 使用清晰的命名</h3>
      
      <p>
        任务标题应该简洁但描述性强：
      </p>

      <div className="not-prose my-6 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-green-500">✓</span>
          <span className="text-sm">"添加用户头像上传功能"</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-500">✓</span>
          <span className="text-sm">"修复移动端导航菜单样式问题"</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-500">✓</span>
          <span className="text-sm">"优化首页加载性能"</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-red-500">✗</span>
          <span className="text-sm">"更新"（太模糊）</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-red-500">✗</span>
          <span className="text-sm">"修复 bug"（不够具体）</span>
        </div>
      </div>

      <h3>3. 添加标签和优先级</h3>
      
      <p>
        为任务添加标签可以帮助组织和过滤：
      </p>

      <ul>
        <li><strong>类型：</strong>功能、bug、优化、文档</li>
        <li><strong>优先级：</strong>高、中、低</li>
        <li><strong>模块：</strong>前端、后端、数据库、API</li>
        <li><strong>状态：</strong>紧急、待定、阻塞</li>
      </ul>

      <h3>4. 关联相关资源</h3>
      
      <p>
        在任务描述中包含：
      </p>

      <ul>
        <li>相关的设计稿或原型链接</li>
        <li>参考文档或技术规范</li>
        <li>相关的 issue 或讨论</li>
        <li>依赖的其他任务</li>
      </ul>

      <h2>任务与对话的协作</h2>
      
      <p>
        任务和对话可以互补使用：
      </p>

      <div className="not-prose my-6 space-y-4">
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2 text-sm">场景 1: 先对话后任务</div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            在对话中探讨技术方案，确定实现方式后，创建任务让 AI 实现。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2 text-sm">场景 2: 任务中遇到问题</div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            如果任务执行中遇到技术难题，可以在对话中深入讨论，然后回到任务继续。
          </p>
        </div>
        
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
          <div className="font-semibold mb-2 text-sm">场景 3: 对话转化为任务</div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
            对话中确定了明确的开发需求后，可以直接从对话创建任务。
          </p>
        </div>
      </div>

      <h2>批量任务管理</h2>
      
      <p>
        对于大型项目，您可以：
      </p>

      <ul>
        <li>一次性创建多个相关任务</li>
        <li>设置任务之间的依赖关系</li>
        <li>按优先级排序任务队列</li>
        <li>并行处理多个独立任务</li>
      </ul>

      <div className="not-prose my-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <div className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ 高级技巧</div>
        <p className="text-sm text-green-800 dark:text-green-200 m-0">
          您可以创建一个 "Epic" 任务来跟踪大型功能，然后将其拆分为多个子任务。
          这样可以更好地跟踪整体进度。
        </p>
      </div>

      <h2>任务统计和报告</h2>
      
      <p>
        cto.new 提供任务统计功能，帮助您了解：
      </p>

      <ul>
        <li>已完成任务数量和完成率</li>
        <li>平均任务完成时间</li>
        <li>按类型和优先级的任务分布</li>
        <li>代码变更统计</li>
        <li>团队成员贡献</li>
      </ul>

      <h2>最佳实践总结</h2>
      
      <div className="not-prose my-6 space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">明确的任务描述</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              提供详细的需求、验收标准和技术约束
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">适当的任务粒度</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              将大功能拆分成可管理的小任务
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">及时审查结果</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              任务完成后尽快审查，提供反馈
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">使用标签组织</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              通过标签和优先级管理任务队列
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-lg">✓</div>
          <div className="flex-1 text-sm">
            <div className="font-semibold mb-1">保持沟通</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              需要修改时，清晰说明问题和预期
            </div>
          </div>
        </div>
      </div>

      <h2>下一步</h2>
      
      <div className="not-prose my-6 space-y-4">
        <a
          href="/docs/essentials/chats"
          className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <div className="font-semibold text-black dark:text-white mb-1">→ 了解对话功能</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            学习如何通过对话与 AI 协作
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
