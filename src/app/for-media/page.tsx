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

        {/* ══════════════════════════════════════
            HOW IRISH SECURITY IS ORGANISED
           ══════════════════════════════════════ */}
        <div style={{ marginBottom: '48px', marginTop: '32px' }}>
          <div style={sectionLabel}>How Irish Security Is Organised</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px' }}>
            The landscape at a glance
          </h2>
          <p style={p}>
            Ireland&rsquo;s security architecture is split across multiple departments and agencies with no single coordinating authority. Understanding who does what &mdash; and where the gaps sit &mdash; is essential context for any defence or security story.
          </p>

          {/* ── Civilian oversight tier ── */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '10px', marginTop: '24px', fontWeight: 600 }}>
            Civilian Oversight
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            {/* Taoiseach row */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: 'var(--color-forest)',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-cream)', letterSpacing: '0.5px' }}>Taoiseach</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-sage)', marginTop: '2px' }}>Chairs the National Security Council</div>
              </div>
            </div>
            {/* Two departments row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.5px' }}>Dept of Defence</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '4px' }}>
                  Minister for Defence &middot; Secretary General. Defence policy, procurement, civil-military interface.
                </div>
              </div>
              <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.5px' }}>Dept of Justice</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '4px' }}>
                  Minister for Justice. Garda oversight, NCSC (transferred), immigration security.
                </div>
              </div>
            </div>
            {/* Coordination bodies */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ padding: '10px 16px', backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 5%, var(--color-cream))', borderLeft: '3px solid var(--color-copper)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-copper)', letterSpacing: '0.5px' }}>National Security Council</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>
                  Ministerial-level body for strategic coordination. Announced 2025 &mdash; not yet on statutory footing.
                </div>
              </div>
              <div style={{ padding: '10px 16px', backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 5%, var(--color-cream))', borderLeft: '3px solid var(--color-copper)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-copper)', letterSpacing: '0.5px' }}>National Security Secretariat</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>
                  Threat analysis &amp; intelligence synthesis. Replaced NSAC (est. 2019) as standalone body.
                </div>
              </div>
            </div>
          </div>

          {/* ── Defence Forces tier ── */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '10px', fontWeight: 600 }}>
            Defence Forces &mdash; Óglaigh na hÉireann
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <div style={{
              padding: '12px 16px',
              backgroundColor: 'var(--color-forest)',
              borderRadius: '4px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-cream)', letterSpacing: '0.5px' }}>Chief of Staff</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-sage)', marginTop: '2px' }}>DFHQ, Newbridge, Co. Kildare &middot; ~7,500 permanent personnel (establishment: 9,739)</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}>
              {[
                { name: 'Army', detail: '~5,400 personnel. 1 & 2 Brigade, DFTS.' },
                { name: 'Naval Service', detail: '~900 personnel. Based at Haulbowline, Co. Cork.' },
                { name: 'Air Corps', detail: '~750 personnel. Casement Aerodrome, Baldonnel.' },
                { name: 'IRL SOF', detail: 'Special Operations Force (formerly Army Ranger Wing). Restructuring underway.' },
              ].map((svc, i) => (
                <div key={i} style={{ padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.5px' }}>{svc.name}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>{svc.detail}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-sage)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-sage)', letterSpacing: '0.5px' }}>Reserve Defence Force</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>Army Reserve (~1,470), Naval Service Reserve (~130), First Line Reserve (~200). Total ~1,800 against a 4,000 target.</div>
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-sage)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-sage)', letterSpacing: '0.5px' }}>G2 &mdash; Military Intelligence</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>Signals intelligence, threat assessment, counter-intelligence. Reports to DCOS Operations.</div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '24px' }} />

          {/* ── Internal Security & Intelligence tier ── */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '10px', fontWeight: 600 }}>
            Internal Security &amp; Intelligence
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <div style={{
              padding: '12px 16px',
              backgroundColor: 'var(--color-forest)',
              borderRadius: '4px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-cream)', letterSpacing: '0.5px' }}>Garda Commissioner</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-sage)', marginTop: '2px' }}>Head of An Garda Síochána &mdash; Ireland&rsquo;s national police service</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
              {[
                { name: 'GNCSIS', detail: 'Crime & Security Intelligence Service. Counter-terrorism, counter-intel, organised crime intelligence.' },
                { name: 'Special Detective Unit', detail: 'Political and state security investigations.' },
                { name: 'Emergency Response Unit', detail: 'Armed tactical response and close protection.' },
              ].map((unit, i) => (
                <div key={i} style={{ padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.5px' }}>{unit.name}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>{unit.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '24px' }} />

          {/* ── Cyber & Infrastructure tier ── */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '10px', fontWeight: 600 }}>
            Cyber &amp; Critical Infrastructure
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', marginBottom: '24px' }}>
            {[
              { name: 'NCSC', detail: 'National Cyber Security Centre. National incident response. Transferring to Dept of Justice.' },
              { name: 'Office of Emergency Planning', detail: 'Within Dept of Defence. Cross-government emergency coordination.' },
              { name: 'Revenue Customs Service', detail: 'Maritime interdiction, customs cutters, joint ops with Naval Service.' },
            ].map((body, i) => (
              <div key={i} style={{ padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', letterSpacing: '0.5px' }}>{body.name}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.5, marginTop: '3px' }}>{body.detail}</div>
              </div>
            ))}
          </div>

          {/* ── Known structural gaps callout ── */}
          <div style={{
            padding: '20px 24px',
            backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 6%, var(--color-cream))',
            borderLeft: '3px solid var(--color-terracotta)',
            borderRadius: '2px',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '10px', fontWeight: 600 }}>
              Known Structural Gaps
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {[
                { gap: 'No National Security Strategy', detail: 'Originally due 2021. Still unpublished.' },
                { gap: 'No standalone intelligence agency', detail: 'Intel, counter-terrorism & armed ops blended within Garda GNCSIS.' },
                { gap: 'No primary surveillance radar', detail: 'Only western European state without it. Delivery expected 2028.' },
                { gap: 'Personnel crisis across branches', detail: '~77% of establishment filled. Naval Service at just 58%.' },
                { gap: 'Fragmented cyber governance', detail: 'NCSC changing departments; no single authority owns the full picture.' },
                { gap: 'Subsea infrastructure unmonitored', detail: '~25 cables make landfall with no dedicated surveillance capability.' },
              ].map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)', flexShrink: 0, marginTop: '5px' }} />
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', letterSpacing: '0.3px' }}>{g.gap}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)' }}> &mdash; {g.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '16px' }}>
            Structure reflects Commission on the Defence Forces implementation updates, NSAC restructuring, and Programme for Government 2025 commitments. Last updated March 2026.
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
