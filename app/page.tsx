import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Plug,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const featureIcons = {
  "AI Automation": Zap,
  "Smart Analytics": BarChart3,
  "Instant API Access": Plug,
  "Enterprise Security": ShieldCheck,
} as const;

export default function Home() {
  return (
    <main className="flex-1">
      {/* ============ Header / Navbar ============ */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-semibold text-white">
              {siteConfig.productName}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#pricing"
              className="hidden text-sm text-zinc-300 transition-colors hover:text-white sm:block"
            >
              Log in
            </Link>
            <a
              href="#pricing"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="radial-fade pointer-events-none absolute inset-0" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 pb-20 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            {siteConfig.hero.badge}
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            {siteConfig.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            {siteConfig.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="glow-primary inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/[0.12] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/[0.25] hover:bg-white/[0.04]"
            >
              {siteConfig.hero.secondaryCta}
            </a>
          </div>

          {/* Dashboard 预览占位卡片 */}
          <div className="glow-card relative mt-16 w-full max-w-4xl rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1">
            <div className="rounded-lg bg-[#0a0a0a] p-6 sm:p-8">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 text-xs text-zinc-500">
                  {siteConfig.productName} — Dashboard
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Emails Sent", value: "128,432" },
                  { label: "Open Rate", value: "64.2%" },
                  { label: "Meetings Booked", value: "1,204" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-left"
                  >
                    <p className="text-[11px] text-zinc-500">{stat.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* 示意图表条 */}
              <div className="mt-4 flex h-32 items-end gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                {[40, 65, 50, 80, 60, 90, 72, 85, 95, 70, 88, 100].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-violet-400/70"
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Features ============ */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to scale outreach
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Purpose-built features that turn cold lists into warm pipeline.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {siteConfig.features.map((feature) => {
            const Icon = featureIcons[feature.title] ?? Sparkles;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                  <Icon className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ Pricing ============ */}
      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Start free. Upgrade when you&apos;re ready to scale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlight
                  ? "relative rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-500/[0.08] to-white/[0.02] p-8"
                  : "relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-sm font-medium text-zinc-300">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white">
                  ${plan.priceMonthly}
                </span>
                <span className="text-sm text-zinc-500">/mo</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{plan.tagline}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.stripeCheckoutUrl}
                className={
                  plan.highlight
                    ? "mt-8 flex w-full items-center justify-center rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                    : "mt-8 flex w-full items-center justify-center rounded-lg border border-white/[0.12] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.04]"
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Payments are securely processed by Stripe. Cancel anytime.
        </p>
      </section>
    </main>
  );
}
