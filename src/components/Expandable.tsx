'use client';

import { useState } from 'react';

export default function Expandable({
  num,
  title,
  readTime,
  children,
  defaultOpen = false,
}: {
  num: string;
  title: string;
  readTime: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{
      marginBottom: '12px',
      border: '1px solid var(--color-rule)',
      borderRadius: '3px',
      backgroundColor: open ? 'var(--color-cream)' : 'var(--color-parchment)',
      transition: 'background-color 0.2s',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: '14px',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 700,
          color: 'var(--color-terracotta)',
          flexShrink: 0,
          width: '24px',
        }}>
          {num}
        </span>
        <div style={{ flex: 1 }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '17px',
            fontWeight: 600,
            color: 'var(--color-ink)',
          }}>
            {title}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'var(--color-stone)',
            marginLeft: '12px',
            letterSpacing: '0.5px',
          }}>
            {readTime}
          </span>
        </div>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '20px',
          color: 'var(--color-stone)',
          flexShrink: 0,
          transition: 'transform 0.2s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 28px 62px' }}>
          {children}
        </div>
      )}
    </div>
  );
}
