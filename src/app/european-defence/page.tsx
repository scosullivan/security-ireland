import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Expandable from '@/components/Expandable';

export const metadata = {
  title: 'The European Defence Landscape — Security Ireland',
  description: 'How Europe raises, allocates, and fails to convert €800 billion in defence spending into military capability. The institutions, instruments, and architecture explained.',
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

/* ── Publication card ── */
function PubCard({ title, type, status, desc, slug, forthcoming }: { title: string; type: string; status: string; desc: string; slug?: string; forthcoming?: boolean }) {
  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${forthcoming ? 'var(--color-stone)' : 'var(--color-terracotta)'}`, borderRadius: '2px', marginBottom: '12px', opacity: forthcoming ? 0.7 : 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: forthcoming ? 'var(--color-stone)' : 'var(--color-ink)' }}>{title}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '0.5px' }}>{type} · {status}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: '0 0 10px' }}>{desc}</p>
      {slug && !forthcoming && (
        <Link href={`/publications/${slug}`} style={readMore}>
          Read more &rarr;
        </Link>
      )}
      {forthcoming && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '0.5px' }}>FORTHCOMING</span>
      )}
    </div>
  );
}

/* ── Instrument card ── */
function InstrumentCard({ name, abbr, desc, link, linkLabel, color = 'var(--color-forest)' }: { name: string; abbr: string; desc: string; link?: string; linkLabel?: string; color?: string }) {
  return (
    <div style={{ padding: '18px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${color}`, borderRadius: '2px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color }}>{abbr}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-graphite)' }}>{name}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
      {link && linkLabel && (
        <Link href={link} style={{ ...readMore, marginTop: '8px' }}>
          {linkLabel} &rarr;
        </Link>
      )}
    </div>
  );
}

