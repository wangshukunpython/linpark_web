# TODO / 项目进度

> 本文件是项目进度的唯一事实来源（Single Source of Truth）。
> **每次会话开始前先读这里**，每次完成改动后**同步更新这里**。
> 这样即使上下文（context）丢失，也能无缝衔接、不丢进度。

---

## 一、项目概况

| 项 | 值 |
| --- | --- |
| 项目名 | `linpark-landing-page`（AI SaaS Landing Page） |
| 用途 | 用于过审 **Stripe / Wise 企业商户** 的合规落地页 |
| 技术栈 | Next.js（App Router）+ React 19 + TypeScript + Tailwind CSS v4 + lucide-react |
| 包管理 | pnpm |
| 风格 | 暗黑极简（Linear / Vercel 风），微渐变高光 + 精致边框 |

---

## 二、当前进度（已完成 ✅）

### 已完成的核心文件

| 文件 | 说明 | 状态 |
| --- | --- | --- |
| `lib/site-config.ts` | 集中配置（产品名/公司名/邮箱/域名/Stripe 链接/文案/价格） | ✅ 完成 |
| `app/page.tsx` | 落地页：Header + Hero(含 Dashboard 预览) + Features + Pricing | ✅ 完成 |
| `app/terms/page.tsx` | 服务条款（8 节完整英文法务文本，美国 Wyoming 法律实体） | ✅ 完成 |
| `app/privacy/page.tsx` | 隐私政策（7 节 GDPR/CCPA 合规，明确 Stripe 处理支付） | ✅ 完成 |
| `components/Footer.tsx` | 全局页脚（品牌 + 法律链接 + 联系邮箱 + 版权） | ✅ 完成 |
| `app/layout.tsx` | 根布局，已挂载 Footer，配置 Metadata | ✅ 完成 |
| `app/globals.css` | 暗黑主题 + 网格背景 + glow 效果 | ✅ 完成 |

### 已完成的功能点
- ✅ Header/Navbar：Logo、Features、Pricing、Log in、Get Started
- ✅ Hero：标语 / 副标题 / 主副 CTA / 带 Glow 的 Dashboard 预览占位卡片（含统计数字 + 图表条）
- ✅ Features：4 个功能卡片（AI Automation / Smart Analytics / Instant API Access / Enterprise Security）
- ✅ Pricing：三档（Starter $0 / Pro $19 高亮 / Enterprise $49），含 Checklist + Subscribe 按钮（已接 `siteConfig.stripeCheckoutUrl`）
- ✅ Footer：品牌、版权、联系邮箱、`/terms`、`/privacy` 入口
- ✅ 响应式适配（PC / 移动端）
- ✅ 所有变量集中到 `lib/site-config.ts`，一键替换

---

## 三、上线前必须完成的事项（Blocking ⚠️）

> 这些是**过审前必须处理**的占位内容，未完成前不要提交 Stripe 审核。

- [x] **替换真实域名**：已设为 `linkparkai.com`（`domain` / `siteUrl`）
- [ ] **替换真实 Stripe Checkout 链接**：`stripeCheckoutUrl` 已改为环境变量 `NEXT_PUBLIC_STRIPE_CHECKOUT_URL`，未设置时回退到 `#pricing`；银行审核通过后填入真实 Stripe Payment Link
- [x] **确认法律实体/管辖州**：`app/terms/page.tsx` 第 7 节已改为 **State of Wyoming, USA**
- [x] **确认公司名**：`companyName` 已定为 **LinPark Studio LLC**（`productName` 暂保持 **Cold Outreach**）
- [x] **替换联系邮箱**：已替换为 **support@linkparkai.com**（字段 `contactEmail`）
- [x] **验证构建通过**：`pnpm build` + `pnpm lint` 无报错（2026-10-03 已验证）

---

## 四、待办 / 迭代计划（Backlog）

### P0 —— 上线前
- [x] 跑通 `pnpm build`（已验证：Next.js 16.3.2 Turbopack，6 个静态页面全部生成）
- [x] 跑通 `pnpm lint`（已验证：ESLint 无报错）
- [x] 首次 `git commit`（已完成：feat: complete business compliance configurations and site branding for linkparkai.com）
- [ ] 部署（Vercel 等）+ 绑定真实域名

### P1 —— 增强（可选，非过审必需）
- [ ] 为三个定价档分别配置独立 Stripe Checkout 链接（目前共用一个）
- [ ] 增加移动端汉堡菜单（当前 Header 移动端只显示 Logo + Get Started，导航项隐藏）
- [ ] 替换 `public/` 下的默认 favicon / 图标
- [ ] 补充 OG 图片与更完整的 SEO Metadata
- [ ] 增加 FAQ / 联系表单（可选，利于过审）

### P2 —— 后续
- [ ] 真实产品接入（Dashboard、登录、API 等）
- [ ] Analytics（如 Plausible / Vercel Analytics）接入后同步更新隐私政策 Cookie 条款

---

## 五、迭代改动记录（Changelog）

> 每次迭代**新增一条**，格式：日期 + 简述 + 涉及文件。最新的在最上面。

### 2026-10-03 —— 完成业务合规配置与品牌替换（linkparkai.com）
- `lib/site-config.ts`：companyName → **LinPark Studio LLC**；`supportEmail` 更名 `contactEmail` → **support@linkparkai.com**；新增 `address`（30 N Gould St Ste N, Sheridan, WY 82801）；domain/siteUrl → **linkparkai.com**；`stripeCheckoutUrl` 改为环境变量 `NEXT_PUBLIC_STRIPE_CHECKOUT_URL`（回退 `#pricing`）
- 全局替换 `wangshukun937@gmail.com` → `support@linkparkai.com`、`yourdomain.com` → `linkparkai.com`（含 CLAUDE.md / TODO.md 文档）
- `app/terms/page.tsx`：管辖州由 Delaware 改为 **State of Wyoming, USA**；Terms/Privacy 联系处补充注册地址
- 完成首次 git commit

### 2026-10-03 —— 构建与 Lint 验证通过
- 运行 `pnpm build`：Next.js 16.3.2 (Turbopack) 编译成功，`/`、`/terms`、`/privacy`、`/_not-found` 全部预渲染为静态页面
- 运行 `pnpm lint`：ESLint 无报错
- 更新本文件：勾选「验证构建通过」与 P0 中 build/lint 两项

### 2026-08-25 —— 项目初始化（v0.1.0 脚手架完成）
- 从零搭建 Next.js App Router + Tailwind v4 + TypeScript 项目
- 完成 `lib/site-config.ts` 集中配置文件
- 完成落地页 `app/page.tsx`（Header / Hero / Features / Pricing）
- 完成 `app/terms/page.tsx` 服务条款
- 完成 `app/privacy/page.tsx` 隐私政策
- 完成 `components/Footer.tsx` + 挂载到 `app/layout.tsx`
- 完成 `app/globals.css` 暗黑主题与 glow 效果
- 创建本 TODO.md

---

## 六、如何无缝衔接（每次新会话）

1. **先读本文件**（尤其「当前进度」和「上线前必须完成的事项」）
2. 若需要改品牌/文案/价格 → 只改 `lib/site-config.ts`（全站自动同步）
3. 若需要改法律文本 → 改 `app/terms/page.tsx` 或 `app/privacy/page.tsx`
4. 改完代码后 → 在「迭代改动记录」新增一条 + 更新「待办」勾选状态
5. 关键约定：法律文本不要用 Lorem ipsum，保持可直接过审的完整英文文本
