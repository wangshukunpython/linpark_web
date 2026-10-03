import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * 全局页脚 —— 在所有页面底端展示品牌、法律链接与联系邮箱。
 * 已挂载到根布局（app/layout.tsx），无需在每个页面重复引入。
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* 品牌区 */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-semibold text-white">
                {siteConfig.productName}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-zinc-500">
              Next-gen AI to supercharge your outreach and close more deals.
            </p>
          </div>

          {/* 链接区 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Product
              </p>
              <Link
                href="/#features"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Pricing
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Legal
              </p>
              <Link
                href="/terms"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Contact
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* 版权 */}
        <div className="mt-10 border-t border-white/[0.06] pt-6">
          <p className="text-xs text-zinc-500">
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
