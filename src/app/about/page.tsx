export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink mb-6">
          About Security Ireland
        </h1>
        <hr className="rule-accent mb-12" />

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-graphite font-sans leading-relaxed mb-4">
            Security Ireland is an independent think tank dedicated to providing rigorous,
            evidence-based analysis of security and defence policy. We work to inform public
            and policy debate on the security challenges and opportunities facing Ireland
            in a rapidly changing strategic environment.
          </p>
          <p className="text-lg text-graphite font-sans leading-relaxed">
            Our focus spans military strategy, security policy, European defence cooperation,
            and Ireland's evolving role in regional security. We engage with policymakers,
            media, academic institutions, and the broader public to advance understanding
            of these critical issues.
          </p>
        </section>

        {/* Approach Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-graphite font-sans leading-relaxed mb-4">
            We believe that quality analysis requires independence, rigour, and engagement
            with diverse perspectives. Our work is grounded in:
          </p>
          <ul className="space-y-3 text-lg text-graphite font-sans leading-relaxed ml-6">
            <li>• <strong>Independence:</strong> We operate without political or corporate affiliation.</li>
            <li>• <strong>Evidence:</strong> Our analysis draws on primary sources, interviews with experts, and rigorous research.</li>
            <li>• <strong>Clarity:</strong> We communicate complex issues in accessible language for both specialists and general audiences.</li>
            <li>• <strong>Engagement:</strong> We actively seek dialogue with policymakers, practitioners, and international peers.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-parchment p-6">
                <div className="h-32 bg-rule rounded mb-4 flex items-center justify-center text-stone font-mono text-sm">
                  Photo placeholder
                </div>
                <h3 className="font-serif font-bold text-ink mb-1">Team Member {i}</h3>
                <p className="text-sm text-stone font-mono mb-3">Position</p>
                <p className="text-graphite font-sans text-sm leading-relaxed">
                  Brief biography and area of expertise in security and defence policy.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 border-t border-rule pt-12">
          <h2 className="text-2xl font-serif font-bold text-ink mb-6">
            Get in Touch
          </h2>
          <div className="space-y-4 text-graphite font-sans">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@securityireland.ie" className="text-terracotta hover:text-copper transition-colors">
                hello@securityireland.ie
              </a>
            </p>
            <p>
              <strong>Location:</strong> Dublin, Ireland
            </p>
            <p>
              We welcome enquiries, collaboration opportunities, and speaking invitations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
