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
        <p className="text-sm text-gray-500 mb-10">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              AttractionsNepal ("we", "our", "us") operates the website <strong>attractionsnepal.com</strong>.
              This Privacy Policy explains what information we collect, how we use it, and your rights regarding it.
              By using this website you agree to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
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
              This data is collected in aggregate via analytics tools (such as Google Analytics) and is not
              linked to any personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              This website uses cookies for analytics and to support affiliate tracking (see Section 5).
              You can disable cookies in your browser settings. Doing so may affect some website functionality.
              We do not use cookies to store personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How We Use Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Any data we collect is used solely to understand how visitors use the website and to improve content.
              We do not sell, rent, or share your data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Affiliate Links & Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              This website participates in affiliate programs including Viator and GetYourGuide. When you click
              an affiliate link and make a purchase, we may earn a small commission at no additional cost to you.
              These third-party services have their own privacy policies which govern your interactions with them.
              We are not responsible for the privacy practices of any third-party websites or services linked
              from this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              This website is not directed at children under the age of 13. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated revision date. Continued use of the website after changes constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@attractionsnepal.com" className="text-primary-700 hover:underline">
                hello@attractionsnepal.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
