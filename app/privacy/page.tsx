import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.productName} by ${siteConfig.companyName}.`,
};

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-10">
    <h2 id={id} className="text-xl font-semibold tracking-tight text-white">
      {title}
    </h2>
    <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-400">
      {children}
    </div>
  </section>
);

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: August 24, 2026
        </p>

        <p className="mt-8 text-sm leading-7 text-zinc-400">
          This Privacy Policy describes how {siteConfig.companyName} (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses
          information when you use {siteConfig.productName} (the
          &quot;Service&quot;). We are committed to protecting your privacy and
          handling your personal data in compliance with applicable laws,
          including the General Data Protection Regulation (GDPR) and the
          California Consumer Privacy Act (CCPA), where applicable.
        </p>

        <Section id="information-we-collect" title="1. Information We Collect">
          <p>
            We collect the following categories of information:
          </p>
          <p>
            <strong className="text-zinc-200">Information you provide.</strong>{" "}
            When you create an account, subscribe, or contact us, we collect
            your name, email address, company name, and any other information
            you choose to provide.
          </p>
          <p>
            <strong className="text-zinc-200">Usage information.</strong> We
            automatically collect information about how you interact with the
            Service, including pages visited, features used, and actions taken.
          </p>
          <p>
            <strong className="text-zinc-200">Device and log data.</strong> We
            collect technical information such as IP address, browser type,
            device type, and operating system to improve the Service and
            maintain security.
          </p>
        </Section>

        <Section id="how-we-use" title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide, operate, and maintain the Service;</li>
            <li>Process transactions and manage your subscription;</li>
            <li>Communicate with you about your account and the Service;</li>
            <li>Improve, personalize, and develop new features;</li>
            <li>Ensure the security and integrity of the Service; and</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        <Section id="payment-data" title="3. Payment Data">
          <p>
            Payments are processed securely by Stripe, a PCI-DSS Level 1
            compliant third-party payment processor. When you make a payment,
            your card number and sensitive payment information are transmitted
            directly to Stripe and are not stored on our servers. We receive
            only limited transaction metadata (such as the last four digits of
            your card and transaction status) necessary to manage your
            subscription.
          </p>
          <p>
            For more information about how Stripe handles your data, please
            review{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Stripe&apos;s Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section id="cookies-analytics" title="4. Cookies & Analytics">
          <p>
            We use cookies and similar technologies to recognize your browser,
            remember your preferences, and understand how the Service is used.
            We may use third-party analytics providers to help us measure
            traffic and usage trends.
          </p>
          <p>
            You can control cookies through your browser settings. Disabling
            cookies may affect the functionality of the Service.
          </p>
        </Section>

        <Section id="data-security" title="5. Data Security">
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards designed to protect your information against
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section id="your-rights" title="6. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Access, correct, or update your personal information;</li>
            <li>Request deletion of your personal information;</li>
            <li>Object to or restrict certain processing activities;</li>
            <li>Request a copy of your data in a portable format; and</li>
            <li>
              Opt out of the sale of personal information (we do not sell
              personal information).
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information below. We will respond to verifiable requests within the
            timeframes required by applicable law.
          </p>
        </Section>

        <Section id="contact-us" title="7. Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-indigo-400 transition-colors hover:text-indigo-300"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
          <p>
            Our registered business address is {siteConfig.address}.
          </p>
        </Section>
      </div>
    </main>
  );
}
