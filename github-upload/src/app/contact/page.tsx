export const metadata = {
  title: 'Contact — Security Ireland',
  description: 'Get in touch with Security Ireland.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '16px' }}>
          Contact
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '40px' }}>
          We welcome enquiries from policymakers, journalists, researchers, and the public.
        </p>

        <hr className="rule-accent" />

        <div style={{ padding: '36px 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-stone)', marginBottom: '12px' }}>Email</div>
          <a href="mailto:info@securityireland.ie" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px' }}>
            info@securityireland.ie
          </a>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-stone)', fontStyle: 'italic', marginTop: '16px' }}>
            Dublin, Ireland
          </p>
        </div>
      </section>
    </div>
  );
}
