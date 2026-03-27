import Link from 'next/link';
import { getPostsByAudience } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { HBarChart, DonutChart } from '@/components/Charts';

export const metadata = {
  title: 'For Media — Security Ireland',
  description: 'Quotable findings, data for broadcast, and rapid-response analysis.',
};

/* ── Shared styles ── */
const p = {
  fontFamily: 'var(--font-serif)',
  fontSize: '15px',
  color: 'var(--color-graphite)',
  lineHeight: 1.8,
  maxWidth: '620px',
  marginBottom: '16px',
} as const;

const sectionLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-terracotta)',
  margin: '32px 0 8px',
};

export default async function ForMedia() {
  const posts = await getPostsByAudience('media');

  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          For Media
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '600px' }}>
          Quotable research, formatted for deadline
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
          Every publication includes key findings designed for citation. Data sheets are formatted for broadcast graphics. For press enquiries or commentary requests, contact <a href="mailto:info@securityireland.ie" style={{ color: 'var(--color-terracotta)' }}>info@securityireland.ie</a>.
        </p>

        {/* ══════════════════════════════════════
            FRAMING: NEUTRALITY & SECURITY COOPERATION
           ══════════════════════════════════════ */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionLabel}>Getting the Framing Right</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px' }}>
            Neutrality, non-alignment, and security cooperation are not the same thing
          </h2>
          <p style={p}>
            Most reporting on Irish defence frames every development as a step towards or away from &ldquo;neutrality.&rdquo; This framing misrepresents what is actually happening. Ireland is not abandoning neutrality. It is building the security capability that non-alignment has always required in other countries but that Ireland has historically avoided.
          </p>
          <p style={p}>
            The correct framework has three distinct concepts that are often conflated in coverage:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {[
              {
                term: 'Military neutrality',
                def: 'Ireland is not a member of a military alliance. This has not changed and no serious political actor is proposing that it should.',
              },
              {
                term: 'Security cooperation',
                def: 'Ireland participates in EU defence frameworks (PESCO, CSDP missions, CISE), bilateral cooperation with the UK (Cork MoU), and NATO partnership programmes (ITPP). None of these require alliance membership. All are compatible with non-alignment.',
              },
              {
                term: 'Defence capability',
                def: 'Ireland is investing in its own military capacity — radar, naval vessels, cyber defence, intelligence reform. This is not a move towards NATO. Every neutral state in Europe (Switzerland, Austria, Finland pre-2023, Sweden pre-2024) invested heavily in defence precisely because they had no alliance to fall back on.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                backgroundColor: 'var(--color-parchment)',
                borderLeft: '3px solid var(--color-fern)',
                borderRadius: '2px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  {item.term}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: 0 }}>
                  {item.def}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            padding: '20px 24px',
            backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 6%, var(--color-cream))',
            borderLeft: '3px solid var(--color-terracotta)',
            borderRadius: '2px',
            marginBottom: '20px',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px', fontWeight: 600 }}>
              The comparative point
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.7, margin: 0, maxWidth: '580px' }}>
              Switzerland spends 0.7% of GDP on defence and maintains universal conscription. Austria spends 0.8% and operates Eurofighter jets. Finland, before joining NATO in 2023, spent 1.5% and maintained a wartime strength of 280,000. In every comparable case, neutrality was understood as <em>requiring</em> defence investment, not as a reason for its absence. Ireland is the outlier &mdash; not because it is non-aligned, but because it treated non-alignment as grounds for minimal capability.
            </p>
          </div>

          <p style={p}>
            When reporting on Irish defence developments, the question is not &ldquo;is Ireland abandoning neutrality?&rdquo; The question is whether Ireland is finally building the capability that non-alignment demands. For the full analytical framework, see <Link href="/publications/neutrality-institutional-architecture" style={{ color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)' }}>Neutrality as Institutional Architecture</Link>.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />

        {/* ══════════════════════════════════════
            KEY STATS
           ══════════════════════════════════════ */}
        <div style={{ marginBottom: '48px', marginTop: '32px' }}>
          <div style={sectionLabel}>Key Figures</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Ireland&apos;s Defence at a Glance
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Key figures for context in reporting on Irish and European security.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {[
              { figure: '7,300', label: 'Defence Forces personnel' },
              { figure: '0.2%', label: 'of GDP on defence' },
              { figure: '880k km\u00b2', label: 'EEZ to patrol' },
              { figure: '7', label: 'PESCO projects' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '16px', borderLeft: '3px solid var(--color-fern)', backgroundColor: 'rgba(61,107,79,0.05)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: 'var(--color-forest)' }}>{s.figure}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Defence Forces Strength */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Defence Forces: Actual vs Establishment Strength
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Current staffing levels against the government&apos;s own establishment targets.
          </p>
          <HBarChart data={[
            { label: 'Army', value: 72, max: 100 },
            { label: 'Naval Service', value: 58, max: 100 },
            { label: 'Air Corps', value: 81, max: 100 },
            { label: 'Reserve Forces', value: 34, max: 100 },
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '16px' }}>
            % of establishment strength filled. Source: Defence Forces Annual Report, 2024
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Latest for Press</div>
        <div>
          {posts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic', padding: '32px 0' }}>Publications coming soon.</p>
        )}
      </section>
      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
