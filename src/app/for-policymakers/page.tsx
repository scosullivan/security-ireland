import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Expandable from '@/components/Expandable';

export const metadata = {
  title: 'For Policymakers — Security Ireland',
  description: 'Rigorous Analysis For Decision Makers. Written to be cited in ministerial briefings, Council working groups, and Oireachtas committee sessions.',
};

/* ── Shared styles ── */
const tierLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '9px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-stone)',
  marginBottom: '10px',
  marginTop: '20px',
};

const readMore = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  color: 'var(--color-forest)',
  textDecoration: 'none' as const,
  borderBottom: '1px solid var(--color-forest)',
  paddingBottom: '1px',
};

/* ── Publication card ── */
function PubCard({ title, type, desc, href, pdfUrl }: {
  title: string; type: string; desc: string; href: string; pdfUrl?: string;
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
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, margin: '0 0 12px', maxWidth: '560px' }}>
        {desc}
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Link href={href} style={readMore}>
          Read paper →
        </Link>
        {pdfUrl && (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ ...readMore, color: 'var(--color-terracotta)', borderBottomColor: 'var(--color-terracotta)' }}>
            PDF ↓
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
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', lineHeight: 1.65, margin: '0 0 10px', maxWidth: '560px' }}>
        {desc}
      </p>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)', fontStyle: 'italic' }}>
        {coming}
      </span>
    </div>
  );
}

/* ── Pathway card ── */
function PathwayCard({ who, how }: { who: string; how: string }) {
  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', borderLeft: '3px solid var(--color-fern)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '8px', letterSpacing: '0.5px' }}>
        {who}
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.6, margin: 0 }}>
        {how}
      </p>
    </div>
  );
}

