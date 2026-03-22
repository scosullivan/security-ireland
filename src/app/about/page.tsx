import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ padding: '56px 0 36px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              fontWeight: 400,
              color: 'var(--color-ink)',
              lineHeight: 1.2,
              marginBottom: '14px',
              maxWidth: '620px',
            }}
          >
            About Security <span style={{ fontStyle: 'italic', color: 'var(--color-fern)' }}>Ireland</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontStyle: 'italic',
              color: 'var(--color-graphite)',
              lineHeight: 1.6,
              maxWidth: '540px',
            }}
          >
            Independent research and analysis on Irish and European security policy.
          </p>
        </div>
        <hr className="rule-accent" />

        {/* Mission */}
        <section style={{ padding: '36px 0', borderBottom: '1px solid var(--color-rule)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '14px',
            }}
          >
            Our Mission
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: 'var(--color-graphite)',
              lineHeight: 1.85,
              marginBottom: '20px',
              maxWidth: '640px',
            }}
          >
            Security Ireland is an independent think tank dedicated to research, analysis, and
            public engagement on Irish security and defence policy. We bridge the gap between
            technical security expertise and public discourse — producing rigorous, accessible
            work that informs policymakers, media, and citizens.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: 'var(--color-graphite)',
              lineHeight: 1.85,
              maxWidth: '640px',
            }}
          >
            At a time of unprecedented change in Ireland&apos;s strategic environment, we help
            policymakers, journalists, and citizens understand the challenges and opportunities
            ahead. Because security policy is too important for slogans.
          </p>
        </section>

        {/* What We Do */}
        <section style={{ padding: '36px 0', borderBottom: '1px solid var(--color-rule)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '14px',
            }}
          >
            What We Do
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: 'var(--color-graphite)',
              lineHeight: 1.85,
              marginBottom: '20px',
              maxWidth: '640px',
            }}
          >
            We produce several types of publication, each designed for a different purpose and
            audience. Research papers provide deep, evidence-based analysis. Policy briefs
            distil that research into actionable recommendations. Explainers make complex
            institutions and processes accessible to a general audience. Data sheets offer
            quick-reference figures on Irish and European defence.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: 'var(--color-graphite)',
              lineHeight: 1.85,
              maxWidth: '640px',
            }}
          >
            Our focus spans military neutrality and non-alignment, EU defence integration
            and PESCO, the post-Brexit UK-Ireland security relationship, maritime and
            cyber security, hybrid threats, and Ireland&apos;s 2026 EU Council Presidency.
          </p>
        </section>

        {/* Principles */}
        <section style={{ padding: '36px 0', borderBottom: '1px solid var(--color-rule)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '14px',
            }}
          >
            Our Principles
          </div>
          <div className="key-findings">
            <ul>
              <li><strong>Independence.</strong> We operate without political or corporate affiliation. Our analysis follows the evidence.</li>
              <li><strong>Rigour.</strong> We draw on primary sources, expert interviews, and peer review. We show our working.</li>
              <li><strong>Clarity.</strong> Security policy affects everyone. We communicate complex issues in accessible language.</li>
              <li><strong>Engagement.</strong> We seek dialogue with policymakers, practitioners, media, and international peers.</li>
            </ul>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '36px 0', borderBottom: '1px solid var(--color-rule)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '24px',
            }}
          >
            Team
          </div>

          {/* Team member placeholders */}
          {[
            { name: '[Director Name]', role: 'Director', bio: 'Founding director of Security Ireland. Background in security policy research and public engagement.' },
            { name: '[Research Lead]', role: 'Research Fellow', bio: 'Leads long-form research on EU defence integration and Ireland\u2019s evolving security architecture.' },
            { name: '[Policy Lead]', role: 'Policy Analyst', bio: 'Focuses on translating research findings into actionable policy recommendations.' },
            { name: '[Communications]', role: 'Head of Communications', bio: 'Manages editorial output, media engagement, and the Security Ireland newsletter.' },
          ].map((member, i) => (
            <div key={i} className="author-block">
              <div className="author-avatar" />
              <div>
                <div className="author-name">{member.name}</div>
                <div className="author-role">{member.role}</div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '14px',
                    color: 'var(--color-graphite)',
                    lineHeight: 1.65,
                    marginTop: '6px',
                    maxWidth: '480px',
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section style={{ padding: '36px 0' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '14px',
            }}
          >
            Contact
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: 'var(--color-graphite)',
              lineHeight: 1.85,
              maxWidth: '640px',
              marginBottom: '20px',
            }}
          >
            We welcome enquiries from policymakers, journalists, researchers, and anyone
            interested in Irish security and defence policy. We&apos;re also open to collaboration,
            speaking invitations, and research partnerships.
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-stone)',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <a href="mailto:hello@securityireland.ie" style={{ color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '1px' }}>
              hello@securityireland.ie
            </a>
            <span>Dublin, Ireland</span>
          </div>
        </section>

      </div>
    </div>
  );
}
