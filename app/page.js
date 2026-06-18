import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Never Miss a Visa Deadline Again
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Securely store your immigration documents, get automated renewal alerts,
            and follow step‑by‑step guides tailored to your visa type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </Link>
            <Link href="/profile" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How VisaDoc Tracker Helps You
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Document Vault</h3>
              <p className="text-gray-600">
                Upload and organize passports, visas, I‑20s, DS‑2019s, and more
                in a secure, encrypted cloud.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Expiration Alerts</h3>
              <p className="text-gray-600">
                Get email and in‑app notifications 30, 15, and 7 days before any
                document expires.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Renewal Guides</h3>
              <p className="text-gray-600">
                Step‑by‑step checklists for H‑1B, F‑1, J‑1, L‑1, and other visas,
                updated with the latest USCIS requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Take control of your immigration journey today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of immigrants who trust VisaDoc Tracker to stay
            compliant and stress‑free.
          </p>
          <Link href="/dashboard" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}