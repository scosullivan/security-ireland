'use client';

/* ── Brief-specific visualizations for Presidency Desk Series ── */

/* ============================
   BRIEF 00 — Primer
   Strategy interlocking diagram: 3 domains → 4 EU instruments
   ============================ */
function PrimerViz() {
  const domains = [
    { num: '1', label: 'Maritime\nSurveillance', color: 'var(--color-forest)' },
    { num: '2', label: 'Subsea\nInfrastructure', color: 'var(--color-terracotta)' },
    { num: '3', label: 'Cyber\nResilience', color: 'var(--color-forest)' },
  ];

  const instruments = [
    { label: 'PESCO', brief: '02', desc: 'Institutional framework', color: 'var(--color-fern)' },
    { label: 'ReArm / SAFE', brief: '01', desc: '€150bn funding', color: 'var(--color-terracotta)' },
    { label: 'EUMSS / CISE', brief: '03', desc: 'Maritime cooperation', color: 'var(--color-forest)' },
    { label: 'NIS2 / Hybrid Toolbox', brief: '04', desc: 'Cyber & hybrid', color: 'var(--color-copper)' },
  ];

  // Connection matrix: which domains connect to which instruments
  // [Maritime, Subsea, Cyber] → [PESCO, ReArm, EUMSS, NIS2]
  const connections: [number, number][] = [
    [0, 0], [0, 1], [0, 2],  // Maritime → PESCO, ReArm, EUMSS
    [1, 0], [1, 1], [1, 2],  // Subsea → PESCO, ReArm, EUMSS
    [2, 0], [2, 1], [2, 3],  // Cyber → PESCO, ReArm, NIS2
  ];

  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
        How the strategy fits together
      </div>

      {/* SVG diagram */}
      <svg viewBox="0 0 760 320" style={{ width: '100%', maxWidth: '760px', height: 'auto' }}>
        {/* Connection lines */}
        {connections.map(([d, inst], i) => {
          const dx = 105 + d * 160;
          const ix = 80 + inst * 170;
          return (
            <line key={i}
              x1={dx} y1={95} x2={ix} y2={195}
              stroke="var(--color-rule)" strokeWidth="1.5" strokeDasharray="4 3" opacity={0.5}
            />
          );
        })}

        {/* Domain boxes */}
        {domains.map((d, i) => {
          const x = 30 + i * 160;
          return (
            <g key={`d-${i}`}>
              <rect x={x} y={20} width={150} height={70} rx={3}
                fill="var(--color-parchment)" stroke={d.color} strokeWidth="2" />
              <text x={x + 15} y={48} style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, fill: d.color }}>
                {d.num}
              </text>
              {d.label.split('\n').map((line, li) => (
                <text key={li} x={x + 45} y={46 + li * 16}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', fill: 'var(--color-ink)' }}>
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Arrow label */}
        <text x={380} y={155} textAnchor="middle"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase' as const, fill: 'var(--color-stone)' }}>
          Shaped through ↓
        </text>

        {/* Instrument boxes */}
        {instruments.map((inst, i) => {
          const x = 10 + i * 185;
          return (
            <g key={`i-${i}`}>
              <rect x={x} y={190} width={175} height={60} rx={3}
                fill="var(--color-cream)" stroke={inst.color} strokeWidth="2" />
              <text x={x + 12} y={213}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, fill: inst.color }}>
                {inst.label}
              </text>
              <text x={x + 12} y={232}
                style={{ fontFamily: 'var(--font-serif)', fontSize: '11px', fill: 'var(--color-graphite)' }}>
                {inst.desc}
              </text>
              <text x={x + 163} y={213} textAnchor="end"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fill: 'var(--color-stone)' }}>
                Brief {inst.brief}
              </text>
            </g>
          );
        })}

        {/* Bottom note */}
        <text x={380} y={285} textAnchor="middle"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', fontStyle: 'italic' as const, fill: 'var(--color-graphite)' }}>
          Remove any one and the others lose coherence.
        </text>
      </svg>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
        Source: Security Ireland Presidency Desk Series, 2026.
      </p>
    </div>
  );
}


/* ============================
   BRIEF 01 — ReArm Europe
   Funding instruments: what they are + does Ireland qualify?
   ============================ */
