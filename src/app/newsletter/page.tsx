import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Newsletter — Security Ireland',
  description: 'Subscribe to the Security Ireland newsletter for weekly analysis during the EU Presidency.',
};

export default function NewsletterPage() {
  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          Newsletter
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px' }}>
          The Security Ireland Newsletter
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '8px' }}>
          Weekly analysis during the EU Presidency (July&ndash;December 2026), fortnightly otherwise. Each edition includes the latest publications, key data points, and commentary on Ireland&apos;s evolving security landscape.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', fontStyle: 'italic', marginBottom: '40px' }}>
          Free. No spam. Unsubscribe anytime.
        </p>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>

      {/* Archive placeholder */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
        <div className="label-caps" style={{ margin: '32px 0 16px' }}>Past Editions</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic' }}>
          Newsletter archive coming soon. The first edition will be published in May 2026.
        </p>
      </section>
    </div>
  );
}
