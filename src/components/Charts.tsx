'use client';

/* ── Horizontal Bar Chart ── */
export function HBarChart({ data, unit }: { data: { label: string; value: number; max?: number }[]; unit?: string }) {
  const maxVal = Math.max(...data.map(d => d.max ?? d.value), 1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {data.map((d, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', color: 'var(--color-graphite)' }}>{d.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: d.value === 0 ? 'var(--color-terracotta)' : 'var(--color-forest)', fontWeight: 600 }}>
              {d.value}{unit || '%'}
            </span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--color-parchment)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${Math.max((d.value / maxVal) * 100, d.value > 0 ? 2 : 0)}%`,
              backgroundColor: d.value === 0 ? 'var(--color-terracotta)' : 'var(--color-fern)',
              borderRadius: '2px',
              transition: 'width 1s ease-out',
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Donut Chart ── */
export function DonutChart({ segments, size = 140, label }: { segments: { value: number; color: string; label: string }[]; size?: number; label?: string }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const r = (size - 20) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((seg, i) => {
          const pct = seg.value / total;
          const dash = circumference * pct;
          const currentOffset = offset;
          offset += dash;
          return (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={seg.color}
              strokeWidth="12" strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-currentOffset} transform={`rotate(-90 ${cx} ${cy})`}
              strokeLinecap="round" />
          );
        })}
        {label && <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 700, fill: 'var(--color-forest)' }}>{label}</text>}
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {segments.map((seg, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: seg.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-graphite)' }}>{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Vertical Bar Chart ── */
export function VBarChart({ data, height = 180 }: { data: { label: string; value: number; color?: string }[]; height?: number }) {
  const maxVal = Math.max(...data.map(d => d.value), 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: `${height}px`, paddingTop: '20px' }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600, color: 'var(--color-forest)' }}>
            {d.value}%
          </span>
          <div style={{
            width: '100%', maxWidth: '48px',
            height: `${(d.value / maxVal) * (height - 50)}px`,
            backgroundColor: d.color || 'var(--color-fern)',
            borderRadius: '2px 2px 0 0',
            minHeight: '4px',
          }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', textAlign: 'center', color: 'var(--color-stone)', lineHeight: 1.3, maxWidth: '60px' }}>
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Timeline Chart ── */
export function Timeline({ events }: { events: { year: string; text: string; highlight?: boolean }[] }) {
  return (
    <div style={{ position: 'relative', paddingLeft: '24px' }}>
      <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', backgroundColor: 'var(--color-rule)' }} />
      {events.map((e, i) => (
        <div key={i} style={{ position: 'relative', paddingBottom: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            position: 'absolute', left: '-21px', top: '6px',
            width: '10px', height: '10px', borderRadius: '50%',
            backgroundColor: e.highlight ? 'var(--color-terracotta)' : 'var(--color-sage)',
            border: '2px solid var(--color-cream)',
          }} />
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', color: e.highlight ? 'var(--color-terracotta)' : 'var(--color-stone)', fontWeight: 600 }}>
              {e.year}
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.6, marginTop: '2px', maxWidth: '480px' }}>
              {e.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Capability Gap Chart (LOA 1/2/3 layered bars) ── */
export function CapabilityGapChart({ data }: { data: { domain: string; current: number; target: number; selfDefence: number }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Legend */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { color: 'var(--color-terracotta)', label: 'LOA 1 (Current)' },
          { color: 'var(--color-copper)', label: 'LOA 2 (Target 2028)' },
          { color: 'var(--color-parchment)', label: 'LOA 3 (Self-Defence)' },
        ].map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: l.color, border: l.color === 'var(--color-parchment)' ? '1px solid var(--color-rule)' : 'none' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-graphite)' }}>{l.label}</span>
          </div>
        ))}
      </div>
      {/* Bars */}
      {data.map((d, i) => (
        <div key={i}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', color: 'var(--color-graphite)', marginBottom: '6px' }}>
            {d.domain}
          </div>
          <div style={{ position: 'relative', height: '28px', backgroundColor: 'var(--color-cream)', borderRadius: '3px', border: '1px solid var(--color-rule)' }}>
            {/* LOA 3 — self-defence (full background) */}
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${d.selfDefence}%`,
              backgroundColor: 'var(--color-parchment)',
              borderRadius: '3px 0 0 3px',
            }} />
            {/* LOA 2 — target 2028 */}
            <div style={{
              position: 'absolute', top: '3px', left: 0, height: '22px',
              width: `${d.target}%`,
              backgroundColor: 'var(--color-copper)',
              borderRadius: '2px 0 0 2px',
              opacity: 0.7,
            }} />
            {/* LOA 1 — current */}
            <div style={{
              position: 'absolute', top: '3px', left: 0, height: '22px',
              width: `${Math.max(d.current, 1)}%`,
              backgroundColor: 'var(--color-terracotta)',
              borderRadius: '2px 0 0 2px',
            }} />
            {/* Current label */}
            <span style={{
              position: 'absolute', top: '6px',
              left: `${Math.max(d.current, 1) + 1}%`,
              fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 600,
              color: d.current === 0 ? 'var(--color-terracotta)' : 'var(--color-graphite)',
            }}>
              {d.current === 0 ? 'None' : `${d.current}%`}
            </span>
          </div>
        </div>
      ))}
      {/* Axis */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[0, 25, 50, 75, 100].map(v => (
          <span key={v} style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--color-stone)' }}>{v}%</span>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-stone)', textAlign: 'center' }}>
        Estimated capability readiness
      </div>
    </div>
  );
}

/* ── Stat Comparison Cards ── */
export function ComparisonCards({ items }: { items: { label: string; value: string; sub: string; status: 'delivered' | 'arriving' | 'gap' }[] }) {
  const statusColors = {
    delivered: { bg: 'rgba(61,107,79,0.08)', border: 'var(--color-fern)', dot: 'var(--color-fern)' },
    arriving: { bg: 'rgba(181,86,62,0.06)', border: 'var(--color-copper)', dot: 'var(--color-copper)' },
    gap: { bg: 'rgba(181,86,62,0.06)', border: 'var(--color-terracotta)', dot: 'var(--color-terracotta)' },
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
      {items.map((item, i) => {
        const c = statusColors[item.status];
        return (
          <div key={i} style={{ padding: '16px', backgroundColor: c.bg, borderLeft: `3px solid ${c.border}`, borderRadius: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: c.dot }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: c.dot }}>
                {item.status}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '2px' }}>{item.label}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)' }}>{item.sub}</div>
          </div>
        );
      })}
    </div>
  );
}
