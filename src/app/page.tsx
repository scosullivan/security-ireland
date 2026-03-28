import Link from 'next/link';
import { getAllPosts, getFeaturedPost } from '@/lib/posts';
import { IrelandSVG } from '@/components/IrelandSVG';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';

function formatMeta(post: { readTime: string }): string {
  const parts: string[] = [];
  if (post.readTime) parts.push(post.readTime);
  return parts.join(' · ');
}

export default async function Home() {
  const featuredPost = await getFeaturedPost();
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.filter(p => p.slug !== featuredPost?.slug).slice(0, 4);

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section style={{ maxWidth: '1152px', margin: '0 auto', padding: '96px 48px' }} className="hero-section">
        <div className="hero-grid">
          {/* Left Column */}
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', fontWeight: 400, lineHeight: 1.2, color: 'var(--color-ink)', marginBottom: '20px', letterSpacing: '-0.5px' }}>
              Independent analysis for a{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-fern)' }}>changing Ireland</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, marginBottom: '36px' }}>
              Research, commentary, and evidence-based policy on Irish and European security.
              For policymakers, journalists, and citizens who want to engage constructively
              with the complex issues shaping Ireland&apos;s role in the world.
            </p>
            <div className="flex gap-6 flex-wrap items-center">
              <Link
                href="#newsletter"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-terracotta)', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px', textDecoration: 'none' }}
              >
                Subscribe →
              </Link>
              <Link
                href="/analysis"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontStyle: 'italic', color: 'var(--color-stone)', textDecoration: 'none' }}
              >
                Read our latest
              </Link>
            </div>
          </div>

          {/* Right Column - IrelandSVG */}
          <div className="ireland-svg-container">
            <IrelandSVG />
          </div>
        </div>
      </section>

      {/* Introduction — what this is and why it matters */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
        <hr className="rule-accent" />
        <div style={{ padding: '36px 0 0' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--color-terracotta)',
            marginBottom: '16px',
          }}>
            Why Security Ireland
          </div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: 'var(--color-graphite)',
            lineHeight: 1.85,
            marginBottom: '20px',
            maxWidth: '640px',
          }}>
            Ireland&apos;s security environment has changed more in the last five years than
            in the previous fifty. European rearmament, undersea infrastructure threats, hybrid
            attacks, and a shifting Atlantic alliance are rewriting the rules — and Ireland has
            no dedicated institution analysing what this means for the country.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: 'var(--color-graphite)',
            lineHeight: 1.85,
            marginBottom: '20px',
            maxWidth: '640px',
          }}>
            Security Ireland fills that gap. We produce original research on defence architecture,
            EU commitments, bilateral cooperation, and institutional reform — not to advocate for
            any political position, but to give policymakers, journalists, and citizens the
            evidence they need to engage seriously with these questions.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: 'var(--color-graphite)',
            lineHeight: 1.85,
            marginBottom: '20px',
            maxWidth: '640px',
          }}>
            Our work covers the full landscape: from how Ireland spends its defence budget,
            to how PESCO and EU battle groups actually work, to the quiet bilateral agreements
            shaping Ireland&apos;s real security posture. Every paper includes original analysis,
            structured frameworks, and concrete policy options.
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '16px',
            color: 'var(--color-graphite)',
            lineHeight: 1.85,
            marginBottom: '24px',
            maxWidth: '640px',
          }}>
            Start with our featured research below, explore the{' '}
            <Link href="/publications" style={{ color: 'var(--color-terracotta)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              full publication list
            </Link>, or{' '}
            <Link href="#newsletter" style={{ color: 'var(--color-terracotta)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              subscribe to the newsletter
            </Link>{' '}
            to follow new work as it&apos;s published.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      {featuredPost && (
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <hr className="rule-accent" />
          <Link
            href={`/publications/${featuredPost.slug}`}
            style={{ display: 'block', textDecoration: 'none', padding: '36px 32px', margin: '24px 0', backgroundColor: 'var(--color-parchment)', borderLeft: '4px solid var(--color-terracotta)', borderRadius: '0 6px 6px 0', transition: 'background-color 0.2s ease' }}
            className="featured-card-hover"
          >
            <div className="label-caps" style={{ marginBottom: '16px' }}>Featured</div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                marginBottom: '12px',
              }}
            >
              {featuredPost.type}
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.3, marginBottom: '12px', maxWidth: '600px' }}>
              {featuredPost.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '16px', maxWidth: '560px' }}>
              {featuredPost.excerpt}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)' }}>
                {formatMeta(featuredPost)}
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--color-cream)',
                backgroundColor: 'var(--color-forest)',
                padding: '10px 24px',
                borderRadius: '3px',
                fontWeight: 600,
              }}>
                Read Now →
              </span>
            </div>
          </Link>

          {/* Latest Section */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
          <div className="label-caps" style={{ margin: '48px 0 20px' }}>Latest</div>
          <div>
            {latestPosts.map((post) => (
              <PublicationCard key={post.slug} post={post} />
            ))}
          </div>
          <div style={{ padding: '24px 0' }}>
            <Link
              href="/analysis"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '2px' }}
            >
              View All Analysis →
            </Link>
          </div>

          {/* EU Presidency */}
          <div style={{ margin: '40px 0', padding: '24px 0', borderTop: '1.5px solid var(--color-terracotta)' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                marginBottom: '8px',
              }}
            >
              Special Focus
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
              Ireland&apos;s EU Presidency 2026
            </h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-graphite)', lineHeight: 1.65, maxWidth: '480px', marginBottom: '12px' }}>
              Ireland takes the Council Presidency in July 2026. We&apos;re tracking the security
              dimension — from CSDP priorities to hybrid threat policy.
            </p>
            <Link
              href="/eu-presidency"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-terracotta)', textDecoration: 'none', borderBottom: '1px solid var(--color-terracotta)', paddingBottom: '1px' }}
            >
              Explore →
            </Link>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section id="newsletter" className="border-t border-rule">
        <Newsletter />
      </section>
    </div>
  );
}