export default function ForPolicymakers() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          For Policymakers
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '640px' }}>
          Rigorous Analysis For Decision Makers
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '20px' }}>
          Publications written to be cited in a ministerial brief, used in a Council working group, or referenced in an Oireachtas committee session. Rigorous, operationally grounded, and designed to inform decisions under time pressure.
        </p>
      </section>

      {/* ── HOW TO USE THIS PAGE ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 32px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '12px' }}>
          How to Use This Page
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <PathwayCard
            who="Ministerial offices"
            how="Start with Section 1 for the strategic foundation, then the section covering your active dossier. Every paper names responsible departments and deadlines."
          />
          <PathwayCard
            who="Oireachtas members"
            how="Section 1 provides the analytical foundation for committee work. All publications are designed to be cited in debate."
          />
          <PathwayCard
            who="Defence Forces"
            how="Section 3 covers capability transformation and the LOA roadmap. Section 4 covers bilateral cooperation and the Cork MoU implementation."
          />
          <PathwayCard
            who="Cross-border officials"
            how="Section 4 has the UK–Ireland bilateral papers. The forthcoming Implementation Protocol translates these into operational guidance."
          />
        </div>
      </section>

      {/* ── COLLAPSIBLE SECTIONS ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '2px solid var(--color-terracotta)', marginBottom: '32px' }} />

        {/* ═══════ SECTION 1: STRATEGIC FOUNDATION ═══════ */}
        <Expandable num="1" title="Strategic Foundation" readTime="10 papers">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '24px' }}>
            Ireland faces a convergence of security demands without precedent: an EU Council Presidency during the largest defence spending programme in EU history, a bilateral security architecture with the UK being operationalised for the first time, and an institutional system at a fifty-year low.
          </p>

          <div style={tierLabel}>Proposals</div>
          <PubCard
            title="Ireland&rsquo;s Defence Problem Isn&rsquo;t Neutrality"
            type="Research Paper"
            desc="Ireland&rsquo;s institutional system is architecturally configured for the absence of military capability across five reinforcing layers. The constraint is bandwidth, not budget."
            href="/publications/neutrality-institutional-architecture"
            pdfUrl="/pdfs/Neutrality_Institutional_Architecture.pdf"
          />
          <PubCard
            title="A National Security Strategy for Ireland"
            type="Policy Framework"
            desc="Ireland still has no national security strategy. What it would contain, why it matters, and what the delay costs."
            href="/publications/national-security-strategy"
            pdfUrl="/pdfs/National_Security_Strategy.pdf"
          />
          <PubCard
            title="A Defence Industrial Strategy for Ireland"
            type="Policy Framework"
            desc="Enterprise Ireland&rsquo;s dual-use engagement, EDIP eligibility, and what a bounded Irish defence industrial role looks like."
            href="/publications/defence-industrial-policy"
            pdfUrl="/pdfs/Defence_Industrial_Policy.pdf"
          />
          <PubCard
            title="Energy Security as the Sixth Domain"
            type="Policy Brief"
            desc="Ireland&rsquo;s fuel crisis reveals the same architectural absence diagnosed across maritime, airspace, subsea, cyber, and intelligence. Six reforms that can be initiated immediately."
            href="/publications/energy-security-sixth-domain"
            pdfUrl="/pdfs/Energy_Security_Sixth_Domain.pdf"
          />
          <PubCard
            title="The Crisis Management Gap"
            type="Policy Brief"
            desc="Ireland is the only EU member state with no intermediate crisis management architecture. When policing reaches its limit, the next step is soldiers. Seven missing safeguards for domestic military deployment."
            href="/publications/crisis-management-gap"
            pdfUrl="/pdfs/Crisis_Management_Gap_Policing.pdf"
          />
          <PubCard
            title="A Proportionality Framework for Military Aid to the Civil Power"
            type="Policy Proposal"
            desc="Seven gates that must be passed before and during any domestic military deployment: necessity, proportionality, civilian character distinction, time limitation, parliamentary notification, rules of engagement, and independent oversight."
            href="/publications/proportionality-framework"
            pdfUrl="/pdfs/Proportionality_Framework_Proposal.pdf"
          />

          <div style={tierLabel}>Context</div>
          <PubCard
            title="Europe&rsquo;s Defence Problem Isn&rsquo;t Spending"
            type="Research Paper"
            desc="&euro;800 billion cannot convert to capability without coordination architecture. Twenty-seven procurement systems produce fragmented demand and US dependency."
            href="/publications/europes-defence-problem-isnt-spending"
            pdfUrl="/pdfs/Europes_Defence_Problem_Isnt_Spending.pdf"
          />

          <div style={tierLabel}>Explainers</div>
          <PubCard
            title="Ireland&rsquo;s Defence Spending Explained"
            type="Explainer"
            desc="What Ireland actually spends on defence, how it compares to EU and NATO peers, and what the Commission on Defence Forces recommended."
            href="/publications/defence-spending-explained"
            pdfUrl="/pdfs/Defence_Spending_Explained.pdf"
          />
          <PubCard
            title="PESCO and Ireland"
            type="Explainer"
            desc="What PESCO is, which projects Ireland participates in, and why it matters for the EU Presidency."
            href="/publications/pesco-and-ireland"
            pdfUrl="/pdfs/PESCO_and_Ireland.pdf"
          />
          <PubCard
            title="Defence Financing Explained"
            type="Explainer"
            desc="How Ireland funds defence, the capital allocation for 2026&ndash;2030, and what the spending trajectory means for capability."
            href="/publications/defence-financing-explained"
            pdfUrl="/pdfs/Defence_Financing_Explained.pdf"
          />
        </Expandable>

        {/* ═══════ SECTION 2: REFRAMING THE DEBATE ═══════ */}
        <Expandable num="2" title="Reframing the Debate" readTime="1 paper">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '24px' }}>
            Minister McEntee&rsquo;s formulation &mdash; &ldquo;militarily non-aligned but not neutral to threats&rdquo; &mdash; needs an analytical framework. The public debate is stuck between two positions: join NATO or do nothing. Neither is useful. This paper offers a third position grounded in institutional analysis rather than ideology.
          </p>

          <PubCard
            title="Neutrality as Institutional Architecture"
            type="Research Paper"
            desc="How can Irish non-alignment be reconceptualised as requiring defence capability (the Swiss, Austrian, and Finnish model) rather than as a reason for its absence? The deepest structural challenge in Irish security policy."
            href="/publications/neutrality-institutional-architecture"
            pdfUrl="/pdfs/Neutrality_Institutional_Architecture.pdf"
          />
        </Expandable>

        {/* ═══════ SECTION 3: BUILDING DOMESTIC CAPABILITY ═══════ */}
        <Expandable num="3" title="Building Domestic Capability" readTime="4 papers">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '24px' }}>
            Ireland has committed to reaching Level of Ambition 2 by 2028: primary radar, improved naval capacity, a counter-drone system, and a reformed reserve. The constraint is not budget &mdash; Ireland could fund LOA 3 from a single year&rsquo;s surplus. The constraint is institutional bandwidth.
          </p>

          <PubCard
            title="Building the Institutional Infrastructure"
            type="Policy Framework"
            desc="The foundational architecture Ireland needs before capability investment can convert to operational capacity. Maps the institutional prerequisites across procurement, workforce, and governance."
            href="/publications/building-institutional-infrastructure"
            pdfUrl="/pdfs/Building_the_Institutional_Infrastructure.pdf"
          />
          <PubCard
            title="Ireland&rsquo;s Defence Industrial Architecture"
            type="Policy Framework"
            desc="Can Ireland develop a defence industrial base? This paper analyses what institutional prerequisites are missing and what bounded role Irish industry can play within European defence production."
            href="/publications/defence-industrial-architecture"
            pdfUrl="/pdfs/Irelands_Defence_Industrial_Architecture.pdf"
          />
          <PubCard
            title="The LOA Transition Architecture"
            type="Policy Framework"
            desc="What institutional transformation &mdash; not just spending &mdash; is required to move from LOA 1 to LOA 2? Fifty-four of 130 Commission on Defence Forces recommendations completed in four years. The rate is slowing."
            href="/publications/loa-transition-architecture"
            pdfUrl="/pdfs/The_LOA_Transition_Architecture.pdf"
          />
          <PubCard
            title="Intelligence Architecture Reform"
            type="Policy Framework"
            desc="Ireland&rsquo;s intelligence architecture &mdash; split between military (J2/IMIS), police (Garda CSB), and cyber (NCSC) &mdash; is unique in Europe. Every comparable state has unified intelligence."
            href="/publications/intelligence-architecture-reform"
            pdfUrl="/pdfs/Intelligence_Architecture_Reform.pdf"
          />
        </Expandable>

        {/* ═══════ SECTION 4: BILATERAL TRACK ═══════ */}
        <Expandable num="4" title="UK–Ireland Bilateral Track" readTime="4 papers">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '24px' }}>
            The Cork Summit of March 2026 operationalised UK&ndash;Ireland security cooperation for the first time. These papers provide the analytical architecture the MoU itself lacks &mdash; explaining why bilateral and EU tracks complement rather than compete, and how cross-border operational coordination can work within GFA constraints.
          </p>

          <PubCard
            title="Ireland&rsquo;s Layered Security Cooperation Model"
            type="Research Paper"
            desc="How bilateral, EU, and NATO-adjacent cooperation tracks compound rather than compete. The institutional mechanics, the friction points, and the conditions under which this model is replicable for non-aligned EU member states."
            href="/publications/layered-security-cooperation"
            pdfUrl="/pdfs/Layered_Security_Cooperation.pdf"
          />
          <PubCard
            title="The UK&ndash;Ireland Security Interface"
            type="Working Paper"
            desc="The island is a single security domain across five dimensions: maritime, airspace, subsea, energy, and cyber. The free-riding equilibrium has collapsed. Bilateral cooperation strengthens &mdash; not undermines &mdash; Ireland&rsquo;s EU commitments."
            href="/publications/maritime-security-framework"
            pdfUrl="/pdfs/UK_Ireland_Security_Interface.pdf"
          />
          <PubCard
            title="The GFA and the Security Gap"
            type="Working Paper"
            desc="The 1998 security firewall was deliberate, not accidental. External threats are categorically different from the internal threats the firewall was designed to manage. Strand Two has a bounded forward-looking role in infrastructure-focused security coordination."
            href="/publications/good-friday-agreement-security"
            pdfUrl="/pdfs/GFA_Security_Gap.pdf"
          />
          <PubCard
            title="North/South Security Implementation Protocol"
            type="Implementation Document"
            desc="Extracts the operational detail from Working Paper 2 into a standalone protocol for cross-border officials: energy infrastructure security, transport resilience, maritime environmental monitoring, and cyber resilience coordination."
            href="/publications/north-south-implementation-protocol"
            pdfUrl="/pdfs/North_South_Implementation_Protocol.pdf"
          />
        </Expandable>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '2px solid var(--color-terracotta)', marginBottom: '32px' }} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '8px' }}>
          Contact &amp; Briefings
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '16px' }}>
          Security Ireland is available for private briefings to government departments, Oireachtas committees, and the permanent representation in Brussels. We do not charge for policy briefings.
        </p>
        <a
          href="mailto:info@securityireland.ie"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '1px', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px' }}
        >
          info@securityireland.ie
        </a>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
