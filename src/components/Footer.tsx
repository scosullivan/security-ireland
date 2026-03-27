import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        borderTop: '1.5px solid var(--color-terracotta)',
        backgroundColor: 'var(--color-cream)',
        color: 'var(--color-ink)',
      }}
    >
      <div className="max-w-6xl mx-auto px-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-8">
          {/* Left side - tagline */}
          <div className="flex-1">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'var(--color-stone)',
              }}
            >
              Independent analysis for a changing{' '}
              <span style={{ color: 'var(--color-fern)' }}>
                Ireland.
              </span>
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--color-rule)',
            paddingTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-stone)',
          }}
        >
          <p>© 2026 Security Ireland</p>
        </div>
      </div>
    </footer>
  );
}
