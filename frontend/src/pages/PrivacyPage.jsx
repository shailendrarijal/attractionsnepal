import PageSeo from '../components/PageSeo'

export default function PrivacyPage() {
  return (
    <>
      <PageSeo
        title="Privacy Policy — AttractionsNepal"
        description="Privacy policy for AttractionsNepal.com"
        canonicalPath="/privacy"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>AttractionsNepal</strong> is a trading name of <strong>Nashtech Solutions</strong>.
              This website (<strong>attractionsnepal.com</strong>) is operated by Nashtech Solutions ("we", "our", "us").
              This Privacy Policy explains what personal information we collect, why we collect it, how we use it,
              and your rights in relation to it. By using this website you agree to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>

            <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2a. Automatically collected data</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              We do not require you to create an account or provide personal information to browse this website.
              We may automatically collect limited technical data including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>General geographic region (country/city level via IP address)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              This data is collected in aggregate via Google Analytics and is not linked to any personally
              identifiable information.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2b. Newsletter subscription</h3>
            <p className="text-gray-600 leading-relaxed">
              If you subscribe to our newsletter, we collect your <strong>email address</strong> and optionally
              your <strong>first name</strong>. This information is used solely to send you travel updates,
              new content notifications, and occasional promotional content related to Nepal travel. We do not
              share this information with third parties for their marketing purposes. You may unsubscribe at
              any time by clicking the unsubscribe link in any email we send.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2c. Trip planning &amp; checklist tools</h3>
            <p className="text-gray-600 leading-relaxed">
              When you use our trip planner or request a packing/travel checklist, we may collect your
              <strong> email address</strong> in order to send you the requested checklist or itinerary.
              This email address is used only to fulfil your request and is not added to any mailing list
              without your separate consent.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2d. Contact form</h3>
            <p className="text-gray-600 leading-relaxed">
              If you contact us via our contact form, we collect your <strong>name</strong>,
              <strong> email address</strong>, and the content of your message. This is used solely
              to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To send newsletters and travel updates (newsletter subscribers only)</li>
              <li>To deliver requested checklists and itineraries</li>
              <li>To respond to contact form enquiries</li>
              <li>To understand how visitors use the website and improve our content</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not sell, rent, or share your personal data with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              This website uses cookies for analytics (Google Analytics) and to support affiliate tracking
              (see Section 5). We also use Google AdSense, which may place cookies to personalise
              advertisements. You can disable cookies in your browser settings, though this may affect
              some website functionality. We do not use cookies to store personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Affiliate Links &amp; Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              This website participates in affiliate programs including GetYourGuide and Viator. When you
              click an affiliate link and make a purchase, we may earn a small commission at no additional
              cost to you.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              We also use the following third-party services which may process data on our behalf:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li><strong>Google Analytics</strong> — website analytics</li>
              <li><strong>Google AdSense</strong> — display advertising</li>
              <li><strong>Resend</strong> — transactional email delivery</li>
              <li><strong>Supabase</strong> — database and backend services</li>
              <li><strong>Gumroad</strong> — digital product sales (governed by Gumroad's own privacy policy)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Each of these services operates under its own privacy policy. We are not responsible for the
              privacy practices of any third-party websites or services linked from this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              Newsletter subscriber emails are retained until you unsubscribe. Contact form messages are
              retained for up to 12 months. Automatically collected analytics data is retained according
              to Google Analytics' standard retention settings (14 months by default).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time (e.g. unsubscribe from the newsletter)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise any of these rights, contact us at the address in Section 9.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              This website is not directed at children under the age of 13. We do not knowingly collect
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with
              an updated revision date. Continued use of the website after changes constitutes acceptance
              of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about this Privacy Policy or to exercise your data rights, please contact:
            </p>
            <div className="mt-3 text-gray-600 space-y-1">
              <p><strong>Nashtech Solutions</strong> (trading as AttractionsNepal)</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@attractionsnepal.com" className="text-primary-700 hover:underline">
                  hello@attractionsnepal.com
                </a>
              </p>
              <p>Website: <a href="https://attractionsnepal.com" className="text-primary-700 hover:underline">attractionsnepal.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
