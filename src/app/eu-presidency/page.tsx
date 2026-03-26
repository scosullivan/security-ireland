import Link from 'next/link';
import { getPostsByTopic } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { HBarChart, DonutChart, Timeline } from '@/components/Charts';
import PresidencyCountdown from '@/components/PresidencyCountdown';

export const metadata = {
  title: 'EU Presidency 2026 — Security Ireland',
  description: 'Ireland\'s EU Council Presidency is a six-month window to lock in a permanent European security role.',
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
          The rules being written now will persist for a decade. Ireland chairs the room where they are decided.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          From July to December 2026, Ireland holds the rotating Presidency of the Council of the European Union. This is not ceremonial. Ireland will set agendas, chair working groups, and broker compromises on the EU&apos;s defence and security architecture — at the moment Europe is rewriting it.
        </p>
      </section>

      {/* Countdown Timer */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 24px' }}>
        <PresidencyCountdown />
      </section>

      {/* Key Numbers — bold, colourful, readable */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {[
            { value: '6 months', label: 'July\u2013December 2026', color: 'var(--color-terracotta)' },
            { value: '3 domains', label: 'Maritime \u00b7 Subsea \u00b7 Cyber', color: 'var(--color-forest)' },
            { value: '\u20ac800bn', label: 'ReArm Europe target', color: 'var(--color-terracotta)' },
            { value: '5 briefs', label: 'Presidency Desk series', color: 'var(--color-forest)' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '24px 20px',
              backgroundColor: 'var(--color-parchment)',
              border: '2px solid ' + s.color,
              borderRadius: '4px',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 700, color: s.color, marginBottom: '8px' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-ink)', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === THE STRATEGY === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>The Strategy Thesis</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '12px' }}>
          Lead where geography is irreplaceable
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          Ireland cannot compete with France on fighter jets or Germany on tanks, but it does not need to. Ireland occupies three positions no other EU member state can replicate: 880,000 km{'\u00b2'} of Atlantic EEZ covering critical shipping lanes; the western terminus of the transatlantic subsea cable network carrying over 90% of EU{'\u2013'}US data traffic; and the European headquarters of most major American technology companies, making it a critical node in EU cyber resilience.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          The strategic objective is to lock in Ireland&apos;s role as a permanent contributor to European security in these three domains — so that when the Presidency ends, the institutional architecture recognises Ireland&apos;s contribution regardless of which government holds office in Dublin.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
          This is not altruism. A permanent role means Ireland is no longer vulnerable to the free-rider accusation. It means EU funding instruments recognise Ireland&apos;s contribution. It means bilateral and EU partners have institutional reasons to cooperate with Ireland beyond the goodwill of any single government.
        </p>

        {/* Three numbered domains — bold and clear */}
        <div style={{ display: 'grid', gap: '0' }}>
          {[
            {
              num: '1',
              domain: 'Maritime Surveillance',
              desc: '880,000 km\u00b2 of Atlantic EEZ. Nine naval vessels. No primary radar. No subsea monitoring. The largest unmonitored maritime domain in Europe — and the one through which Atlantic shipping and submarine traffic passes.',
              color: 'var(--color-forest)',
            },
            {
              num: '2',
              domain: 'Subsea Infrastructure',
              desc: 'Over 20 major subsea cables make landfall on Irish shores, carrying the vast majority of transatlantic data traffic. The Celtic Interconnector to France arrives by 2027. The Far North Fiber linking Ireland to Alaska, Japan, and Norway is planned for 2026.',
              color: 'var(--color-terracotta)',
            },
            {
              num: '3',
              domain: 'Cyber Resilience',
              desc: 'Nine of ten top US tech firms have their EU headquarters in Ireland. A successful cyber attack on Irish-hosted systems affects data integrity across the entire Union. The 2021 HSE ransomware attack demonstrated the vulnerability.',
              color: 'var(--color-forest)',
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              padding: '28px 24px',
              backgroundColor: 'var(--color-parchment)',
              borderLeft: '4px solid ' + item.color,
              borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                fontWeight: 700,
                color: item.color,
                lineHeight: 1,
                flexShrink: 0,
                width: '36px',
              }}>
                {item.num}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: item.color, marginBottom: '8px', fontWeight: 600 }}>
                  {item.domain}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, maxWidth: '520px' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PRESIDENCY DESK SERIES === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>Presidency Desk Series</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Five briefs. Four EU instruments. One strategy.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
          Each brief targets a different dimension of the EU architecture being shaped during Ireland&apos;s term. Together, they form a single integrated strategy: ensure the rules being written now recognise Ireland&apos;s geographic and economic contribution as a permanent feature of European security.
        </p>

        {/* Brief cards */}
        <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
          {[
            {
              num: '00',
              title: 'Presidency Desk Primer',
              subtitle: 'The Overarching Strategy',
              body: 'The strategic primer for Ireland\u2019s EU Council Presidency. Defines the three-domain thesis, maps the four EU instruments in play, categorises the dossiers Ireland must lead versus shape versus facilitate, and sets out the cost of passive chairing. Start here.',
              slug: 'presidency-desk-primer',
              accent: 'var(--color-ink)',
            },
            {
              num: '01',
              title: 'ReArm Europe',
              subtitle: 'What Ireland Should Lock In',
              body: 'The SAFE facility (\u20ac150 billion), EDIP (\u20ac1.5 billion), and the next MFF defence chapter will determine which kinds of defence contribution qualify for European support. If the rules reward only large-scale military procurement, Ireland is excluded. If they recognise domain-specific contribution, Ireland\u2019s geographic assets become fundable.',
              slug: 'rearm-europe-brief',
              accent: 'var(--color-terracotta)',
            },
            {
              num: '02',
              title: 'PESCO Strategic Review',
              subtitle: 'What Ireland Should Lock In',
              body: 'The strategic review is rewriting PESCO\u2019s binding commitments, how compliance is assessed, and how PESCO connects to EU funding. Ireland\u2019s 7 projects \u2014 all targeting maritime, subsea, cyber, and logistics \u2014 are the institutional evidence of its contribution. The revised framework either formalises Ireland\u2019s model or penalises it.',
              slug: 'pesco-strategic-review-brief',
              accent: 'var(--color-terracotta)',
            },
            {
              num: '03',
              title: 'Maritime Surveillance Cooperation',
              subtitle: 'Locking In the Atlantic',
              body: 'Ireland joined CISE in April 2025. The EUMSS progress report falls due during the Presidency. The EU Cable Action Plan commits \u20ac1 billion for submarine cable security. Ireland, as the Atlantic terminus of the transatlantic cable network, should be leading the Atlantic basin response \u2014 not consuming data others provide.',
              slug: 'maritime-surveillance-cooperation-brief',
              accent: 'var(--color-fern)',
            },
            {
              num: '04',
              title: 'Hybrid Threats & Cyber Defence',
              subtitle: 'Ireland as EU Cyber Node',
              body: 'On 16 March 2026, the Council approved conclusions on countering hybrid threats. Ireland will chair implementation from July. Four frameworks are being shaped: the EU Hybrid Toolbox, the Cyber Diplomacy Toolbox, the Cybersecurity Crisis Blueprint, and NIS2 implementation. Ireland\u2019s tech-sector concentration means EU cyber resilience runs through Dublin.',
              slug: 'hybrid-threats-cyber-defence-brief',
              accent: 'var(--color-fern)',
            },
          ].map((item) => (
            <Link key={item.num} href={`/publications/${item.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '28px 24px',
              border: item.num === '00' ? '2px solid var(--color-ink)' : '1px solid var(--color-rule)',
              backgroundColor: item.num === '00' ? 'var(--color-cream)' : 'var(--color-parchment)',
              borderRadius: '2px',
              transition: 'border-color 0.15s',
            }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: item.accent, flexShrink: 0, paddingTop: '3px', fontWeight: 700 }}>
                  {item.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '2px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', color: 'var(--color-stone)', marginBottom: '10px' }}>
                    {item.subtitle}
                  </div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, maxWidth: '520px', margin: '0 0 16px' }}>
                    {item.body}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: item.accent,
                      textDecoration: 'none',
                      borderBottom: '1px solid ' + item.accent,
                      paddingBottom: '1px',
                    }}
                  >
                    Read brief {'\u2192'}
                  </span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Interlocking strategy note */}
        <div style={{ padding: '24px', backgroundColor: 'rgba(61,107,79,0.06)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, maxWidth: '560px' }}>
            The five briefs interlock as a single strategy. PESCO provides the institutional framework. ReArm Europe provides the funding. Maritime surveillance and cyber defence are the domains where Ireland contributes. The Primer maps how they connect. Remove any one and the others lose coherence.
          </p>
        </div>
      </section>

      {/* === THE DATA — single chart section === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>The Credibility Question</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Chairing the table you barely sit at
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          Ireland spends 0.2% of GDP on defence — the lowest in the EU. When 25 member states are being asked to raise spending toward 3% of GDP, the country holding the gavel faces obvious questions. Ireland&apos;s answer must be demonstrated, not declared: it contributes where its geography is irreplaceable.
        </p>

        {/* Defence spending — compact horizontal bar chart */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '14px' }}>
            Defence spending as % of GDP, 2025
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {[
              { label: 'Greece', value: 3.9 },
              { label: 'Poland', value: 3.8 },
              { label: 'Estonia', value: 2.9 },
              { label: 'France', value: 2.1 },
              { label: 'EU avg', value: 1.8 },
              { label: 'Germany', value: 1.7 },
              { label: 'Spain', value: 1.2 },
              { label: 'Austria', value: 0.8 },
              { label: 'Ireland', value: 0.2 },
            ].map((d, i) => {
              const isIreland = d.label === 'Ireland';
              const isAvg = d.label === 'EU avg';
              return (
                <div key={i} style={{
                  flex: '1 1 calc(33.333% - 4px)',
                  minWidth: '140px',
                  padding: '10px 14px',
                  backgroundColor: isIreland ? 'color-mix(in srgb, var(--color-terracotta) 8%, transparent)' : 'var(--color-parchment)',
                  border: isIreland ? '2px solid var(--color-terracotta)' : isAvg ? '1px dashed var(--color-rule)' : '1px solid var(--color-rule)',
                  borderRadius: '3px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: isIreland ? 'var(--color-terracotta)' : 'var(--color-graphite)', fontWeight: isIreland ? 700 : 400 }}>{d.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: isIreland ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>{d.value}%</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: 'var(--color-rule)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(d.value / 4.0) * 100}%`, backgroundColor: isIreland ? 'var(--color-terracotta)' : 'var(--color-fern)', borderRadius: '2px' }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '10px' }}>
            Source: NATO, SIPRI, national estimates 2025.
          </p>
        </div>

        {/* Capability callout */}
        <div style={{ padding: '24px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px', marginTop: '32px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, marginBottom: '12px', maxWidth: '560px' }}>
            Ireland enters the Presidency with zero primary radar, zero air defence, and zero anti-submarine capability. The gap between current capacity and credible contribution is the subject of the Commission on the Defence Forces report.
          </p>
          <Link
            href="/for-policymakers"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '1px' }}
          >
            See the full capability gap analysis {'\u2192'}
          </Link>
        </div>

        {/* PESCO donut */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            PESCO participation
          </h3>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '480px' }}>
            Ireland participates in 7 of 68 active PESCO projects — all concentrated in maritime, cyber, and logistics. The strategic review will determine whether this domain-specific model is recognised as a strategy or assessed as a limitation.
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

      {/* === COST OF PASSIVE CHAIRING === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>The Cost of Passive Chairing</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          What Ireland loses by not acting
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          If Ireland chairs these meetings passively — facilitating discussion without shaping rules — the following outcomes are likely. SAFE rules remain focused on major weapons platforms. EDIP defines participation as defence manufacturing, excluding Ireland&apos;s technology sector. The MFF defence chapter is written generically. The NCSC remains isolated from EU crisis mechanisms. Ireland&apos;s 880,000 km{'\u00b2'} remains the largest unmonitored EEZ in Europe. The free-rider accusation survives the Presidency.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          The rules being written during Ireland&apos;s term will govern EU defence cooperation for the rest of the decade. They are not revised annually. The Presidency is the window — not a window.
        </p>
      </section>

      {/* === TIMELINE === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>Follow Along</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          What happens when
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          Key dates in the security dimension of the Irish Presidency, from preparation through final conclusions.
        </p>
        <Timeline events={[
          { year: 'Mar 2026', text: 'Council approves conclusions on countering hybrid threats. Ireland will chair implementation from July.' },
          { year: 'Jun 2026', text: 'Final Council meetings under Danish Presidency. Handover briefings to Irish team.' },
          { year: 'Jul 2026', text: 'Ireland assumes EU Council Presidency. First Foreign Affairs Council under Irish chair.', highlight: true },
          { year: 'Sep 2026', text: 'Draft \u2018domain excellence\u2019 pathway language for revised PESCO binding commitments. Table SAFE Phase 2 preferential terms for joint procurement.' },
          { year: 'Oct 2026', text: 'EUMSS progress report received. Host Presidency cybersecurity crisis exercise. EDIP implementing rules finalised. Cable Projects of European Interest designated.' },
          { year: 'Nov 2026', text: 'PESCO strategic review: project consolidation around capability delivery. Ukraine participation in maritime and cyber projects.' },
          { year: 'Dec 2026', text: 'European Council summit. MFF framework text naming maritime, subsea, and cyber as priority domains. Final Presidency conclusions.', highlight: true },
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
