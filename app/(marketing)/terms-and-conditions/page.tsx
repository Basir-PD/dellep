import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Dellep",
  description:
    "Read the terms and conditions governing the use of the Dellep website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="pb-20">
        <div className="relative z-20 py-10 md:pt-40 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">
            Last updated: February 22, 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200">
            <nav className="my-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <p className="font-semibold text-neutral-900 dark:text-white !mt-0 !mb-3">
                Table of Contents
              </p>
              <ol className="!my-0 space-y-1">
                <li><a href="#general">General</a></li>
                <li><a href="#intellectual-property">Intellectual Property Rights</a></li>
                <li><a href="#your-license-to-us">Your License to Us</a></li>
                <li><a href="#linking-and-framing">Limitations on Linking and Framing</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <li><a href="#online-commerce">Online Commerce</a></li>
                <li><a href="#interactive-features">Interactive Features</a></li>
                <li><a href="#registration">Registration</a></li>
                <li><a href="#passwords">Passwords</a></li>
                <li><a href="#limitation-of-liability">Limitation of Liability</a></li>
                <li><a href="#termination">Termination</a></li>
                <li><a href="#refund-policy">Refund Policy</a></li>
                <li><a href="#copyright">Copyright</a></li>
                <li><a href="#governing-law">Governing Law and Dispute Resolution</a></li>
                <li><a href="#disclaimer-changes">Disclaimer and Changes</a></li>
              </ol>
            </nav>

            {/* 1. General */}
            <h2 id="general">1. General</h2>
            <p>
              This website (the &quot;Site&quot;) is owned and operated by Dellep
              Ltd (&quot;Dellep&quot;, &quot;we&quot;, or &quot;us&quot;), a
              company incorporated under the laws of Quebec, Canada. By using the
              Site, you agree to be bound by these Terms and Conditions and to use
              the Site in accordance with these Terms and Conditions, our{" "}
              <a href="/privacy-policy">Privacy Policy</a>, and any additional
              terms and conditions that may apply to specific sections of the Site
              or to products and services available through the Site or from
              Dellep. Accessing the Site, in any manner, whether automated or
              otherwise, constitutes use of the Site and your agreement to be
              bound by these Terms and Conditions.
            </p>
            <p>
              We reserve the right to change these Terms and Conditions or to
              impose new conditions on use of the Site, from time to time, in
              which case we will post the revised Terms and Conditions on this
              website. By continuing to use the Site after we post any such
              changes, you accept the Terms and Conditions, as modified.
            </p>

            {/* 2. Intellectual Property Rights */}
            <h2 id="intellectual-property">2. Intellectual Property Rights</h2>
            <h3>Our limited licence to you</h3>
            <p>
              This Site and all the materials available on the Site are the
              property of Dellep and/or our affiliates or licensors, and are
              protected by copyright, trademark, and other intellectual property
              laws, including applicable Canadian and Quebec legislation. The Site
              is provided solely for your personal, non-commercial use. You may
              not use the Site or the materials available on the Site in a manner
              that constitutes an infringement of our rights or that has not been
              authorised by us.
            </p>
            <p>
              Unless explicitly authorised in these Terms and Conditions or by the
              owner of the materials, you may not modify, copy, reproduce,
              republish, upload, post, transmit, translate, sell, create
              derivative works, exploit, or distribute in any manner or medium
              (including by email or other electronic means) any material from the
              Site. You may, however, from time to time, download and/or print one
              copy of individual pages of the Site for your personal,
              non-commercial use, provided that you keep intact all copyright and
              other proprietary notices.
            </p>

            {/* 3. Your License to Us */}
            <h2 id="your-license-to-us">3. Your Licence to Us</h2>
            <p>
              By posting or submitting any material (including, without
              limitation, comments, blog entries, social media postings, photos,
              and videos) to us via the Site, internet groups, social media
              venues, or to any of our staff via email, text, or otherwise, you
              represent: (i) that you are the owner of the material, or are making
              your posting or submission with the express consent of the owner of
              the material; and (ii) that you are thirteen years of age or older.
            </p>
            <p>
              In addition, when you submit, email, text, deliver, or post any
              material, you grant us, and anyone authorised by us, a royalty-free,
              perpetual, irrevocable, non-exclusive, unrestricted, worldwide
              licence to use, copy, modify, transmit, sell, exploit, create
              derivative works from, distribute, and/or publicly perform or
              display such material, in whole or in part, in any manner or medium,
              now known or hereafter developed, for any purpose. The foregoing
              grant includes the right to exploit any proprietary rights in such
              posting or submission, including, but not limited to, rights under
              copyright, trademark, service mark, or patent laws under any
              relevant jurisdiction. You also grant us, and anyone authorised by
              us, the right to identify you as the author of any of your postings
              or submissions by name, email address, or screen name, as we deem
              appropriate.
            </p>
            <p>
              You acknowledge and agree that any contributions originally created
              by you for us shall be deemed a &quot;work made for hire&quot; to the
              extent permitted by applicable law, including the{" "}
              <em>Copyright Act</em> (R.S.C., 1985, c. C-42). As such, the
              copyrights in those works shall belong to Dellep from their
              creation. In the event that any of the results and proceeds of your
              submissions hereunder are not deemed a &quot;work made for hire&quot;
              under applicable law, you hereby, without additional compensation,
              irrevocably assign, convey, and transfer to Dellep all proprietary
              rights, including without limitation, all copyrights and trademarks
              throughout the universe, in perpetuity, in every medium, whether now
              known or hereafter devised.
            </p>
            <p>
              You acknowledge that Dellep has the right but not the obligation to
              use and display any postings or contributions of any kind and that
              Dellep may elect to cease the use and display of any such materials
              (or any portion thereof), at any time for any reason whatsoever.
            </p>

            {/* 4. Linking and Framing */}
            <h2 id="linking-and-framing">
              4. Limitations on Linking and Framing
            </h2>
            <p>
              You may establish a hypertext link to the Site so long as the link
              does not state or imply any sponsorship of your site by us or by the
              Site. However, you may not, without our prior written permission,
              frame or inline link any of the content of the Site, or incorporate
              into another website or other service any of our material, content,
              or intellectual property.
            </p>

            {/* 5. Disclaimers */}
            <h2 id="disclaimers">5. Disclaimers</h2>
            <p>
              Throughout the Site, we may provide links and pointers to Internet
              sites maintained by third parties. Our linking to such third-party
              sites does not imply an endorsement or sponsorship of such sites, or
              the information, products, or services offered on or through the
              sites. In addition, neither we nor our affiliates operate or control
              in any respect any information, products, or services that third
              parties may provide on or through the Site or on websites linked to
              by us on the Site.
            </p>
            <p>
              If applicable, any opinions, advice, statements, services, offers,
              or other information or content expressed or made available by third
              parties, including information providers, are those of the
              respective authors or distributors, and not Dellep. Neither Dellep
              nor any third-party provider of information guarantees the accuracy,
              completeness, or usefulness of any content. Furthermore, Dellep
              neither endorses nor is responsible for the accuracy and reliability
              of any opinion, advice, or statement made on any of the Sites by
              anyone other than an authorised Dellep representative while acting
              in their official capacity.
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              The information, products, and services offered on or through the
              Site and by Dellep and any third-party sites are provided &quot;as
              is&quot; and without warranties of any kind either express or
              implied. To the fullest extent permissible pursuant to applicable
              law, including the{" "}
              <em>Civil Code of Qu&eacute;bec</em> and the{" "}
              <em>Consumer Protection Act</em> (Quebec), we disclaim all
              warranties, express or implied, including, but not limited to,
              implied warranties of merchantability and fitness for a particular
              purpose. We do not warrant that the Site or any of its functions
              will be uninterrupted or error-free, that defects will be corrected,
              or that any part of this Site, or the servers that make it
              available, are free of viruses or other harmful components.
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              We do not warrant or make any representations regarding the use or
              the results of the use of the Site or materials on this Site or on
              third-party sites in terms of their correctness, accuracy,
              timeliness, reliability, or otherwise.
            </p>
            <p>
              You agree at all times to defend, indemnify, and hold harmless
              Dellep, its affiliates, their successors, transferees, assignees,
              and licensees and their respective parent and subsidiary companies,
              agents, associates, officers, directors, shareholders, and employees
              of each from and against any and all claims, causes of action,
              damages, liabilities, costs, and expenses, including legal fees and
              expenses, arising out of or related to your breach of any
              obligation, warranty, representation, or covenant set forth herein.
            </p>

            {/* 6. Online Commerce */}
            <h2 id="online-commerce">6. Online Commerce</h2>
            <p>
              Certain sections of the Site may allow you to purchase different
              types of products and services online that are provided by third
              parties. We are not responsible for the quality, accuracy,
              timeliness, reliability, or any other aspect of these products and
              services. If you make a purchase from a merchant on the Site or on a
              site linked to by the Site, the information obtained during your
              visit to that merchant&apos;s online store or site, and the
              information that you give as part of the transaction, such as your
              credit card number and contact information, may be collected by both
              the merchant and us. A merchant may have privacy and data collection
              practices that are different from ours. We have no responsibility or
              liability for these independent policies.
            </p>
            <p>
              In addition, when you purchase products or services on or through
              the Site, you may be subject to additional terms and conditions that
              specifically apply to your purchase or use of such products or
              services. You release us and our affiliates from any damages that
              you incur, and agree not to assert any claims against us or them,
              arising from your purchase or use of any products or services made
              available by third parties through the Site.
            </p>
            <p>
              Your participation, correspondence, or business dealings with any
              third party found on or through our Site, regarding payment and
              delivery of specific goods and services, and any other terms,
              conditions, representations, or warranties associated with such
              dealings, are solely between you and such third party. You agree
              that Dellep shall not be responsible or liable for any loss, damage,
              or other matters of any sort incurred as the result of such
              dealings.
            </p>
            <p>
              You agree to be financially responsible for all purchases made by
              you or someone acting on your behalf through the Site. You agree to
              use the Site and to purchase services or products through the Site
              for legitimate, non-commercial purposes only. You also agree not to
              make any purchases for speculative, false, or fraudulent purposes or
              for the purpose of anticipating demand for a particular product or
              service. You agree to only purchase goods or services for yourself
              or for another person for whom you are legally permitted to do so.
              When making a purchase for a third party that requires you to submit
              the third party&apos;s personal information to us or a merchant, you
              represent that you have obtained the express consent of such third
              party to provide such third party&apos;s personal information.
            </p>
            <p>
              Your purchase is for personal use only. Sharing of purchases is not
              permitted and will be considered unauthorised, an infringing use of
              our copyrighted material, and may subject violators to liability. If
              payment for a course is declined, our system will automatically
              disable access to our premium materials. Once the billing issue is
              resolved, we will restore access.
            </p>

            {/* 7. Interactive Features */}
            <h2 id="interactive-features">7. Interactive Features</h2>
            <p>
              This Site may include a variety of features, such as bulletin
              boards, web logs, chat rooms, and email services, which allow
              feedback to us and real-time interaction between users, and other
              features which allow users to communicate with others.
              Responsibility for what is posted on bulletin boards, web logs, chat
              rooms, and other public posting areas on the Site, or sent via any
              email services on the Site, lies with each user &mdash; you alone
              are responsible for the material you post or send. We do not control
              the messages, information, or files that you or others may provide
              through the Site. It is a condition of your use of the Site that you
              do not:
            </p>
            <ul>
              <li>Restrict or inhibit any other user from using and enjoying the Site.</li>
              <li>
                Use the Site to impersonate any person or entity, or falsely state
                or otherwise misrepresent your affiliation with a person or
                entity.
              </li>
              <li>
                Interfere with or disrupt any servers or networks used to provide
                the Site or its features, or disobey any requirements, procedures,
                policies, or regulations of the networks we use to provide the
                Site.
              </li>
              <li>
                Use the Site to instigate or encourage others to commit illegal
                activities or cause injury or property damage to any person.
              </li>
              <li>
                Gain unauthorised access to the Site, or any account, computer
                system, or network connected to this Site, by means such as
                hacking, password mining, or other illicit means.
              </li>
              <li>
                Obtain or attempt to obtain any materials or information through
                any means not intentionally made available through this Site.
              </li>
              <li>
                Use the Site to post or transmit any unlawful, threatening,
                abusive, libellous, defamatory, obscene, vulgar, pornographic,
                profane, or indecent information of any kind, including without
                limitation any transmissions constituting or encouraging conduct
                that would constitute a criminal offence, give rise to civil
                liability, or otherwise violate any local, provincial, federal, or
                international law.
              </li>
              <li>
                Use the Site to post or transmit any information, software, or
                other material that violates or infringes upon the rights of
                others, including material that is an invasion of privacy or
                publicity rights or that is protected by copyright, trademark, or
                other proprietary right, or derivative works with respect thereto,
                without first obtaining permission from the owner or rights
                holder.
              </li>
              <li>
                Use the Site to post or transmit any information, software, or
                other material that contains a virus or other harmful component.
              </li>
              <li>
                Use the Site to post, transmit, or in any way exploit any
                information, software, or other material for commercial purposes,
                or that contains advertising.
              </li>
              <li>
                Use the Site to advertise or solicit to anyone to buy or sell
                products or services, or to make donations of any kind, without
                our express written approval.
              </li>
              <li>
                Gather for marketing purposes any email addresses or other
                personal information that has been posted by other users of the
                Site.
              </li>
            </ul>
            <p>
              Dellep may host message boards, chats, and other public forums on
              its Sites. Any user failing to comply with these Terms and
              Conditions may be expelled from and refused continued access to the
              message boards, chats, or other public forums. Dellep or its
              designated agents may remove or alter any user-created content at
              any time for any reason.
            </p>
            <p>
              Dellep expressly disclaims all responsibility and endorsement and
              makes no representation as to the validity of any opinion, advice,
              information, or statement made or displayed in these forums by third
              parties, nor are we responsible for any errors or omissions in such
              postings, or for hyperlinks embedded in any messages. Under no
              circumstances will we, our affiliates, suppliers, or agents be
              liable for any loss or damage caused by your reliance on information
              obtained through these forums.
            </p>
            <p>
              Dellep has no obligation whatsoever to monitor any of the content or
              postings on the message boards, chat rooms, or other public forums
              on the Sites. However, you acknowledge and agree that we have the
              absolute right to monitor the same at our sole discretion. In
              addition, we reserve the right to alter, edit, refuse to post, or
              remove any postings or content, in whole or in part, for any reason
              and to disclose such materials and the circumstances surrounding
              their transmission to any third party in order to satisfy any
              applicable law, regulation, legal process, or governmental request
              and to protect ourselves, our clients, sponsors, users, and
              visitors.
            </p>
            <p>
              We occasionally include access to an online community as part of our
              programmes. We reserve the right to remove anyone at any time. We
              rarely do this, but we want to let you know how seriously we take
              our communities.
            </p>

            {/* 8. Registration */}
            <h2 id="registration">8. Registration</h2>
            <p>
              To access certain features of the Site, we may ask you to provide
              certain demographic information including your gender, year of
              birth, postal code, and country. In addition, if you elect to
              sign-up for a particular feature of the Site, such as chat rooms,
              web logs, or bulletin boards, you may also be asked to register with
              us on the form provided and such registration may require you to
              provide personally identifiable information such as your name and
              email address. You agree to provide true, accurate, current, and
              complete information about yourself as prompted by the Site&apos;s
              registration form. If we have reasonable grounds to suspect that
              such information is untrue, inaccurate, or incomplete, we have the
              right to suspend or terminate your account and refuse any and all
              current or future use of the Site (or any portion thereof). Our use
              of any personally identifiable information you provide to us as part
              of the registration process is governed by the terms of our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            {/* 9. Passwords */}
            <h2 id="passwords">9. Passwords</h2>
            <p>
              To use certain features of the Site, you will need a username and
              password, which you will receive through the Site&apos;s
              registration process. You are responsible for maintaining the
              confidentiality of the password and account, and are responsible for
              all activities (whether by you or by others) that occur under your
              password or account. You agree to notify us immediately of any
              unauthorised use of your password or account or any other breach of
              security, and to ensure that you exit from your account at the end
              of each session. We cannot and will not be liable for any loss or
              damage arising from your failure to protect your password or account
              information.
            </p>

            {/* 10. Limitation of Liability */}
            <h2 id="limitation-of-liability">10. Limitation of Liability</h2>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              Under no circumstances, including, but not limited to, negligence,
              shall we, our subsidiary and parent companies, or affiliates be
              liable for any direct, indirect, incidental, special, or
              consequential damages that result from the use of, or the inability
              to use, the Site, including our messaging, blogs, comments of
              others, emails, products, or services, or third-party materials,
              products, or services made available through the Site or by us in
              any way, even if we are advised beforehand of the possibility of
              such damages. (Because some provinces do not allow the exclusion or
              limitation of certain categories of damages, the above limitation
              may not apply to you. In such provinces, our liability and the
              liability of our subsidiary and parent companies or affiliates is
              limited to the fullest extent permitted by such provincial law.)
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              You specifically acknowledge and agree that we are not liable for
              any defamatory, offensive, or illegal conduct of any user. If you
              are dissatisfied with the Site, any materials, products, or services
              on the Site, or with any of the Site&apos;s Terms and Conditions,
              your sole and exclusive remedy is to discontinue using the Site and
              the products, services, and/or materials.
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              Dellep is not an investment advisory service, is not an investment
              adviser, and does not provide personalised financial advice or act
              as a financial advisor.
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              We exist for educational purposes only, and the materials and
              information contained herein and in our products and services are
              for general informational purposes only. None of the information
              provided by us is intended as investment, tax, accounting, or legal
              advice, as an offer or solicitation of an offer to buy or sell, or
              as an endorsement, recommendation, or sponsorship of any company,
              security, or fund. Our information should not be relied upon for
              purposes of transacting in securities or other investments.
            </p>
            <p className="uppercase font-semibold text-xs leading-relaxed tracking-wide">
              We do not offer or provide tax, legal, or investment advice and you
              are responsible for consulting tax, legal, or financial
              professionals before acting on any information provided by us. This
              Site is continually under development and Dellep makes no warranty
              of any kind, implied or express, as to its accuracy, completeness,
              or appropriateness for any purpose. You acknowledge and agree that
              no representation has been made by Dellep or its affiliates and
              relied upon as to the future income, expenses, sales volume, or
              potential profitability that may be derived from the participation
              in any programme.
            </p>

            {/* 11. Termination */}
            <h2 id="termination">11. Termination</h2>
            <p>
              We may cancel or terminate your right to use the Site or any part of
              the Site at any time without notice. In the event of cancellation or
              termination, you are no longer authorised to access the part of the
              Site affected by such cancellation or termination. The restrictions
              imposed on you with respect to material downloaded from the Site,
              and the disclaimers and limitations of liabilities set forth in
              these Terms and Conditions, shall survive.
            </p>

            {/* 12. Refund Policy */}
            <h2 id="refund-policy">12. Refund Policy</h2>
            <p>
              Your purchase of a product or service or ticket to an event may or
              may not provide for any refund. Each specific product, service,
              event, or course will specify its own refund policy.
            </p>

            {/* 13. Copyright */}
            <h2 id="copyright">13. Copyright</h2>
            <p>
              If you believe in good faith that materials hosted by Dellep
              infringe your copyright, you, or your agent, may send to Dellep a
              notice requesting that the material be removed or access to it be
              blocked. Similarly, if you believe in good faith that a notice of
              copyright infringement has been wrongly filed against you, you may
              send us a counter-notice. All notices and counter-notices must meet
              the applicable requirements under the <em>Copyright Act</em>{" "}
              (R.S.C., 1985, c. C-42) and applicable Canadian copyright law.
              Dellep&apos;s Copyright Agent for notice of claims of copyright
              infringement or counter-notices can be reached at:{" "}
              <a href="mailto:contact@dellep.com">contact@dellep.com</a>.
            </p>

            {/* 14. Governing Law */}
            <h2 id="governing-law">
              14. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the Province of Quebec and the federal
              laws of Canada applicable therein, without regard to conflict of law
              principles. Any dispute arising out of or in connection with these
              Terms and Conditions, including any question regarding their
              existence, validity, or termination, shall be submitted to the
              exclusive jurisdiction of the courts of the Province of Quebec,
              judicial district of Montreal.
            </p>
            <p>
              This Agreement shall be binding upon and inure to the benefit of
              Dellep and our respective assigns, successors, heirs, and legal
              representatives. Neither this Agreement nor any rights hereunder may
              be assigned without the prior written consent of Dellep.
              Notwithstanding the foregoing, all rights and obligations under this
              Agreement may be freely assigned by Dellep to any affiliated entity
              or any of its wholly owned subsidiaries.
            </p>
            <p>
              If any provision of this agreement shall be unlawful, void, or for
              any reason unenforceable, then that provision shall be deemed
              severable from this agreement and shall not affect the validity and
              enforceability of any remaining provisions.
            </p>

            {/* 15. Disclaimer and Changes */}
            <h2 id="disclaimer-changes">15. Disclaimer and Changes</h2>
            <p>
              Although it is highly unlikely, this policy may be changed at any
              time at our discretion. If we should update this policy, we will
              post the updates to this page on our website. If you have any
              questions or concerns regarding these Terms and Conditions, please
              direct them to:{" "}
              <a href="mailto:contact@dellep.com">contact@dellep.com</a>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
