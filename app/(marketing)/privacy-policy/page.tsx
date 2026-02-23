"use client";

import { Container } from "@/components/container";
import { useIntl } from "react-intl";

export default function PrivacyPolicyPage() {
  const intl = useIntl();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="pb-20">
        <div className="relative z-20 py-10 md:pt-40 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {intl.formatMessage({ defaultMessage: "Privacy Policy" })}
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">
            {intl.formatMessage({ defaultMessage: "Last updated: February 22, 2026" })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-a:text-green-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200">
            <p>
              {intl.formatMessage({ defaultMessage: "This privacy policy sets out how Dellep Ltd (\"Dellep\", \"we\", \"us\", or \"our\") collects, uses, and protects your personal information. This policy is provided in a layered format so you can navigate to the specific sections set out below." })}
            </p>

            <nav className="my-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <p className="font-semibold text-neutral-900 dark:text-white !mt-0 !mb-3">
                {intl.formatMessage({ defaultMessage: "Table of Contents" })}
              </p>
              <ol className="!my-0 space-y-1">
                <li><a href="#who-we-are">{intl.formatMessage({ defaultMessage: "1. Important Information and Who We Are" })}</a></li>
                <li><a href="#data-types">{intl.formatMessage({ defaultMessage: "2. Types of Personal Data We Collect About You" })}</a></li>
                <li><a href="#data-collection">{intl.formatMessage({ defaultMessage: "3. How Is Your Personal Data Collected?" })}</a></li>
                <li><a href="#data-use">{intl.formatMessage({ defaultMessage: "4. How We Use Your Personal Data" })}</a></li>
                <li><a href="#data-disclosures">{intl.formatMessage({ defaultMessage: "5. Disclosures of Your Personal Data" })}</a></li>
                <li><a href="#international-transfers">{intl.formatMessage({ defaultMessage: "6. International Transfers" })}</a></li>
                <li><a href="#data-security">{intl.formatMessage({ defaultMessage: "7. Data Security" })}</a></li>
                <li><a href="#data-retention">{intl.formatMessage({ defaultMessage: "8. Data Retention" })}</a></li>
                <li><a href="#your-rights">{intl.formatMessage({ defaultMessage: "9. Your Legal Rights" })}</a></li>
                <li><a href="#contact">{intl.formatMessage({ defaultMessage: "10. Contact Details" })}</a></li>
                <li><a href="#complaints">{intl.formatMessage({ defaultMessage: "11. Complaints" })}</a></li>
                <li><a href="#changes">{intl.formatMessage({ defaultMessage: "12. Changes to This Privacy Policy" })}</a></li>
                <li><a href="#third-party-links">{intl.formatMessage({ defaultMessage: "13. Third-Party Links" })}</a></li>
              </ol>
            </nav>

            <h2 id="who-we-are">{intl.formatMessage({ defaultMessage: "1. Important Information and Who We Are" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "This privacy policy gives you information about how Dellep collects and uses your personal data through your use of this website, including any data you may provide when you purchase a service from us or submit an inquiry through our contact form." })}</p>
            <p>{intl.formatMessage({ defaultMessage: "This website is not intended for children and we do not knowingly collect data relating to children." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Controller" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "Dellep Ltd is the controller and is responsible for your personal data. If you have any questions about this privacy policy, including any requests to exercise your legal rights (see Section 9), please contact us using the information set out in the Contact Details section." })}</p>

            <h2 id="data-types">{intl.formatMessage({ defaultMessage: "2. Types of Personal Data We Collect About You" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "Personal data means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:" })}</p>
            <ul>
              <li><strong>{intl.formatMessage({ defaultMessage: "Identity Data — first name, last name, username or similar identifier, and title." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Contact Data — email address, telephone number, practice name, and mailing address." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Financial Data — bank account and payment card details (if applicable)." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Transaction Data — details about payments to and from you and details of services you have purchased from us." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Technical Data — internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID, and other technology on the devices you use to access this website." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Profile Data — your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Usage Data — information about how you interact with and use our website and services." })}</strong></li>
              <li><strong>{intl.formatMessage({ defaultMessage: "Marketing and Communications Data — your preferences in receiving marketing from us and your communication preferences." })}</strong></li>
            </ul>
            <p>{intl.formatMessage({ defaultMessage: "We also collect, use, and share aggregated data such as statistical or demographic data which is not personal data as it does not directly or indirectly reveal your identity." })}</p>

            <h2 id="data-collection">{intl.formatMessage({ defaultMessage: "3. How Is Your Personal Data Collected?" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "We use different methods to collect data from and about you, including:" })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Your interactions with us" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "You may give us your personal data by filling in online forms (such as our contact form) or by corresponding with us by email or otherwise." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Automated technologies or interactions" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Third parties or publicly available sources" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "We may receive personal data about you from various third parties and public sources." })}</p>

            <h2 id="data-use">{intl.formatMessage({ defaultMessage: "4. How We Use Your Personal Data" })}</h2>
            <h3>{intl.formatMessage({ defaultMessage: "Legal basis" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "Under applicable Canadian and Quebec privacy legislation — including the Act respecting the protection of personal information in the private sector (Quebec) and the Personal Information Protection and Electronic Documents Act (PIPEDA) — we are required to have a lawful basis for collecting and using your personal data." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Direct marketing" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "You will receive marketing communications from us if you have requested information from us or purchased services from us and you have not opted out of receiving the marketing." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Third-party marketing" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "We will obtain your express consent before we share your personal data with any third party for their own direct marketing purposes." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Opting out of marketing" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "You can ask us to stop sending you marketing communications at any time by following the opt-out links within any marketing communication sent to you or by contacting us." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Cookies" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "For more information about the cookies we use and how to change your cookie preferences, please contact us at contact@dellep.com." })}</p>

            <h2 id="data-disclosures">{intl.formatMessage({ defaultMessage: "5. Disclosures of Your Personal Data" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "We may share your personal data where necessary with the following parties for the purposes set out in the table above." })}</p>

            <h2 id="international-transfers">{intl.formatMessage({ defaultMessage: "6. International Transfers" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "Some of our third-party service providers are based outside of Canada, which means that the processing of your personal data may involve a transfer of data outside of Canada." })}</p>

            <h2 id="data-security">{intl.formatMessage({ defaultMessage: "7. Data Security" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed." })}</p>
            <p>{intl.formatMessage({ defaultMessage: "We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so." })}</p>

            <h2 id="data-retention">{intl.formatMessage({ defaultMessage: "8. Data Retention" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for." })}</p>

            <h2 id="your-rights">{intl.formatMessage({ defaultMessage: "9. Your Legal Rights" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "Under Canadian and Quebec privacy laws, you have a number of rights in relation to your personal data." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "No fee usually required" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "You will not have to pay a fee to access your personal data or to exercise any of the other rights." })}</p>
            <h3>{intl.formatMessage({ defaultMessage: "Time limit to respond" })}</h3>
            <p>{intl.formatMessage({ defaultMessage: "We endeavour to respond to all legitimate requests within 30 days." })}</p>

            <h2 id="contact">{intl.formatMessage({ defaultMessage: "10. Contact Details" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "If you have any questions about this privacy policy, the use of your personal data, or you wish to exercise your privacy rights, please contact us." })}</p>
            <ul>
              <li><strong>Email:</strong>{" "}<a href="mailto:contact@dellep.com">contact@dellep.com</a></li>
            </ul>

            <h2 id="complaints">{intl.formatMessage({ defaultMessage: "11. Complaints" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "You have the right to make a complaint at any time to the Commission d'acces a l'information du Quebec (CAI), the Quebec regulator for privacy and access to information issues." })}</p>

            <h2 id="changes">{intl.formatMessage({ defaultMessage: "12. Changes to This Privacy Policy" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "We keep our privacy policy under regular review." })}</p>

            <h2 id="third-party-links">{intl.formatMessage({ defaultMessage: "13. Third-Party Links" })}</h2>
            <p>{intl.formatMessage({ defaultMessage: "This website may include links to third-party websites, plug-ins, and applications." })}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