function ReArmViz() {
  const instruments = [
    {
      name: 'SAFE',
      amount: '€150bn',
      type: 'Loans',
      desc: 'Sovereign borrowing via EU bonds for defence investment',
      irelandNow: 'Unclear',
      irelandIf: 'Yes — if domain-specific capability counts',
      nowColor: 'var(--color-copper)',
      color: 'var(--color-terracotta)',
    },
    {
      name: 'EDIP',
      amount: '€1.5bn',
      type: 'Grants',
      desc: 'Joint procurement incentives for cross-border defence projects',
      irelandNow: 'Marginal',
      irelandIf: 'Yes — maritime & cyber procurement qualifies',
      nowColor: 'var(--color-copper)',
      color: 'var(--color-fern)',
    },
    {
      name: 'MFF Defence Chapter',
      amount: 'TBD',
      type: 'EU Budget',
      desc: 'Next multi-annual financial framework, post-2027',
      irelandNow: 'Not yet written',
      irelandIf: 'Yes — if maritime/subsea/cyber are named as priority domains',
      nowColor: 'var(--color-stone)',
      color: 'var(--color-copper)',
    },
  ];

  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
        Three instruments, one window
      </div>

      {/* Instrument cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
        {instruments.map((inst, i) => (
          <div key={i} style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-parchment)',
            borderLeft: `4px solid ${inst.color}`,
            borderRadius: '2px',
          }}>
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: inst.color }}>
                  {inst.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {inst.type}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, color: inst.color }}>
                {inst.amount}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-graphite)', margin: '0 0 12px', lineHeight: 1.5 }}>
              {inst.desc}
            </p>

            {/* Ireland status — two rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: inst.nowColor, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-graphite)' }}>
                  <strong>Ireland now:</strong> {inst.irelandNow}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-fern)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-graphite)' }}>
                  <strong>If rules are rewritten:</strong> {inst.irelandIf}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The key question */}
      <div style={{ padding: '20px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
          <strong style={{ color: 'var(--color-terracotta)' }}>The question for Ireland:</strong> Do the eligibility rules reward only large-scale military procurement (tanks, jets, frigates), or do they recognise domain-specific contribution — maritime surveillance, subsea monitoring, cyber resilience? The rules being written now determine the answer for the rest of the decade.
        </p>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
        Source: European Commission, Council proposals 2025–26. MFF figures are projected.
      </p>
    </div>
  );
}


/* ============================
   BRIEF 02 — PESCO Strategic Review
   Ireland's 7 projects by domain
   ============================ */
function PESCOViz() {
  const projects = [
    { name: 'Maritime Surveillance', domain: 'Maritime', color: 'var(--color-forest)' },
    { name: 'Upgrade of Maritime Surveillance', domain: 'Maritime', color: 'var(--color-forest)' },
    { name: 'Cyber Rapid Response Teams', domain: 'Cyber', color: 'var(--color-terracotta)' },
    { name: 'Cyber & Info Domain Coordination Centre', domain: 'Cyber', color: 'var(--color-terracotta)' },
    { name: 'Strategic Air Transport (SATOC)', domain: 'Logistics', color: 'var(--color-copper)' },
    { name: 'Military Mobility', domain: 'Logistics', color: 'var(--color-copper)' },
    { name: 'EU Radio Navigation Solution', domain: 'Infrastructure', color: 'var(--color-fern)' },
  ];

  const domainCounts = [
    { domain: 'Maritime', count: 2, color: 'var(--color-forest)' },
    { domain: 'Cyber', count: 2, color: 'var(--color-terracotta)' },
    { domain: 'Logistics', count: 2, color: 'var(--color-copper)' },
    { domain: 'Infrastructure', count: 1, color: 'var(--color-fern)' },
  ];

  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
        Ireland&apos;s PESCO footprint
      </div>

      {/* Donut: 7 / 68 */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap', marginBottom: '28px' }}>
        <div>
          <svg width={140} height={140} viewBox="0 0 140 140">
            {/* Background ring */}
            <circle cx={70} cy={70} r={50} fill="none" stroke="var(--color-parchment)" strokeWidth="14" />
            {/* Ireland's share: 7/68 ≈ 10.3% */}
            <circle cx={70} cy={70} r={50} fill="none" stroke="var(--color-fern)" strokeWidth="14"
              strokeDasharray={`${2 * Math.PI * 50 * (7/68)} ${2 * Math.PI * 50 * (61/68)}`}
              strokeDashoffset={0} transform="rotate(-90 70 70)" strokeLinecap="round" />
            <text x={70} y={70} textAnchor="middle" dominantBaseline="central"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, fill: 'var(--color-forest)' }}>
              7/68
            </text>
          </svg>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', textAlign: 'center', marginTop: '4px' }}>
            Active PESCO projects
          </p>
        </div>

        {/* Domain breakdown */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', color: 'var(--color-graphite)', marginBottom: '12px', textTransform: 'uppercase' }}>
            By domain
          </div>
          {domainCounts.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: `${(d.count / 2) * 100}%`, maxWidth: '200px', minWidth: '40px', height: '22px', backgroundColor: d.color, borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--color-cream)' }}>{d.count}</span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-graphite)' }}>{d.domain}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '10px 14px',
            backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)',
            borderLeft: `3px solid ${p.color}`,
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: p.color, width: '90px', flexShrink: 0 }}>
              {p.domain}
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-ink)' }}>
              {p.name}
            </span>
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 0 0', marginTop: '20px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, maxWidth: '520px' }}>
          Every Irish PESCO project falls within maritime, cyber, logistics, or enabling infrastructure. The strategic review will determine whether this domain concentration is assessed as a deliberate strategy or a limitation.
        </p>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
        Source: PESCO Secretariat, Council of the European Union, 2025.
      </p>
    </div>
  );
}


