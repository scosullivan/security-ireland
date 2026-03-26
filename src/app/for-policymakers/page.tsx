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
  maxWidth: '620px',
  marginBottom: '28px',
} as const;

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

const tierLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '2.5px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-graphite)',
  fontWeight: 600,
  marginBottom: '10px',
  marginTop: '32px',
};

const readMore = {
  display: 'inline-block' as const,
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-terracotta)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--color-terracotta)',
  paddingBottom: '1px',
};

/* ── Publication card ── */
function PubCard({ title, type, desc, href, pdfUrl }: {
  title: string; type: string; desc: string; href?: string; pdfUrl?: string;
}) {
  return (
    <div style={{
      padding: '20px 24px',
      backgroundColor: 'var(--color-parchment)',
      borderLeft: '3px solid var(--color-forest)',
      borderRadius: '2px',
      marginBottom: '12px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-fern)' }}>
          {type}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: '0 0 12px', maxWidth: '580px' }}>
        {desc}
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {href && (
          <Link href={href} style={readMore}>
            Read brief &rarr;
          </Link>
        )}
        {pdfUrl && (
          <a href={pdfUrl} download style={{ ...readMore, color: 'var(--color-forest)', borderBottomColor: 'var(--color-forest)' }}>
            Download PDF &darr;
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Proposed framework card (visually distinct) ── */
function ProposedCard({ title, type, desc, coming }: {
  title: string; type: string; desc: string; coming: string;
}) {
  return (
    <div style={{
      padding: '20px 24px',
      backgroundColor: 'color-mix(in srgb, var(--color-terracotta) 4%, var(--color-cream))',
      borderLeft: '3px solid var(--color-terracotta)',
      borderRadius: '2px',
      marginBottom: '12px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-terracotta)' }}>
          {type}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: '0 0 10px', maxWidth: '580px' }}>
        {desc}
      </p>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)', fontStyle: 'italic' }}>
        {coming}
      </span>
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
      marginBottom: '12px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-graphite)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
          {type}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', lineHeight: 1.65, margin: '0 0 10px', maxWidth: '580px' }}>
        {desc}
      </p>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)', fontStyle: 'italic' }}>
        {coming}
      </span>
    </div>
  );
}

/* ── Audience pathway card ── */
function PathwayCard({ who, content }: { who: string; content: React.ReactNode }) {
  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', borderLeft: '3px solid var(--color-fern)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '8px', letterSpacing: '0.5px' }}>
        {who}
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6 }}>
        {content}
      </div>
    </div>
  );
}

