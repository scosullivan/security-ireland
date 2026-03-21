'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="subscribe"
      className="py-12 px-6 sm:px-8"
      style={{ backgroundColor: 'var(--color-parchment)' }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: '400',
            color: 'var(--color-ink)',
            marginBottom: '16px',
          }}
        >
          Stay informed
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            color: 'var(--color-graphite)',
            marginBottom: '24px',
            lineHeight: 1.75,
          }}
        >
          Independent analysis on Irish and European security, delivered to your inbox.
        </p>

        {submitted ? (
          <div
            style={{
              backgroundColor: 'var(--color-cream)',
              borderLeftWidth: '4px',
              borderLeftColor: 'var(--color-terracotta)',
              padding: '1rem',
              color: 'var(--color-graphite)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Thanks for subscribing! Check your email to confirm your subscription.
          </div>
        ) : error ? (
          <div
            style={{
              backgroundColor: 'var(--color-cream)',
              borderLeftWidth: '4px',
              borderLeftColor: 'var(--color-terracotta)',
              padding: '1rem',
              color: 'var(--color-graphite)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {error}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{
                flex: 1,
                padding: '12px 0',
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                backgroundColor: 'transparent',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px solid var(--color-rule)',
                color: 'var(--color-ink)',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-terracotta)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-rule)';
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '8px 0',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-ink)',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 'bold',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.2s',
                minWidth: '120px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-ink)';
                e.currentTarget.style.color = 'var(--color-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-ink)';
              }}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
