"use client";

import { Container } from "@/components/container";
import { useIntl } from "react-intl";

export default function TermsAndConditionsPage() {
  const intl = useIntl();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="pb-20">
        <div className="relative z-20 py-10 md:pt-40 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {intl.formatMessage({ defaultMessage: "Terms and Conditions" })}
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">
            {intl.formatMessage({ defaultMessage: "Last updated: February 22, 2026" })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200">
            <nav className="my-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <p className="font-semibold text-neutral-900 dark:text-white !mt-0 !mb-3">
                {intl.formatMessage({ defaultMessage: "Table of Contents" })}
              </p>
              <ol className="!my-0 space-y-1">
                <li><a href="#general">{intl.formatMessage({ defaultMessage: "1. General" })}</a></li>
                <li><a href="#intellectual-property">{intl.formatMessage({ defaultMessage: "2. Intellectual Property Rights" })}</a></li>
                <li><a href="#your-license-to-us">{intl.formatMessage({ defaultMessage: "3. Your Licence to Us" })}</a></li>
                <li><a href="#linking-and-framing">{intl.formatMessage({ defaultMessage: "4. Limitations on Linking and Framing" })}</a></li>
                <li><a href="#disclaimers">{intl.formatMessage({ defaultMessage: "5. Disclaimers" })}</a></li>
                <li><a href="#online-commerce">{intl.formatMessage({ defaultMessage: "6. Online Commerce" })}</a></li>
                <li><a href="#interactive-features">{intl.formatMessage({ defaultMessage: "7. Interactive Features" })}</a></li>
                <li><a href="#registration">{intl.formatMessage({ defaultMessage: "8. Registration" })}</a></li>
                <li><a href="#passwords">{intl.formatMessage({ defaultMessage: "9. Passwords" })}</a></li>
                <li><a href="#limitation-of-liability">{intl.formatMessage({ defaultMessage: "10. Limitation of Liability" })}</a></li>
                <li><a href="#termination">{intl.formatMessage({ defaultMessage: "11. Termination" })}</a></li>
                <li><a href="#refund-policy">{intl.formatMessage({ defaultMessage: "12. Refund Policy" })}</a></li>
                <li><a href="#copyright">{intl.formatMessage({ defaultMessage: "13. Copyright" })}</a></li>
                <li><a href="#governing-law">{intl.formatMessage({ defaultMessage: "14. Governing Law and Dispute Resolution" })}</a></li>
                <li><a href="#disclaimer-changes">{intl.formatMessage({ defaultMessage: "15. Disclaimer and Changes" })}</a></li>
              </ol>
            </nav>

            <h2 id="general">{intl.formatMessage({ defaultMessage: "1. General" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "This website (the \"Site\") is owned and operated by Dellep Ltd (\"Dellep\", \"we\", or \"us\"), a company incorporated under the laws of Quebec, Canada. By using the Site, you agree to be bound by these Terms and Conditions and to use the Site in accordance with these Terms and Conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Dellep." })}
            </p>
            <p>
              {intl.formatMessage({ defaultMessage: "We reserve the right to change these Terms and Conditions or to impose new conditions on use of the Site, from time to time, in which case we will post the revised Terms and Conditions on this website. By continuing to use the Site after we post any such changes, you accept the Terms and Conditions, as modified." })}
            </p>

            <h2 id="intellectual-property">{intl.formatMessage({ defaultMessage: "2. Intellectual Property Rights" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "This Site and all the materials available on the Site are the property of Dellep and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal, non-commercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorised by us." })}
            </p>

            <h2 id="your-license-to-us">{intl.formatMessage({ defaultMessage: "3. Your Licence to Us" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "By posting or submitting any material to us via the Site, you represent that you are the owner of the material or are making your posting with the express consent of the owner, and that you are thirteen years of age or older. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, unrestricted, worldwide licence to use, copy, modify, transmit, sell, exploit, create derivative works from, distribute, and/or publicly perform or display such material." })}
            </p>

            <h2 id="linking-and-framing">{intl.formatMessage({ defaultMessage: "4. Limitations on Linking and Framing" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "You may establish a hypertext link to the Site so long as the link does not state or imply any sponsorship of your site by us. However, you may not, without our prior written permission, frame or inline link any of the content of the Site." })}
            </p>

            <h2 id="disclaimers">{intl.formatMessage({ defaultMessage: "5. Disclaimers" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "Throughout the Site, we may provide links to Internet sites maintained by third parties. Our linking to such sites does not imply an endorsement or sponsorship of such sites, or the information, products, or services offered on or through the sites." })}
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              {intl.formatMessage({ defaultMessage: "The information, products, and services offered on or through the Site are provided \"as is\" and without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose." })}
            </p>

            <h2 id="online-commerce">{intl.formatMessage({ defaultMessage: "6. Online Commerce" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "Certain sections of the Site may allow you to purchase different types of products and services online that are provided by third parties. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services." })}
            </p>

            <h2 id="interactive-features">{intl.formatMessage({ defaultMessage: "7. Interactive Features" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "This Site may include features such as bulletin boards, chat rooms, and email services which allow feedback and real-time interaction between users. You alone are responsible for the material you post or send." })}
            </p>

            <h2 id="registration">{intl.formatMessage({ defaultMessage: "8. Registration" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "To access certain features of the Site, you may be asked to register and provide personally identifiable information. You agree to provide true, accurate, current, and complete information about yourself." })}
            </p>

            <h2 id="passwords">{intl.formatMessage({ defaultMessage: "9. Passwords" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "You are responsible for maintaining the confidentiality of your password and account, and are responsible for all activities that occur under your password or account." })}
            </p>

            <h2 id="limitation-of-liability">{intl.formatMessage({ defaultMessage: "10. Limitation of Liability" })}</h2>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              {intl.formatMessage({ defaultMessage: "Under no circumstances shall we, our subsidiary and parent companies, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the Site." })}
            </p>

            <h2 id="termination">{intl.formatMessage({ defaultMessage: "11. Termination" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "We may cancel or terminate your right to use the Site or any part of the Site at any time without notice." })}
            </p>

            <h2 id="refund-policy">{intl.formatMessage({ defaultMessage: "12. Refund Policy" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "Your purchase of a product or service may or may not provide for any refund. Each specific product, service, event, or course will specify its own refund policy." })}
            </p>

            <h2 id="copyright">{intl.formatMessage({ defaultMessage: "13. Copyright" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "If you believe that materials hosted by Dellep infringe your copyright, you or your agent may send us a notice requesting removal. All notices must meet the applicable requirements under the Copyright Act (R.S.C., 1985, c. C-42). Contact: contact@dellep.com." })}
            </p>

            <h2 id="governing-law">{intl.formatMessage({ defaultMessage: "14. Governing Law and Dispute Resolution" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein. Any dispute shall be submitted to the exclusive jurisdiction of the courts of the Province of Quebec, judicial district of Montreal." })}
            </p>

            <h2 id="disclaimer-changes">{intl.formatMessage({ defaultMessage: "15. Disclaimer and Changes" })}</h2>
            <p>
              {intl.formatMessage({ defaultMessage: "This policy may be changed at any time at our discretion. If we update this policy, we will post the updates to this page. Contact: contact@dellep.com." })}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
