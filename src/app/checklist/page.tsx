import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Security & Defence Checklist — Security Ireland',
  description: 'A systematic comparison of what every EU state has, what Ireland has, and what is missing across 49 security and defence frameworks.',
};

/* ── Status badge ── */
function Badge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    'MISSING': { bg: 'var(--color-terracotta)', color: '#fff', label: 'MISSING' },
    'PARTIAL': { bg: 'var(--color-copper)', color: '#fff', label: 'PARTIAL' },
    'NEW 2025+': { bg: 'var(--color-fern)', color: '#fff', label: 'NEW 2025+' },
    'IN PLACE': { bg: 'var(--color-forest)', color: '#fff', label: 'IN PLACE' },
  };
  const s = styles[status] || styles['MISSING'];
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: '2px',
      backgroundColor: s.bg,
      color: s.color,
      fontWeight: 600,
      whiteSpace: 'nowrap',
    }}>
      {s.label}
    </span>
  );
}

/* ── Row ── */
function Row({ framework, status, detail }: { framework: string; status: string; detail: string }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '12px',
      padding: '16px 20px',
      borderBottom: '1px solid var(--color-rule)',
      alignItems: 'start',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          fontWeight: 600,
          color: 'var(--color-ink)',
          marginBottom: '4px',
        }}>
          {framework}
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          color: 'var(--color-graphite)',
          lineHeight: 1.6,
          margin: 0,
        }}>
          {detail}
        </p>
      </div>
      <div style={{ paddingTop: '2px' }}>
        <Badge status={status} />
      </div>
    </div>
  );
}