/* ── 16 Recommendations ── */
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
      {/* ══════════════════════════════════════
          PAGE HEADER
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ ...sectionLabel, margin: '0 0 8px' }}>For Policymakers</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Analysis for decisions, not commentary for debate
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '20px' }}>
          Every publication below was written to be cited in a ministerial briefing, used in a Council working group, or referenced in an Oireachtas committee session. If it isn&apos;t useful, we haven&apos;t done our job.
        </p>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1: HOW TO USE THIS PAGE
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>How to Use This Page</div>
        <p style={sectionIntro}>
          This page contains Security Ireland&apos;s complete body of work for government. It is organised in layers: the strategic foundation, then domestic capability, then bilateral cooperation, then EU instruments. Start with the section that matches your role.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          <PathwayCard who="Ministerial offices" content={
            <p style={{ margin: 0 }}>Start with the <strong>Proposed National Security Strategy Framework</strong> in Section 2 &mdash; it connects every other paper. Then read whichever operational section covers your active dossier. For the Presidency, the <Link href="#presidency" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>Primer in Section 5</Link> maps the full agenda.</p>
          } />
          <PathwayCard who="Oireachtas members" content={
            <p style={{ margin: 0 }}>The two diagnostic papers in <Link href="#foundation" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>Section 2</Link> &mdash; Europe&apos;s Defence Problem and Ireland&apos;s Defence Problem &mdash; provide the analytical foundation for committee work. The 16-recommendation table in Section 5 tracks Presidency actions.</p>
          } />
          <PathwayCard who="Officials in Brussels" content={
            <p style={{ margin: 0 }}>Start with <Link href="#presidency" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>Section 5</Link> (EU Presidency). The Presidency Desk series maps directly to Council working group agendas. Brief 1: FAC/ITRE. Brief 2: PESCO. Brief 3: Maritime. Brief 4: Cyber/hybrid.</p>
          } />
          <PathwayCard who="Defence Forces &amp; Dept of Defence" content={
            <p style={{ margin: 0 }}><Link href="#domestic" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>Section 3</Link> is your primary section &mdash; LOA transition, institutional infrastructure, defence industrial architecture. The spending analysis in Section 2 traces the funding architecture.</p>
          } />
          <PathwayCard who="Cross-border officials" content={
            <p style={{ margin: 0 }}><Link href="#bilateral" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>Section 4</Link> (UK&ndash;Ireland Bilateral) contains Working Papers 1 and 2. Start with <em>The UK&ndash;Ireland Security Interface</em> for the analytical framework, then <em>The GFA and the Security Gap</em> for implementation.</p>
          } />
          <PathwayCard who="European Defence Landscape" content={
            <p style={{ margin: 0 }}>If you need to understand the NATO and EU systems within which Ireland operates before engaging with the Ireland-specific work, start with the <Link href="/european-defence" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>European Defence Landscape page &rarr;</Link></p>
          } />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2: THE STRATEGIC FOUNDATION
         ══════════════════════════════════════ */}
      <section id="foundation" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 2</div>
        <h2 style={sectionH2}>The Strategic Foundation</h2>
        <p style={{ ...sectionIntro, marginBottom: '8px' }}>
          Ireland&apos;s security architecture: the diagnosis, the proposed strategy, and the context.
        </p>
        <p style={sectionIntro}>
          These are the papers with the longest shelf life. The diagnostic papers explain why Ireland&apos;s system is configured the way it is. The proposed frameworks provide what the government has not yet produced: a strategic architecture for Irish defence and security. Everything else on this page is implementation of what these papers establish.
        </p>

        {/* ── Tier 1: The Diagnosis ── */}
        <div style={tierLabel}>The Diagnosis</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '620px' }}>
          Three papers that explain the architecture of the problem before anyone tries to solve it.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <PubCard
            title="Europe&rsquo;s Defence Problem Isn&rsquo;t Spending"
            type="Research Paper · Complete"
            desc="€800 billion cannot convert to capability without coordination architecture. Twenty-seven procurement systems produce fragmented demand and US dependency. The argument Ireland needs as the lowest-spending state chairing defence budget discussions."
            href="/publications/defence-financing-explained"
            pdfUrl="/pdfs/Europes_Defence_Problem_Isnt_Spending.pdf"
          />
          <PubCard
            title="Ireland&rsquo;s Defence Problem Isn&rsquo;t Neutrality"
            type="Research Paper · Complete"
            desc="Ireland&rsquo;s institutional system is architecturally configured for the absence of military capability across five reinforcing layers. The constraint is bandwidth, not budget. The honest diagnosis the Commission on Defence Forces implies but does not formalise."
            href="/publications/loa-transition-architecture"
            pdfUrl="/pdfs/The_LOA_Transition_Architecture.pdf"
          />
          <PubCard
            title="Ireland&rsquo;s Defence &amp; Security Spending"
            type="Research Paper · Complete"
            desc="Where the money comes from (five funding channels), where it goes (seven capability domains), and why the constraint isn&rsquo;t budget. The &euro;1.7 billion capital programme creates procurement demand for the first time &mdash; but a system designed for routine replacement is now running first-generation capability builds."
            href="/publications/ireland-defence-spending"
            pdfUrl="/pdfs/Ireland_Defence_Spending.pdf"
          />
        </div>

        {/* ── Tier 2: Proposed Frameworks ── */}
        <div style={tierLabel}>The Proposed Frameworks</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '620px' }}>
          What Ireland&apos;s defence and security architecture should look like. The strategy and industrial policy frameworks are published; the intelligence architecture proposal is forthcoming.
        </p>

        <PubCard
          title="Proposed National Security Strategy Framework"
          type="Strategic Framework"
          desc="Ireland is one of the few EU states without a published National Security Strategy. This document provides one: the threat assessment, the capability requirements, the institutional architecture, the funding model, and the cooperation frameworks — connected as a single system. Every other paper on this page is a chapter of this document. This is the spine."
          href="/publications/national-security-strategy"
          pdfUrl="/pdfs/National_Security_Strategy_Framework.pdf"
        />
        <PubCard
          title="Defence &amp; Security Industrial Policy"
          type="Policy Framework"
          desc="Ireland has &euro;2.5 billion in emerging defence procurement demand, a world-class technology sector, and no industrial policy connecting the two. This paper proposes the architecture: which domains Ireland should build in, through which instruments, with what institutional prerequisites, on what timeline."
          href="/publications/defence-industrial-policy"
          pdfUrl="/pdfs/Defence_Industrial_Policy.pdf"
        />
        <ProposedCard
          title="Intelligence Architecture: A Proposal for Unification"
          type="Policy Framework · Forthcoming"
          desc="Ireland&rsquo;s intelligence is split across three agencies (J2/IMIS, Garda CSB, NCSC) with no unified structure &mdash; unique in Europe. This paper proposes the target architecture, the legislative pathway, and the phased transition. Intelligence reform is the prerequisite for everything else."
          coming="Coming 2027"
        />

        {/* ── Tier 3: The Context ── */}
        <div style={tierLabel}>The Context</div>

        <ForthcomingCard
          title="Neutrality as Institutional Architecture"
          type="Research Paper · Forthcoming"
          desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? The deepest structural challenge in Irish security policy."
          coming="Coming 2027"
        />

        <div style={{ padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px', marginTop: '8px' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
            <strong>The European Defence Landscape</strong> &rarr; See the dedicated <Link href="/european-defence" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>European Defence Landscape page</Link> for the NATO, EU, and transatlantic context within which Ireland&apos;s strategy operates.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3: BUILDING DOMESTIC CAPABILITY
         ══════════════════════════════════════ */}
      <section id="domestic" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 3</div>
        <h2 style={sectionH2}>Building Domestic Capability</h2>
        <div style={audienceNote}>
          For Dept of Defence, Chief of Staff, Defence Forces strategic planning, National Security Committee, Oireachtas Committee on Defence.
        </div>
        <p style={sectionIntro}>
          Ireland has committed to reaching Level of Ambition 2 by 2028: primary radar, improved naval capacity, a counter-drone system, and a reformed reserve. The constraint is not budget &mdash; Ireland could fund LOA 3 from a single year&apos;s surplus. The constraint is institutional bandwidth: the distance between what the system can currently coordinate and what the transition demands. These papers address the institutional architecture the spending requires.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <PubCard
            title="Building the Institutional Infrastructure"
            type="Policy Framework · Complete"
            desc="The foundational architecture Ireland needs before capability investment can convert to operational capacity. Maps the institutional prerequisites across procurement, workforce, and governance that the Commission on Defence Forces identified but that remain unbuilt."
            href="/publications/building-institutional-infrastructure"
            pdfUrl="/pdfs/Building_the_Institutional_Infrastructure.pdf"
          />
          <PubCard
            title="The LOA Transition Architecture"
            type="Policy Framework · Complete"
            desc="What institutional transformation &mdash; not just spending &mdash; is required to move from LOA 1 to LOA 2? Fifty-four of 130 Commission on Defence Forces recommendations completed in four years. The rate is slowing. This paper provides the institutional roadmap the spending commitment lacks."
            href="/publications/loa-transition-architecture"
            pdfUrl="/pdfs/The_LOA_Transition_Architecture.pdf"
          />
          <PubCard
            title="Ireland&rsquo;s Defence Industrial Architecture"
            type="Policy Framework · Complete"
            desc="Can Ireland develop a defence industrial base? The government is removing restrictions on Enterprise Ireland&rsquo;s dual-use engagement and establishing security clearance processes. This paper analyses what institutional prerequisites are missing and what bounded role Irish industry can play within European defence production."
            href="/publications/defence-industrial-architecture"
            pdfUrl="/pdfs/Irelands_Defence_Industrial_Architecture.pdf"
          />
          <ForthcomingCard
            title="Intelligence Architecture Reform"
            type="Policy Framework · Forthcoming"
            desc="Ireland&rsquo;s intelligence architecture &mdash; split between military (J2/IMIS), police (Garda CSB), and cyber (NCSC) &mdash; is unique in Europe. Every comparable state has unified intelligence. This paper examines what a unified national intelligence structure would look like. The companion &ldquo;Proposal for Unification&rdquo; in Section 2 provides the prescriptive framework."
            coming="Coming 2027"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4: UK–IRELAND BILATERAL
         ══════════════════════════════════════ */}
      <section id="bilateral" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 4</div>
        <h2 style={sectionH2}>The Bilateral Track &mdash; UK&ndash;Ireland</h2>
        <div style={audienceNote}>
          For DFA bilateral relations, Dept of Defence, officials working on Cork MoU implementation, Northern Ireland Office, NSMC.
        </div>
        <p style={{ ...sectionIntro, marginBottom: '8px' }}>
          The Cork Summit of March 2026 operationalised UK&ndash;Ireland security cooperation for the first time. The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. These papers provide the analytical architecture the MoU itself lacks.
        </p>
        <p style={sectionIntro}>
          The bilateral track builds the institutional capacity that makes the EU track credible. Ireland&apos;s PESCO maritime projects are strengthened by bilateral maritime cooperation. The Cork MoU&apos;s cyber cooperation improves Ireland&apos;s standing in PESCO&apos;s Cyber Threats platform. The bilateral track is not an alternative to the EU track &mdash; it is the foundation the EU track requires.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <PubCard
            title="The UK&ndash;Ireland Security Interface"
            type="Working Paper 1 · Complete"
            desc="The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. The free-riding equilibrium has collapsed. Bilateral cooperation strengthens &mdash; not undermines &mdash; Ireland&rsquo;s EU commitments. The Cork MoU validates the transition this paper diagnosed."
            href="/publications/maritime-security-framework"
            pdfUrl="/pdfs/Irelands_Maritime_Security_Framework.pdf"
          />
          <PubCard
            title="The GFA and the Security Gap"
            type="Working Paper 2 · Complete"
            desc="The 1998 security firewall was deliberate, not accidental. External threats (subsea sabotage, cyber attacks, energy disruption) are categorically different from the internal threats the firewall was designed to manage. Strand Two has a bounded forward-looking role in infrastructure-focused security coordination."
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

      {/* ══════════════════════════════════════
          SECTION 5: EU PRESIDENCY
         ══════════════════════════════════════ */}
      <section id="presidency" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 5</div>
        <h2 style={sectionH2}>The EU Presidency</h2>
        <div style={audienceNote}>
          For DFA Presidency team, McEntee&apos;s office, permanent representation in Brussels, Council working group delegates.
        </div>
        <p style={{ ...sectionIntro, marginBottom: '8px' }}>
          Ireland chairs the Council of the EU from July to December 2026. During these six months, the rules governing EU defence funding, defence cooperation, maritime surveillance, and cyber resilience are being written. These briefs identify the specific actions that lock in Ireland&apos;s permanent role &mdash; and the cost of chairing passively.
        </p>
        <p style={sectionIntro}>
          This section is time-bound. It is the operational centre of the page for six months. After December 2026, it becomes an archive. The sections above &mdash; the strategic foundation, domestic capability, and bilateral cooperation &mdash; are the permanent architecture.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
          <PubCard
            title="Primer: The Agenda Ireland Must Steer"
            type="Presidency Desk · Primer"
            desc="The complete map of every EU security and defence dossier on the Presidency desk. Explains why Ireland&rsquo;s lanes are maritime, subsea, and cyber &mdash; not air defence or ground combat. Shows how the four briefs interlock as a single strategy. Start here."
            href="/publications/eu-presidency-defence-agenda"
            pdfUrl="/pdfs/Presidency_Desk_Primer.pdf"
          />
          <PubCard
            title="Brief 1: ReArm Europe &mdash; What Ireland Should Lock In"
            type="Presidency Desk · Brief 1 of 4"
            desc="SAFE (&euro;150bn), EDIP (&euro;1.5bn), and the next MFF defence chapter. If the rules reward only large-scale military procurement, Ireland is excluded. If they recognise domain-specific contribution, Ireland&rsquo;s geographic assets become fundable."
            href="/publications/rearm-europe-brief"
          />
          <PubCard
            title="Brief 2: PESCO Strategic Review &mdash; What Ireland Should Lock In"
            type="Presidency Desk · Brief 2 of 4"
            desc="The strategic review is rewriting PESCO&rsquo;s binding commitments. Ireland&rsquo;s 7 projects &mdash; all in maritime, cyber, and logistics &mdash; are the institutional evidence of its contribution. The revised framework either formalises Ireland&rsquo;s model or penalises it."
            href="/publications/pesco-explained"
            pdfUrl="/pdfs/PESCO_Explained.pdf"
          />
          <PubCard
            title="Brief 3: Maritime Surveillance Cooperation"
            type="Presidency Desk · Brief 3 of 4"
            desc="880,000 km&sup2; of Atlantic EEZ. CISE membership since April 2025. The EUMSS progress report due October 2026. The EU Cable Action Plan investing &euro;1 billion. Ireland should be leading the Atlantic basin response &mdash; not consuming data others provide."
            href="/publications/maritime-surveillance-gap"
            pdfUrl="/pdfs/Maritime_Surveillance_Cooperation.pdf"
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

      {/* ══════════════════════════════════════
          SECTION 6: REFRAMING THE DEBATE
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={sectionLabel}>Section 6</div>
        <h2 style={sectionH2}>Reframing the Debate</h2>
        <div style={audienceNote}>
          For Taoiseach&apos;s office, public affairs, anyone who needs to articulate Ireland&apos;s security position without abandoning its constitutional position.
        </div>
        <p style={sectionIntro}>
          The public debate on Irish security is stuck between two positions: join NATO or do nothing. Neither is useful. Minister McEntee&apos;s formulation &mdash; &ldquo;militarily non-aligned but not neutral to threats&rdquo; &mdash; needs an analytical framework that the sections above provide. This section offers the public-facing articulation grounded in institutional analysis rather than ideology.
        </p>

        <ForthcomingCard
          title="Neutrality as Institutional Architecture"
          type="Research Paper · Forthcoming"
          desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? This paper draws on the diagnostic work in Section 2, the capability architecture in Section 3, and the cooperation frameworks in Sections 4 and 5 to propose a coherent public position. The deepest structural challenge in Irish security policy."
          coming="Coming 2027"
        />
      </section>

      {/* ══════════════════════════════════════
          SECTION 7: CONTACT & BRIEFINGS
         ══════════════════════════════════════ */}
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
