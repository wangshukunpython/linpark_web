/**
 * ============================================================
 *  集中配置文件 —— 所有可替换变量集中于此，方便一键替换
 * ============================================================
 *  修改下方任意字段后，全站（落地页 / 条款 / 隐私 / 页脚）会自动同步。
 */

export const siteConfig = {
  // ---------- 核心品牌变量（一键替换） ----------
  /** 产品名 */
  productName: "Cold Outreach",
  /** 公司名（法律实体） */
  companyName: "LinPark Studio LLC",
  /** 联系邮箱（用于页脚、条款、隐私中的联系方式） */
  contactEmail: "support@linkparkai.com",
  /** 公司注册地址（用于法律页面） */
  address: "30 N Gould St Ste N, Sheridan, WY 82801",
  /** 主域名 */
  domain: "linkparkai.com",
  /** 完整站点地址 */
  siteUrl: "https://linkparkai.com",

  /** Stripe Checkout 支付链接（TODO: Replace with real Stripe Payment Link after bank approval） */
  stripeCheckoutUrl: process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ?? "#pricing",

  // ---------- 导航 ----------
  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ] as const,

  // ---------- Hero ----------
  hero: {
    badge: "Now in public beta",
    title: "Supercharge Your Workflow with Next-Gen AI",
    subtitle:
      "Cold Outreach automates prospecting, personalizes every message, and books more meetings on autopilot — so your team closes deals instead of chasing them.",
    primaryCta: "Get Started Free",
    secondaryCta: "View Pricing",
  },

  // ---------- 功能特性 ----------
  features: [
    {
      title: "AI Automation",
      description:
        "Put your outreach on autopilot. Cold Outreach drafts, schedules, and follows up on campaigns while you focus on closing.",
    },
    {
      title: "Smart Analytics",
      description:
        "Track open rates, reply rates, and pipeline impact in real time with clean, actionable dashboards.",
    },
    {
      title: "Instant API Access",
      description:
        "Plug into your existing stack in minutes. REST and webhook support with first-class developer docs.",
    },
    {
      title: "Enterprise Security",
      description:
        "SOC 2-aligned infrastructure, SSO, and role-based access keep your data protected at every layer.",
    },
  ] as const,

  // ---------- 定价（三档） ----------
  plans: [
    {
      name: "Starter",
      priceMonthly: 0,
      tagline: "For individuals getting started",
      highlight: false,
      cta: "Start for Free",
      features: [
        "1,000 AI-generated emails / month",
        "Basic analytics dashboard",
        "Email support",
        "Community access",
      ],
    },
    {
      name: "Pro",
      priceMonthly: 19,
      tagline: "For growing teams that need scale",
      highlight: true,
      cta: "Subscribe Now",
      features: [
        "Unlimited AI-generated emails",
        "Advanced analytics & A/B testing",
        "Priority email support",
        "API access (10k requests / day)",
        "Custom domains & integrations",
      ],
    },
    {
      name: "Enterprise",
      priceMonthly: 49,
      tagline: "For organizations that need control",
      highlight: false,
      cta: "Subscribe Now",
      features: [
        "Everything in Pro",
        "SSO / SAML & role-based access",
        "Dedicated success manager",
        "Custom SLA & audit logs",
        "Onboarding & migration support",
      ],
    },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
