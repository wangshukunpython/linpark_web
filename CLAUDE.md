```text

你是一名精通 Next.js 14+ (App Router)、Tailwind CSS 和 TypeScript 的资深前端开发专家。

请帮我从零搭建一个外观现代化、极简且完全符合 Stripe / Wise 企业商户审核要求的 AI SaaS 产品 Landing Page 模版。

### 核心目的

该网站主要用于过审 Stripe 和 Wise 企业户，必须严格满足以下合规要求：

1. 页面必须展示清晰的 AI 产品功能与定位。

2. 包含明码标价的 Pricing（价格表）。

3. 页脚（Footer）必须包含明确的联系邮箱（e.g. [support@linkparkai.com](mailto:support@linkparkai.com)）。

4. 页脚必须包含独立的合规法律页面入口：服务条款 (/terms) 和 隐私政策 (/privacy)。

### 技术栈要求

- 框架：Next.js 14+ (App Router)

- 样式：Tailwind CSS + Lucide Icons (lucide-react)

- 语言：TypeScript

- 风格：现代化 AI 工具暗黑/极简风（类似于 Linear / Vercel 风格，深色背景，微渐变高光，精致边框）

### 目录与页面结构设计

1. `app/page.tsx` (主落地页)

   - Header/Navbar：Logo（AI 产品名）、功能特性 (Features)、价格 (Pricing)、登录/注册按钮。

   - Hero Section：吸引人的标语（如 "Supercharge Your Workflow with Next-Gen AI"）、副标题、主 CTA 按钮（"Get Started Free"）、带有 Glow 效果的产品 Dashboard 预览占位卡片。

   - Features Section：3-4 个核心功能卡片（如 "AI Automation", "Smart Analytics", "Instant API Access"）。

   - Pricing Section：显示 3 个订阅梯队（Starter - $0/mo, Pro - $19/mo, Enterprise - $49/mo），包含清晰的功能 Checklist，卡片突出 Pro 版本，并带有 "Subscribe Now" 按钮（预留 Stripe Checkout 链接接口）。

   - Footer Section：包含品牌 Logo、版权声明、联系邮箱[support@linkparkai.com](mailto:support@linkparkai.com)）以及 `/terms` 和 `/privacy` 页面链接。

2. `app/terms/page.tsx` (服务条款 / Terms of Service)

   - 包含完整的英文 SaaS 标准服务条款模版（适合美国 LLC 公司实体）。

   - 必须涵盖：Acceptance of Terms, Service Description, User Accounts, Subscriptions & Payment Terms (明确提及由 Stripe 处理支付及退款规则), Intellectual Property, Limitation of Liability, Governing Law (United States), Contact Information。

3. `app/privacy/page.tsx` (隐私政策 / Privacy Policy)

   - 包含符合 GDPR / CCPA 规范的英文隐私政策模版。

   - 必须涵盖：Information We Collect, How We Use Information, Payment Data (明确说明信用卡敏感信息由第三方支付服务商 Stripe 安全处理，本站不存储卡号), Cookies & Analytics, Data Security, Your Rights, Contact Us。

4. `components/Footer.tsx` (可复用的页脚组件)

   - 保证在所有页面底端都能清晰展示法律链接与联系邮箱。

### 编写要求

- 页面排版响应式完美适配 PC 与移动端。

- 法律条款文本要严谨完整，不要使用 "Lorem ipsum" 占位符，直接生成可直接用于 Stripe 审核的完整标准英文法务文本。

- 将变量名（如产品名 Cold Outreach、公司名 `LinPark`、联系邮箱 [support@linkparkai.com](mailto:support@linkparkai.com)）集中写在顶部常量配置文件或文件顶部，方便我后续一键替换。