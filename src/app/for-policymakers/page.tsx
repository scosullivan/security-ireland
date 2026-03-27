import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'For Policymakers — Security Ireland',
  description: 'Analysis for decisions, not commentary for debate. Written to be cited in ministerial briefings, Council working groups, and Oireachtas committee sessions.',
};

/* ── Shared styles ── */
const sectionIntro = {
  fontFamily: 'var(--font-serif)',
  fontSize: '15px',
  color: 'var(--color-graphite)',
  lineHeight: 1.75,
  maxWidth: '600px',
  marginBottom: '28px',
} as const;

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
  fontWeight: 400,
  color: 'var(--color-ink)',
  marginBottom: '8px',
} as const;

const audienceNote = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  fontStyle: 'italic' as const,
  color: 'var(--color-stone)',
  marginBottom: '16px',
};

/* ── Publication card component ── */
function PubCard({ title, type, desc, href, status = 'complete' }: {
  title: string; type: string; desc: string; href?: string; status?: 'complete' | 'forthcoming';
}) {
  const isComplete = status === 'complete' && href;
  return (
    <div style={{
      padding: '20px 24px',
      backgroundColor: 'var(--color-parchment)',
      borderLeft: isComplete ? '3px solid var(--color-forest)' : '3px solid var(--color-rule)',
      borderRadius: '2px',
      opacity: isComplete ? 1 : 0.7,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: isComplete ? 'var(--color-fern)' : 'var(--color-stone)' }}>
          {type}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: '0 0 12px', maxWidth: '560px' }}>
        {desc}
      </p>
      {isComplete ? (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href={href} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-forest)', textDecoration: 'none', borderBottom: '1px solid var(--color-forest)', paddingBottom: '1px' }}>
            Read brief →
          </Link>
        </div>
      ) : (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)' }}>
          {desc.includes('Q3') ? 'Coming Q3 2026' : desc.includes('Q4') ? 'Coming Q4 2026' : 'Coming 2027'}
        </span>
      )}
    </div>
  );
}

/* ── Forthcoming card ── */
function ForthcomingCard({ title, type, desc, coming }: {
  title: string; type: string; desc: string; coming: string;
}) {
  return (
    <div style={{
      padding: '20px 24px',
      backgroundColor: 'var(--color-cream)',
      borderLeft: '3px solid var(--color-rule)',
      borderRadius: '2px',
      opacity: 0.75,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-graphite)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
          {type}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', lineHeight: 1.65, margin: '0 0 10px', maxWidth: '560px' }}>
        {desc}
      </p>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)', fontStyle: 'italic' }}>
        {coming}
      </span>
    </div>
  );
}

/* ── Recommendations table data ── */
const recommendations = [
  { num: 1, action: 'Apply for SAFE loans for maritime and cyber procurement', brief: 'ReArm', owner: "Minister\u2019s office", deadline: 'Before Jul 2026' },
  { num: 2, action: 'Ensure EDIP implementing rules recognise technology contribution', brief: 'ReArm', owner: 'Dept of Defence / ITRE', deadline: 'Oct 2026' },
  { num: 3, action: 'Table SAFE Phase 2 preferential terms for joint procurement', brief: 'ReArm', owner: 'DFA Presidency team', deadline: 'Sep 2026' },
  { num: 4, action: 'Draft MFF framework text naming maritime, subsea, cyber as priorities', brief: 'ReArm', owner: 'GAC / European Council', deadline: 'Dec 2026' },
  { num: 5, action: "Draft \u2018domain excellence\u2019 pathway for PESCO binding commitments", brief: 'PESCO', owner: 'DFA / EEAS working group', deadline: 'Sep 2026' },
  { num: 6, action: 'Link PESCO participation to EDIP/SAFE preferential terms', brief: 'PESCO', owner: 'DFA / Dept of Defence', deadline: 'Oct 2026' },
  { num: 7, action: 'Push Council recommendation to consolidate PESCO projects', brief: 'PESCO', owner: 'Foreign Affairs Council', deadline: 'Nov 2026' },
  { num: 8, action: "Broker Ukraine\u2019s participation in maritime and cyber PESCO projects", brief: 'PESCO', owner: 'Dept of Defence / EEAS', deadline: 'Dec 2026' },
  { num: 9, action: 'Propose hosting the Atlantic CISE maritime data node', brief: 'Maritime', owner: 'DFA / Dept of Defence / EMSA', deadline: 'Sep 2026' },
  { num: 10, action: 'Ensure Irish cable routes designated as CPEIs', brief: 'Maritime', owner: 'DECC / DFA / Cable Expert Group', deadline: 'Oct 2026' },
  { num: 11, action: 'Shape EUMSS progress report Council conclusions', brief: 'Maritime', owner: 'DFA Presidency team / EEAS', deadline: 'Oct 2026' },
  { num: 12, action: 'Embed maritime surveillance in MFF framework text', brief: 'Maritime', owner: 'GAC / European Council', deadline: 'Dec 2026' },
  { num: 13, action: 'Lead implementation of March 2026 hybrid threat conclusions', brief: 'Hybrid', owner: 'DFA / EEAS / Hybrid CoE', deadline: 'Jul\u2013Dec 2026' },
  { num: 14, action: 'Host Presidency cybersecurity crisis exercise', brief: 'Hybrid', owner: 'Dept of Defence / NCSC / ENISA', deadline: 'Oct 2026' },
  { num: 15, action: 'Ensure EDIP recognises cyber and AI as eligible participation', brief: 'Hybrid', owner: 'DFA / ITRE working group', deadline: 'Oct 2026' },
  { num: 16, action: 'Draft MFF framework text naming cyber resilience as priority', brief: 'Hybrid', owner: 'GAC / European Council', deadline: 'Dec 2026' },
];