/* ============================
   BRIEF 03 — Maritime Surveillance
   EEZ vs naval capacity gap
   ============================ */
function MaritimeViz() {
  const eezData = [
    { country: 'France', eez: 11035, vessels: 120, color: 'var(--color-sage)' },
    { country: 'Spain', eez: 1040, vessels: 46, color: 'var(--color-sage)' },
    { country: 'Ireland', eez: 880, vessels: 9, color: 'var(--color-terracotta)' },
    { country: 'Italy', eez: 541, vessels: 60, color: 'var(--color-sage)' },
    { country: 'Greece', eez: 505, vessels: 50, color: 'var(--color-sage)' },
  ];

  const gaps = [
    { label: 'Primary radar coverage', value: 'None', status: 'gap' as const },
    { label: 'Subsea monitoring', value: 'None', status: 'gap' as const },
    { label: 'Anti-submarine capability', value: 'None', status: 'gap' as const },
    { label: 'Naval vessels', value: '9', status: 'arriving' as const },
    { label: 'Air Corps maritime patrol', value: '2 CN-235', status: 'arriving' as const },
    { label: 'CISE membership', value: 'April 2025', status: 'delivered' as const },
  ];

  const statusColors = {
    delivered: { bg: 'rgba(61,107,79,0.08)', border: 'var(--color-fern)', dot: 'var(--color-fern)' },
    arriving: { bg: 'rgba(212,135,94,0.08)', border: 'var(--color-copper)', dot: 'var(--color-copper)' },
    gap: { bg: 'rgba(181,86,62,0.06)', border: 'var(--color-terracotta)', dot: 'var(--color-terracotta)' },
  };

  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
        The surveillance gap
      </div>

      {/* EEZ comparison */}
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '4px' }}>
          EEZ size vs. naval patrol vessels
        </h4>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', marginBottom: '16px' }}>
          Bar width = EEZ (thousands km²). Number = patrol vessels.
        </p>
        {eezData.map((d, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: d.country === 'Ireland' ? 'var(--color-terracotta)' : 'var(--color-graphite)', fontWeight: d.country === 'Ireland' ? 700 : 400 }}>
                {d.country} — {d.eez.toLocaleString()} km²
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, color: d.country === 'Ireland' ? 'var(--color-terracotta)' : 'var(--color-forest)' }}>
                {d.vessels} vessels
              </span>
            </div>
            <div style={{ height: '10px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${Math.min((d.eez / 1200) * 100, 100)}%`,
                backgroundColor: d.color,
                borderRadius: '2px',
              }} />
            </div>
          </div>
        ))}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)', marginTop: '4px' }}>
          France shown at 1/10 scale. Ireland has the 3rd largest EU EEZ but one of the smallest navies.
        </p>
      </div>

      {/* Capability status cards */}
      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '12px' }}>
        Current maritime capability
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
        {gaps.map((g, i) => {
          const c = statusColors[g.status];
          return (
            <div key={i} style={{ padding: '14px', backgroundColor: c.bg, borderLeft: `3px solid ${c.border}`, borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: c.dot }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: c.dot }}>
                  {g.status === 'gap' ? 'Critical gap' : g.status === 'arriving' ? 'Limited' : 'In place'}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>{g.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)', marginTop: '2px' }}>{g.value}</div>
            </div>
          );
        })}
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '16px' }}>
        Source: Commission on the Defence Forces, Naval Service reports, EMSA, 2025.
      </p>
    </div>
  );
}