/* ── Section ── */
function Section({ title, description, items }: {
  title: string;
  description: string;
  items: { framework: string; status: string; detail: string }[];
}) {
  const counts = {
    missing: items.filter(i => i.status === 'MISSING').length,
    partial: items.filter(i => i.status === 'PARTIAL').length,
    new: items.filter(i => i.status === 'NEW 2025+').length,
    inPlace: items.filter(i => i.status === 'IN PLACE').length,
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '8px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--color-ink)',
          margin: 0,
        }}>
          {title}
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          {counts.missing > 0 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-terracotta)' }}>
              {counts.missing} missing
            </span>
          )}
          {counts.partial > 0 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-copper)' }}>
              {counts.partial} partial
            </span>
          )}
          {counts.new > 0 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fern)' }}>
              {counts.new} new
            </span>
          )}
          {counts.inPlace > 0 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-forest)' }}>
              {counts.inPlace} in place
            </span>
          )}
        </div>
      </div>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '14px',
        color: 'var(--color-stone)',
        lineHeight: 1.65,
        marginBottom: '16px',
        maxWidth: '640px',
      }}>
        {description}
      </p>
      <div style={{
        backgroundColor: 'var(--color-parchment)',
        borderRadius: '2px',
        border: '1px solid var(--color-rule)',
        overflow: 'hidden',
      }}>
        {items.map((item, i) => (
          <Row key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

/* ── Data ── */
const sections = [
  {
    title: 'Strategic Frameworks',
    description: 'The foundational documents and institutional structures that define how a state organises its security and defence.',
    items: [
      { framework: 'National security strategy', status: 'MISSING', detail: 'In development since 2019. Seven years later, unpublished. Ireland is the only EU member state without one.' },
      { framework: 'National defence policy / white paper', status: 'PARTIAL', detail: 'White Paper on Defence 2015 exists but is outdated. Commission on Defence Forces (2022) partially updates it.' },
      { framework: 'Dedicated Minister for Defence', status: 'MISSING', detail: 'Defence is held jointly with Foreign Affairs and Trade. No full-time cabinet minister for defence.' },
      { framework: 'National Security Committee (standing)', status: 'PARTIAL', detail: 'Exists but meets irregularly. No permanent secretariat. No published terms of reference.' },
      { framework: 'National Security Analysis Centre', status: 'PARTIAL', detail: 'NSAC established 2019 under Dept of Taoiseach. Understaffed and underpowered compared to equivalents.' },
      { framework: 'Defence industrial policy', status: 'MISSING', detail: 'No framework for Irish industry participation in European defence production (EDIP, EDIRPA, ASAP).' },
      { framework: 'Security clearance system', status: 'NEW 2025+', detail: 'Interim system introduced 2025/2026 to allow Irish officials to access EU classified material.' },
      { framework: 'Defence attach\u00e9 network', status: 'NEW 2025+', detail: 'Pilot programme 2026: London, Paris, Washington. Most EU states have had networks for decades.' },
    ],
  },
  {
    title: 'Intelligence & Threat Assessment',
    description: 'The institutional architecture for gathering, analysing, and disseminating security intelligence.',
    items: [
      { framework: 'Unified national intelligence agency', status: 'MISSING', detail: 'Intelligence split between military (J2/IMIS), police (Garda CSB), and cyber (NCSC). No unified structure.' },
      { framework: 'Integrated threat assessment capability', status: 'PARTIAL', detail: 'NSAC produces some assessments but is not a standing intelligence fusion centre.' },
      { framework: 'Foreign intelligence service', status: 'MISSING', detail: 'No equivalent of MI6, DGSE, BND. Ireland has no foreign intelligence collection capability.' },
      { framework: 'Counter-intelligence capability', status: 'PARTIAL', detail: 'Garda CSB performs some functions. No dedicated counter-intelligence agency.' },
      { framework: 'Parliamentary oversight of intelligence', status: 'MISSING', detail: 'No equivalent of UK Intelligence and Security Committee. No parliamentary oversight of intelligence activities.' },
    ],
  },
  {
    title: 'Airspace & Air Defence',
    description: 'The capability to monitor and defend sovereign airspace.',
    items: [
      { framework: 'Primary radar coverage', status: 'NEW 2025+', detail: 'Procurement underway (2025\u20132027). Until now, Ireland had no primary radar \u2014 the only EU state without one.' },
      { framework: 'Fighter / air intercept capability', status: 'MISSING', detail: 'No fighter aircraft. No plan to acquire. RAF intercepts threats to Irish airspace under informal arrangement.' },
      { framework: 'Surface-to-air missile capability', status: 'MISSING', detail: 'None. No short, medium, or long-range air defence.' },
      { framework: 'Counter-drone / counter-UAS capability', status: 'NEW 2025+', detail: 'Being procured after Zelenskyy drone incident (Dec 2024). Every other EU state already has this.' },
      { framework: 'Air sovereignty declared and enforced', status: 'MISSING', detail: 'Airspace is sovereign in law but not enforced in practice. Ireland cannot detect or intercept violations.' },
    ],
  },
  {
    title: 'Maritime Security',
    description: 'The capability to monitor and protect 880,000 km\u00b2 of maritime zone \u2014 the largest in Western Europe.',
    items: [
      { framework: 'National maritime security strategy', status: 'NEW 2025+', detail: 'Launched March 2026. 41 objectives to 2030. Implementation architecture still undefined.' },
      { framework: 'Armed naval vessels', status: 'MISSING', detail: 'Naval Service vessels are not armed for combat. No anti-ship missiles, no close-in weapon systems.' },
      { framework: 'Anti-submarine warfare capability', status: 'MISSING', detail: 'None. Towed sonar procurement underway (CAPTAS) but no ASW weapons or doctrine.' },
      { framework: 'Subsea cable monitoring capability', status: 'MISSING', detail: 'No standing monitoring of cables carrying 90% of transatlantic data through Irish waters.' },
      { framework: 'Sufficient vessels to patrol EEZ', status: 'MISSING', detail: 'Eight vessels, typically four operational. Cannot cover 880,000 km\u00b2.' },
      { framework: 'Naval Service at establishment strength', status: 'MISSING', detail: '807 personnel against establishment. Recruitment and retention crisis ongoing.' },
    ],
  },
  {
    title: 'Cyber Security',
    description: 'The institutional capability to defend against cyber threats to state, critical infrastructure, and economy.',
    items: [
      { framework: 'National cyber security strategy (current)', status: 'MISSING', detail: '2019\u20132024 strategy expired. No published replacement as of April 2026.' },
      { framework: 'Resourced national cyber security centre', status: 'PARTIAL', detail: 'NCSC exists but widely assessed as under-resourced relative to threat level.' },
      { framework: 'Offensive cyber capability', status: 'MISSING', detail: 'No capability. Netherlands, France, Germany, and others maintain offensive cyber units.' },
      { framework: 'Cyber resilience certification framework', status: 'PARTIAL', detail: 'Ireland participates in EU ECCF but national implementation is incomplete.' },
      { framework: 'PESCO cyber project participation', status: 'IN PLACE', detail: 'Ireland participates in Cyber Threats and Incident Response Information Sharing Platform (CTIRISP).' },
    ],
  },
  {
    title: 'Energy Security',
    description: 'The institutional architecture to ensure energy supply resilience during disruption.',
    items: [
      { framework: 'Energy security strategy', status: 'MISSING', detail: 'None. Government responds reactively to each crisis without a standing framework.' },
      { framework: 'Gas storage', status: 'MISSING', detail: 'Zero. Only EU member state with no gas storage. Corrib production declining toward zero by 2027.' },
      { framework: 'LNG terminal', status: 'MISSING', detail: 'No operational terminal. FSRU approved March 2025 but not yet contracted or deployed.' },
      { framework: 'Oil refining capacity', status: 'MISSING', detail: 'Whitegate ceased independent operations. Ireland imports 100% of refined product.' },
      { framework: 'Standing energy crisis management unit', status: 'MISSING', detail: 'Ad hoc Oil Security of Supply Group. No permanent institutional capability.' },
      { framework: 'Modern fuel crisis legislation', status: 'MISSING', detail: 'Fuels (Control of Supplies) Act 1971, amended 1982. Pre-dates the internet and EU membership.' },
      { framework: 'Strategic reserve repatriation', status: 'PARTIAL', detail: '28% of NORA stocks held abroad. Policy to repatriate announced but timeline unclear.' },
    ],
  },
  {
    title: 'Civil Crisis Management & Public Order',
    description: 'The institutional capability to manage domestic crises without resorting to military deployment.',
    items: [
      { framework: 'Gendarmerie / intermediate public order force', status: 'MISSING', detail: 'Nothing between An Garda S\u00edoch\u00e1na and the Defence Forces. Every comparable EU state has this.' },
      { framework: 'Civil protection agency (standing)', status: 'MISSING', detail: 'No equivalent of French S\u00e9curit\u00e9 civile or German THW.' },
      { framework: 'National emergency management agency', status: 'MISSING', detail: 'National Emergency Coordination Group is ad hoc. No standing agency.' },
      { framework: 'Proportionality test for military deployment', status: 'MISSING', detail: 'No statutory test. Defence Act 1954 provides broad authority with no proportionality requirement.' },
      { framework: 'Graduated escalation protocol', status: 'MISSING', detail: 'No defined escalation sequence from policing to military. Binary switch.' },
      { framework: 'Parliamentary oversight of domestic deployment', status: 'MISSING', detail: 'No D\u00e1il notification or review requirement for aid to the civil power operations.' },
      { framework: 'Domestic rules of engagement (published)', status: 'MISSING', detail: 'ROE exist for overseas peacekeeping. No published domestic equivalent.' },
      { framework: 'Independent oversight of military conduct', status: 'MISSING', detail: 'GSOC covers Garda conduct. No equivalent body for military during domestic deployment.' },
      { framework: 'Ministerial accountability for crisis mgmt', status: 'MISSING', detail: 'No minister owns crisis management. Falls between Justice and Defence.' },
    ],
  },
  {
    title: 'Critical Infrastructure Protection',
    description: 'The framework for identifying, protecting, and ensuring resilience of critical national infrastructure.',
    items: [
      { framework: 'Critical infrastructure protection legislation', status: 'PARTIAL', detail: 'CER Directive transposition underway. National framework not yet operational.' },
      { framework: 'Critical infrastructure registry', status: 'PARTIAL', detail: 'Being developed under CER. No comprehensive registry exists yet.' },
      { framework: 'Standing infrastructure protection capability', status: 'MISSING', detail: 'No dedicated force or unit. Ad hoc military deployment when needed.' },
      { framework: 'Subsea infrastructure protection framework', status: 'PARTIAL', detail: 'Maritime Security Strategy (2026) addresses this. Implementation not yet begun.' },
    ],
  },
  {
    title: 'Defence Forces Capability',
    description: 'The state of Ireland\u2019s military capability against the Commission on Defence Forces benchmarks.',
    items: [
      { framework: 'Personnel at establishment strength', status: 'MISSING', detail: '7,756 against establishment of 9,739. Shortfall of approximately 2,000.' },
      { framework: 'Commission on Defence Forces implementation', status: 'PARTIAL', detail: '54 of 130 recommendations completed after 4 years. Rate of implementation is slowing.' },
      { framework: 'LOA 2 capability achieved', status: 'MISSING', detail: 'Government committed to LOA 2 by 2028. Not on track.' },
      { framework: 'Defence spending at EU average', status: 'MISSING', detail: '0.2% GDP vs EU average 1.3%. Lowest in EU. Record \u20ac1.16bn budget for 2026 still far below peers.' },
      { framework: 'SAFE loan applications', status: 'MISSING', detail: 'Ireland has not applied for any SAFE loans. 16 member states have.' },
    ],
  },
  {
    title: 'Democratic Governance of Security',
    description: 'The mechanisms that ensure democratic accountability and transparency in security and defence.',
    items: [
      { framework: 'Constitutional protection of neutrality', status: 'MISSING', detail: 'Neutrality is policy, not constitutional. No constitutional lock unlike Austria.' },
      { framework: 'Annual D\u00e1il review of security commitments', status: 'MISSING', detail: 'No annual review mechanism for overseas deployments or security commitments.' },
      { framework: 'Transparency requirement for Shannon', status: 'MISSING', detail: 'No reporting requirement for military transits through Shannon Airport.' },
      { framework: 'Parliamentary reporting on PESCO', status: 'MISSING', detail: 'No formal reporting mechanism to D\u00e1il on Ireland\u2019s PESCO project participation.' },
      { framework: 'Published bilateral defence agreements', status: 'PARTIAL', detail: 'Cork MoU (2026) publicly announced. RAF airspace arrangements are not published.' },
    ],
  },
];

/* ── Totals ── */
const allItems = sections.flatMap(s => s.items);
const totals = {
  total: allItems.length,
  missing: allItems.filter(i => i.status === 'MISSING').length,
  partial: allItems.filter(i => i.status === 'PARTIAL').length,
  new: allItems.filter(i => i.status === 'NEW 2025+').length,
  inPlace: allItems.filter(i => i.status === 'IN PLACE').length,
};

export default function Checklist() {
  return (
    <div className="bg-cream">
      {/* ── HEADER ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          Policy Checklist
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px', maxWidth: '700px' }}>
          Ireland&rsquo;s Security &amp; Defence Architecture
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '640px', marginBottom: '8px' }}>
          What every EU state has. What Ireland has. What&rsquo;s missing.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', lineHeight: 1.65, maxWidth: '640px', marginBottom: '24px' }}>
          A systematic comparison of the institutional frameworks, strategies, and capabilities that comparable EU member states maintain as standard &mdash; measured against what Ireland has in place, what is partially developed, and what does not exist.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
          <a
            href="/pdfs/Ireland_Security_Defence_Checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
            Download PDF &darr;
          </a>
        </div>
      </section>

      {/* ── SUMMARY SCOREBOARD ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
        }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', textAlign: 'center', borderTop: '3px solid var(--color-forest)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--color-forest)' }}>{totals.total}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '4px' }}>Frameworks Assessed</div>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', textAlign: 'center', borderTop: '3px solid var(--color-terracotta)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--color-terracotta)' }}>{totals.missing}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '4px' }}>Missing</div>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', textAlign: 'center', borderTop: '3px solid var(--color-copper)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--color-copper)' }}>{totals.partial}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '4px' }}>Partial</div>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', textAlign: 'center', borderTop: '3px solid var(--color-fern)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--color-fern)' }}>{totals.new}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '4px' }}>New (2025+)</div>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', textAlign: 'center', borderTop: '3px solid var(--color-forest)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--color-forest)' }}>{totals.inPlace}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '4px' }}>In Place</div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '2px solid var(--color-terracotta)', marginBottom: '40px' }} />
        {sections.map((section, i) => (
          <Section key={i} {...section} />
        ))}
      </section>

      {/* ── FOOTER NOTE ── */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{
          padding: '24px',
          backgroundColor: 'var(--color-parchment)',
          borderLeft: '3px solid var(--color-terracotta)',
          borderRadius: '2px',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            color: 'var(--color-ink)',
            lineHeight: 1.75,
            margin: 0,
            fontStyle: 'italic',
          }}>
            Of {totals.total} security and defence frameworks assessed, Ireland has {totals.inPlace} fully in place, {totals.partial} partially developed, {totals.new} newly initiated since 2025, and {totals.missing} missing entirely. The pattern is consistent across every domain: Ireland does not lack the resources to build security architecture. It lacks the architecture itself.
          </p>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-stone)', marginTop: '16px' }}>
          Security Ireland &middot; April 2026 &middot; Updated as frameworks change.
        </p>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
