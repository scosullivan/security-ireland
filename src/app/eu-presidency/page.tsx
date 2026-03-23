import Link from 'next/link';
import { getPostsByTopic } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { HBarChart, DonutChart, Timeline } from '@/components/Charts';

export const metadata = {
  title: 'EU Presidency 2026 — Security Ireland',
  description: 'What Ireland\'s EU Council Presidency means for European security — and what European security means for Ireland.',
};

export default async function EUPresidency() {
  const posts = await getPostsByTopic('eu-presidency');

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          EU Presidency 2026
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Ireland will chair European defence — as its lowest spender
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          From July 2026, Ireland holds the rotating Presidency of the EU Council. That means setting the agenda and chairing discussions on European defence policy — at a moment when the bloc is pushing for {'\u20ac'}800 billion in new defence investment. Ireland spends 0.2% of GDP on defence, the lowest in the EU.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '40px' }}>
          This page tracks two questions: what does Ireland&apos;s Presidency mean for European security, and what does European security mean for Ireland?
        </p>
      </section>

      {/* Key Numbers */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
          {[
            { value: '0.2%', label: 'Ireland\u2019s GDP on defence — lowest in EU' },
            { value: '\u20ac800bn', label: 'ReArm Europe target by 2030' },
            { value: 'Jul 2026', label: 'Presidency begins' },
            { value: '7 / 68', label: 'PESCO projects Ireland participates in' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px 16px', border: '1px solid var(--color-rule)', backgroundColor: 'var(--color-parchment)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', color: 'var(--color-stone)', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PILLAR 1: The Structural Irony === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>I — The Credibility Question</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Chairing the table you barely sit at
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          The Presidency is procedural — Ireland chairs meetings and brokers compromises, it doesn&apos;t set EU policy alone. But credibility matters. When 25 EU states are being asked to raise defence spending toward 3% of GDP, the country holding the gavel at 0.2% faces obvious questions about moral authority.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          Ireland&apos;s position is that defence is about more than budgets — it brings decades of peacekeeping experience, a pragmatic approach to hybrid threats, and strategic geography on the Atlantic. Whether that argument holds will depend on what Ireland actually delivers during its six months in the chair.
        </p>

        {/* Defence spending comparison */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Defence spending as % of GDP, 2025
          </h3>
          <HBarChart data={[
           value: 2    →  value: 0.2
value: 8    →  value: 0.8
value: 11   →  value: 1.1
value: 18   →  value: 1.8
value: 20   →  value: 2.0
value: 41   →  value: 4.1
value: 38   →  value: 3.8
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
            Values indexed to 5% scale (e.g. Greece 3.9%, Ireland 0.2%). Source: NATO, SIPRI, national estimates 2025.
          </p>
        </div>

        {/* Capability callout */}
        <div style={{ padding: '24px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px', marginTop: '32px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, marginBottom: '12px', maxWidth: '560px' }}>
            Ireland enters the Presidency with zero primary radar, zero air defence, and zero anti-submarine capability. The gap between current capacity and credible self-defence is the subject of the Commission on the Defence Forces report.
          </p>
          <Link
            href="/for-policymakers"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '1px' }}
          >
            See the full capability gap analysis →
          </Link>
        </div>
      </section>

      {/* === PILLAR 2: The Policy Agenda === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>II — The Agenda Ireland Must Steer</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Four files on the Presidency desk
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
          Regardless of Ireland&apos;s own spending, the Presidency must chair progress on the EU&apos;s active security dossiers. These are the four areas Ireland will need to move forward during its term.
        </p>

        {/* Agenda items */}
        <div style={{ display: 'grid', gap: '24px', marginBottom: '40px' }}>
          {[
            {
              num: '01',
              title: 'ReArm Europe implementation',
              body: 'The Commission\u2019s \u20ac800 billion defence investment plan needs Council-level agreement on joint procurement rules, burden-sharing, and industrial policy. Ireland chairs those negotiations.',
            },
            {
              num: '02',
              title: 'PESCO strategic review',
              body: 'The third strategic review of PESCO is due in late 2026. Ireland will chair discussions on project consolidation, binding commitments, and whether the 68-project portfolio is delivering results.',
            },
            {
              num: '03',
              title: 'Maritime surveillance cooperation',
              body: 'With 880,000 km\u00b2 of Atlantic EEZ and critical subsea cable infrastructure, Ireland has direct interest in EU maritime surveillance frameworks — and a credibility gap to close on its own coverage.',
            },
            {
              num: '04',
              title: 'Hybrid threats and cyber defence',
              body: 'Election interference, disinformation, critical infrastructure sabotage. The EU\u2019s hybrid threat response toolbox is under active development, and Ireland will need to chair its next iteration.',
            },
          ].map((item) => (
            <div key={item.num} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-terracotta)', flexShrink: 0, paddingTop: '3px' }}>
                {item.num}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                  {item.title}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, maxWidth: '520px', margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Maritime surveillance chart */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Ireland&apos;s EEZ surveillance coverage by domain
          </h3>
          <HBarChart data={[
            { label: 'Surface (AIS / radar)', value: 62 },
            { label: 'Aerial (Maritime patrol)', value: 34 },
            { label: 'Cyber / signals', value: 18 },
            { label: 'Subsurface (sonar)', value: 0 },
            { label: 'Subsea infrastructure', value: 0 },
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
            Persistent coverage of 880,000 km² EEZ. Source: Security Ireland estimates, Defence Forces capability reports 2025.
          </p>
        </div>

        {/* PESCO donut */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            PESCO participation
          </h3>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Ireland participates in 7 of 68 active PESCO projects, concentrated in training and maritime domains. The Presidency will chair the review of whether this portfolio is delivering.
          </p>
          <DonutChart
            label="7/68"
            segments={[
              { value: 7, color: 'var(--color-fern)', label: 'Irish participation (7 projects)' },
              { value: 61, color: 'var(--color-parchment)', label: 'Other PESCO projects (61)' },
            ]}
          />
        </div>
      </section>

      {/* === PILLAR 3: The Timeline === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>III — Follow Along</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          What happens when
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          Key dates in the security dimension of the Irish Presidency, from preparation through final conclusions.
        </p>
        <Timeline events={[
          { year: 'Jan 2026', text: 'Poland hands Presidency to Denmark. Ireland begins formal preparation for July handover.' },
          { year: 'Mar 2026', text: 'European Council sets defence spending targets. ReArm Europe programme details emerge.' },
          { year: 'Jun 2026', text: 'Final Foreign Affairs Council under Danish Presidency. Handover briefings to Irish team.' },
          { year: 'Jul 2026', text: 'Ireland assumes EU Council Presidency. First Foreign Affairs Council under Irish chair.', highlight: true },
          { year: 'Sep 2026', text: 'Informal Defence Ministers meeting, hosted by Ireland. Maritime surveillance and hybrid threats on the agenda.' },
          { year: 'Nov 2026', text: 'PESCO strategic review. Ireland chairs discussions on project consolidation and new commitments.' },
          { year: 'Dec 2026', text: 'European Council summit. Final Presidency conclusions on defence and security.', highlight: true },
        ]} />
      </section>

      {/* Related Publications */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Presidency Analysis</div>
        <div>
          {posts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic', padding: '32px 0' }}>
            Publications coming soon.
          </p>
        )}
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
