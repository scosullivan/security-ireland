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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-8">
          {/* Left side - tagline */}
          <div className="flex-1">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                color: 'var(--color-graphite)',
              }}
            >
              Independent analysis for a changing{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-fern)' }}>
                Ireland.
              </span>
            </p>
          </div>

          {/* Right side - social and contact links */}
          <div
            className="flex gap-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            <Link
              href="https://twitter.com/securityireland"
              style={{ color: 'var(--color-stone)' }}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/company/security-ireland"
              style={{ color: 'var(--color-stone)' }}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="/feed.xml"
              style={{ color: 'var(--color-stone)' }}
              className="hover:opacity-75 transition-opacity"
            >
              RSS
            </Link>
            <Link
              href="mailto:hello@securityireland.ie"
              style={{ color: 'var(--color-stone)' }}
              className="hover:opacity-75 transition-opacity"
            >
              Contact
            </Link>
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