const briefColors: Record<string, string> = {
  'ReArm': 'var(--color-terracotta)',
  'PESCO': 'var(--color-fern)',
  'Maritime': 'var(--color-forest)',
  'Hybrid': 'var(--color-copper)',
};

export default function ForPolicymakers() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={sectionLabel}>For Policymakers</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Analysis for decisions, not commentary for debate
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '20px' }}>
          Every publication below was written to be cited in a ministerial briefing, used in a Council working group, or referenced in an Oireachtas committee session. If it isn&apos;t useful, we haven&apos;t done our job.
        </p>
      </section>

      {/* ── SECTION 1: START HERE ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Start Here</div>
        <h2 style={sectionH2}>The Strategic Picture</h2>
        <p style={sectionIntro}>
          Ireland faces a convergence of security demands without precedent: an EU Council Presidency that includes the largest defence spending programme in EU history, a bilateral security architecture with the UK being operationalised for the first time, and an institutional system at a fifty-year low. These three papers explain why the system is configured the way it is.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <PubCard
            title="Europe&rsquo;s Defence Problem Isn&rsquo;t Spending"
            type="Research Paper · Complete"
            desc="€800 billion cannot convert to capability without coordination architecture. Twenty-seven procurement systems produce fragmented demand and US dependency. The argument Ireland needs as the lowest-spending state chairing defence budget discussions."
            href="/publications/eu-presidency-defence-agenda"
            status="complete"
          />
          <PubCard
            title="Ireland&rsquo;s Defence Problem Isn&rsquo;t Neutrality"
            type="Research Paper · Complete"
            desc="Ireland&rsquo;s institutional system is architecturally configured for the absence of military capability across five reinforcing layers. The constraint is bandwidth, not budget. The honest diagnosis the Commission on Defence Forces implies but does not formalise."
            href="/publications/defence-at-a-glance-q1-2026"
            status="complete"
          />
        </div>
      </section>

      {/* ── SECTION 2: EU PRESIDENCY ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>The EU Presidency</div>
        <h2 style={sectionH2}>Five briefs. Four instruments. One strategy.</h2>
        <div style={audienceNote}>
          For DFA Presidency team, McEntee&apos;s office, permanent representation in Brussels, Council working group delegates.
        </div>
        <p style={sectionIntro}>
          Ireland chairs the Council of the EU from July to December 2026. During these six months, the rules governing EU defence funding, defence cooperation, maritime surveillance, and cyber resilience are being written. These briefs identify the specific actions that lock in Ireland&apos;s permanent role — and the cost of chairing passively.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          <PubCard
            title="Primer: The Agenda Ireland Must Steer"
            type="Presidency Desk · Primer"
            desc="The complete map of every EU security and defence dossier on the Presidency desk. Explains why Ireland&rsquo;s lanes are maritime, subsea, and cyber — not air defence or ground combat. Shows how the four briefs interlock as a single strategy. Start here."
            href="/publications/presidency-desk-primer"
          />
          <PubCard
            title="Brief 1: ReArm Europe — What Ireland Should Lock In"
            type="Presidency Desk · Brief 1 of 4"
            desc="SAFE (€150bn), EDIP (€1.5bn), and the next MFF defence chapter. If the rules reward only large-scale military procurement, Ireland is excluded. If they recognise domain-specific contribution, Ireland&rsquo;s geographic assets become fundable."
            href="/publications/rearm-europe-brief"
          />
          <PubCard
            title="Brief 2: PESCO Strategic Review — What Ireland Should Lock In"
            type="Presidency Desk · Brief 2 of 4"
            desc="The strategic review is rewriting PESCO&rsquo;s binding commitments. Ireland&rsquo;s 7 projects — all in maritime, cyber, and logistics — are the institutional evidence of its contribution. The revised framework either formalises Ireland&rsquo;s model or penalises it."
            href="/publications/pesco-strategic-review-brief"
          />
          <PubCard
            title="Brief 3: Maritime Surveillance Cooperation"
            type="Presidency Desk · Brief 3 of 4"
            desc="880,000 km² of Atlantic EEZ. CISE membership since April 2025. The EUMSS progress report due October 2026. The EU Cable Action Plan investing €1 billion. Ireland should be leading the Atlantic basin response — not consuming data others provide."
            href="/publications/maritime-surveillance-cooperation-brief"
          />
          <PubCard
            title="Brief 4: Hybrid Threats &amp; Cyber Defence"
            type="Presidency Desk · Brief 4 of 4"
            desc="Ireland hosts the EU HQs of most major American tech companies. A cyber attack on Irish-hosted systems affects the entire Union. The EU Hybrid Toolbox was updated in March 2026. Ireland will chair its implementation."
            href="/publications/hybrid-threats-cyber-defence-brief"
          />
        </div>

        {/* ── 16 RECOMMENDATIONS TABLE ── */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px' }}>
            All 16 Presidency recommendations
          </h3>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '11px', minWidth: '640px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-forest)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', letterSpacing: '0.5px', fontWeight: 600 }}>#</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', letterSpacing: '0.5px', fontWeight: 600 }}>Action</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', letterSpacing: '0.5px', fontWeight: 600 }}>Brief</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', letterSpacing: '0.5px', fontWeight: 600 }}>Owner</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', color: 'var(--color-ink)', letterSpacing: '0.5px', fontWeight: 600 }}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((r, i) => (
                  <tr key={r.num} style={{ borderBottom: '1px solid var(--color-rule)', backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)' }}>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', fontWeight: 600 }}>{r.num}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-ink)', fontFamily: 'var(--font-serif)', fontSize: '13px', lineHeight: 1.4 }}>{r.action}</td>
                    <td style={{ padding: '10px 8px', whiteSpace: 'nowrap' }}>
                      <span style={{ color: briefColors[r.brief] || 'var(--color-graphite)', fontWeight: 600 }}>{r.brief}</span>
                    </td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', fontSize: '10px' }}>{r.owner}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--color-graphite)', whiteSpace: 'nowrap' }}>{r.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', fontStyle: 'italic', color: 'var(--color-stone)', marginTop: '12px', lineHeight: 1.5 }}>
            Note: Recommendations 2 and 15 are the same ask applied in two different Council configurations. Recommendations 4, 12, and 16 all target the same MFF framework text. The briefs interlock.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: UK–IRELAND ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>UK–Ireland Security Cooperation</div>
        <h2 style={sectionH2}>The bilateral track</h2>
        <div style={audienceNote}>
          For DFA bilateral relations, Dept of Defence, officials working on Cork MoU implementation, Northern Ireland Office, NSMC.
        </div>
        <p style={sectionIntro}>
          The Cork Summit of March 2026 operationalised UK–Ireland security cooperation for the first time. These papers provide the analytical architecture the MoU itself lacks — explaining why bilateral and EU tracks complement rather than compete, and how cross-border operational coordination can work within GFA constraints.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <PubCard
            title="Ireland&rsquo;s Layered Security Cooperation Model"
            type="Research Paper · Complete"
            desc="How bilateral, EU, and NATO-adjacent cooperation tracks compound rather than compete. Maps the institutional mechanics of capability transfer from Cork MoU operations through to PESCO frameworks, identifies the friction points, and tests whether the model is replicable for non-aligned EU member states."
            href="/publications/layered-security-cooperation"
            status="complete"
          />
          <PubCard
            title="The UK–Ireland Security Interface"
            type="Working Paper 1 · Complete"
            desc="The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. The free-riding equilibrium has collapsed. Bilateral cooperation strengthens — not undermines — Ireland&rsquo;s EU commitments."
            href="/publications/maritime-security-framework"
          />
          <PubCard
            title="The GFA and the Security Gap"
            type="Working Paper 2 · Complete"
            desc="The 1998 security firewall was deliberate, not accidental. External threats are categorically different from the internal threats the firewall was designed to manage. Strand Two has a bounded forward-looking role in infrastructure-focused security coordination."
            href="/publications/good-friday-agreement-security"
          />
          <ForthcomingCard
            title="North/South Security Implementation Protocol"
            type="Implementation Document · Forthcoming"
            desc="Extracts the operational detail from Working Paper 2 into a standalone protocol for cross-border officials: energy infrastructure security, transport resilience, maritime environmental monitoring, and cyber resilience coordination."
            coming="Coming Q3 2026"
          />
        </div>
      </section>

      {/* ── SECTION 4: DOMESTIC CAPABILITY ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Building Domestic Capability</div>
        <h2 style={sectionH2}>The transformation the spending enables</h2>
        <div style={audienceNote}>
          For Dept of Defence, Chief of Staff, Defence Forces strategic planning, National Security Committee, Oireachtas Committee on Defence.
        </div>
        <p style={sectionIntro}>
          Ireland has committed to reaching Level of Ambition 2 by 2028: primary radar, improved naval capacity, a counter-drone system, and a reformed reserve. The constraint is not budget — Ireland could fund LOA 3 from a single year&apos;s surplus. The constraint is institutional bandwidth. These papers address the transformation the spending enables.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <ForthcomingCard
            title="Ireland&rsquo;s Defence Industrial Architecture"
            type="Policy Framework · Forthcoming"
            desc="Can Ireland develop a defence industrial base? The government is removing restrictions on Enterprise Ireland&rsquo;s dual-use engagement. This paper analyses what institutional prerequisites are missing and what bounded role Irish industry can play within European defence production."
            coming="Coming Q4 2026"
          />
          <ForthcomingCard
            title="Intelligence Architecture Reform"
            type="Policy Framework · Forthcoming"
            desc="Ireland&rsquo;s intelligence architecture — split between military (J2/IMIS), police (Garda CSB), and cyber (NCSC) — is unique in Europe. Every comparable state has unified intelligence. This paper examines what a unified national intelligence structure would look like."
            coming="Coming 2027"
          />
          <ForthcomingCard
            title="The LOA Transition Architecture"
            type="Policy Framework · Forthcoming"
            desc="What institutional transformation — not just spending — is required to move from LOA 1 to LOA 2? Fifty-four of 130 Commission on Defence Forces recommendations completed in four years. The rate is slowing."
            coming="Coming 2027"
          />
        </div>
      </section>

      {/* ── SECTION 5: REFRAMING THE DEBATE ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Reframing the Debate</div>
        <h2 style={sectionH2}>Beyond &ldquo;join NATO or do nothing&rdquo;</h2>
        <div style={audienceNote}>
          For Taoiseach&apos;s office, public affairs, anyone who needs to articulate Ireland&apos;s security position without abandoning its constitutional position.
        </div>
        <p style={sectionIntro}>
          Minister McEntee&apos;s formulation — &ldquo;militarily non-aligned but not neutral to threats&rdquo; — needs an analytical framework. The public debate is stuck between two positions: join NATO or do nothing. Neither is useful. These papers offer a third position grounded in institutional analysis rather than ideology.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <ForthcomingCard
            title="Neutrality as Institutional Architecture"
            type="Research Paper · Forthcoming"
            desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? The deepest structural challenge in Irish security policy."
            coming="Coming 2027"
          />
        </div>
      </section>

      {/* ── SECTION 6: HOW TO USE THIS WORK ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>How to Use This Work</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            {
              who: 'Ministerial offices',
              how: 'Start with the Primer, then read whichever brief covers your active dossier. The 16-recommendation table is the operational reference. Each recommendation names the responsible department and deadline.',
            },
            {
              who: 'Oireachtas members',
              how: 'The two research papers provide the analytical foundation for committee work. The Presidency series provides the specific actions Ireland should take during its term. All publications are designed to be cited in debate.',
            },
            {
              who: 'Officials in Brussels',
              how: 'The Presidency Desk series maps directly to Council working group agendas. Brief 1 covers FAC/ITRE. Brief 2 covers PESCO working groups. Brief 3 covers maritime security. Brief 4 covers cyber and hybrid discussions.',
            },
            {
              who: 'Defence Forces',
              how: 'The capability gap analysis and LOA framework provide the diagnostic. The Presidency briefs show how EU instruments can fund the transition. The forthcoming LOA Transition Architecture addresses the institutional roadmap.',
            },
            {
              who: 'Cross-border officials',
              how: 'Working Papers 1 and 2 provide the analytical framework. The forthcoming Implementation Protocol translates this into operational guidance.',
            },
          ].map((item, i) => (
            <div key={i} style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', borderLeft: '3px solid var(--color-fern)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '8px', letterSpacing: '0.5px' }}>
                {item.who}
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
                {item.how}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: CONTACT ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ ...sectionLabel, margin: '32px 0 8px' }}>Contact &amp; Briefings</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '16px' }}>
          Security Ireland is available for private briefings to government departments, Oireachtas committees, and the permanent representation in Brussels. We do not charge for policy briefings.
        </p>
        <a
          href="mailto:s@sinead.co"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px' }}
        >
          s@sinead.co
        </a>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
