import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Expandable from '@/components/Expandable';
import { HBarChart, DonutChart, Timeline, CapabilityGapChart } from '@/components/Charts';

export const metadata = {
  title: 'Understand Irish Security — Security Ireland',
  description: 'Accessible explainers on Ireland\'s defence, European commitments, and why this matters now. No jargon. No agenda. Just the facts.',
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

export default function ForThePublic() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
          For the Public
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Understand Irish Security
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '8px' }}>
          Accessible explainers on Ireland&apos;s defence, European commitments, and why this matters now. No jargon. No agenda. Just the facts you need to form your own view.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)' }}>
          15 explainers · ~5 minutes each · Click any heading to expand
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: THE BASICS
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 1</div>
        <h2 style={sectionH2}>The Basics</h2>

        {/* ── 1. Defence Forces Primer ── */}
        <Expandable num="01" title="Ireland&rsquo;s Defence Forces: A Primer" readTime="5 min read">
          <p style={p}>
            Ireland&apos;s Defence Forces consist of three branches: the Army, the Naval Service, and the Air Corps. Together they are responsible for defending the state, supporting the civil authorities (bomb disposal, severe weather response, cash-in-transit escorts), and contributing to international peacekeeping operations.
          </p>

          <Stats items={[
            { value: '7,531', label: 'Serving personnel', color: 'var(--color-terracotta)' },
            { value: '9,739', label: 'Establishment', color: 'var(--color-forest)' },
            { value: '9', label: 'Naval vessels', color: 'var(--color-terracotta)' },
            { value: '0', label: 'Primary radar', color: 'var(--color-terracotta)' },
          ]} />

          <p style={p}>
            As of late 2025, the Defence Forces have approximately 7,531 serving personnel — against an authorised establishment of 9,739. This is a fifty-year low. A Private 3 Star earns a starting salary of roughly €40,000 per year. In Dublin and Cork, where major barracks are located, average monthly rent exceeds €1,800. Recruitment competes not with other militaries but with multinational technology companies headquartered nearby.
          </p>

          {/* Org chart: 3 branches */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { branch: 'Army', base: 'Multiple barracks nationwide', role: 'Conventional operations, peacekeeping (UNIFIL Lebanon), aid to civil power, Army Ranger Wing (special operations)', color: 'var(--color-forest)' },
              { branch: 'Naval Service', base: 'Haulbowline, Cork', role: '9 vessels patrolling 880,000 km² EEZ. 2–3 operational at any time. No anti-submarine capability. Main armament not functioning.', color: 'var(--color-terracotta)' },
              { branch: 'Air Corps', base: 'Casement Aerodrome, Baldonnel', role: '2 CN-235 maritime patrol aircraft. No fighter jets. No air defence. No primary radar. RAF intercepts hostile aircraft over Ireland.', color: 'var(--color-terracotta)' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${b.color}`, borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ minWidth: '100px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: b.color }}>{b.branch}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '2px' }}>{b.base}</div>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{b.role}</p>
              </div>
            ))}
          </div>

          <p style={p}>
            The Defence Forces have a proud peacekeeping tradition stretching back to 1958, with over 70,000 individual deployments on international missions. But peacekeeping and territorial defence are different capabilities. The Defence Forces are experienced at the former and have almost no capacity for the latter.
          </p>

          <Link href="/publications/defence-at-a-glance-q1-2026" style={readMore}>
            Read more: Ireland&apos;s Defence Problem Isn&apos;t Neutrality →
          </Link>
        </Expandable>

        {/* ── 2. Defence Spending ── */}
        <Expandable num="02" title="What Does Ireland Actually Spend on Defence?" readTime="4 min read">
          <p style={p}>
            Ireland spends approximately 0.2% of its GDP on defence — the lowest proportion in the European Union. In raw numbers, Budget 2026 allocated a record €1.5 billion to defence. The government has committed a capital budget of €1.7 billion over 2026–2030.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
            {[
              { label: 'Poland', value: 4.1 },
              { label: 'Greece', value: 3.6 },
              { label: 'Estonia', value: 3.4 },
              { label: 'Finland', value: 2.4 },
              { label: 'UK', value: 2.3 },
              { label: 'France', value: 2.1 },
              { label: 'Germany', value: 2.1 },
              { label: 'Netherlands', value: 2.1 },
              { label: 'Italy', value: 1.5 },
              { label: 'Spain', value: 1.3 },
              { label: 'Austria', value: 0.8 },
              { label: 'Ireland', value: 0.2 },
            ].map((d, i) => {
              const isIreland = d.label === 'Ireland';
              return (
                <div key={i} style={{
                  flex: '1 1 calc(33.333% - 4px)',
                  minWidth: '140px',
                  padding: '10px 14px',
                  backgroundColor: isIreland ? 'color-mix(in srgb, var(--color-terracotta) 8%, transparent)' : 'var(--color-parchment)',
                  border: isIreland ? '2px solid var(--color-terracotta)' : '1px solid var(--color-rule)',
                  borderRadius: '3px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: isIreland ? 'var(--color-terracotta)' : 'var(--color-graphite)', fontWeight: isIreland ? 700 : 400 }}>{d.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: isIreland ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>{d.value}%</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: 'var(--color-rule)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(d.value / 4.5) * 100}%`, backgroundColor: isIreland ? 'var(--color-terracotta)' : 'var(--color-fern)', borderRadius: '2px' }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p style={note}>Source: NATO, SIPRI, national estimates 2025. Defence spending as % of GDP.</p>

          <div style={{ marginTop: '24px' }}>
            <Stats items={[
              { value: '€1.5bn', label: 'Budget 2026', color: 'var(--color-forest)' },
              { value: '€1.7bn', label: 'Capital 2026–30', color: 'var(--color-fern)' },
              { value: '€42bn', label: 'Surplus 2022–24', color: 'var(--color-terracotta)' },
            ]} />
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The number that matters more than the budget is the surplus. Ireland could fund the entire LOA 3 defence transformation from a fraction of a single year&apos;s surplus. The money is not the constraint. The constraint is institutional capacity to spend it.
            </p>
          </Callout>

          <p style={p}>
            Ireland&apos;s spending is low not because the state cannot afford defence but because the institutional system was configured, over a century, for the absence of military capability. Changing that requires not just more money but institutional transformation: new procurement systems, reformed personnel structures, unified intelligence, and the political will to sustain reform across electoral cycles.
          </p>
        </Expandable>

        {/* ── 3. Commission on Defence Forces ── */}
        <Expandable num="03" title="What Is the Commission on the Defence Forces?" readTime="4 min read">
          <p style={p}>
            The Commission on the Defence Forces was established by the Irish government and reported in 2022. It produced one of the most honest capability assessments of any European state — and created the framework that now drives Ireland&apos;s defence debate.
          </p>

          {/* LOA diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { loa: 'LOA 1', label: 'Current — "Inadequate"', desc: 'Cannot detect aircraft entering airspace. Cannot detect submarines. Cannot arm naval vessels. Cannot sustain existing force structure.', color: 'var(--color-terracotta)' },
              { loa: 'LOA 2', label: 'Target 2028 — "Can monitor"', desc: 'Primary radar, improved naval capacity, counter-drone, reformed reserve. The ability to see what is happening in Ireland\'s own territory.', color: 'var(--color-copper)' },
              { loa: 'LOA 3', label: 'Self-defence — "Can defend"', desc: 'Air defence, naval combat capability, anti-submarine, unified intelligence, personnel above establishment. No budget, no timeline, no roadmap.', color: 'var(--color-forest)' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 24px', backgroundColor: 'var(--color-parchment)',
                borderLeft: `4px solid ${item.color}`,
                borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: item.color, marginBottom: '2px' }}>{item.loa}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', color: 'var(--color-stone)', marginBottom: '6px', textTransform: 'uppercase' }}>{item.label}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0, maxWidth: '540px' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <Stats items={[
            { value: '130', label: 'Recommendations', color: 'var(--color-forest)' },
            { value: '54', label: 'Completed (4 years)', color: 'var(--color-fern)' },
            { value: '~40%', label: 'Completion rate', color: 'var(--color-copper)' },
          ]} />

          <p style={p}>
            The rate of implementation has slowed, not accelerated. The early completions were the easier ones: policy changes, governance reforms, organisational adjustments. The remaining recommendations increasingly involve first-generation capability acquisition — systems the Defence Forces have never built or operated — through a procurement system that has no experience delivering them.
          </p>

          {/* Capability Gap Chart */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
              The Capability Gap
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, marginBottom: '16px', maxWidth: '540px' }}>
              Estimated capability readiness across seven domains. LOA 1 = current. LOA 2 = government target by 2028. LOA 3 = minimum self-defence.
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
            <p style={note}>Source: Commission on the Defence Forces (2022), Security Ireland estimates.</p>
          </div>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: NEUTRALITY AND NON-ALIGNMENT
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 2</div>
        <h2 style={sectionH2}>Neutrality and Non-Alignment</h2>

        {/* ── 4. Is Ireland Neutral? ── */}
        <Expandable num="04" title="Is Ireland Neutral?" readTime="5 min read">
          <p style={p}>
            This is the most misunderstood question in Irish public life. The short answer: Ireland is not legally neutral. The accurate description is &ldquo;militarily non-aligned.&rdquo;
          </p>
          <p style={p}>
            Ireland is not neutral in the way Switzerland is neutral. Switzerland&apos;s neutrality is enshrined in international law. Ireland&apos;s non-alignment is a policy choice — there is no constitutional provision, no treaty obligation, and no international legal status requiring Ireland to be neutral.
          </p>

          {/* What Ireland actually does */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '10px' }}>
            What Ireland actually does
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {[
              'Participates in EU Common Security and Defence Policy missions',
              'Member of PESCO — 7 defence cooperation projects',
              'Bound by Article 42.7 TEU — mutual assistance clause',
              'Committed €350m to European Peace Facility (incl. Ukraine)',
              'Joined NATO\'s Individually Tailored Partnership Programme (2024)',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 14px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-fern)', flexShrink: 0, marginTop: '6px' }} />
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-ink)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              &ldquo;We&apos;re militarily neutral, but we&apos;re not neutral to any of the threats.&rdquo; — Minister Helen McEntee
            </p>
          </Callout>

          {/* Non-alignment means / doesn't mean */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-forest)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '8px' }}>NON-ALIGNMENT MEANS</div>
              <ul style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.6, paddingLeft: '16px', margin: 0 }}>
                <li>No NATO membership</li>
                <li>No foreign bases</li>
                <li>No offensive operations</li>
              </ul>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '8px' }}>DOES NOT MEAN</div>
              <ul style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.6, paddingLeft: '16px', margin: 0 }}>
                <li>Can&apos;t monitor airspace</li>
                <li>Can&apos;t patrol own waters</li>
                <li>Can&apos;t defend infrastructure</li>
              </ul>
            </div>
          </div>

          <p style={p}>
            75% of the Irish public supports neutrality as currently understood. This explainer does not argue for or against that position. It argues that the public should understand what Ireland&apos;s actual position is — which is non-alignment, not neutrality — and what it does and does not require.
          </p>
          <div style={{ marginTop: '16px', padding: '14px 18px', backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 6%, var(--color-cream))', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
              <strong>Go deeper:</strong> <Link href="/publications/neutrality-institutional-architecture" style={{ color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)' }}>Neutrality as Institutional Architecture</Link> examines how every other non-aligned European state understood neutrality as requiring defence capability — and why Ireland is the sole exception.
            </p>
          </div>
        </Expandable>

        {/* ── 5. Other Neutral Countries ── */}
        <Expandable num="05" title="What Do Other Non-Aligned Countries Do?" readTime="5 min read">
          <p style={p}>
            Ireland is often described as one of Europe&apos;s neutral countries. But when you compare Ireland to the other states that share its position, the differences are dramatic.
          </p>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '11px', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-forest)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Country</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Capability</th>
                  <th style={{ textAlign: 'right', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Reserve</th>
                  <th style={{ textAlign: 'right', padding: '10px 8px', color: 'var(--color-ink)', fontWeight: 600 }}>Spend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: 'Switzerland', status: 'Neutral since 1815', capability: 'Universal conscription, integrated air defence, domestic arms industry, PESCO participant', reserve: '140,000', spend: '0.7%', color: 'var(--color-forest)' },
                  { country: 'Austria', status: 'Neutral since 1955', capability: 'Eurofighter Typhoons, EU battlegroups, 16,000 active personnel', reserve: '150,000', spend: '0.8%', color: 'var(--color-forest)' },
                  { country: 'Finland', status: 'Non-aligned → NATO 2023', capability: '280,000 reserve, total defence concept, integrated air defence, F-35 on order', reserve: '280,000', spend: '2.4%', color: 'var(--color-fern)' },
                  { country: 'Sweden', status: 'Non-aligned → NATO 2024', capability: 'Gripen fighter, world-class submarines, comprehensive defence industry', reserve: '32,000', spend: '2.2%', color: 'var(--color-fern)' },
                  { country: 'Ireland', status: 'Non-aligned', capability: 'No radar, no air defence, no armed navy, no anti-submarine, no fighter aircraft', reserve: '1,600', spend: '0.2%', color: 'var(--color-terracotta)' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-rule)', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: row.color }}>{row.country}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', fontSize: '10px' }}>{row.status}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-ink)', fontFamily: 'var(--font-serif)', fontSize: '12px', lineHeight: 1.4 }}>{row.capability}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', textAlign: 'right' }}>{row.reserve}</td>
                    <td style={{ padding: '10px 8px', color: row.color, textAlign: 'right', fontWeight: 600 }}>{row.spend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              Ireland is the only non-aligned European state that treated non-alignment as a reason <em>not</em> to build capability. Every other non-aligned state took the opposite conclusion.
            </p>
          </Callout>
        </Expandable>

        {/* ── 6. Triple Lock ── */}
        <Expandable num="06" title="What Is the Triple Lock?" readTime="4 min read">
          <p style={p}>
            The Triple Lock is the mechanism that governs when Irish troops can be deployed overseas. Three requirements must all be met:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { num: '1', label: 'UN Authorisation', desc: 'A UN Security Council resolution, General Assembly resolution, or recognised regional organisation mandate.' },
              { num: '2', label: 'Government Approval', desc: 'The Cabinet must approve the deployment.' },
              { num: '3', label: 'Dáil Approval', desc: 'The Irish parliament must vote to authorise the deployment.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--color-fern)', lineHeight: 1 }}>{item.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={p}>
            The 2023 reform expanded the first condition: a UN General Assembly or regional organisation resolution can now substitute for a Security Council mandate, removing the problem of Russian or Chinese vetoes blocking authorisation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-fern)', marginBottom: '8px' }}>TRIPLE LOCK COVERS</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>Overseas deployments, peacekeeping missions, crisis management operations</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '8px' }}>DOES NOT COVER</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>Domestic defence, maritime patrol, radar, cyber operations, intelligence</p>
            </div>
          </div>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: WHAT IRELAND ACTUALLY DOES
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 3</div>
        <h2 style={sectionH2}>What Ireland Actually Does</h2>

        {/* ── 7. Peacekeeping ── */}
        <Expandable num="07" title="Ireland&rsquo;s Peacekeeping Record" readTime="4 min read">
          <p style={p}>
            Ireland has one of the longest and most respected peacekeeping records of any country in the world. Since 1958, over 70,000 individual deployments have taken place.
          </p>

          <Stats items={[
            { value: '70,000+', label: 'Deployments since 1958', color: 'var(--color-forest)' },
            { value: '88', label: 'Killed on overseas service', color: 'var(--color-terracotta)' },
            { value: '1978–now', label: 'UNIFIL Lebanon', color: 'var(--color-fern)' },
          ]} />

          <Timeline events={[
            { year: '1960', text: 'First UN mission — the Congo. 26 Irish soldiers killed, including the Siege of Jadotville.' },
            { year: '1964', text: 'Cyprus (UNFICYP). Long-running commitment.' },
            { year: '1978', text: 'UNIFIL begins in Lebanon — Ireland\'s longest continuous overseas deployment.', highlight: true },
            { year: '1999', text: 'East Timor (INTERFET). Kosovo (KFOR).' },
            { year: '2008', text: 'Chad (EUFOR). First EU-led mission with significant Irish contribution.' },
            { year: '2013', text: 'Mali (EUTM). Training mission in the Sahel.' },
            { year: '2024', text: 'UNIFIL crisis — Israeli military operations near Irish positions in Lebanon.', highlight: true },
          ]} />

          <p style={{ ...p, marginTop: '20px' }}>
            Peacekeeping builds interpersonal skills, patrol discipline, and multinational coordination. It does not build maritime domain awareness, cyber defence, air defence, or anti-submarine capability. The question is whether peacekeeping alone is sufficient for a state with 880,000 km² of ocean and 20 transatlantic data cables in its waters.
          </p>
        </Expandable>

        {/* ── 8. PESCO ── */}
        <Expandable num="08" title="What Is PESCO?" readTime="5 min read">
          <p style={p}>
            PESCO stands for Permanent Structured Cooperation — the EU&apos;s framework for member states to jointly develop defence capabilities. Twenty-six of 27 EU states participate (Malta is the exception). Ireland joined in 2017.
          </p>

          <DonutChart
            label="7/68"
            segments={[
              { value: 7, color: 'var(--color-fern)', label: 'Irish projects (7)' },
              { value: 61, color: 'var(--color-parchment)', label: 'Other PESCO projects (61)' },
            ]}
          />

          <div style={{ marginTop: '20px', marginBottom: '16px' }}>
            {[
              { name: 'Maritime Surveillance', domain: 'Maritime', color: 'var(--color-forest)' },
              { name: 'Upgrade of Maritime Surveillance', domain: 'Maritime', color: 'var(--color-forest)' },
              { name: 'Critical Seabed Infrastructure Protection', domain: 'Subsea', color: 'var(--color-forest)' },
              { name: 'Cyber Threats & Incident Response', domain: 'Cyber', color: 'var(--color-terracotta)' },
              { name: 'Cyber Rapid Response Teams', domain: 'Cyber', color: 'var(--color-terracotta)' },
              { name: 'Network of Logistic Hubs', domain: 'Logistics', color: 'var(--color-copper)' },
              { name: 'EU Radio Navigation Solution', domain: 'Infrastructure', color: 'var(--color-fern)' },
            ].map((proj, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 14px', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)', borderLeft: `3px solid ${proj.color}` }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: proj.color, width: '80px', flexShrink: 0 }}>{proj.domain}</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-ink)' }}>{proj.name}</span>
              </div>
            ))}
          </div>

          <p style={p}>
            Ireland has not joined tank programmes or fighter-jet consortia. It joined the projects that address the domains where Ireland&apos;s geography matters most. PESCO comes with binding commitments — states must increase investment and develop capabilities jointly. A strategic review in 2026 will determine whether Ireland&apos;s domain-specific model is recognised as a strategy or a limitation. Notably, Switzerland — neutral since 1815 — has joined a PESCO project.
          </p>

          <Link href="/publications/pesco-strategic-review-brief" style={readMore}>
            Read more: PESCO Strategic Review Brief →
          </Link>
        </Expandable>

        {/* ── 9. NATO ── */}
        <Expandable num="09" title="What Is Ireland&rsquo;s Relationship with NATO?" readTime="4 min read">
          <p style={p}>
            Ireland is not a member of NATO and there are no current plans to join. 75% of the public supports non-alignment. This explainer is not arguing Ireland should join. It is explaining what Ireland&apos;s actual relationship with NATO is — which is more extensive than most people realise.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '20px' }}>
            {[
              { year: '1999', label: 'Partnership for Peace (PfP)', desc: 'Framework for cooperation with non-member states. Training, exercises, interoperability. 20 states participate including Austria and Switzerland.' },
              { year: '2024', label: 'Individually Tailored Partnership (ITPP)', desc: 'Structured partnership in maritime security, cyber defence, interoperability. Ireland chooses which activities to participate in.' },
              { year: 'Ongoing', label: 'Operational cooperation', desc: 'Irish peacekeepers in UNIFIL operate alongside NATO militaries. Interoperability is a practical necessity for the role Ireland already performs.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-sage)', borderBottom: i < 2 ? '1px solid var(--color-rule)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-forest)' }}>{item.year}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--color-ink)' }}>{item.label}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-fern)', marginBottom: '8px' }}>WHAT ITPP MEANS</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>Training access, interoperability standards, information sharing</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '8px' }}>WHAT IT DOES NOT MEAN</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>No Article 5, no collective defence, no NATO bases, no alliance membership</p>
            </div>
          </div>
        </Expandable>

        {/* ── 10. Cork MoU ── */}
        <Expandable num="10" title="What Is the Cork MoU?" readTime="4 min read">
          <p style={p}>
            In March 2026, Ireland and the United Kingdom signed a Memorandum of Understanding on defence cooperation at the Cork Summit. This is the first formal framework for bilateral defence cooperation between the two states.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '20px' }}>
            {['Maritime patrol', 'Cyber defence', 'Air domain', 'Subsea protection', 'Joint exercises', 'Joint procurement', 'Training'].map((d, i) => (
              <div key={i} style={{ padding: '12px 14px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600, color: 'var(--color-forest)' }}>{d}</span>
              </div>
            ))}
          </div>

          <p style={p}>
            Why it matters: Ireland&apos;s security has always depended on cooperation with the UK — but until Cork, this was informal, unacknowledged, and in some cases secret. When hostile aircraft approach Irish airspace, the RAF intercepts them under an arrangement with no treaty basis. The Cork MoU begins to turn these dependencies into structured cooperation with governance and transparency.
          </p>
          <p style={p}>
            Every domain in the Cork MoU maps to a PESCO project Ireland participates in. Bilateral and European cooperation complement rather than compete. Joint exercises are planned for September 2026.
          </p>

          <Link href="/publications/maritime-security-framework" style={readMore}>
            Read more: The UK–Ireland Security Interface →
          </Link>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: WHY THIS MATTERS NOW
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 4</div>
        <h2 style={sectionH2}>Why This Matters Now</h2>

        {/* ── 11. Threats ── */}
        <Expandable num="11" title="What Are the Actual Threats to Ireland?" readTime="5 min read">
          <p style={p}>
            Ireland is not going to be invaded. The threats Ireland faces are different — and in some ways more difficult to defend against.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {[
              { threat: 'Subsea cable interference', desc: 'Three-quarters of northern hemisphere data cables lie in or near Irish waters. Russian naval vessels have been documented near Irish cable routes. Ireland has no capability to monitor or protect subsea infrastructure.', color: 'var(--color-terracotta)' },
              { threat: 'Cyber attack', desc: 'The 2021 HSE ransomware attack cost hundreds of millions. Ireland hosts EU HQs of Google, Meta, Apple, Microsoft. A cyber attack on Irish-hosted systems affects the entire Union.', color: 'var(--color-terracotta)' },
              { threat: 'Hybrid threats', desc: 'Disinformation, election interference, sabotage below the threshold of military response. Russian disinformation has targeted Irish social media. An Oireachtas member was alleged to be working for Russia in 2024.', color: 'var(--color-copper)' },
              { threat: 'Airspace incursion', desc: 'Russian military aircraft have been intercepted in or near Irish airspace — by the RAF, not the Air Corps. Ireland cannot detect them. Primary radar is targeting 2028.', color: 'var(--color-copper)' },
              { threat: 'Energy infrastructure', desc: 'The Single Electricity Market couples Ireland and Northern Ireland. The Celtic Interconnector to France arrives by 2027. Disruption propagates across borders in real time.', color: 'var(--color-fern)' },
            ].map((t, i) => (
              <div key={i} style={{ padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: `3px solid ${t.color}`, borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: t.color, marginBottom: '4px' }}>{t.threat}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0, maxWidth: '560px' }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <p style={p}>
            Geography makes Ireland a target whether or not it has a military. The Atlantic EEZ, the subsea cable network, and the tech-sector concentration create vulnerabilities that exist regardless of Ireland&apos;s political choices.
          </p>
        </Expandable>

        {/* ── 12. EU Presidency ── */}
        <Expandable num="12" title="What Is the EU Presidency and Why Does It Matter?" readTime="5 min read">
          <p style={p}>
            From July to December 2026, Ireland holds the rotating Presidency of the Council of the European Union. Ireland sets the agenda, chairs working groups, and brokers compromises on EU legislation — including defence.
          </p>

          <Stats items={[
            { value: '€800bn', label: 'ReArm Europe target', color: 'var(--color-terracotta)' },
            { value: '€150bn', label: 'SAFE loans', color: 'var(--color-terracotta)' },
            { value: '€1.5bn', label: 'EDIP grants', color: 'var(--color-fern)' },
            { value: '0.2%', label: 'Ireland defence/GDP', color: 'var(--color-terracotta)' },
          ]} />

          <p style={p}>
            This Presidency is different because the largest defence spending programme in EU history is being decided during Ireland&apos;s term. The rules for SAFE and EDIP determine whether Ireland&apos;s kind of contribution — maritime, subsea, cyber — qualifies for EU funding. Ireland chairs these discussions while spending the least of anyone.
          </p>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The rules being written during Ireland&apos;s term will govern EU defence cooperation for the rest of the decade. They are not revised annually. The Presidency is the window.
            </p>
          </Callout>

          <Link href="/eu-presidency" style={readMore}>
            Read more: EU Presidency 2026 →
          </Link>
        </Expandable>

        {/* ── 13. Self-defence ── */}
        <Expandable num="13" title="What Would Ireland Need to Defend Itself?" readTime="5 min read">
          <p style={p}>
            The Commission on the Defence Forces defined LOA 3 — the first level at which Ireland could defend itself. Here is what that would require, in plain language:
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
          <p style={note}>Source: Commission on the Defence Forces (2022), Security Ireland estimates.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px', marginBottom: '16px' }}>
            {[
              { item: 'Primary radar', detail: 'Detect aircraft entering Irish airspace. Programme targeting 2028. Currently relies on UK.' },
              { item: 'Ground-based air defence', detail: 'Surface-to-air missiles. Ireland has none. Fighter jet capability explored but undecided.' },
              { item: 'Armed naval vessels', detail: 'Patrol ships with functioning main armament. Current fleet weapons not operational.' },
              { item: 'Anti-submarine detection', detail: 'Sensors to detect submarine activity. Russian submarines transit Irish waters regularly.' },
              { item: 'Unified intelligence agency', detail: 'Currently split across IMIS (military), Garda CSB (police), NCSC (cyber). Programme for Government commits to reform.' },
              { item: 'Counter-drone capability', detail: 'Detect and neutralise hostile drones. Portugal provided drone defence during Zelensky\'s 2025 visit.' },
              { item: 'Personnel above establishment', detail: '7,531 serving vs 9,739 authorised. Not enough to staff existing platforms, let alone new ones.' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 14px', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', minWidth: '160px' }}>{c.item}</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.4 }}>{c.detail}</span>
              </div>
            ))}
          </div>

          <Callout color="var(--color-terracotta)">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The entire LOA 3 transformation could be funded from a fraction of Ireland&apos;s annual budget surplus (€42bn over 2022–24). The barrier is not money. It is institutional capacity to absorb transformation.
            </p>
          </Callout>
        </Expandable>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: THE DEBATE
         ═══════════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 8px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 5</div>
        <h2 style={sectionH2}>The Debate</h2>

        {/* ── 14. Free-Rider ── */}
        <Expandable num="14" title="The Free-Rider Question" readTime="5 min read">
          <p style={p}>
            The accusation is straightforward: Ireland benefits from European and British security without contributing its fair share. The RAF intercepts Russian aircraft over Ireland. The Royal Navy monitors approaches. The EU provides the institutional architecture within which Ireland prospers. And Ireland pays the least of anyone.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <div style={{ padding: '18px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-terracotta)', marginBottom: '8px' }}>THE SPENDING CASE</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>0.2% of GDP. Lowest in EU. Protected by Article 42.7 while contributing minimally. Airspace defended by RAF. Maritime approaches monitored by UK/NATO.</p>
            </div>
            <div style={{ padding: '18px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--color-fern)', marginBottom: '8px' }}>THE CONTRIBUTION CASE</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5, margin: 0 }}>70,000+ peacekeeping deployments. 7 PESCO projects. €350m to European Peace Facility. ITPP membership. Cork MoU. EU data infrastructure host. Record €1.5bn budget.</p>
            </div>
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              The honest answer: both sides are partly right. Ireland contributes more than the 0.2% number suggests. But it contributes less than its geographic position, economic capacity, and security environment demand.
            </p>
          </Callout>

          <p style={p}>
            The free-rider accusation will not be resolved by spending alone — Ireland will never compete with France or Germany. It can be addressed by demonstrating structured contribution in the domains where Ireland&apos;s geography is irreplaceable: maritime surveillance, subsea infrastructure protection, and cyber resilience. The EU Presidency is the window in which to make this case.
          </p>
        </Expandable>

        {/* ── 15. Options ── */}
        <Expandable num="15" title="What Are the Options?" readTime="5 min read">
          <p style={p}>
            The public debate is often stuck between two positions: join NATO or do nothing. Neither is useful. There are at least four real options.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {[
              { option: 'Option 1: Stay approximately the same', desc: 'Continue incremental improvements without fundamental change. The risk: Ireland remains vulnerable, the free-rider accusation persists, the Presidency opportunity is missed, and the gap with partners widens.', color: 'var(--color-terracotta)' },
              { option: 'Option 2: Build domain-specific capability', desc: 'Invest in maritime surveillance, subsea monitoring, and cyber resilience within non-alignment. No NATO. No offensive capability. Lock in a permanent EU security role based on geography. This is the approach the government is currently pursuing.', color: 'var(--color-forest)' },
              { option: 'Option 3: Join NATO', desc: 'Full collective defence commitment. Not on the political horizon — 75% public opposition. Would require higher spending (target now 3.5%+), Article 5 commitment, and a fundamental change in Ireland\'s international identity. Finland and Sweden joined in 2023–24.', color: 'var(--color-sage)' },
              { option: 'Option 4: Something else', desc: 'A Nordic-style total defence concept. A Swiss-style militia model. A bilateral framework with the UK and EU simultaneously. The institutional design space is wider than the public debate suggests.', color: 'var(--color-copper)' },
            ].map((o, i) => (
              <div key={i} style={{ padding: '20px 24px', backgroundColor: 'var(--color-parchment)', borderLeft: `4px solid ${o.color}`, borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: o.color, marginBottom: '6px' }}>{o.option}</div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0, maxWidth: '560px' }}>{o.desc}</p>
              </div>
            ))}
          </div>

          <Callout>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
              Security Ireland does not advocate for a specific option. We provide the analysis that allows policymakers and the public to make informed decisions. The choice is yours.
            </p>
          </Callout>

          <div style={{ marginTop: '16px' }}>
            <Link href="/publications" style={readMore}>
              Explore all Security Ireland publications →
            </Link>
          </div>
        </Expandable>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ borderTop: '1px solid var(--color-rule)', marginTop: '24px' }}>
        <Newsletter />
      </section>
    </div>
  );
}
