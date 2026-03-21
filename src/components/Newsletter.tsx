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
            fontSize: '2rem',
            fontWeight: '400',
            color: 'var(--color-ink)',
            marginBottom: '1rem',
          }}
        >
          Stay informed
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.0625rem',
            color: 'var(--color-graphite)',
            marginBottom: '1.5rem',
            lineHeight: '1.75',
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
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-sans)',
                border: '1px solid var(--color-rule)',
                backgroundColor: 'white',
                color: 'var(--color-ink)',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              className="focus:border-terracotta"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-terracotta)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-rule)';
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--color-terracotta)',
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'background-color 0.2s',
              }}
              className="hover:bg-copper"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
