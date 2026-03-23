import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { HBarChart, DonutChart, VBarChart, Timeline, CapabilityGapChart, ComparisonCards } from '@/components/Charts';

export const metadata = {
  title: 'Understand Irish Security — Security Ireland',
  description: 'Accessible explainers on Ireland\'s defence, European commitments, and why this matters now. No jargon. No agenda. Just the facts.',
};

/* ── Shared styles ── */
const sectionLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-terracotta)',
  marginBottom: '8px',
};
const sectionH2 = {
  fontFamily: 'var(--font-serif)',
  fontSize: '22px',
  fontWeight: 400 as const,
  color: 'var(--color-ink)',
  marginBottom: '12px',
};
const bodyText = {
  fontFamily: 'var(--font-serif)',
  fontSize: '15px',
  color: 'var(--color-graphite)',
  lineHeight: 1.75,
  maxWidth: '600px',
  marginBottom: '20px',
} as const;
const smallNote = {
  fontFamily: 'var(--font-mono)',
  fontSize: '9px',
  color: 'var(--color-stone)',
  marginTop: '12px',
};

/* ── Stat card helper ── */
function StatRow({ items }: { items: { value: string; label: string; color?: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
      {items.map((s, i) => (
        <div key={i} style={{ padding: '18px 16px', backgroundColor: 'var(--color-parchment)', border: `2px solid ${s.color || 'var(--color-forest)'}`, borderRadius: '3px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: s.color || 'var(--color-forest)', marginBottom: '4px' }}>{s.value}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-graphite)', lineHeight: 1.3 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Article section helper ── */
function ArticleSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ display: 'flex', gap: '14px', alignItems: 'baseline', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--color-terracotta)' }}>{num}</span>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function ForThePublic() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={sectionLabel}>For the Public</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Understand Irish Security
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '20px' }}>
          Accessible explainers on Ireland&apos;s defence, European commitments, and why this matters now. No jargon. No agenda. Just the facts you need to form your own view.
        </p>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 1: THE BASICS
         ════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Section 1</div>
        <h2 style={sectionH2}>The Basics</h2>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── 1. Defence Forces Primer ── */}
        <ArticleSection num="01" title="Ireland&rsquo;s Defence Forces: A Primer">
          <p style={bodyText}>
            Ireland&apos;s Defence Forces consist of three branches: the Army, the Naval Service, and the Air Corps. As of 2026, approximately 7,531 personnel serve — against an establishment strength of 9,739. The gap isn&apos;t closing.
          </p>

          <StatRow items={[
            { value: '7,531', label: 'Serving personnel', color: 'var(--color-terracotta)' },
            { value: '9,739', label: 'Establishment strength', color: 'var(--color-forest)' },
            { value: '9', label: 'Naval vessels', color: 'var(--color-terracotta)' },
            { value: '0', label: 'Primary radar systems', color: 'var(--color-terracotta)' },
          ]} />

          <p style={bodyText}>
            Day-to-day, the Defence Forces conduct peacekeeping (Lebanon, Syria, Mali), fisheries patrols, aid to the civil power (bomb disposal, prison escorts, cash-in-transit), and VIP protection. What they cannot do: detect aircraft entering Irish airspace, defend against air attack, monitor subsea infrastructure, or operate armed naval vessels.
          </p>
          <p style={bodyText}>
            The personnel crisis is structural. A Private&apos;s starting salary competes not with the British Army but with Google, Apple, and Amazon — all headquartered within commuting distance of Cathal Brugha Barracks. Housing near Dublin barracks costs more than a junior soldier earns. The Defence Forces are losing people faster than they can recruit.
          </p>
        </ArticleSection>

        {/* ── 2. Defence Spending ── */}
        <ArticleSection num="02" title="What Does Ireland Actually Spend on Defence?">
          <p style={bodyText}>
            Ireland spends 0.2% of GDP on defence — the lowest in the European Union. But the headline number is misleading in both directions. It understates Ireland&apos;s GDP (inflated by multinational profits), and it overstates the constraint: Ireland ran a €42 billion surplus. The problem is not money. It is institutional capacity to spend it.
          </p>

          <HBarChart data={[
            { label: 'Greece', value: 3.9 },
            { label: 'Poland', value: 3.8 },
            { label: 'Finland', value: 2.4 },
            { label: 'France', value: 2.1 },
            { label: 'EU average', value: 1.8 },
            { label: 'UK', value: 2.3 },
            { label: 'Austria', value: 0.8 },
            { label: 'Switzerland', value: 0.7 },
            { label: 'Ireland', value: 0.2 },
          ]} />
          <p style={smallNote}>Source: NATO, SIPRI, national estimates 2025.</p>

          <div style={{ marginTop: '24px' }}>
            <StatRow items={[
              { value: '€1.5bn', label: 'Budget 2026', color: 'var(--color-forest)' },
              { value: '€1.7bn', label: 'Capital plan 2026–30', color: 'var(--color-fern)' },
              { value: '€42bn', label: '2025 fiscal surplus', color: 'var(--color-terracotta)' },
            ]} />
          </div>

          <p style={bodyText}>
            Budget 2026 allocated €1.5 billion to defence. The €1.7 billion capital programme (2026–2030) covers primary radar, new ships, and equipment. For context, Ireland could fund the Commission on Defence Forces&apos; most ambitious level of ambition from a single year&apos;s surplus.
          </p>
        </ArticleSection>

        {/* ── 3. Commission on Defence Forces ── */}
        <ArticleSection num="03" title="What Is the Commission on the Defence Forces?">
          <p style={bodyText}>
            In 2022, an independent commission told the government the truth: Ireland&apos;s defence capability is inadequate. The report defined three Levels of Ambition — a framework that now structures every defence policy discussion in Ireland.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
            {[
              { loa: 'LOA 1', label: 'Current', desc: 'Inadequate. Cannot monitor airspace, patrol EEZ, or defend critical infrastructure.', color: 'var(--color-terracotta)' },
              { loa: 'LOA 2', label: 'Target 2028', desc: 'Can monitor. Primary radar, improved naval capacity, counter-drone, reformed reserve.', color: 'var(--color-copper)' },
              { loa: 'LOA 3', label: 'Self-defence', desc: 'Can defend. Air defence, anti-submarine, armed naval vessels, unified intelligence. No roadmap.', color: 'var(--color-forest)' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '20px 24px',
                backgroundColor: 'var(--color-parchment)',
                borderLeft: `4px solid ${item.color}`,
                borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: item.color, marginBottom: '2px' }}>{item.loa}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '6px' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0, maxWidth: '520px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <StatRow items={[
            { value: '130', label: 'Recommendations', color: 'var(--color-forest)' },
            { value: '54', label: 'Completed (4 years)', color: 'var(--color-fern)' },
            { value: '42%', label: 'Completion rate', color: 'var(--color-copper)' },
          ]} />

          <p style={bodyText}>
            The rate of implementation is slowing. The easy recommendations — policy reviews, organisational changes — went first. What remains requires procurement, construction, and institutional transformation. LOA 3 has no roadmap and no political commitment.
          </p>
        </ArticleSection>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2: NEUTRALITY AND NON-ALIGNMENT
         ════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Section 2</div>
        <h2 style={sectionH2}>Neutrality and Non-Alignment</h2>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── 4. Is Ireland Neutral? ── */}
        <ArticleSection num="04" title="Is Ireland Neutral?">
          <p style={bodyText}>
            This is the most misunderstood question in Irish public life. Ireland is not legally neutral — it participates in EU defence missions, contributes to PESCO, and is bound by Article 42.7 TEU (the mutual assistance clause). The accurate term is &ldquo;militarily non-aligned.&rdquo;
          </p>
          <p style={bodyText}>
            What non-alignment actually means: no NATO membership, no foreign bases on Irish soil, no participation in offensive military operations. What it does not mean: that Ireland shouldn&apos;t be able to monitor its own airspace or patrol its own waters.
          </p>

          <div style={{ padding: '20px', backgroundColor: 'rgba(61,107,79,0.06)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              &ldquo;Militarily non-aligned but not neutral to threats.&rdquo; — Minister McEntee, 2025
            </p>
          </div>

          <p style={bodyText}>
            The Triple Lock — the three conditions for deploying Irish troops abroad (UN authorisation, Government approval, Dáil approval) — was reformed in 2023. A UN General Assembly or regional organisation resolution can now substitute for a Security Council mandate. The Triple Lock covers overseas deployment. It does not cover domestic defence, maritime patrol, or cyber operations.
          </p>
        </ArticleSection>

        {/* ── 5. What Do Other Neutral Countries Do? ── */}
        <ArticleSection num="05" title="What Do Other Non-Aligned Countries Do?">
          <p style={bodyText}>
            Ireland is not the only European state outside NATO. But it is the only one that treated non-alignment as a reason not to build capability. Every other non-aligned state took the opposite conclusion.
          </p>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '11px', minWidth: '580px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-forest)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Country</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Defence capability</th>
                  <th style={{ textAlign: 'right', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Reserve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: 'Switzerland', status: 'Neutral since 1815', capability: 'Universal conscription, air defence, domestic arms industry, PESCO participant', reserve: '140,000', color: 'var(--color-forest)' },
                  { country: 'Austria', status: 'Neutral since 1955', capability: 'Eurofighter Typhoons, EU battlegroups, 55,000 personnel', reserve: '150,000', color: 'var(--color-forest)' },
                  { country: 'Finland', status: 'Non-aligned until 2023', capability: '280,000 reserve, total defence concept, integrated air defence', reserve: '280,000', color: 'var(--color-fern)' },
                  { country: 'Sweden', status: 'Non-aligned until 2024', capability: 'Gripen fighter, world-class submarines, defence industry', reserve: '32,000', color: 'var(--color-fern)' },
                  { country: 'Ireland', status: 'Non-aligned', capability: 'No radar, no air defence, no armed navy, no anti-submarine', reserve: '1,600', color: 'var(--color-terracotta)' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-rule)', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: row.color }}>{row.country}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', fontSize: '10px' }}>{row.status}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-ink)', fontFamily: 'var(--font-serif)', fontSize: '12px' }}>{row.capability}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', textAlign: 'right' }}>{row.reserve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={bodyText}>
            Finland and Sweden both concluded that non-alignment required more capability, not less — until the threat environment changed enough that they joined NATO. Switzerland remains neutral and maintains universal conscription. Ireland is the outlier.
          </p>
        </ArticleSection>

        {/* ── 6. Triple Lock ── */}
        <ArticleSection num="06" title="What Is the Triple Lock?">
          <p style={bodyText}>
            The Triple Lock is the mechanism governing Irish troop deployments abroad. Three conditions must all be met:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
            {[
              { num: '1', label: 'UN Authorisation', desc: 'A UN Security Council resolution, General Assembly resolution, or regional organisation mandate.' },
              { num: '2', label: 'Government Approval', desc: 'Cabinet decision authorising the deployment.' },
              { num: '3', label: 'Dáil Approval', desc: 'A vote in the Dáil approving the deployment.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '16px 20px',
                backgroundColor: 'var(--color-parchment)',
                borderLeft: '3px solid var(--color-fern)',
                borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--color-fern)', lineHeight: 1 }}>{item.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            The 2023 reform expanded the first condition: a UN General Assembly or regional organisation resolution can now substitute for a Security Council mandate, addressing the problem of Russian or Chinese vetoes blocking authorisation.
          </p>
          <p style={bodyText}>
            What the Triple Lock does not cover: domestic defence, maritime patrol, cyber operations, or intelligence. These require no Dáil vote and no UN mandate. The Triple Lock is a constraint on overseas deployments, not on Ireland&apos;s ability to defend itself.
          </p>
        </ArticleSection>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3: WHAT IRELAND ACTUALLY DOES
         ════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Section 3</div>
        <h2 style={sectionH2}>What Ireland Actually Does</h2>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── 7. Peacekeeping ── */}
        <ArticleSection num="07" title="Ireland&rsquo;s Peacekeeping Record">
          <p style={bodyText}>
            Ireland has been a UN peacekeeper since 1960 — the Congo mission, one of the first. Since then, over 70,000 Irish personnel have served on peacekeeping missions. Irish troops currently serve in Lebanon (UNIFIL), Syria (UNDOF), and several other missions.
          </p>

          <Timeline events={[
            { year: '1960', text: 'First Irish UN peacekeeping mission — the Congo. Nine Irish soldiers killed at Niemba.' },
            { year: '1978', text: 'UNIFIL begins in Lebanon. Ireland has served continuously since.', highlight: true },
            { year: '1993', text: 'Somalia (UNOSOM II). First post-Cold War peace enforcement.'},
            { year: '1999', text: 'East Timor (INTERFET). Kosovo (KFOR).' },
            { year: '2008', text: 'Chad (EUFOR). First EU-led mission with significant Irish contribution.' },
            { year: '2013', text: 'Mali (EUTM). Training mission in Sahel.' },
            { year: '2024', text: 'UNIFIL crisis. Israeli military operations near Irish positions in Lebanon.', highlight: true },
          ]} />

          <p style={{ ...bodyText, marginTop: '20px' }}>
            Peacekeeping is genuinely valued internationally and has earned Ireland significant diplomatic credibility. But it does not prepare the Defence Forces for everything: peacekeeping builds interpersonal skills, patrol discipline, and multinational coordination. It does not build maritime domain awareness, cyber defence, air defence, or anti-submarine capability.
          </p>
        </ArticleSection>

        {/* ── 8. What Is PESCO? ── */}
        <ArticleSection num="08" title="What Is PESCO?">
          <p style={bodyText}>
            Permanent Structured Cooperation — the EU&apos;s framework for member states to jointly develop defence capabilities. 26 of 27 EU states participate (Malta is the exception). Ireland joined in 2017.
          </p>

          <DonutChart
            label="7/68"
            segments={[
              { value: 7, color: 'var(--color-fern)', label: 'Irish projects (7)' },
              { value: 61, color: 'var(--color-parchment)', label: 'Other PESCO projects (61)' },
            ]}
          />

          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <p style={bodyText}>
              Ireland chose its projects deliberately: Maritime Surveillance, Upgrade of Maritime Surveillance, Cyber Rapid Response Teams, Cyber Threats and Incident Response, Strategic Air Transport, Military Mobility, and EU Radio Navigation. All maritime, cyber, or logistics — not tanks and fighters.
            </p>
            <p style={bodyText}>
              PESCO comes with binding commitments: states must increase defence investment, improve interoperability, and develop capabilities jointly. A strategic review in 2026 will determine whether Ireland&apos;s domain-specific model is recognised as a strategy or assessed as a limitation. Notably, Switzerland — neutral since 1815 — has joined a PESCO project.
            </p>
          </div>
        </ArticleSection>

        {/* ── 9. NATO Relationship ── */}
        <ArticleSection num="09" title="What Is Ireland&rsquo;s Relationship with NATO?">
          <p style={bodyText}>
            Ireland is not a NATO member and is not joining NATO. But Ireland is not isolated from NATO either.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
            {[
              { year: '1999', label: 'Partnership for Peace', desc: 'Ireland joined PfP — a framework for cooperation without collective defence commitment.' },
              { year: '2024', label: 'ITPP', desc: 'Ireland joined NATO\'s Individually Tailored Partnership Programme — interoperability standards, information sharing, training access.' },
              { year: 'Ongoing', label: 'Joint service', desc: 'Irish troops train with NATO forces and serve alongside them in UNIFIL and other missions.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                backgroundColor: 'var(--color-parchment)',
                borderLeft: '3px solid var(--color-sage)',
                borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)' }}>{item.year}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--color-ink)' }}>{item.label}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0, maxWidth: '520px' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            What ITPP means: Ireland can access NATO training, adopt interoperability standards, and share information. What it does not mean: no Article 5 commitment, no collective defence obligation, no participation in NATO military operations. The relationship is cooperative, not allied.
          </p>
        </ArticleSection>

        {/* ── 10. Cork MoU ── */}
        <ArticleSection num="10" title="What Is the Cork MoU?">
          <p style={bodyText}>
            Signed in March 2026 between Ireland and the United Kingdom, the Cork Memorandum of Understanding is the first formalisation of bilateral defence cooperation between the two countries. It turns a secret dependency into structured cooperation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '24px' }}>
            {['Maritime', 'Cyber', 'Air domain', 'Subsea', 'Exercises', 'Procurement', 'Training'].map((domain, i) => (
              <div key={i} style={{ padding: '12px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--color-forest)' }}>{domain}</span>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            Joint exercises are scheduled for September 2026. The MoU connects to Ireland&apos;s PESCO participation and EU frameworks — bilateral and European cooperation complement rather than compete.
          </p>
        </ArticleSection>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4: WHY THIS MATTERS NOW
         ════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Section 4</div>
        <h2 style={sectionH2}>Why This Matters Now</h2>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── 11. Actual Threats ── */}
        <ArticleSection num="11" title="What Are the Actual Threats to Ireland?">
          <p style={bodyText}>
            Ireland is not going to be invaded. The threats are different — and in some ways more difficult to defend against.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {[
              { threat: 'Subsea cable interference', desc: 'Russian ships have been documented near Irish cable routes. Over 90% of EU–US data traffic passes through cables landing on Irish shores.', color: 'var(--color-terracotta)' },
              { threat: 'Cyber attack', desc: 'The 2021 HSE ransomware attack cost hundreds of millions and took months to resolve. Ireland hosts the EU HQs of most major US tech firms.', color: 'var(--color-terracotta)' },
              { threat: 'Hybrid threats', desc: 'Disinformation, election interference, sabotage of critical infrastructure. Designed to be below the threshold of military response.', color: 'var(--color-copper)' },
              { threat: 'Airspace incursion', desc: 'Russian military aircraft have been intercepted over Ireland — by the RAF, not the Irish Air Corps. Ireland cannot detect them independently.', color: 'var(--color-copper)' },
              { threat: 'Energy infrastructure', desc: 'The single electricity market couples Ireland and Northern Ireland. The Celtic Interconnector to France arrives by 2027. Both are vulnerable.', color: 'var(--color-fern)' },
            ].map((t, i) => (
              <div key={i} style={{ padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `3px solid ${t.color}`, borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: t.color, marginBottom: '4px' }}>{t.threat}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0, maxWidth: '540px' }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            Geography makes Ireland a target whether or not it has a military. The Atlantic EEZ, the subsea cable network, and the tech-sector concentration create vulnerabilities that exist regardless of Ireland&apos;s political choices.
          </p>
        </ArticleSection>

        {/* ── 12. EU Presidency ── */}
        <ArticleSection num="12" title="What Is the EU Presidency and Why Does It Matter for Defence?">
          <p style={bodyText}>
            Ireland chairs the Council of the European Union from July to December 2026. This means Ireland sets the agenda, chairs working groups, and brokers compromises on EU legislation — including defence and security.
          </p>

          <StatRow items={[
            { value: '€800bn', label: 'ReArm Europe target', color: 'var(--color-terracotta)' },
            { value: '€150bn', label: 'SAFE loans facility', color: 'var(--color-terracotta)' },
            { value: '€1.5bn', label: 'EDIP grants', color: 'var(--color-fern)' },
            { value: '0.2%', label: 'Ireland\'s defence/GDP', color: 'var(--color-terracotta)' },
          ]} />

          <p style={bodyText}>
            This is different from previous Presidencies. The largest defence spending programme in EU history — ReArm Europe — is being decided during Ireland&apos;s term. The country spending the least on defence will chair the discussions on how Europe spends the most. The rules being written now will determine whether Ireland&apos;s maritime, subsea, and cyber contributions are formally recognised in EU defence architecture.
          </p>

          <div style={{ padding: '20px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The rules being written during Ireland&apos;s term will govern EU defence cooperation for the rest of the decade. They are not revised annually. The Presidency is the window.
            </p>
          </div>
        </ArticleSection>

        {/* ── 13. What Would Ireland Need? ── */}
        <ArticleSection num="13" title="What Would Ireland Need to Defend Itself?">
          <p style={bodyText}>
            If Ireland were to build the capability the Commission on the Defence Forces considers the minimum for credible self-defence (LOA 3), it would need:
          </p>

          <CapabilityGapChart data={[
            { domain: 'Primary radar', current: 0, target: 50, selfDefence: 90 },
            { domain: 'Air defence', current: 0, target: 20, selfDefence: 90 },
            { domain: 'Naval armament', current: 5, target: 40, selfDefence: 90 },
            { domain: 'Anti-submarine', current: 0, target: 20, selfDefence: 80 },
            { domain: 'Intelligence', current: 20, target: 50, selfDefence: 90 },
            { domain: 'Cyber defence', current: 30, target: 60, selfDefence: 90 },
            { domain: 'Personnel', current: 50, target: 70, selfDefence: 90 },
          ]} />
          <p style={smallNote}>Source: Commission on the Defence Forces (2022), Security Ireland estimates.</p>

          <p style={{ ...bodyText, marginTop: '20px' }}>
            Primary radar (programme targeting 2028). Ground-based air defence. Armed naval vessels. Anti-submarine detection. A unified intelligence agency. Counter-drone capability. Personnel above establishment strength. The cost is estimated at several billion euro — significant, but Ireland could fund it from a single year&apos;s fiscal surplus.
          </p>
        </ArticleSection>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5: THE DEBATE
         ════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Section 5</div>
        <h2 style={sectionH2}>The Debate</h2>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── 14. Free-Rider Question ── */}
        <ArticleSection num="14" title="The Free-Rider Question">
          <p style={bodyText}>
            The accusation: Ireland benefits from European and British security without contributing. The RAF intercepts Russian aircraft over Ireland. The Royal Navy monitors approaches to these islands. The EU provides the institutional architecture within which Ireland trades and prospers. And Ireland pays the least of anyone.
          </p>
          <p style={bodyText}>
            Is it fair? The spending comparison says yes. Ireland spends less than any other EU member state. But the contribution comparison is more complicated. Ireland contributes significantly in peacekeeping (70,000+ deployments since 1960), in geographic position (880,000 km² of Atlantic EEZ), in data infrastructure (hosting the EU headquarters of most major US tech companies), and in EU framework participation (seven PESCO projects, CISE membership).
          </p>

          <div style={{ padding: '20px', backgroundColor: 'rgba(61,107,79,0.06)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The honest answer: both sides are partly right. Ireland contributes more than the spending number suggests but less than its position demands.
            </p>
          </div>
        </ArticleSection>

        {/* ── 15. What Are the Options? ── */}
        <ArticleSection num="15" title="What Are the Options?">
          <p style={bodyText}>
            The public debate is often stuck between two positions: join NATO or do nothing. Neither is useful. There are at least four real options.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {[
              { option: 'Stay the same', desc: 'Continue at 0.2% of GDP, no radar, no air defence. Risk: increasing irrelevance and vulnerability. The free-rider accusation survives.', color: 'var(--color-terracotta)' },
              { option: 'Build domain-specific capability', desc: 'Invest in maritime surveillance, subsea monitoring, and cyber resilience within non-alignment. No NATO. No offensive capability. Lock in a permanent EU security role based on geography.', color: 'var(--color-forest)' },
              { option: 'Join NATO', desc: 'Full collective defence commitment. Not on the political horizon — 75% public opposition in current polling. Would require referendum under current constitutional interpretation.', color: 'var(--color-sage)' },
              { option: 'Something else', desc: 'A Nordic-style total defence concept. A Swiss-style militia model. A bilateral framework with the UK and EU simultaneously. The institutional design space is wider than the public debate suggests.', color: 'var(--color-copper)' },
            ].map((o, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                backgroundColor: 'var(--color-parchment)',
                borderLeft: `4px solid ${o.color}`,
                borderRadius: '2px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: o.color, marginBottom: '6px' }}>{o.option}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0, maxWidth: '540px' }}>{o.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: '24px', backgroundColor: 'rgba(27,51,38,0.06)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, maxWidth: '560px' }}>
              The point is not to tell you what to think. It is to give you the information you need to form your own view. There are real choices to be made, and informed citizens should make them.
            </p>
          </div>
        </ArticleSection>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
