import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Expandable from '@/components/Expandable';

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

export default function ForPolicymakers() {
  return (
    <div className="bg-cream">
      {/* ══════════════════════════════════════
          PAGE HEADER
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--color-terracotta)',
          marginBottom: '8px',
        }}>For Policymakers</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Analysis for decisions, not commentary for debate
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '20px' }}>
          Every publication below was written to be cited in a ministerial briefing, used in a Council working group, or referenced in an Oireachtas committee session. If it isn&apos;t useful, we haven&apos;t done our job.
        </p>
      </section>

      {/* ══════════════════════════════════════
          HOW TO USE THIS PAGE (not collapsible)
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 32px' }}>
        <hr className="rule-accent" />
        <p style={{ ...sectionIntro, marginTop: '24px' }}>
          This page contains Security Ireland&apos;s complete body of work for government. Start with the section that matches your role.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          <PathwayCard who="Ministerial offices" content={
            <p style={{ margin: 0 }}>Start with the <strong>Proposed National Security Strategy Framework</strong> in Section 1 &mdash; it connects every other paper. Then read whichever operational section covers your active dossier.</p>
          } />
          <PathwayCard who="Oireachtas members" content={
            <p style={{ margin: 0 }}>The analytical background papers in Section 1 &mdash; on European and Irish defence &mdash; provide the analytical foundation for committee work.</p>
          } />
          <PathwayCard who="Officials in Brussels" content={
            <p style={{ margin: 0 }}>The EU Presidency series is available on the dedicated <Link href="/eu-presidency" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>EU Presidency page</Link>. Section 1 provides the strategic context for Council working group agendas.</p>
          } />
          <PathwayCard who="Defence Forces &amp; Dept of Defence" content={
            <p style={{ margin: 0 }}>Section 2 is your primary section &mdash; LOA transition, institutional infrastructure, defence industrial architecture. The spending analysis in Section 1 traces the funding architecture.</p>
          } />
          <PathwayCard who="Cross-border officials" content={
            <p style={{ margin: 0 }}>Section 3 (UK&ndash;Ireland Bilateral) contains the bilateral series plus the layered cooperation model. Start with <em>The UK&ndash;Ireland Security Interface</em> for the analytical framework.</p>
          } />
          <PathwayCard who="European Defence Landscape" content={
            <p style={{ margin: 0 }}>If you need to understand the NATO and EU systems within which Ireland operates, start with the <Link href="/european-defence" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>European Defence Landscape page &rarr;</Link></p>
          } />
        </div>
      </section>

      {/* ══════════════════════════════════════
          COLLAPSIBLE SECTIONS
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>

        {/* ── SECTION 1: THE STRATEGIC FOUNDATION ── */}
        <Expandable num="1" title="The Strategic Foundation" readTime="8 papers" defaultOpen>
          <div style={audienceNote}>
            Ireland&apos;s security architecture: the proposed strategy, the analytical background, and the context.
          </div>
          <p style={sectionIntro}>
            These are the papers with the longest shelf life. The proposed frameworks provide what the government has not yet produced: a strategic architecture for Irish defence and security. The analytical background explains why the system is configured the way it is. Everything else on this page is implementation of what these papers establish.
          </p>

          {/* ── Tier 1: Proposed Frameworks ── */}
          <div style={tierLabel}>The Proposed Frameworks</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '620px' }}>
            What Ireland&apos;s defence and security architecture should look like. These are the documents the government needs but has not produced. Security Ireland provides them.
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
          <PubCard
            title="Intelligence Architecture: A Proposal for Unification"
            type="Policy Framework"
            desc="Ireland&rsquo;s intelligence is split across three agencies (IMIS, GNCSIS, NCSC) with no unified structure &mdash; unique in Europe. This paper proposes the target architecture, the legislative pathway, and the phased transition. Intelligence reform is the prerequisite for everything else."
            href="/publications/intelligence-architecture-reform"
            pdfUrl="/pdfs/Intelligence_Architecture_Reform.pdf"
          />

          {/* ── Tier 2: Analytical Background ── */}
          <div style={tierLabel}>The Analytical Background</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '620px' }}>
            The research and analysis underpinning the frameworks above. These papers explain the architecture of the problem &mdash; European and Irish &mdash; and why the system is configured the way it is.
          </p>
          <PubCard
            title="Europe&rsquo;s Defence Problem Isn&rsquo;t Spending"
            type="Research Paper · Complete"
            desc="€800 billion cannot convert to capability without coordination architecture. Twenty-seven procurement systems produce fragmented demand and US dependency. The argument Ireland needs as the lowest-spending state chairing defence budget discussions."
            href="/publications/defence-financing-explained"
            pdfUrl="/pdfs/Europes_Defence_Problem_Isnt_Spending.pdf"
          />
          <PubCard
            title="Europe&rsquo;s Defence Buildup Is Reproducing the Problem It&rsquo;s Trying to Solve"
            type="Explainer · Complete"
            desc="Why spending without industrial architecture deepens dependency. The procurement flow problem and the fragmentation problem compound each other &mdash; and an architecture-first approach requires four structural investments that are not spending targets."
            href="/publications/europe-defence-buildup"
            pdfUrl="/pdfs/Europes_Defence_Buildup.pdf"
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

          {/* ── Tier 3: The Context ── */}
          <div style={tierLabel}>The Context</div>
          <PubCard
            title="Neutrality as Institutional Architecture"
            type="Research Paper"
            desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? The deepest structural challenge in Irish security policy."
            href="/publications/neutrality-institutional-architecture"
            pdfUrl="/pdfs/Neutrality_Institutional_Architecture.pdf"
          />
          <div style={{ padding: '16px 20px', backgroundColor: 'var(--color-parchment)', borderLeft: '3px solid var(--color-fern)', borderRadius: '2px', marginTop: '8px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
              <strong>The European Defence Landscape</strong> &rarr; See the dedicated <Link href="/european-defence" style={{ color: 'var(--color-terracotta)', textDecoration: 'none' }}>European Defence Landscape page</Link> for the NATO, EU, and transatlantic context within which Ireland&apos;s strategy operates.
            </p>
          </div>
        </Expandable>

        {/* ── SECTION 2: BUILDING DOMESTIC CAPABILITY ── */}
        <Expandable num="2" title="Building Domestic Capability" readTime="3 papers">
          <div style={audienceNote}>
            For Dept of Defence, Chief of Staff, Defence Forces strategic planning, National Security Committee, Oireachtas Committee on Defence.
          </div>
          <p style={sectionIntro}>
            Ireland has committed to reaching Level of Ambition 2 by 2028: primary radar, improved naval capacity, a counter-drone system, and a reformed reserve. The constraint is not budget &mdash; Ireland could fund LOA 3 from a single year&apos;s surplus. The constraint is institutional bandwidth: the distance between what the system can currently coordinate and what the transition demands. These papers address the institutional architecture the spending requires.
          </p>
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
        </Expandable>

        {/* ── SECTION 3: UK–IRELAND BILATERAL ── */}
        <Expandable num="3" title="The Bilateral Track — UK–Ireland" readTime="4 papers">
          <div style={audienceNote}>
            For DFA bilateral relations, Dept of Defence, officials working on Cork MoU implementation, Northern Ireland Office, NSMC.
          </div>
          <p style={{ ...sectionIntro, marginBottom: '8px' }}>
            The Cork Summit of March 2026 operationalised UK&ndash;Ireland security cooperation for the first time. The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. These papers provide the analytical architecture the MoU itself lacks.
          </p>
          <p style={sectionIntro}>
            The bilateral track builds the institutional capacity that makes the EU track credible. Ireland&apos;s PESCO maritime projects are strengthened by bilateral maritime cooperation. The Cork MoU&apos;s cyber cooperation improves Ireland&apos;s standing in PESCO&apos;s Cyber Threats platform. The bilateral track is not an alternative to the EU track &mdash; it is the foundation the EU track requires.
          </p>
          <PubCard
            title="Ireland&rsquo;s Layered Security Cooperation Model"
            type="Research Paper · Complete"
            desc="How bilateral, EU, and NATO-adjacent cooperation tracks compound rather than compete. Maps the institutional mechanics of capability transfer from Cork MoU operations through to PESCO frameworks, identifies the friction points, and tests whether the model is replicable for non-aligned EU member states."
            href="/publications/layered-security-cooperation"
            pdfUrl="/pdfs/Layered_Security_Cooperation.pdf"
          />
          <PubCard
            title="The UK&ndash;Ireland Security Interface"
            type="Paper 1 of 3 · Complete"
            desc="The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. The free-riding equilibrium has collapsed. Bilateral cooperation strengthens &mdash; not undermines &mdash; Ireland&rsquo;s EU commitments. The Cork MoU validates the transition this paper diagnosed."
            href="/publications/uk-ireland-security-interface"
            pdfUrl="/pdfs/UK_Ireland_Security_Interface.pdf"
          />
          <PubCard
            title="The GFA and the Security Gap"
            type="Paper 2 of 3 · Complete"
            desc="The 1998 security firewall was deliberate, not accidental. External threats (subsea sabotage, cyber attacks, energy disruption) are categorically different from the internal threats the firewall was designed to manage. Strand Two has a bounded forward-looking role in infrastructure-focused security coordination."
            href="/publications/gfa-security-gap"
            pdfUrl="/pdfs/GFA_Security_Gap.pdf"
          />
          <PubCard
            title="North/South Security Implementation Protocol"
            type="Implementation Document · Paper 3 of 3"
            desc="Extracts the operational detail from Working Paper 2 into a standalone protocol for cross-border officials: energy infrastructure security, transport resilience, maritime environmental monitoring, and cyber resilience coordination. Four bounded functions, each with agency-to-agency primacy and bilateral fallback."
            href="/publications/north-south-implementation-protocol"
            pdfUrl="/pdfs/North_South_Implementation_Protocol.pdf"
          />
        </Expandable>

        {/* ── SECTION 4: REFRAMING THE DEBATE ── */}
        <Expandable num="4" title="Reframing the Debate" readTime="1 paper · forthcoming">
          <div style={audienceNote}>
            For Taoiseach&apos;s office, public affairs, anyone who needs to articulate Ireland&apos;s security position without abandoning its constitutional position.
          </div>
          <p style={sectionIntro}>
            The public debate on Irish security is stuck between two positions: join NATO or do nothing. Neither is useful. Minister McEntee&apos;s formulation &mdash; &ldquo;militarily non-aligned but not neutral to threats&rdquo; &mdash; needs an analytical framework that the sections above provide. This section offers the public-facing articulation grounded in institutional analysis rather than ideology.
          </p>
          <ForthcomingCard
            title="Neutrality as Institutional Architecture"
            type="Research Paper · Forthcoming"
            desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? This paper draws on the diagnostic work in Section 1, the capability architecture in Section 2, and the cooperation frameworks in Section 3 to propose a coherent public position. The deepest structural challenge in Irish security policy."
            coming="Coming 2027"
          />
        </Expandable>

      </section>

      {/* ══════════════════════════════════════
          CONTACT & BRIEFINGS
         ══════════════════════════════════════ */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--color-terracotta)',
          margin: '32px 0 8px',
        }}>Contact &amp; Briefings</div>
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