/* ============================
   BRIEF 04 — Hybrid Threats & Cyber Defence
   Tech HQ concentration + 4 frameworks
   ============================ */
function HybridCyberViz() {
  const techHQs = [
    { company: 'Apple', hq: 'Cork', sector: 'Consumer tech' },
    { company: 'Google', hq: 'Dublin', sector: 'Cloud / Search' },
    { company: 'Meta', hq: 'Dublin', sector: 'Social / AI' },
    { company: 'Microsoft', hq: 'Dublin', sector: 'Cloud / Enterprise' },
    { company: 'Intel', hq: 'Leixlip', sector: 'Semiconductors' },
    { company: 'Salesforce', hq: 'Dublin', sector: 'Enterprise SaaS' },
    { company: 'LinkedIn', hq: 'Dublin', sector: 'Professional network' },
    { company: 'TikTok', hq: 'Dublin', sector: 'Social media' },
    { company: 'X / Twitter', hq: 'Dublin', sector: 'Social media' },
  ];

  const frameworks = [
    { name: 'EU Hybrid Toolbox', status: 'Being shaped', phase: 'Implementation from July 2026', color: 'var(--color-terracotta)' },
    { name: 'Cyber Diplomacy Toolbox', status: 'Being shaped', phase: 'Attribution & response protocols', color: 'var(--color-terracotta)' },
    { name: 'Cybersecurity Crisis Blueprint', status: 'Being shaped', phase: 'Crisis coordination mechanism', color: 'var(--color-copper)' },
    { name: 'NIS2 Implementation', status: 'Transposing', phase: 'National implementation due 2026', color: 'var(--color-fern)' },
  ];

  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
        Why EU cyber resilience runs through Dublin
      </div>

      {/* Big stat */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 700, color: 'var(--color-terracotta)', lineHeight: 1 }}>9/10</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)' }}>of the top US tech firms have their EU headquarters in Ireland</span>
      </div>

      {/* Tech HQ grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0', marginBottom: '32px', border: '1px solid var(--color-rule)', borderRadius: '2px', overflow: 'hidden' }}>
        {techHQs.map((t, i) => (
          <div key={i} style={{
            padding: '10px 14px',
            backgroundColor: i % 2 === 0 ? 'var(--color-parchment)' : 'var(--color-cream)',
            borderBottom: '1px solid var(--color-rule)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>{t.company}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginLeft: '8px' }}>{t.sector}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fern)' }}>{t.hq}</span>
          </div>
        ))}
      </div>

      {/* Four frameworks being shaped */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '12px' }}>
        Four frameworks Ireland will chair
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        {frameworks.map((f, i) => (
          <div key={i} style={{
            padding: '16px',
            backgroundColor: 'var(--color-parchment)',
            borderLeft: `3px solid ${f.color}`,
            borderRadius: '2px',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: f.color, marginBottom: '4px' }}>
              {f.name}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', color: 'var(--color-stone)', marginBottom: '6px', textTransform: 'uppercase' }}>
              {f.status}
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '12px', color: 'var(--color-graphite)', lineHeight: 1.5 }}>
              {f.phase}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 20px', backgroundColor: 'rgba(181,86,62,0.06)', borderLeft: '3px solid var(--color-terracotta)', borderRadius: '2px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.65, margin: 0 }}>
          A successful cyber attack on Irish-hosted systems affects data integrity across the entire Union. The 2021 HSE ransomware attack demonstrated the vulnerability. Ireland chairs implementation of all four frameworks from July 2026.
        </p>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', marginTop: '12px' }}>
        Source: Council of the EU, IDA Ireland, European Commission, 2025–26.
      </p>
    </div>
  );
}


/* ============================
   Main export: renders the right viz for each slug
   ============================ */
export default function BriefVisualizations({ slug }: { slug: string }) {
  switch (slug) {
    case 'presidency-desk-primer':
      return <PrimerViz />;
    case 'rearm-europe-brief':
      return <ReArmViz />;
    case 'pesco-strategic-review-brief':
      return <PESCOViz />;
    case 'maritime-surveillance-cooperation-brief':
      return <MaritimeViz />;
    case 'hybrid-threats-cyber-defence-brief':
      return <HybridCyberViz />;
    default:
      return null;
  }
}
