'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/european-defence', label: 'European Defence' },
  { href: '/eu-presidency', label: 'EU Presidency 2026' },
  { href: '/for-policymakers', label: 'For Policymakers' },
  { href: '/for-the-public', label: 'For the Public' },
  { href: '/for-investors', label: 'For Investors' },
  { href: '/for-media', label: 'For Media' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-cream border-b border-rule"
      style={{ borderColor: 'var(--color-rule)' }}
    >
      <div className="max-w-6xl mx-auto px-12 py-7">
        <div className="flex items-center justify-start gap-12">
          {/* Left side - Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg
              viewBox="0 0 300 420"
              className="w-6 h-8"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M178.7 7.5 Q184.6 9.3 186.5 14.2 Q195.0 22.1 199.5 25.0 Q210.1 29.1 213.6 28.2 Q221.8 24.6 231.5 26.5 Q235.5 18.4 245.1 17.4 Q249.0 18.5 254.2 17.2 Q254.3 18.6 257.6 20.0 Q266.0 28.5 270.2 30.3 Q271.1 44.8 272.4 53.5 Q272.6 68.2 277.5 77.8 Q280.6 80.4 276.2 89.8 Q276.1 87.0 275.3 90.6 Q282.4 97.9 283.8 109.0 Q291.4 118.9 293.3 121.5 Q295.9 123.8 295.9 122.6 Q284.5 132.5 268.4 139.7 Q264.7 144.5 261.6 148.4 Q258.0 155.3 259.6 161.3 Q264.6 174.7 264.8 180.8 Q267.3 195.2 264.0 205.0 Q259.1 204.6 258.1 211.4 Q259.5 221.7 260.5 228.0 Q264.4 235.0 262.4 246.4 Q259.5 260.6 257.2 269.2 Q258.1 281.4 251.1 291.7 Q250.8 295.3 250.1 299.4 Q243.0 306.5 243.9 321.6 Q247.5 332.1 257.6 336.1 Q244.3 336.9 234.6 334.9 Q224.7 340.5 211.1 342.5 Q201.6 342.8 187.0 345.6 Q186.3 353.4 180.2 364.2 Q165.1 364.3 152.1 367.2 Q144.1 370.5 143.3 373.5 Q133.6 380.9 118.1 382.5 Q110.7 388.8 106.0 394.2 Q99.8 401.3 88.6 403.8 Q82.8 399.0 76.0 401.0 Q66.6 400.0 52.9 404.8 Q48.4 400.8 50.1 402.6 Q44.4 397.1 35.6 397.4 Q34.4 388.3 28.8 386.4 Q30.8 388.6 28.6 383.8 Q24.9 378.5 13.6 376.7 Q17.1 370.3 19.8 362.4 Q23.1 361.0 27.9 356.2 Q14.6 351.1 4.2 343.8 Q15.3 336.3 19.3 336.4 Q28.1 334.9 29.9 334.8 Q38.3 333.9 40.7 332.3 Q45.3 323.6 45.3 320.2 Q43.1 307.0 36.4 301.6 Q39.1 295.9 39.0 289.7 Q42.8 288.8 51.0 289.7 Q59.8 281.8 62.2 277.4 Q63.8 269.4 60.7 262.0 Q63.2 252.5 72.8 249.4 Q78.7 246.0 89.1 244.9 Q86.0 242.9 85.9 235.9 Q74.8 232.9 62.5 227.7 Q53.7 228.5 37.8 230.3 Q29.1 226.1 24.4 226.4 Q29.0 220.1 26.3 217.5 Q27.9 205.2 28.9 199.0 Q27.2 197.8 29.7 199.0 Q32.4 197.4 42.0 192.2 Q35.1 186.9 35.5 181.9 Q31.5 182.4 26.4 178.3 Q28.6 172.3 24.4 165.6 Q25.8 163.6 33.3 164.7 Q28.5 155.9 24.1 154.8 Q36.5 151.6 46.0 145.0 Q46.0 143.5 53.2 135.4 Q58.8 139.3 58.2 138.6 Q74.8 138.5 85.9 134.2 Q89.3 135.6 96.1 131.6 Q99.5 127.0 109.7 120.1 Q115.5 119.0 119.5 119.1 Q120.6 113.4 114.6 106.1 Q122.0 105.7 126.5 107.3 Q126.5 101.9 131.8 103.2 Q131.2 94.8 133.5 93.5 Q127.9 90.2 128.9 85.8 Q121.9 84.6 120.0 80.6 Q110.0 81.0 106.9 75.3 Q106.1 71.9 97.4 70.4 Q101.2 68.3 100.5 61.0 Q100.8 54.6 104.8 54.8 Q109.6 55.0 112.1 50.0 Q120.1 49.3 122.9 44.7 Q124.6 37.7 129.0 38.6 Q136.7 37.6 137.0 32.0 Q136.6 24.8 142.4 25.2 Q145.4 18.7 145.5 19.8 Q160.5 14.3 167.7 11.7 Q169.8 12.0 169.5 10.5 Q167.2 14.9 170.8 11.4 Q181.5 5.7 188.4 7.6 Z"
                fill="var(--color-forest)"
                fillOpacity="0.12"
                stroke="var(--color-forest)"
                strokeWidth="4"
              />
            </svg>
            <div className="flex flex-col leading-tight">
              <span
                style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: 'var(--color-forest)' }}
              >
                Security{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 700, color: 'var(--color-fern)' }}>
                  Ireland
                </span>
              </span>
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 h-8 w-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-forest)' }} />
            <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-forest)' }} />
            <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-forest)' }} />
          </button>

          <div
            className="hidden md:flex gap-6 items-center"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.5px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? 'var(--color-terracotta)' : 'var(--color-stone)',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--color-ink)'; }}
                  onMouseOut={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--color-stone)'; }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="#subscribe" style={{ color: 'var(--color-terracotta)' }} className="hover:opacity-75 transition-opacity">Subscribe</Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4 space-y-3 border-t border-rule pt-4"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1.5px' }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: isActive ? 'var(--color-terracotta)' : 'var(--color-stone)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                    className="block hover:opacity-75 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
            <div><Link href="#subscribe" style={{ color: 'var(--color-terracotta)' }} className="block hover:opacity-75 transition-opacity">Subscribe</Link></div>
          </div>
        )}
      </div>
    </nav>
  );
}
