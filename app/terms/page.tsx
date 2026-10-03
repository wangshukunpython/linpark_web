import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.productName} by ${siteConfig.companyName}.`,
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
    <h2
      id={id}
      className="text-xl font-semibold tracking-tight text-white"
    >
      {title}
    </h2>
    <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-400">
      {children}
    </div>
  </section>
);

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: August 24, 2026
        </p>

        <p className="mt-8 text-sm leading-7 text-zinc-400">
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of the {siteConfig.productName} website, applications, and
          services (collectively, the &quot;Service&quot;), operated by{" "}
          {siteConfig.companyName} (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). By accessing or using the Service, you agree to be
          bound by these Terms. If you do not agree to these Terms, you may not
          access or use the Service.
        </p>

        <Section id="acceptance" title="1. Acceptance of Terms">
          <p>
            By creating an account, accessing, or otherwise using the Service,
            you represent that you are at least 18 years of age (or the age of
            majority in your jurisdiction) and have the legal capacity to enter
            into a binding agreement. If you are using the Service on behalf of
            a company or other legal entity, you represent that you have the
            authority to bind that entity to these Terms.
          </p>
          <p>
            We may amend these Terms from time to time. If we make material
            changes, we will provide notice by posting the updated Terms on this
            page and updating the &quot;Last updated&quot; date above. Your
            continued use of the Service after the effective date of any changes
            constitutes your acceptance of the revised Terms.
          </p>
        </Section>

        <Section id="service-description" title="2. Service Description">
          <p>
            {siteConfig.productName} is an AI-powered outreach automation
            platform that helps businesses generate, personalize, and manage
            outbound communications. The Service may include AI-assisted
            drafting, campaign scheduling, analytics, and related tools
            (collectively, the &quot;Services&quot;).
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            the Service, temporarily or permanently, with or without notice, and
            without liability to you. We may also update features, add new
            functionality, or remove functionality at our sole discretion.
          </p>
        </Section>

        <Section id="user-accounts" title="3. User Accounts">
          <p>
            To access certain features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete
            information during registration and to keep your account information
            up to date.
          </p>
          <p>
            You are solely responsible for maintaining the confidentiality of
            your account credentials and for all activities that occur under
            your account. You must notify us immediately of any unauthorized use
            of your account or any other breach of security. We are not liable
            for any loss or damage arising from your failure to comply with this
            section.
          </p>
          <p>
            You are responsible for ensuring that your use of the Service,
            including any AI-generated content you send through it, complies
            with all applicable laws and regulations, including those governing
            electronic communications, spam, and data privacy (such as the
            CAN-SPAM Act, the GDPR, and the CCPA, where applicable).
          </p>
        </Section>

        <Section
          id="subscriptions-payments"
          title="4. Subscriptions & Payment Terms"
        >
          <p>
            Certain features of the Service are available on a paid subscription
            basis. By selecting a paid plan, you agree to pay the applicable
            fees as displayed at the time of purchase. Fees are billed in
            advance on a recurring monthly basis unless otherwise stated.
          </p>
          <p>
            All payments are processed securely by Stripe, our third-party
            payment processor. By providing a payment method, you authorize
            Stripe and {siteConfig.companyName} to charge the applicable fees to
            that payment method. We do not store your full payment card details
            on our own servers; your card information is handled directly by
            Stripe in accordance with its own terms and privacy policy.
          </p>
          <p>
            <strong className="text-zinc-200">Automatic renewal.</strong>{" "}
            Subscriptions automatically renew for successive periods of the same
            length unless you cancel prior to the renewal date. You may cancel
            your subscription at any time through your account settings; the
            cancellation will take effect at the end of the then-current billing
            period.
          </p>
          <p>
            <strong className="text-zinc-200">Refunds.</strong> All fees are
            non-refundable except as required by applicable law or as expressly
            stated in these Terms. If you believe you have been billed in error,
            you must contact us within thirty (30) days of the charge to request
            a review. We may, in our sole discretion, provide a refund or
            credit in certain circumstances.
          </p>
        </Section>

        <Section id="intellectual-property" title="5. Intellectual Property">
          <p>
            The Service and all content, software, designs, trademarks, logos,
            and other materials made available through the Service are owned by{" "}
            {siteConfig.companyName} or its licensors and are protected by
            intellectual property laws. You are granted a limited,
            non-exclusive, non-transferable, revocable license to access and use
            the Service solely for its intended purpose.
          </p>
          <p>
            You retain ownership of any content you submit to the Service
            (&quot;Your Content&quot;). You grant us a limited, worldwide,
            royalty-free license to use, store, and process Your Content solely
            as necessary to provide and improve the Service.
          </p>
        </Section>

        <Section id="limitation-liability" title="6. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, the Service is provided on
            an &quot;as is&quot; and &quot;as available&quot; basis, without
            warranties of any kind, whether express or implied, including
            warranties of merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
          <p>
            To the maximum extent permitted by law, {siteConfig.companyName}{" "}
            and its officers, directors, employees, and agents shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits, revenue, data, or
            goodwill, arising out of or relating to your use of the Service,
            even if advised of the possibility of such damages. In no event
            shall our aggregate liability exceed the greater of one hundred
            dollars ($100) or the amounts paid by you to us in the twelve (12)
            months preceding the event giving rise to the claim.
          </p>
        </Section>

        <Section id="governing-law" title="7. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States and the State of Wyoming, USA, without
            regard to its conflict of law principles. Any dispute arising out of
            or relating to these Terms or the Service shall be brought
            exclusively in the state or federal courts located in Wyoming, USA, and
            you consent to the personal jurisdiction of such courts.
          </p>
        </Section>

        <Section id="contact" title="8. Contact Information">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
