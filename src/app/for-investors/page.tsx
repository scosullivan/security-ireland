import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Expandable from '@/components/Expandable';
import { HBarChart, DonutChart } from '@/components/Charts';

export const metadata = {
  title: 'For Investors — Security Ireland',
  description: 'The EU is spending €800 billion on defence. Ireland sits at the intersection of three critical domains. Here is how the money flows, where the opportunities are, and what you need to know.',
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
const note = { fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' };
const readMore = {
  display: 'inline-block',
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-terracotta)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-terracotta)',
  paddingBottom: '1px',
  marginTop: '12px',
};
const sectionLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-terracotta)',
  margin: '32px 0 8px',
};
const sectionH2 = {
  fontFamily: 'var(--font-serif)',
  fontSize: '22px',
  fontWeight: 400 as const,
  color: 'var(--color-ink)',
  marginBottom: '20px',
};

/* ── Stat row helper ── */
function Stats({ items }: { items: { value: string; label: string; color?: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '20px' }}>
      {items.map((s, i) => (
        <div key={i} style={{ padding: '16px 14px', backgroundColor: 'var(--color-parchment)', borderTop: `3px solid ${s.color || 'var(--color-terracotta)'}`, border: '1px solid var(--color-rule)', borderRadius: '3px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: s.color || 'var(--color-forest)', marginBottom: '3px' }}>{s.value}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-graphite)', lineHeight: 1.3 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Callout helper ── */
function Callout({ children, color = 'var(--color-forest)' }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ padding: '18px 20px', backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)`, borderLeft: `3px solid ${color}`, borderRadius: '2px', marginBottom: '16px' }}>
      {children}
    </div>
  );
}

/* ── Funding flow card ── */
function FundingCard({ name, amount, type, desc, color = 'var(--color-forest)' }: { name: string; amount: string; type: string; desc: string; color?: string }) {
  return (
    <div style={{ padding: '18px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${color}`, borderRadius: '2px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color }}>{amount}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>{type}</div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

/* ── Barrier / reform timeline card ── */
function BarrierCard({ num, name, status, timeline, impact, color }: { num: string; name: string; status: string; timeline: string; impact: string; color: string }) {
  return (
    <div style={{ padding: '18px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${color}`, borderRadius: '2px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline', marginBottom: '4px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)' }}>{num}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)' }}>{name}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>STATUS</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)' }}>{status}</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)', letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>TIMELINE</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color }}>{timeline}</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}><strong>Investor impact:</strong>{' '}{impact}</p>
    </div>
  );
}

/* ── Sector card ── */
function SectorCard({ num, name, companies, euDemand, color }: { num: string; name: string; companies: string; euDemand: string; color: string }) {
  return (
    <div style={{ padding: '18px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${color}`, borderRadius: '2px', marginBottom: '10px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color, marginBottom: '4px' }}>{num}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '10px' }}>{name}</div>
      <div style={{ marginBottom: '8px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)', letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: '2px' }}>KEY COMPANIES</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>{companies}</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)', letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: '2px' }}>EU DEMAND SIGNALS</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>{euDemand}</div>
      </div>
    </div>
  );
}

