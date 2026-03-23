'use client';

import { useState, useEffect } from 'react';

const PRESIDENCY_START = new Date('2026-07-01T00:00:00+02:00');
const PRESIDENCY_END = new Date('2026-12-31T23:59:59+01:00');

function getDaysLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return 0;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function PresidencyCountdown() {
  const [mounted, setMounted] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const now = new Date();
  const beforeStart = now < PRESIDENCY_START;
  const duringPresidency = now >= PRESIDENCY_START && now <= PRESIDENCY_END;
  const afterEnd = now > PRESIDENCY_END;

  if (afterEnd) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 0' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)' }}>
          Ireland&apos;s EU Council Presidency concluded 31 December 2026.
        </div>
      </div>
    );
  }

  const days = beforeStart ? getDaysLeft(PRESIDENCY_START) : getDaysLeft(PRESIDENCY_END);
  const statusColor = beforeStart ? 'var(--color-terracotta)' : 'var(--color-forest)';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0' }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '48px',
        fontWeight: 700,
        color: statusColor,
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {days}
      </div>
      <div>
        {duringPresidency && (
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--color-cream)',
            backgroundColor: 'var(--color-forest)',
            padding: '3px 8px',
            borderRadius: '2px',
            marginBottom: '4px',
          }}>
            Active
          </div>
        )}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--color-stone)',
        }}>
          {beforeStart ? 'days until Ireland takes the chair' : 'days remaining in the Presidency'}
        </div>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          color: 'var(--color-graphite)',
          marginTop: '2px',
        }}>
          {beforeStart ? '1 July 2026' : '31 December 2026'}
        </div>
      </div>
    </div>
  );
}
