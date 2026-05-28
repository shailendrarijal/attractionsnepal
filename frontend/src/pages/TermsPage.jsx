import PageSeo from '../components/PageSeo'

export default function TermsPage() {
  return (
    <>
      <PageSeo
        title="Terms & Conditions — AttractionsNepal"
        description="Terms and conditions for using AttractionsNepal.com"
        canonicalPath="/terms"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using <strong>attractionsnepal.com</strong> ("the website"), you agree to be bound
              by these Terms &amp; Conditions. If you do not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              All content on this website — including descriptions of places, trekking routes, cultural
              information, opening hours, entry fees, contact details, travel guides, and blog articles —
              is provided <strong>for general informational purposes only</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              While we make every reasonable effort to ensure the accuracy of information published on this
              website, we <strong>make no warranties or representations</strong>, express or implied, as to
              the completeness, accuracy, reliability, suitability, or availability of any information.
              Travel-related information such as entry fees, opening times, accessibility, and contact details
              can change without notice.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong>You are solely responsible for independently verifying all information before
              making any travel plans, bookings, or decisions based on content found on this website.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              AttractionsNepal, its owners, contributors, and affiliates shall not be held liable for
              any loss, injury, inconvenience, or damage — including but not limited to financial loss,
              personal injury, or reputational harm — arising directly or indirectly from reliance on
              information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Travel Risks</h2>
            <p className="text-gray-600 leading-relaxed">
              Travel to Nepal, including trekking, adventure activities, and visits to remote areas, carries
              inherent risks including altitude sickness, difficult terrain, and rapidly changing weather
              conditions. Nothing on this website constitutes professional travel, safety, medical, or legal
              advice. Always consult qualified professionals and relevant authorities before undertaking any
              travel activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by applicable law, AttractionsNepal and its operators expressly
              disclaim all liability for any direct, indirect, incidental, special, consequential, or
              exemplary damages arising from your use of, or inability to use, this website or any content
              found on it. This includes damages resulting from errors, omissions, interruptions, or
              inaccuracies in the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Affiliate Links</h2>
            <p className="text-gray-600 leading-relaxed">
              This website contains affiliate links to third-party services such as Viator and GetYourGuide.
              We may earn a commission if you make a purchase through these links, at no additional cost to you.
              We only link to services we believe may be useful to travellers, but we do not endorse, control,
              or take responsibility for any third-party service, its pricing, availability, or conduct.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All original written content, design, and code on this website is the property of
              AttractionsNepal unless otherwise stated. Images sourced from Wikimedia Commons are used
              under their respective Creative Commons licences. You may not reproduce, redistribute,
              or commercially exploit any content from this website without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              This website may contain links to external websites. These links are provided for your
              convenience only. We have no control over the content of those sites and accept no
              responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms &amp; Conditions at any time. Changes take effect
              immediately upon posting to this page. Continued use of the website constitutes your acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of Australia. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of Australia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding these Terms, contact <strong>Nashtech Solutions</strong> (trading
              as AttractionsNepal) at{' '}
              <a href="mailto:shailendra@nashtech.com.au" className="text-primary-700 hover:underline">
                shailendra@nashtech.com.au
              </a>.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
