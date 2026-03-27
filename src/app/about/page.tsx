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
            Security Ireland is dedicated to research, analysis, and public engagement on Irish
            security and defence policy. We bridge the gap between technical security expertise
            and public discourse &mdash; producing rigorous, accessible work that informs
            policymakers, citizens, and the media.
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
            stakeholders understand the challenges and opportunities ahead.
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
            and PESCO, the post-Brexit UK&ndash;Ireland security relationship, maritime and
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
              <li><strong>Independence.</strong> We operate without political or corporate affiliation.</li>
              <li><strong>Rigour.</strong> We draw on primary sources, expert interviews, and peer review.</li>
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

          <div className="author-block">
            <img
              src="/images/sinead-osullivan.jpg"
              alt="Sin&eacute;ad O&rsquo;Sullivan"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                flexShrink: 0,
              }}
            />
            <div>
              <div className="author-name">Sin&eacute;ad O&rsquo;Sullivan</div>
              <div className="author-role">Director</div>
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
                Founding director of Security Ireland. Two decades of experience in global aerospace, defense, and security policy research.
              </p>
            </div>
          </div>
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
            <a href="mailto:info@securityireland.ie" style={{ color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '1px' }}>
              info@securityireland.ie
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
