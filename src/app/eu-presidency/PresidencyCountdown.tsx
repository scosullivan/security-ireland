'use client';

import { useState, useEffect } from 'react';

const PRESIDENCY_START = new Date('2026-07-01T00:00:00+02:00'); // Brussels time
const PRESIDENCY_END = new Date('2026-12-31T23:59:59+01:00');

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function PresidencyCountdown() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div style={{ padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
          Loading countdown...
        </div>
      </div>
    );
  }

  const beforeStart = now < PRESIDENCY_START;
  const duringPresidency = now >= PRESIDENCY_START && now <= PRESIDENCY_END;
  const afterEnd = now > PRESIDENCY_END;

  if (afterEnd) {
    return (
      <div style={{
        padding: '32px 24px',
        backgroundColor: 'var(--color-parchment)',
        border: '1px solid var(--color-rule)',
        borderRadius: '2px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '8px' }}>
          Presidency Concluded
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-ink)' }}>
          Ireland&apos;s EU Council Presidency ended 31 December 2026
        </div>
      </div>
    );
  }

  const target = beforeStart ? PRESIDENCY_START : PRESIDENCY_END;
  const timeLeft = getTimeLeft(target);
  if (!timeLeft) return null;

  const label = beforeStart
    ? 'Until Ireland takes the chair'
    : 'Presidency time remaining';

  const statusColor = beforeStart ? 'var(--color-terracotta)' : 'var(--color-forest)';

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <div style={{
      padding: '28px 24px',
      backgroundColor: 'var(--color-parchment)',
      border: '2px solid ' + statusColor,
      borderRadius: '2px',
      textAlign: 'center',
    }}>
      {duringPresidency && (
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--color-cream)',
          backgroundColor: 'var(--color-forest)',
          padding: '4px 12px',
          borderRadius: '2px',
          marginBottom: '12px',
        }}>
          Presidency Active
        </div>
      )}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'var(--color-stone)',
        marginBottom: '16px',
      }}>
        {label}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
      }}>
        {units.map((u) => (
          <div key={u.label} style={{ minWidth: '64px' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              fontWeight: 700,
              color: statusColor,
              lineHeight: 1,
              marginBottom: '4px',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {String(u.value).padStart(u.label === 'Days' ? 1 : 2, '0')}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--color-stone)',
            }}>
              {u.label}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '13px',
        color: 'var(--color-graphite)',
        marginTop: '16px',
      }}>
        {beforeStart ? '1 July 2026 \u2014 Ireland assumes the EU Council Presidency' : '31 December 2026 \u2014 Presidency concludes'}
      </div>
    </div>
  );
}
