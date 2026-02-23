import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dellep",
  description:
    "Learn how Dellep collects, uses, and protects your personal information in compliance with Quebec and Canadian privacy laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="pb-20">
        <div className="relative z-20 py-10 md:pt-40 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">
            Last updated: February 22, 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200">
            <p>
              This privacy policy sets out how Dellep Ltd (&quot;Dellep&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
              and protects your personal information. This policy is provided in
              a layered format so you can navigate to the specific sections set
              out below.
            </p>

            <nav className="my-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <p className="font-semibold text-neutral-900 dark:text-white !mt-0 !mb-3">
                Table of Contents
              </p>
              <ol className="!my-0 space-y-1">
                <li><a href="#who-we-are">Important Information and Who We Are</a></li>
                <li><a href="#data-types">Types of Personal Data We Collect About You</a></li>
                <li><a href="#data-collection">How Is Your Personal Data Collected?</a></li>
                <li><a href="#data-use">How We Use Your Personal Data</a></li>
                <li><a href="#data-disclosures">Disclosures of Your Personal Data</a></li>
                <li><a href="#international-transfers">International Transfers</a></li>
                <li><a href="#data-security">Data Security</a></li>
                <li><a href="#data-retention">Data Retention</a></li>
                <li><a href="#your-rights">Your Legal Rights</a></li>
                <li><a href="#contact">Contact Details</a></li>
                <li><a href="#complaints">Complaints</a></li>
                <li><a href="#changes">Changes to This Privacy Policy</a></li>
                <li><a href="#third-party-links">Third-Party Links</a></li>
              </ol>
            </nav>

            {/* 1. Important Information and Who We Are */}
            <h2 id="who-we-are">1. Important Information and Who We Are</h2>
            <p>
              This privacy policy gives you information about how Dellep
              collects and uses your personal data through your use of this
              website, including any data you may provide when you purchase a
              service from us or submit an inquiry through our contact form.
            </p>
            <p>
              This website is not intended for children and we do not knowingly
              collect data relating to children.
            </p>
            <h3>Controller</h3>
            <p>
              Dellep Ltd is the controller and is responsible for your personal
              data. If you have any questions about this privacy policy,
              including any requests to exercise your legal rights (see{" "}
              <a href="#your-rights">Section 9</a>), please contact us using
              the information set out in the{" "}
              <a href="#contact">Contact Details</a> section.
            </p>

            {/* 2. Types of Personal Data We Collect */}
            <h2 id="data-types">
              2. Types of Personal Data We Collect About You
            </h2>
            <p>
              Personal data means any information about an individual from which
              that person can be identified. We may collect, use, store, and
              transfer different kinds of personal data about you, which we have
              grouped together as follows:
            </p>
            <ul>
              <li>
                <strong>Identity Data</strong> &mdash; first name, last name,
                username or similar identifier, and title.
              </li>
              <li>
                <strong>Contact Data</strong> &mdash; email address, telephone
                number, practice name, and mailing address.
              </li>
              <li>
                <strong>Financial Data</strong> &mdash; bank account and payment
                card details (if applicable).
              </li>
              <li>
                <strong>Transaction Data</strong> &mdash; details about payments
                to and from you and details of services you have purchased from
                us.
              </li>
              <li>
                <strong>Technical Data</strong> &mdash; internet protocol (IP)
                address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, device ID, and other technology on the devices you
                use to access this website.
              </li>
              <li>
                <strong>Profile Data</strong> &mdash; your username and
                password, purchases or orders made by you, your interests,
                preferences, feedback, and survey responses.
              </li>
              <li>
                <strong>Usage Data</strong> &mdash; information about how you
                interact with and use our website and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> &mdash; your
                preferences in receiving marketing from us and your
                communication preferences.
              </li>
            </ul>
            <p>
              We also collect, use, and share aggregated data such as
              statistical or demographic data which is not personal data as it
              does not directly or indirectly reveal your identity. For example,
              we may aggregate Usage Data to calculate the percentage of users
              accessing a specific website feature in order to analyse general
              trends and improve the website and our service offering.
            </p>

            {/* 3. How Is Your Personal Data Collected? */}
            <h2 id="data-collection">
              3. How Is Your Personal Data Collected?
            </h2>
            <p>
              We use different methods to collect data from and about you,
              including:
            </p>
            <h3>Your interactions with us</h3>
            <p>
              You may give us your personal data by filling in online forms
              (such as our contact form) or by corresponding with us by email or
              otherwise. This includes personal data you provide when you:
            </p>
            <ul>
              <li>Apply for or inquire about our services;</li>
              <li>Subscribe to our publications or newsletter;</li>
              <li>Request marketing to be sent to you; or</li>
              <li>Give us feedback or contact us.</li>
            </ul>
            <h3>Automated technologies or interactions</h3>
            <p>
              As you interact with our website, we may automatically collect
              Technical Data about your equipment, browsing actions, and
              patterns. We collect this personal data by using cookies, server
              logs, and other similar technologies.
            </p>
            <h3>Third parties or publicly available sources</h3>
            <p>
              We may receive personal data about you from various third parties
              and public sources, including:
            </p>
            <ul>
              <li>
                <strong>Technical Data</strong> from analytics providers (such
                as Google Analytics and Vercel Analytics) and advertising
                networks (such as Google Ads and Meta).
              </li>
              <li>
                <strong>Contact, Financial, and Transaction Data</strong> from
                providers of technical, payment, and delivery services.
              </li>
              <li>
                <strong>Identity and Contact Data</strong> from publicly
                available sources such as provincial and federal business
                registries.
              </li>
            </ul>

            {/* 4. How We Use Your Personal Data */}
            <h2 id="data-use">4. How We Use Your Personal Data</h2>
            <h3>Legal basis</h3>
            <p>
              Under applicable Canadian and Quebec privacy legislation
              &mdash; including the{" "}
              <em>
                Act respecting the protection of personal information in the
                private sector
              </em>{" "}
              (Quebec) and the{" "}
              <em>Personal Information Protection and Electronic Documents Act</em>{" "}
              (PIPEDA) &mdash; we are required to have a lawful basis for
              collecting and using your personal data. We rely on one or more of
              the following:
            </p>
            <ul>
              <li>
                <strong>Performance of a contract:</strong> Where we need to
                perform the contract we are about to enter into or have entered
                into with you.
              </li>
              <li>
                <strong>Legitimate interests:</strong> Where it is necessary to
                conduct our business and pursue our legitimate interests (for
                example, to prevent fraud and to give you the best and most
                secure customer experience), provided that such use does not
                cause serious prejudice to you.
              </li>
              <li>
                <strong>Legal obligation:</strong> Where it is necessary for
                compliance with a legal obligation to which we are subject.
              </li>
              <li>
                <strong>Consent:</strong> Where we have obtained your active
                agreement to use your personal data for a specified purpose, for
                example if you subscribe to an email newsletter.
              </li>
            </ul>

            <h3>Purposes for which we will use your personal data</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900">
                    <th className="text-left p-3 font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800">Purpose</th>
                    <th className="text-left p-3 font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800">Types of Data</th>
                    <th className="text-left p-3 font-semibold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To register you as a new client</td>
                    <td className="p-3 align-top">Identity, Contact</td>
                    <td className="p-3 align-top">Performance of a contract</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To process and deliver services, manage payments, collect and recover money owed</td>
                    <td className="p-3 align-top">Identity, Contact, Financial, Transaction</td>
                    <td className="p-3 align-top">Performance of a contract; Legitimate interests (to recover debts due to us)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To manage our relationship with you, including notifying you about changes to our terms or this policy</td>
                    <td className="p-3 align-top">Identity, Contact, Profile</td>
                    <td className="p-3 align-top">Performance of a contract; Legal obligation; Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To administer and protect our business and this website (troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting)</td>
                    <td className="p-3 align-top">Identity, Contact, Technical</td>
                    <td className="p-3 align-top">Legitimate interests (running our business, IT services, network security, fraud prevention); Legal obligation</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To deliver relevant website content and measure advertising effectiveness</td>
                    <td className="p-3 align-top">Identity, Contact, Profile, Usage, Marketing and Communications, Technical</td>
                    <td className="p-3 align-top">Legitimate interests (to study service use, grow our business, and inform our marketing strategy)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="p-3 align-top">To use data analytics to improve our website, services, and client experiences</td>
                    <td className="p-3 align-top">Technical, Usage</td>
                    <td className="p-3 align-top">Legitimate interests (to keep our website updated and relevant, develop our business)</td>
                  </tr>
                  <tr>
                    <td className="p-3 align-top">To send you relevant marketing communications and personalised recommendations</td>
                    <td className="p-3 align-top">Identity, Contact, Technical, Usage, Profile, Marketing and Communications</td>
                    <td className="p-3 align-top">Consent (having obtained your prior consent to receiving direct marketing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Direct marketing</h3>
            <p>
              You will receive marketing communications from us if you have
              requested information from us or purchased services from us and
              you have not opted out of receiving the marketing.
            </p>

            <h3>Third-party marketing</h3>
            <p>
              We will obtain your express consent before we share your personal
              data with any third party for their own direct marketing purposes.
            </p>

            <h3>Opting out of marketing</h3>
            <p>
              You can ask us to stop sending you marketing communications at any
              time by following the opt-out links within any marketing
              communication sent to you or by contacting us. If you opt out, you
              will still receive service-related communications that are
              essential for administrative or client service purposes.
            </p>

            <h3>Cookies</h3>
            <p>
              For more information about the cookies we use and how to change
              your cookie preferences, please contact us at{" "}
              <a href="mailto:contact@dellep.com">contact@dellep.com</a>.
            </p>

            {/* 5. Disclosures */}
            <h2 id="data-disclosures">
              5. Disclosures of Your Personal Data
            </h2>
            <p>
              We may share your personal data where necessary with the following
              parties for the purposes set out in the table above:
            </p>
            <ul>
              <li>
                <strong>Supabase</strong> &mdash; for database hosting and
                authentication services;
              </li>
              <li>
                <strong>Resend</strong> &mdash; for transactional and
                notification emails;
              </li>
              <li>
                <strong>Vercel</strong> &mdash; for website hosting and
                analytics;
              </li>
              <li>
                <strong>Google (Analytics &amp; Ads)</strong> &mdash; for
                website analytics and advertisement tracking;
              </li>
              <li>
                <strong>Meta</strong> &mdash; for advertisement tracking;
              </li>
              <li>
                <strong>Stripe</strong> &mdash; for processing and storing
                payment details (if applicable);
              </li>
              <li>
                Sub-contractors who assist us in providing our services.
              </li>
            </ul>
            <p>
              We may also share your personal data with third parties to whom we
              choose to sell, transfer, or merge parts of our business or our
              assets. If a change happens to our business, the new owners may
              use your personal data in the same way as set out in this privacy
              policy.
            </p>
            <p>
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do
              not allow our third-party service providers to use your personal
              data for their own purposes and only permit them to process it for
              specified purposes and in accordance with our instructions.
            </p>

            {/* 6. International Transfers */}
            <h2 id="international-transfers">6. International Transfers</h2>
            <p>
              Some of our third-party service providers are based outside of
              Canada, which means that the processing of your personal data may
              involve a transfer of data outside of Canada. Whenever we transfer
              your personal data out of Canada, we take steps to ensure that
              adequate safeguards are in place to protect your personal data in
              accordance with Quebec&apos;s{" "}
              <em>
                Act respecting the protection of personal information in the
                private sector
              </em>{" "}
              and PIPEDA, including:
            </p>
            <ul>
              <li>
                Transferring only to jurisdictions recognized as providing an
                adequate level of protection; or
              </li>
              <li>
                Entering into contractual arrangements that require the
                recipient to provide a comparable level of protection for your
                personal data.
              </li>
            </ul>

            {/* 7. Data Security */}
            <h2 id="data-security">7. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorised way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions and are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>

            {/* 8. Data Retention */}
            <h2 id="data-retention">8. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably
              necessary to fulfil the purposes we collected it for, including
              for the purposes of satisfying any legal, regulatory, tax,
              accounting, or reporting requirements. We may retain your personal
              data for a longer period in the event of a complaint or if we
              reasonably believe there is a prospect of litigation in respect of
              our relationship with you.
            </p>
            <p>
              To determine the appropriate retention period for personal data,
              we consider the amount, nature, and sensitivity of the personal
              data, the potential risk of harm from unauthorised use or
              disclosure, the purposes for which we process it, and the
              applicable legal, regulatory, tax, accounting, or other
              requirements.
            </p>
            <p>
              By law, we are required to keep basic information about our
              clients (including Contact, Identity, Financial, and Transaction
              Data) for six years after they cease being clients for tax
              purposes. In some circumstances you can ask us to delete your
              data; see <a href="#your-rights">Section 9</a> below for further
              information.
            </p>

            {/* 9. Your Legal Rights */}
            <h2 id="your-rights">9. Your Legal Rights</h2>
            <p>
              Under Canadian and Quebec privacy laws, you have a number of
              rights in relation to your personal data. You have the right to:
            </p>
            <ul>
              <li>
                <strong>Request access</strong> to your personal data. This
                enables you to receive a copy of the personal data we hold about
                you and to verify that we are lawfully processing it.
              </li>
              <li>
                <strong>Request correction</strong> of any incomplete or
                inaccurate personal data we hold about you.
              </li>
              <li>
                <strong>Request erasure</strong> of your personal data in
                certain circumstances, such as where there is no good reason for
                us to continue processing it, or where you have successfully
                exercised your right to object to processing.
              </li>
              <li>
                <strong>Object to processing</strong> of your personal data
                where we are relying on a legitimate interest as the legal basis,
                including the absolute right to object at any time to the
                processing of your personal data for direct marketing purposes.
              </li>
              <li>
                <strong>Request the transfer</strong> of your personal data to
                you or to a third party in a structured, commonly used,
                machine-readable format.
              </li>
              <li>
                <strong>Withdraw consent</strong> at any time where we are
                relying on consent to process your personal data. This will not
                affect the lawfulness of any processing carried out before you
                withdraw your consent.
              </li>
              <li>
                <strong>Request restriction of processing</strong> of your
                personal data, for example if you want us to establish its
                accuracy or where our use of the data is unlawful but you do not
                want us to erase it.
              </li>
              <li>
                <strong>De-indexation (right to be forgotten)</strong> &mdash;
                under Quebec&apos;s Law 25, you may request that we cease
                disseminating your personal information or that any hyperlink
                associated with your name providing access to such information
                be de-indexed, where the dissemination contravenes the law or a
                court order.
              </li>
            </ul>
            <p>
              If you wish to exercise any of these rights, please contact us
              using the details in <a href="#contact">Section 10</a>.
            </p>
            <h3>No fee usually required</h3>
            <p>
              You will not have to pay a fee to access your personal data or to
              exercise any of the other rights. However, we may charge a
              reasonable fee if your request is clearly unfounded, repetitive, or
              excessive.
            </p>
            <h3>Time limit to respond</h3>
            <p>
              We endeavour to respond to all legitimate requests within 30 days.
              If your request is particularly complex, we will notify you and
              keep you updated on our progress.
            </p>

            {/* 10. Contact Details */}
            <h2 id="contact">10. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy, the use of
              your personal data, or you wish to exercise your privacy rights,
              please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@dellep.com">contact@dellep.com</a>
              </li>
            </ul>

            {/* 11. Complaints */}
            <h2 id="complaints">11. Complaints</h2>
            <p>
              You have the right to make a complaint at any time to the{" "}
              <strong>
                Commission d&apos;acc&egrave;s &agrave; l&apos;information du
                Qu&eacute;bec (CAI)
              </strong>
              , the Quebec regulator for privacy and access to information
              issues. You may also file a complaint with the{" "}
              <strong>Office of the Privacy Commissioner of Canada (OPC)</strong>{" "}
              for matters under PIPEDA.
            </p>
            <p>
              We would, however, appreciate the chance to deal with your
              concerns before you approach a regulator, so please contact us in
              the first instance.
            </p>

            {/* 12. Changes */}
            <h2 id="changes">12. Changes to This Privacy Policy</h2>
            <p>
              We keep our privacy policy under regular review. It is important
              that the personal data we hold about you is accurate and current.
              Please keep us informed if your personal data changes during your
              relationship with us, for example a new address or email address.
            </p>

            {/* 13. Third-Party Links */}
            <h2 id="third-party-links">13. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins,
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements. When you leave our
              website, we encourage you to read the privacy policy of every
              website you visit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
