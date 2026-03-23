import Link from 'next/link';
import { getPostsByTopic } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import { HBarChart, DonutChart, Timeline } from '@/components/Charts';

export const metadata = {
  title: 'EU Presidency 2026 — Security Ireland',
  description: 'Ireland\'s EU Council Presidency is a six-month window to lock in a permanent European security role — or leave it as a vulnerability others must cover.',
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
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '40px' }}>
          Security Ireland&apos;s thesis is that the Presidency is a six-month window to establish Ireland as a permanent, credible contributor to European security — in the domains where its geography and economic position are irreplaceable. After December 2026, the frameworks are set and the political attention moves elsewhere.
        </p>
      </section>

      {/* Key Numbers */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
          {[
            { value: '6 months', label: 'The window: July\u2013December 2026' },
            { value: '3 domains', label: 'Maritime \u00b7 Subsea \u00b7 Cyber' },
            { value: '\u20ac800bn', label: 'ReArm Europe target by 2030' },
            { value: '4 briefs', label: 'Presidency Desk series' },
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

      {/* === THE THESIS === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>The Strategy Thesis</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Lead where geography is irreplaceable
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          Ireland cannot compete with France on fighter jets or Germany on tanks. It does not need to. Ireland occupies three positions no other EU member state can replicate: 880,000 km{'\u00b2'} of Atlantic EEZ covering critical shipping lanes; the western terminus of the transatlantic subsea cable network carrying over 90% of EU–US data traffic; and the European headquarters of most major American technology companies, making it a critical node in EU cyber resilience.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          The strategic objective is to lock in Ireland&apos;s role as a permanent contributor to European security in these three domains — maritime surveillance, subsea infrastructure protection, and cyber resilience — so that when the Presidency ends, the institutional architecture recognises Ireland&apos;s contribution regardless of which government holds office in Dublin.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '28px' }}>
          This is not altruism. A permanent role means Ireland is no longer vulnerable to the free-rider accusation. It means EU funding instruments recognise Ireland&apos;s contribution. It means bilateral and EU partners have institutional reasons to cooperate with Ireland beyond the goodwill of any single government.
        </p>

        {/* Three domains callout */}
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {[
            {
              domain: 'Maritime surveillance',
              desc: '880,000 km\u00b2 of Atlantic EEZ. Nine naval vessels. No primary radar. No subsea monitoring. The largest unmonitored maritime domain in Europe — and the one through which Atlantic shipping and submarine traffic passes.',
            },
            {
              domain: 'Subsea infrastructure',
              desc: 'Over 20 major subsea cables make landfall on Irish shores, carrying the vast majority of transatlantic data traffic. The Celtic Interconnector to France arrives by 2027. The Far North Fiber linking Ireland to Alaska, Japan, and Norway is planned for 2026.',
            },
            {
              domain: 'Cyber resilience',
              desc: 'Nine of ten top US tech firms have their EU headquarters in Ireland. A successful cyber attack on Irish-hosted systems affects data integrity across the entire Union. The 2021 HSE ransomware attack demonstrated the vulnerability.',
            },
          ].map((item, i) => (
            <div key={i} style={{ padding: '20px 24px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '6px' }}>
                {item.domain}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: 0, maxWidth: '520px' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === THE PRESIDENCY DESK === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>Presidency Desk Series</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Four briefs. Four EU instruments. One strategy.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '32px' }}>
          Each brief targets a different EU instrument being shaped during Ireland&apos;s term. Together, they form a single integrated strategy: ensure the rules being written now recognise Ireland&apos;s geographic and economic contribution as a permanent feature of European security.
        </p>

        {/* Brief cards with download links */}
        <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
          {[
            {
              num: '01',
              title: 'ReArm Europe',
              subtitle: 'What Ireland Should Lock In',
              body: 'The SAFE facility (\u20ac150 billion), EDIP (\u20ac1.5 billion), and the next MFF defence chapter will determine which kinds of defence contribution qualify for European support. If the rules reward only large-scale military procurement, Ireland is excluded. If they recognise domain-specific contribution, Ireland\u2019s geographic assets become fundable.',
              pdf: '/pdfs/ReArm_Europe.pdf',
            },
            {
              num: '02',
              title: 'PESCO Strategic Review',
              subtitle: 'What Ireland Should Lock In',
              body: 'The strategic review is rewriting PESCO\u2019s binding commitments, how compliance is assessed, and how PESCO connects to EU funding. Ireland\u2019s 7 projects \u2014 all targeting maritime, subsea, cyber, and logistics \u2014 are the institutional evidence of its contribution. The revised framework either formalises Ireland\u2019s model or penalises it.',
              pdf: '/pdfs/PESCO_Strategic_Review.pdf',
            },
            {
              num: '03',
              title: 'Maritime Surveillance Cooperation',
              subtitle: 'Locking In the Atlantic',
              body: 'Ireland joined CISE in April 2025. The EUMSS progress report falls due during the Presidency. The EU Cable Action Plan commits \u20ac1 billion for submarine cable security. Ireland, as the Atlantic terminus of the transatlantic cable network, should be leading the Atlantic basin response \u2014 not consuming data others provide.',
              pdf: '/pdfs/Maritime_Surveillance_Cooperation.pdf',
            },
            {
              num: '04',
              title: 'Hybrid Threats & Cyber Defence',
              subtitle: 'Ireland as EU Cyber Node',
              body: 'On 16 March 2026, the Council approved conclusions on countering hybrid threats. Ireland will chair implementation from July. Four frameworks are being shaped: the EU Hybrid Toolbox, the Cyber Diplomacy Toolbox, the Cybersecurity Crisis Blueprint, and NIS2 implementation. Ireland\u2019s tech-sector concentration means EU cyber resilience runs through Dublin.',
              pdf: '/pdfs/Hybrid_Threats_and_Cyber_Defence.pdf',
            },
          ].map((item) => (
            <div key={item.num} style={{ padding: '28px 24px', border: '1px solid var(--color-rule)', backgroundColor: 'white', borderRadius: '2px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-terracotta)', flexShrink: 0, paddingTop: '3px' }}>
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
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'var(--color-terracotta)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--color-terracotta)',
                      paddingBottom: '1px',
                    }}
                  >
                    Download brief (PDF) {'\u2192'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interlocking strategy note */}
        <div style={{ padding: '24px', backgroundColor: 'rgba(61,107,79,0.06)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, maxWidth: '560px' }}>
            The four briefs interlock as a single strategy. PESCO provides the institutional framework. ReArm Europe provides the funding. Maritime surveillance and cyber defence are the domains where Ireland contributes. Remove any one and the others lose coherence. The briefs are a set.
          </p>
        </div>
      </section>

      {/* === THE DATA === */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div className="label-caps" style={{ margin: '32px 0 8px' }}>The Credibility Question</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          Chairing the table you barely sit at
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '20px' }}>
          Ireland spends 0.2% of GDP on defence — the lowest in the EU. When 25 member states are being asked to raise spending toward 3% of GDP, the country holding the gavel faces obvious questions. Ireland&apos;s answer must be demonstrated, not declared: it contributes where its geography is irreplaceable.
        </p>

        {/* Defence spending comparison */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
            Defence spending as % of GDP, 2025
          </h3>
          <HBarChart data={[
            { label: 'Greece', value: 78 },
            { label: 'Poland', value: 76 },
            { label: 'Estonia', value: 58 },
            { label: 'France', value: 42 },
            { label: 'EU average', value: 36 },
            { label: 'Germany', value: 34 },
            { label: 'Spain', value: 24 },
            { label: 'Austria', value: 16 },
            { label: 'Ireland', value: 4 },
          ]} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
            Values indexed to 5% scale (e.g. Greece 3.9%, Ireland 0.2%). Source: NATO, SIPRI, national estimates 2025.
          </p>
        </div>

        {/* Surveillance coverage */}
        <div style={{ marginTop: '40px', marginBottom: '16px' }}>
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

        {/* Capability callout */}
        <div style={{ padding: '24px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px', marginTop: '32px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, marginBottom: '12px', maxWidth: '560px' }}>
            Ireland enters the Presidency with zero primary radar, zero air defence, and zero anti-submarine capability. The NCSC remains under-resourced with a fragmented intelligence architecture unique in Europe. The gap between current capacity and credible contribution is the subject of the Commission on the Defence Forces report.
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
            Ireland participates in 7 of 68 active PESCO projects — all concentrated in maritime, cyber, and logistics. This is the institutional evidence of Ireland&apos;s contribution. The strategic review will determine whether this domain-specific model is recognised as a strategy or assessed as a limitation.
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

      {/* === WHAT HAPPENS IF IRELAND DOESN'T ACT === */}
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