export default function EuropeanDefence() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
          European Defence
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          The European Defence Landscape
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '8px' }}>
          Europe is spending more on defence than at any point since the Cold War. The spending is not the hard part. Converting &euro;800 billion into capability through twenty-seven separate procurement systems, temporary financing mechanisms, and institutions still being built &mdash; that is the hard part. This page explains the system.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)' }}>
          6 sections &middot; Reference architecture &middot; Updated March 2026
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          HOW TO USE THIS PAGE (moved first per spec)
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Start Here</div>
        <h2 style={sectionH2}>How to Use This Page</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
          {[
            { audience: 'New to European defence', route: 'Start with Section 1 (the spending problem), then Section 2 (why more money doesn\'t solve it). These two sections reframe the entire debate. Sections 3 and 4 are reference material you\'ll return to.', color: 'var(--color-forest)' },
            { audience: 'EU institutions or member state government', route: 'Section 4 (institutional architecture) is your reference map. Instrument descriptions link to operational briefs on the For Policymakers page with recommendations and deadlines.', color: 'var(--color-terracotta)' },
            { audience: 'Journalist covering European defence', route: 'The quick-reference tables in Sections 2 and 3 — the architecture-first framework and five financing mechanisms — are designed to be cited. Contact us for data, background briefings, or pre-embargo access.', color: 'var(--color-fern)' },
            { audience: 'Interested in Ireland specifically', route: 'Read Section 5 last, not first. The Ireland analysis is sharper once you understand the system it operates within. Then move to For Policymakers for the full operational picture.', color: 'var(--color-copper)' },
            { audience: 'Investor or financial analyst', route: 'Section 3 (defence financing) is your entry point. The capital markets mechanics paper addresses sovereign borrowing dynamics, ESG screening effects, and defence as a permanent budget category.', color: 'var(--color-sage)' },
          ].map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${a.color}`, borderBottom: i < 4 ? '1px solid var(--color-rule)' : 'none' }}>
              <div style={{ minWidth: '140px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: a.color }}>{a.audience}</div>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>{a.route}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: THE SPENDING SURGE
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 1</div>
        <h2 style={sectionH2}>The Spending Surge &mdash; and Why It Isn&apos;t Enough</h2>

        <Expandable num="01" title="The Numbers and the Problem" readTime="4 min read">
          <Stats items={[
            { value: '€381bn', label: 'EU-27 defence spending 2025', color: 'var(--color-forest)' },
            { value: '+63%', label: 'Increase since 2020', color: 'var(--color-terracotta)' },
            { value: '€800bn', label: 'ReArm Europe target by 2030', color: 'var(--color-fern)' },
            { value: '3.5–5%', label: 'NATO new GDP targets', color: 'var(--color-copper)' },
          ]} />

          <p style={p}>
            The numbers are extraordinary. NATO&apos;s new target is 3.5% of GDP by 2035, rising to 5%. Germany alone has unlocked &euro;400 billion in new borrowing capacity. The political will is unprecedented. But spending targets measure inputs, not outputs &mdash; and the system receiving the money is structurally incapable of converting it into military capability at the speed or scale required.
          </p>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              GDP-share targets and capability targets are not interchangeable. The 2% floor &mdash; now rising to 3.5% and 5% &mdash; is a political commitment to a US-led burden-sharing framework, not an assessment of what European defence actually requires. Larger inputs fed into an unreformed system do not produce proportionally larger outputs.
            </p>
          </Callout>

          <div style={{ marginTop: '20px' }}>
            <PubCard
              title="NATO's Spending Targets Measure the Wrong Thing"
              type="Research Paper"
              status="Complete"
              desc="The spending target is the starting point of the problem, not the solution. This paper explains why GDP-share commitments and capability requirements operate on different logics."
              forthcoming
            />
            <PubCard
              title="Europe's Defence Problem Isn't Spending"
              type="Research Paper"
              status="Complete"
              desc="For every weapon type the United States fields, the EU operates more than five variants. Twenty-seven separate procurement systems produce fragmented demand, duplicated programmes, and subscale production runs. €800 billion cannot buy deterrence without coordination architecture."
              slug="defence-financing-explained"
            />
          </div>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: THE DEPENDENCY TRAP
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 2</div>
        <h2 style={sectionH2}>The Dependency Trap &mdash; Where the Money Actually Goes</h2>

        <Expandable num="02" title="Why More Spending Deepens the Problem" readTime="5 min read">
          <p style={p}>
            Europe&apos;s defence buildup is reproducing the problem it is trying to solve. Increased expenditure without industrial and institutional architecture to absorb it does not produce autonomy &mdash; it produces dependency. The money flows to whoever already has production architecture, which is predominantly the United States.
          </p>

          <p style={p}>
            This is not a policy failure. It is a structural outcome: capital and political demand exist, but the surrounding system has not co-evolved to convert them into the intended output.
          </p>

          <PubCard
            title="Europe's Defence Buildup Is Reproducing the Problem It's Trying to Solve"
            type="Research Paper"
            status="Complete"
            desc="A premature rearmament: a politically-driven spending surge into an industrial architecture that cannot absorb it productively. Traces two compounding failure modes — external dependency on American contractors and internal fragmentation across 27 European procurement systems."
            forthcoming
          />

          {/* Architecture-first framework table */}
          <div style={{ marginTop: '24px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>KEY CONCEPT: THE ARCHITECTURE-FIRST APPROACH</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-serif)', fontSize: '13px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-forest)' }}>
                    <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 700 }}>Investment</th>
                    <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 700 }}>What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { investment: 'European procurement coordination', meaning: 'Aggregate 27 national demand signals into a single market signal large enough to justify European production investment' },
                    { investment: 'Directed industrial investment', meaning: 'Capital for European manufacturing infrastructure and supply chains — not procurement subsidies for existing equipment' },
                    { investment: 'Interoperability standards', meaning: 'Common technical standards so equipment from one member state integrates with allied systems' },
                    { investment: 'Workforce development', meaning: 'Technical and operational pipelines that make expanded defence production sustainable' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--color-rule)', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'transparent' }}>
                      <td style={{ padding: '10px 14px', color: 'var(--color-ink)', fontWeight: 600, verticalAlign: 'top', minWidth: '160px' }}>{row.investment}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              None of these are spending targets. All of them are harder to implement. That is precisely why they have not been prioritised.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: HOW REARMAMENT IS FINANCED
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 3</div>
        <h2 style={sectionH2}>How Rearmament Is Financed</h2>

        <Expandable num="03" title="The Capital Markets Mechanics" readTime="5 min read">
          <p style={p}>
            Between a political commitment to spend and a signed procurement contract sits a chain of institutional, legal, and financial mechanisms. This chain &mdash; not the political will &mdash; determines whether pledged euros become operational capability.
          </p>

          <p style={p}>
            Europe has found emergency fiscal mechanisms, but it has not yet built a permanent financing architecture. The mechanisms are temporary, the fiscal space is radically unequal across member states, and defence competes with the green transition, ageing populations, digital infrastructure, and rising debt service for every percentage point of fiscal space.
          </p>

          <PubCard
            title="Ireland's Defence & Security Spending"
            type="Research Paper"
            status="Complete"
            desc="Where the money comes from, where it goes, and why the constraint isn't budget. Ireland's defence funding flows through five distinct channels. €42 billion surplus means fiscal space is not the constraint — institutional bandwidth is."
            slug="ireland-defence-spending"
          />
          <PubCard
            title="European Defence Financing Explained"
            type="Explainer"
            status="Complete"
            desc="How the €800 billion is raised, where it flows, and why procurement — not financing — is the true bottleneck. Traces the full chain from constitutional authorisation through bond issuance to procurement pipeline."
            slug="defence-financing-explained"
          />

          {/* Five financing mechanisms table */}
          <div style={{ marginTop: '24px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>QUICK REFERENCE: THE FIVE FINANCING MECHANISMS</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-serif)', fontSize: '12px', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-forest)' }}>
                    {['Mechanism', 'Scale', 'Duration', 'Key constraint'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mechanism: 'National escape clause (SGP)', scale: '~€650bn fiscal space', duration: '2025–2028', constraint: 'Temporary. Normal fiscal rules resume after 2028. 17 of 27 activated.', color: 'var(--color-terracotta)' },
                    { mechanism: 'SAFE loan instrument', scale: '€150bn', duration: 'To 2030', constraint: 'Debt, not grants. Preferential terms for joint procurement.', color: 'var(--color-forest)' },
                    { mechanism: 'Germany debt brake reform', scale: '~€400bn cumulative', duration: 'Permanent', constraint: 'Applies only to Germany. On top of €100bn special fund (exhausted by 2027).', color: 'var(--color-fern)' },
                    { mechanism: 'EU-level instruments (EDF, EDIP, EIB)', scale: '~€13bn combined', duration: 'Various', constraint: 'Important for coordination but small relative to national spending.', color: 'var(--color-copper)' },
                    { mechanism: 'National borrowing', scale: 'Varies enormously', duration: 'Ongoing', constraint: '5 member states have debt above 100% of GDP. Fiscal space is radically unequal.', color: 'var(--color-sage)' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--color-rule)', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', color: 'var(--color-ink)', fontWeight: 600, verticalAlign: 'top', minWidth: '140px' }}>{row.mechanism}</td>
                      <td style={{ padding: '10px 12px', color: row.color, fontWeight: 700, verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.scale}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--color-graphite)', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{row.duration}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--color-graphite)', lineHeight: 1.4, verticalAlign: 'top' }}>{row.constraint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The largest mechanism &mdash; the national escape clause &mdash; expires in 2028. Everything built on temporary fiscal space must either find a permanent home in the next MFF or collapse. The financing architecture is the binding constraint on European rearmament.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: INSTITUTIONAL ARCHITECTURE
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 4</div>
        <h2 style={sectionH2}>The Institutional Architecture &mdash; EU Defence Instruments Explained</h2>

        <Expandable num="04" title="The Instrument Map" readTime="6 min read">
          <p style={p}>
            European defence cooperation operates through a web of instruments, funds, and frameworks designed incrementally over two decades. Each has its own legal base, budget, governance, and logic. Understanding any single instrument in isolation is possible. Understanding how they interlock &mdash; and where the gaps are &mdash; is the analytical challenge.
          </p>

          <InstrumentCard
            abbr="PESCO"
            name="Permanent Structured Cooperation"
            desc="Launched 2017. 26 participating member states. 68 projects across six categories. Binding commitments under strategic review during 2026. Ireland participates in 7 projects, all in maritime, cyber, and logistics. The revised framework will determine whether PESCO rewards broad military contribution or recognises domain-specific excellence."
            link="/publications/pesco-strategic-review-brief"
            linkLabel="See: PESCO Strategic Review brief"
            color="var(--color-forest)"
          />
          <InstrumentCard
            abbr="EDIP"
            name="European Defence Industry Programme"
            desc="€1.5 billion in grants for 2025–2027. Incentivises joint procurement and European production. The implementing rules — being written during Ireland's Presidency — determine whether 'defence industrial participation' means only large-scale military manufacturing or includes technology, cyber, and dual-use contribution."
            link="/publications/rearm-europe-brief"
            linkLabel="See: ReArm Europe brief"
            color="var(--color-terracotta)"
          />
          <InstrumentCard
            abbr="SAFE"
            name="Security Action for Europe"
            desc="€150 billion EU-backed loan instrument, adopted May 2025. Joint procurement — member states that buy together get preferential terms. Operational and disbursing. Phase 2 terms, to be negotiated during the Irish Presidency, will shape who benefits."
            link="/publications/rearm-europe-brief"
            linkLabel="See: ReArm Europe brief"
            color="var(--color-fern)"
          />
          <InstrumentCard
            abbr="EDF"
            name="European Defence Fund"
            desc="€8 billion for 2021–2027. Funds collaborative R&D — research and capability development. Not procurement. Upstream investment in the technologies that feed future procurement. Requires consortia from at least three member states."
            color="var(--color-copper)"
          />
          <InstrumentCard
            abbr="CISE"
            name="Common Information Sharing Environment"
            desc="Maritime surveillance data-sharing framework. Ireland joined April 2025. Connects national maritime surveillance systems across the EU. The Atlantic basin remains the least integrated region."
            link="/publications/maritime-surveillance-cooperation-brief"
            linkLabel="See: Maritime Surveillance brief"
            color="var(--color-sage)"
          />
          <InstrumentCard
            abbr="MFF"
            name="Multiannual Financial Framework"
            desc="The EU's seven-year budget. The next MFF (post-2027) will determine whether defence becomes a permanent structural category of EU spending or remains reliant on temporary instruments. The framework text being drafted during Ireland's Presidency will set the terms."
            color="var(--color-forest)"
          />
          <InstrumentCard
            abbr="EU Hybrid Toolbox"
            name="Hybrid Threat Response Framework"
            desc="Updated March 2026. The EU's framework for responding to hybrid threats — cyber attacks, disinformation, critical infrastructure sabotage, and coercion below the threshold of armed conflict. Ireland chairs its implementation during the Presidency."
            link="/publications/hybrid-threats-cyber-defence-brief"
            linkLabel="See: Hybrid Threats &amp; Cyber Defence brief"
            color="var(--color-terracotta)"
          />

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              <strong>How the instruments connect.</strong>{' '}PESCO participation increasingly determines access to EDIP and SAFE preferential terms. EDF research feeds EDIP production incentives. The MFF determines whether any of these instruments survive beyond their current funding windows. The{' '}
              <Link href="/for-policymakers" style={{ color: 'var(--color-terracotta)', textDecoration: 'underline' }}>Presidency Desk series</Link>
              {' '}traces these connections in operational detail.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHERE IRELAND FITS
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 5</div>
        <h2 style={sectionH2}>Where Ireland Fits</h2>

        <Expandable num="05" title="Ireland&rsquo;s Position in the European Architecture" readTime="5 min read">
          <Stats items={[
            { value: '0.2%', label: 'GDP on defence (lowest in EU)', color: 'var(--color-terracotta)' },
            { value: '880,000', label: 'km² Atlantic EEZ', color: 'var(--color-forest)' },
            { value: '~90%', label: 'Transatlantic data in Irish waters', color: 'var(--color-fern)' },
          ]} />

          <p style={p}>
            Ireland is the lowest-spending EU member state on defence and is chairing the Council of the EU during the largest defence spending programme in EU history. It is militarily non-aligned but not neutral to threats. It hosts the EU headquarters of most major American tech companies, and carries the bulk of transatlantic data on submarine cables running through Irish waters.
          </p>

          <p style={p}>
            Its position is unusual, but its contribution &mdash; in maritime, subsea, cyber, and critical infrastructure domains &mdash; is structurally significant if the architecture recognises it. Understanding Ireland&apos;s position requires the European context this page provides. Acting on it requires the operational analysis on the For Policymakers page.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Link href="/for-policymakers" style={{ display: 'inline-block', padding: '14px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '4px solid var(--color-terracotta)', borderRadius: '2px', textDecoration: 'none', flex: '1 1 240px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '4px' }}>For Policymakers &rarr;</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)' }}>Full briefing architecture for Irish government, Oireachtas, and Brussels officials</div>
            </Link>
            <Link href="/eu-presidency" style={{ display: 'inline-block', padding: '14px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '4px solid var(--color-forest)', borderRadius: '2px', textDecoration: 'none', flex: '1 1 240px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '4px' }}>EU Presidency 2026 &rarr;</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)' }}>Dedicated Presidency page with all four briefs and the 16-recommendation action table</div>
            </Link>
          </div>

          <PubCard
            title="Ireland's Defence Problem Isn't Neutrality"
            type="Research Paper"
            status="Complete"
            desc="Ireland's institutional system is architecturally configured for the absence of military capability — not because of neutrality, but because of a century of self-reinforcing institutional design. Switzerland, Austria, and Finland demonstrate that non-alignment historically required more defence capability, not less."
            slug="defence-at-a-glance-q1-2026"
          />
          <PubCard
            title="Ireland&rsquo;s Layered Security Cooperation Model"
            type="Research Paper"
            status="Complete"
            desc="How bilateral, EU, and NATO-adjacent cooperation tracks compound rather than compete. Maps capability flows from Cork MoU operations through to PESCO frameworks, identifies friction points, and tests replicability for non-aligned EU member states."
            slug="layered-security-cooperation"
          />
          <PubCard
            title="The UK–Ireland Security Interface"
            type="Working Paper"
            status="Complete"
            desc="The island of Ireland is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. The bilateral track complements, not competes with, Ireland's EU commitments."
            slug="good-friday-agreement-security"
          />
        </Expandable>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ padding: '32px 0 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>Contact</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '16px' }}>
            Security Ireland is available for background briefings, data requests, and speaking engagements on European defence architecture, financing, and institutional design.
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