export default function ForInvestors() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
          For Investors
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Ireland&apos;s Defence Technology Opportunity
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '8px' }}>
          The EU is spending &euro;800 billion on defence. Ireland sits at the intersection of three critical domains. Here is how the money flows, where the opportunities are, and what you need to know before writing a cheque.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)' }}>
          12 explainers &middot; ~5 minutes each &middot; Click any heading to expand
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: THE EUROPEAN DEFENCE MONEY
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 1</div>
        <h2 style={sectionH2}>The European Defence Money</h2>

        {/* ── 1. ReArm Europe ── */}
        <Expandable num="01" title="ReArm Europe: Where the &euro;800 Billion Is Going" readTime="5 min read" defaultOpen>
          <p style={p}>
            In March 2025, the EU announced ReArm Europe (formally Readiness 2030) &mdash; an &euro;800 billion target for European defence investment by 2030. This is not a single fund. It is a political framework aggregating five distinct financing channels, each with different institutions, timelines, and access conditions.
          </p>

          <FundingCard
            name="National budgets"
            amount="~€500bn"
            type="Sovereign spending"
            desc="Fifteen states activated the fiscal escape clause in 2025. Investors benefit indirectly through the demand signal — access is through the supplier side."
            color="var(--color-forest)"
          />
          <FundingCard
            name="SAFE"
            amount="€150bn"
            type="Commission loans · Up to 45-year maturities"
            desc="The single most important new instrument. Joint procurement by 2+ countries, max 35% non-EU components. First disbursements March 2026. Second call during Ireland's Presidency."
            color="var(--color-terracotta)"
          />
          <FundingCard
            name="EDIP"
            amount="€1.5bn"
            type="Grants · Min. 3 countries"
            desc="Grants for joint procurement, industrial ramp-up, and defence projects of common interest. The implementing rules — being finalised now — determine what counts as 'participation.'"
            color="var(--color-fern)"
          />
          <FundingCard
            name="EIB Defence Lending"
            amount="~€13.5bn"
            type="Debt · Growth-stage and infrastructure"
            desc="Expanded mandate now includes direct defence lending, not just dual-use. Relevant for growth-stage companies and infrastructure projects."
            color="var(--color-copper)"
          />
          <FundingCard
            name="InvestEU DEF"
            amount="€175m"
            type="Anchor LP · Through specialist VC funds"
            desc="Deploys through specialist VC funds to catalyse a defence tech VC ecosystem. If you are raising a defence-focused fund, InvestEU DEF is a potential anchor."
            color="var(--color-sage)"
          />

          <div style={{ marginTop: '20px' }}>
            <Stats items={[
              { value: '$8.7bn', label: 'European DSR VC 2025', color: 'var(--color-terracotta)' },
              { value: '+55%', label: 'Year-on-year growth', color: 'var(--color-forest)' },
              { value: '€1bn', label: 'NATO Innovation Fund', color: 'var(--color-fern)' },
            ]} />
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The aggregate picture: public money (SAFE, EDIP, EDF, EIB) creates the demand signal and de-risks early investment. Private capital captures the growth. The question for investors is which segments of this pipeline are accessible, at what stage, and with what risk profile.
            </p>
          </Callout>

          <Link href="/publications/rearm-europe-brief" style={readMore}>
            Read more: ReArm Europe &mdash; What Ireland Should Lock In &rarr;
          </Link>
        </Expandable>

        {/* ── 2. EU Defence Procurement ── */}
        <Expandable num="02" title="How EU Defence Procurement Actually Works" readTime="5 min read">
          <p style={p}>
            Defence procurement in Europe is notoriously fragmented. Twenty-seven EU member states each run their own procurement systems. For every weapon type the United States fields, the EU maintains five or more variants &mdash; each requiring separate supply chains, training, spare parts, and logistics.
          </p>

          <Stats items={[
            { value: '78%', label: 'Post-2022 acquisitions from outside EU', color: 'var(--color-terracotta)' },
            { value: '63%', label: 'From the United States alone', color: 'var(--color-terracotta)' },
            { value: '5+', label: 'EU variants per US weapon type', color: 'var(--color-forest)' },
          ]} />

          <p style={p}>
            <strong>What is changing.</strong>{' '}ReArm Europe is shifting procurement from national to joint mechanisms. SAFE requires 2+ countries. EDIP requires 3+. The Defence Procurement Directive is being revised to add European supplier preference. Companies that can serve multi-country procurement programmes gain access to a larger addressable market.
          </p>

          <p style={p}>
            <strong>Where startups fit.</strong>{' '}The EU is explicitly creating space for non-traditional defence firms. EDIP includes SME support and the FAST supply chain fund. InvestEU targets VC funds investing in defence startups. DIANA runs challenge programmes. The European Defence Fund requires SME participation in consortia.
          </p>

          <Callout color="var(--color-forest)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>The procurement timeline matters for investors.</strong>{' '}A startup that wins an EDF-funded R&amp;D contract in 2026 may not see production revenue until 2030 or later. Patient capital &mdash; or companies with dual-use revenue sustaining the business while defence contracts mature &mdash; is structurally better positioned. This is not SaaS.
            </p>
          </Callout>

          <Link href="/publications/europes-defence-problem-isnt-spending" style={readMore}>
            Read more: Europe&apos;s Defence Problem Isn&apos;t Spending &rarr;
          </Link>
        </Expandable>

        {/* ── 3. NATO Innovation Fund ── */}
        <Expandable num="03" title="The NATO Innovation Fund and DIANA" readTime="4 min read">
          <p style={p}>
            NATO has built its own venture and innovation architecture, separate from but complementary to the EU&apos;s instruments.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { name: 'NATO Innovation Fund (NIF)', detail: '€1bn committed by 24 allies. Invests Seed–Series B in dual-use deep tech. Focus: AI, autonomy, biotech, quantum, space, materials, energy. Co-invests alongside specialist defence VCs.', color: 'var(--color-forest)' },
              { name: 'DIANA', detail: 'NATO\'s accelerator. Challenge programmes where startups develop solutions to specific capability needs. Selected startups receive funding, mentorship, and access to NATO test centres across Europe and North America.', color: 'var(--color-fern)' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${item.color}`, borderBottom: i === 0 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ minWidth: '140px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: item.color }}>{item.name}</div>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <p style={p}>
            <strong>Relevance for Ireland.</strong>{' '}Ireland is not a NATO member, so Irish companies cannot directly apply to NIF or DIANA. However, Ireland&apos;s ITPP membership (since 2024) creates a pathway to NATO innovation ecosystem engagement. Irish companies participating in EU-funded consortia alongside NATO-member firms gain indirect access to both demand pipelines.
          </p>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              For investors: NIF&apos;s role as anchor LP in specialist defence funds means NIF-backed funds are a signal of institutional quality. Co-investing alongside them aligns your portfolio with NATO&apos;s technology priorities.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: THE IRISH LANDSCAPE
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 2</div>
        <h2 style={sectionH2}>The Irish Landscape</h2>

        {/* ── 4. Why Ireland? ── */}
        <Expandable num="04" title="Why Ireland for Defence Tech?" readTime="5 min read">
          <p style={p}>
            Ireland is not an obvious defence tech market. It spends 0.2% of GDP on defence, has no defence industrial base, and 75% of the population supports neutrality. So why should an investor look here?
          </p>

          {/* Three advantages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { label: 'Talent', detail: 'Nine of ten largest US tech companies have European HQs in Ireland. One of Europe\'s deepest pools of AI, cybersecurity, and software engineering talent — largely untapped for defence. That is changing.', color: 'var(--color-forest)' },
              { label: 'Geography', detail: '880,000 km² EEZ containing ~75% of northern hemisphere transatlantic data cables. Permanent, structural demand for maritime surveillance, subsea monitoring, and cyber resilience. Geography cannot be replicated.', color: 'var(--color-terracotta)' },
              { label: 'EU Access + Presidency', detail: 'Chairing the Council during the largest European defence spending programme in history. The rules being written now determine which defence contributions qualify for EU funding for the next decade.', color: 'var(--color-fern)' },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${a.color}`, borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ minWidth: '110px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: a.color }}>{a.label}</div>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>{a.detail}</p>
              </div>
            ))}
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>One structural disadvantage:</strong>{' '}Ireland&apos;s defence tech sector is pre-institutional. The firms exist, the technology is often world-class, but the infrastructure investors take for granted &mdash; security clearances, export controls, facility accreditation &mdash; is either absent or being built. This is both the risk and the opportunity.
            </p>
          </Callout>
        </Expandable>

        {/* ── 5. Domestic Procurement ── */}
        <Expandable num="05" title="Ireland&rsquo;s Domestic Procurement Pipeline" readTime="5 min read">
          <p style={p}>
            Ireland&apos;s domestic defence procurement is small by European standards but is growing faster than any comparable market from a near-zero base.
          </p>

          <Stats items={[
            { value: '€1.5bn', label: 'Budget 2026', color: 'var(--color-forest)' },
            { value: '€1.7bn', label: 'Capital 2026–30', color: 'var(--color-fern)' },
            { value: '€2.5bn', label: 'Equipment pipeline (decade)', color: 'var(--color-terracotta)' },
          ]} />

          {/* Procurement programmes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { name: 'Primary Radar', desc: 'Ireland cannot detect aircraft entering its airspace. Targeting operational capability by 2028. Potential for Irish tech integration: signal processing, AI-enhanced detection, data fusion.', color: 'var(--color-terracotta)' },
              { name: 'Naval Fleet Renewal', desc: 'New multi-role vessels (P60-class) with towed sonar arrays, surveillance integration, communications. Irish maritime tech firms positioning for systems integration roles.', color: 'var(--color-forest)' },
              { name: 'Counter-Drone Systems', desc: 'Procured after the Zelensky visit exposed the gap. A growing global market where Irish dual-use firms with sensing and AI capabilities are relevant.', color: 'var(--color-fern)' },
              { name: 'Cyber Capability', desc: 'NCSC expansion, classified network infrastructure, incident response systems. Ireland\'s cybersecurity talent makes this a natural market for domestic firms.', color: 'var(--color-copper)' },
              { name: 'Armoured Vehicles', desc: 'First-ever armoured fleet procurement, from France. Creates supply chain opportunities if an industrial participation policy is established.', color: 'var(--color-sage)' },
            ].map((prog, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${prog.color}`, borderBottom: i < 4 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ minWidth: '130px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: prog.color }}>{prog.name}</div>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{prog.desc}</p>
              </div>
            ))}
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>The constraint: no industrial participation policy.</strong>{' '}Without a requirement for international primes to partner with Irish SMEs, the &euro;2.5 billion pipeline flows to foreign firms with no structured return. With one, every major procurement creates supply chain positions for Irish firms. The domestic pipeline is the launchpad, not the destination.
            </p>
          </Callout>
        </Expandable>

        {/* ── 6. Five Sectors ── */}
        <Expandable num="06" title="Five Sectors: Where the Companies Are" readTime="5 min read">
          <p style={p}>
            Ireland&apos;s defence-relevant technology sector organises into five investable clusters. None are &ldquo;defence companies&rdquo; in the traditional sense &mdash; they are dual-use technology firms whose capabilities have defence applications, often developed initially for civilian markets.
          </p>

          <SectorCard
            num="01"
            name="Maritime AI &amp; Surveillance"
            companies="Ubotica Technologies (AI satellite surveillance, flight-proven), Sea-Scan (maritime AI for Naval Service), Green Rebel (autonomous underwater vehicles, Cork)"
            euDemand="CISE, PESCO Maritime Surveillance Upgrade, EDF 2026 seabed protection calls. SAFE ~€28bn for naval systems."
            color="var(--color-terracotta)"
          />
          <SectorCard
            num="02"
            name="Subsea Monitoring &amp; Protection"
            companies="Cathx Ocean (AI underwater imaging, ⅓ revenue from security), Green Rebel (subsea overlap). Projected 20%+ annual growth."
            euDemand="PESCO Critical Seabed Infrastructure Protection, EU Cable Action Plan (€1bn), CEF Digital funding."
            color="var(--color-forest)"
          />
          <SectorCard
            num="03"
            name="Cybersecurity"
            companies="Ekco (managed security, PE-backed, 600+ employees, buy-and-build). Siren (data intelligence). Binarii Labs (secure data). Getvisibility (acquired by Forcepoint 2025)."
            euDemand="Global market projected €250bn at 15% growth. NIS2 implementation. Cyber Resilience Act. PESCO Cyber Threats."
            color="var(--color-fern)"
          />
          <SectorCard
            num="04"
            name="Sensing, Autonomy &amp; Dual-Use AI"
            companies="Provizio (Nvidia-powered sensing, 10x increase in defence interest). VRAI (VR simulation for defence training). Reamda (bomb disposal robots, sole supplier to IDF)."
            euDemand="EDF 2026: drone swarms, autonomous systems, AI for command and control."
            color="var(--color-copper)"
          />
          <SectorCard
            num="05"
            name="Secure Communications &amp; Data"
            companies="Emerging sector leveraging Ireland's GDPR enforcement role and data sovereignty expertise. Adjacent to broader analytics ecosystem."
            euDemand="EDF 2026: quantum-secured tactical networks. Military command and control systems."
            color="var(--color-sage)"
          />

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>Cross-cutting observation:</strong>{' '}The most investable Irish defence tech companies are those with dual-use revenue models &mdash; civilian revenue sustaining the business while defence contracts mature. Pure-play defence startups face longer timelines because the domestic pipeline is still forming.
            </p>
          </Callout>
        </Expandable>

        {/* ── 7. Regulatory Barriers ── */}
        <Expandable num="07" title="Regulatory Barriers and Reform Timeline" readTime="5 min read">
          <p style={p}>
            Ireland&apos;s defence tech sector operates in a regulatory environment that is being built while the market forms. Five barriers affect investment decisions. Each is being addressed, but at different speeds.
          </p>

          <BarrierCard
            num="01"
            name="Enterprise Ireland Restrictions"
            status="Minister examining amendment"
            timeline="2026"
            impact="Once removed, Enterprise Ireland becomes a support channel for dual-use firms, including co-investment programmes."
            color="var(--color-fern)"
          />
          <BarrierCard
            num="02"
            name="Security Clearances"
            status="Interim process being introduced"
            timeline="Interim 2026, permanent 2027–28"
            impact="The single most important reform. Clearances unlock EU classified information, EDF calls, and EDIP materials."
            color="var(--color-terracotta)"
          />
          <BarrierCard
            num="03"
            name="Export Controls"
            status="Not started"
            timeline="2028+"
            impact="Irish firms can develop within Ireland and EU frameworks but cannot independently export to non-EU defence markets until controls exist."
            color="var(--color-terracotta)"
          />
          <BarrierCard
            num="04"
            name="Industrial Participation Policy"
            status="Not started"
            timeline="2027+"
            impact="Without this, the €2.5bn domestic pipeline benefits only foreign primes. With it, Irish firms become mandatory supply chain partners."
            color="var(--color-copper)"
          />
          <BarrierCard
            num="05"
            name="Political Economy"
            status="Slowly shifting"
            timeline="Ongoing"
            impact="Dual-use technology with demonstrable civilian applications carries lower political risk. The framing matters for positioning, hiring, and public comms."
            color="var(--color-sage)"
          />

          {/* Reform sequence visualization */}
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>REFORM SEQUENCE &mdash; EACH UNLOCKS THE NEXT</div>
            <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
              {[
                { year: '2026', reform: 'Clearances', unlocks: 'EU programme access', color: 'var(--color-terracotta)' },
                { year: '2026', reform: 'EI Reform', unlocks: 'State support', color: 'var(--color-fern)' },
                { year: '2027+', reform: 'IP Policy', unlocks: 'Domestic supply chain', color: 'var(--color-copper)' },
                { year: '2028+', reform: 'Export Controls', unlocks: 'International markets', color: 'var(--color-forest)' },
              ].map((r, i) => (
                <div key={i} style={{ flex: '1 1 120px', padding: '12px 14px', backgroundColor: 'var(--color-parchment)', borderTop: `3px solid ${r.color}`, borderRight: i < 3 ? '1px solid var(--color-rule)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: r.color }}>{r.year}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-ink)', margin: '4px 0 2px' }}>{r.reform}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)' }}>{r.unlocks}</div>
                </div>
              ))}
            </div>
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>The sequencing matters.</strong>{' '}A company that builds clearances and EU consortium participation now is positioned for each subsequent reform as it arrives. First-movers compound their advantages at every stage.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: HOW DEFENCE FINANCING WORKS
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 3</div>
        <h2 style={sectionH2}>How Defence Financing Works</h2>

        {/* ── 8. State Defence Financing ── */}
        <Expandable num="08" title="How EU Member States Finance Defence Procurement" readTime="5 min read">
          <p style={p}>
            Understanding how governments finance defence procurement is essential for investors because it determines the demand signal, the payment timeline, and the credit risk underlying defence contracts.
          </p>

          <p style={p}>
            <strong>The basic model.</strong>{' '}Governments allocate budgets annually. Procurement agencies identify requirements, run tenders, award contracts, and manage delivery. Payment follows milestones. The entire cycle from requirement to delivery can take five to fifteen years for major platforms.
          </p>

          <p style={p}>
            <strong>What changed with ReArm Europe.</strong>{' '}EU-level instruments now supplement national budgets. SAFE loans reduce cost of capital (backed by the Commission&apos;s AAA credit, up to 45-year maturities). EDIP grants co-fund procurement. EDF co-funds R&amp;D. The effect: governments can procure more, sooner, and at lower fiscal cost.
          </p>

          <Stats items={[
            { value: '€1.5bn', label: 'Ireland defence budget 2026', color: 'var(--color-forest)' },
            { value: '€42bn', label: 'Ireland budget surplus', color: 'var(--color-terracotta)' },
            { value: '0', label: 'SAFE applications by Ireland', color: 'var(--color-terracotta)' },
          ]} />

          <p style={p}>
            Ireland&apos;s &euro;42 billion surplus means fiscal space is not a constraint. Ireland has not applied for SAFE loans &mdash; the only significant EU member chairing SAFE without applying.
          </p>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>Demand signal ≠ revenue.</strong>{' '}ReArm Europe creates an enormous demand signal. Converting that into revenue requires navigating procurement processes, winning contracts, delivering capability, and collecting payment &mdash; a multi-year process. Fund structures should reflect this: long fund lives, patience with portfolio companies, and realistic time-to-revenue assumptions. This is not SaaS.
            </p>
          </Callout>

          <Link href="/publications/europes-defence-problem-isnt-spending" style={readMore}>
            Read more: Europe&apos;s Defence Problem Isn&apos;t Spending &rarr;
          </Link>
        </Expandable>

        {/* ── 9. EDF for Startups ── */}
        <Expandable num="09" title="How the European Defence Fund Works for Startups" readTime="5 min read">
          <p style={p}>
            The European Defence Fund (EDF) is the EU&apos;s primary instrument for funding defence R&amp;D. It matters for investors because it de-risks technology development and provides a procurement pathway.
          </p>

          <Stats items={[
            { value: '€8bn', label: 'EDF budget 2021–27', color: 'var(--color-forest)' },
            { value: '€2.7bn', label: 'Research actions', color: 'var(--color-fern)' },
            { value: '€5.3bn', label: 'Capability development', color: 'var(--color-terracotta)' },
          ]} />

          <p style={p}>
            <strong>How consortia work.</strong>{' '}EDF projects require entities from at least three EU member states. Consortia typically include defence primes (procurement relationships), research institutions (technical depth), and SMEs/startups (innovation). EDF explicitly reserves funding for SME-led projects.
          </p>

          {/* EDF pathway diagram */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '20px', flexWrap: 'wrap' }}>
            {[
              { step: '01', label: 'EDF R&D Grant', detail: 'Up to 100% funding for research, 80% for development (higher for SMEs)', color: 'var(--color-forest)' },
              { step: '02', label: 'Technology Validation', detail: 'Project becomes a reference and demonstrates capability to partners', color: 'var(--color-fern)' },
              { step: '03', label: 'EDIP Production', detail: 'Grants for industrial ramp-up and procurement of validated technology', color: 'var(--color-copper)' },
              { step: '04', label: 'SAFE Procurement', detail: 'Member states procure at scale using Commission-backed lending', color: 'var(--color-terracotta)' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1 1 140px', padding: '14px', backgroundColor: 'var(--color-parchment)', borderTop: `3px solid ${s.color}`, borderRight: i < 3 ? '1px solid var(--color-rule)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: s.color, fontWeight: 700 }}>STEP {s.step}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-ink)', margin: '6px 0 4px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.4 }}>{s.detail}</div>
              </div>
            ))}
          </div>

          <p style={p}>
            <strong>Barriers for Irish startups.</strong>{' '}Consortium participation requires security clearances. Ireland&apos;s interim clearance process (expected 2026) opens the door. Companies also need consortium partners in at least two other EU states &mdash; relationship-building that Enterprise Ireland support (post-reform) could transform.
          </p>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              For investors: EDF participation is a signal of technology quality and market access. A portfolio company in an EDF consortium has been vetted by European defence partners, is developing against a validated requirement, and has a structured procurement pathway. It is also building competitive moats.
            </p>
          </Callout>
        </Expandable>

        {/* ── 10. Defence VC Differences ── */}
        <Expandable num="10" title="Understanding Defence VC: How It Differs from Enterprise Tech" readTime="5 min read">
          <p style={p}>
            European defence tech VC is the fastest-growing segment of the European venture market &mdash; but it plays by different rules than enterprise software. Five structural differences investors transitioning into defence need to understand.
          </p>

          {/* 5 differences */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { num: '1', title: 'The customer is the government', detail: 'Longer sales cycles (months to years, not weeks). Procurement complexity. Political risk. Upside: large, sticky contracts backed by sovereign credit.', color: 'var(--color-forest)' },
              { num: '2', title: 'Revenue takes longer to arrive', detail: '2–4 years R&D + 1–3 years procurement qualification + contract revenue. Total: 4–7 years from founding to meaningful defence revenue. Dual-use models bridge the gap.', color: 'var(--color-terracotta)' },
              { num: '3', title: 'Security clearances are a moat', detail: 'Once a company has clearances, it accesses classified requirements and R&D programmes. Competitors without clearances cannot. In Ireland, first-movers gain structural advantage.', color: 'var(--color-fern)' },
              { num: '4', title: 'Regulation is an asset, not a liability', detail: 'Export controls, procurement rules, and classification requirements create barriers to entry that protect incumbents. Regulatory complexity favours compliance investment.', color: 'var(--color-copper)' },
              { num: '5', title: 'Exits look different', detail: 'M&A at all-time high — 4x activity vs four years ago, driven by neo-primes and traditional primes. No European defence tech IPO in 2025. Most likely exits: trade sales. Fund structures should not depend on public market exits.', color: 'var(--color-sage)' },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${d.color}`, borderBottom: i < 4 ? '1px solid var(--color-rule)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: d.color, flexShrink: 0, width: '20px' }}>{d.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '4px' }}>{d.title}</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{d.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>Fund construction:</strong>{' '}Defence tech funds need 10&ndash;12 year fund lives with extensions, patience with pre-revenue portfolio companies, comfort with government revenue concentration, and a thesis that treats regulatory environment as a moat. The opportunity is structural and multi-decade. The returns are real but slower than enterprise software.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: THE OPPORTUNITY
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 4</div>
        <h2 style={sectionH2}>The Opportunity</h2>

        {/* ── 11. Three Domains ── */}
        <Expandable num="11" title="The Three Domains: Maritime, Subsea, Cyber" readTime="5 min read">
          <p style={p}>
            Ireland&apos;s defence technology opportunity is not across the full spectrum. It is concentrated in three domains where geographic position creates a structural, permanent market.
          </p>

          {/* Domain cards */}
          {[
            {
              domain: 'Maritime Surveillance & AI',
              stat: '880,000 km²',
              statLabel: 'Irish EEZ',
              desc: 'One of Europe\'s largest EEZs. AI-enhanced surveillance multiplies the effectiveness of limited physical assets. Satellite surveillance (Ubotica), AI patrol systems (Sea-Scan), autonomous monitoring (Green Rebel).',
              funding: 'CISE, PESCO Maritime Surveillance Upgrade, EDF seabed monitoring. SAFE ~€28bn for naval systems across Europe.',
              color: 'var(--color-terracotta)',
            },
            {
              domain: 'Subsea Infrastructure Protection',
              stat: '~75%',
              statLabel: 'Northern hemisphere transatlantic cables in/near Irish waters',
              desc: 'Cables carry internet traffic, financial transactions, and communications between Europe and North America. EU Cable Action Plan (Feb 2025) commits €1bn. Cable Projects of European Interest (CPEIs) get priority funding.',
              funding: 'EU Cable Action Plan (€1bn via CEF Digital), PESCO Critical Seabed Infrastructure Protection. Cathx Ocean\'s ⅓ revenue from security demonstrates traction.',
              color: 'var(--color-forest)',
            },
            {
              domain: 'Cybersecurity & Resilience',
              stat: '€250bn',
              statLabel: 'Global cybersecurity market',
              desc: 'Ireland hosts European HQs of the world\'s largest tech companies — a critical node in global data infrastructure and a high-value target. The 2021 HSE ransomware attack cost hundreds of millions.',
              funding: 'NIS2 implementation, Cyber Resilience Act, PESCO Cyber Threats, EDF cyber calls. 15% annual market growth.',
              color: 'var(--color-fern)',
            },
          ].map((d, i) => (
            <div key={i} style={{ marginBottom: '12px', padding: '20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${d.color}`, borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: d.color }}>{d.domain}</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: d.color }}>{d.stat}</span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)' }}>{d.statLabel}</div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, marginBottom: '10px' }}>{d.desc}</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-graphite)' }}>EU funding:</strong>{' '}{d.funding}
              </div>
            </div>
          ))}

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>Why these three and not others.</strong>{' '}Ireland will not build tanks, fighter jets, or missile systems. But maritime AI, subsea monitoring, and cybersecurity are domains where geography creates permanent demand, technology talent is directly applicable, and EU funding is explicitly allocated. The bounded nature of the opportunity is a feature &mdash; it defines a clear thesis rather than a diffuse bet.
            </p>
          </Callout>

          <div style={{ marginTop: '12px' }}>
            <Link href="/publications/layered-security-cooperation" style={readMore}>
              Read: Ireland&rsquo;s Layered Security Cooperation Model &rarr;
            </Link>
            <p style={{ ...note, marginTop: '6px' }}>
              How bilateral, EU, and NATO-adjacent cooperation tracks compound — and why all three domains sit at the intersection.
            </p>
          </div>
        </Expandable>

        {/* ── 12. Sizing the Opportunity ── */}
        <Expandable num="12" title="Sizing the Opportunity" readTime="4 min read">
          <p style={p}>
            Three lenses for sizing the Irish defence tech opportunity:
          </p>

          {/* Three lenses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              {
                lens: 'Lens 1: Domestic Procurement',
                value: '€375–750m',
                horizon: 'Over a decade',
                detail: 'The €2.5bn pipeline is the smallest lens but most certain. Without industrial participation, most flows to international primes. With one, Irish firms capture 15–30% — or €375–750m.',
                color: 'var(--color-forest)',
              },
              {
                lens: 'Lens 2: EU Funding Instruments',
                value: '~€460m',
                horizon: 'If 1% of relevant SAFE allocations captured',
                detail: 'EDF (€8bn), EDIP (€1.5bn), SAFE (€150bn), InvestEU DEF (€175m), NIF (€1bn). Ireland\'s three domains align with ~€46bn in SAFE naval + cyber allocations. 1% capture = ~€460m.',
                color: 'var(--color-terracotta)',
              },
              {
                lens: 'Lens 3: European DSR Market',
                value: '$250–400m',
                horizon: 'Annual VC flow by 2030',
                detail: 'European DSR startups raised $8.7bn in 2025, growing 55% annually. Ireland\'s share is currently negligible. If the ecosystem reaches 2–3% of European DSR VC by 2030, that is $250–400m per year.',
                color: 'var(--color-fern)',
              },
            ].map((l, i) => (
              <div key={i} style={{ padding: '18px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${l.color}`, borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: l.color }}>{l.lens}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: l.color }}>{l.value}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginBottom: '8px' }}>{l.horizon}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>

          {/* Timing thesis */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>THE TIMING THESIS</div>
          <div style={{ display: 'flex', gap: '0', marginBottom: '20px', flexWrap: 'wrap' }}>
            {[
              { year: '2026', label: 'Clearances + EI Reform', phase: 'EU programme access unlocked', color: 'var(--color-terracotta)' },
              { year: '2027', label: 'IP Policy', phase: 'Domestic supply chain positions', color: 'var(--color-copper)' },
              { year: '2028', label: 'Export Controls', phase: 'International market access', color: 'var(--color-fern)' },
              { year: '2028+', label: 'Institutional maturity', phase: 'Venture risk → growth capital', color: 'var(--color-forest)' },
            ].map((t, i) => (
              <div key={i} style={{ flex: '1 1 120px', padding: '14px', backgroundColor: 'var(--color-parchment)', borderTop: `3px solid ${t.color}`, borderRight: i < 3 ? '1px solid var(--color-rule)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, color: t.color }}>{t.year}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, color: 'var(--color-ink)', margin: '4px 0 2px' }}>{t.label}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', color: 'var(--color-graphite)', lineHeight: 1.3 }}>{t.phase}</div>
              </div>
            ))}
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>The window for early-stage investment in Irish defence tech is now to 2028.</strong>{' '}Companies that build institutional infrastructure ahead of each reform &mdash; clearances, EU consortium participation, defence customer relationships &mdash; gain first-mover advantages that compound. After the infrastructure is built, the opportunity shifts from venture-risk to growth-capital.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ padding: '32px 0 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>Contact</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '16px' }}>
            Security Ireland provides private briefings on Ireland&apos;s defence technology landscape for investors, fund managers, and corporate strategists.
          </p>
          <a href="mailto:info@securityireland.ie" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px' }}>
            info@securityireland.ie
          </a>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
