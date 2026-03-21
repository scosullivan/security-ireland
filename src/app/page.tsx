import Link from 'next/link';
import { getAllPosts, getFeaturedPost } from '@/lib/posts';
import { IrelandSVG } from '@/components/IrelandSVG';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';

export default async function Home() {
  const featuredPost = await getFeaturedPost();
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 4);

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', fontWeight: 400, lineHeight: 1.4, color: 'var(--color-ink)', marginBottom: '24px' }}>
              Independent analysis for a{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-fern)' }}>changing Ireland</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--color-graphite)', lineHeight: 1.75, marginBottom: '32px' }}>
              We provide rigorous, independent analysis of security and defence policy.
              At a time of unprecedented change in Ireland's strategic environment, we help
              policymakers, media, and citizens understand the challenges and opportunities ahead.
            </p>
            <div className="flex gap-8 flex-wrap items-center">
              <Link
                href="#newsletter"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-terracotta)', borderBottom: `2px solid var(--color-terracotta)`, paddingBottom: '4px', textDecoration: 'none' }}
              >
                Subscribe →
              </Link>
              <Link
                href="/analysis"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontStyle: 'italic', color: 'var(--color-stone)', textDecoration: 'none' }}
              >
                Read our latest
              </Link>
            </div>
          </div>

          {/* Right Column - IrelandSVG */}
          <div className="h-96 sm:h-full">
            <IrelandSVG />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredPost && (
        <section style={{ borderTop: '1.5px solid var(--color-terracotta)' }} className="max-w-6xl mx-auto px-12 py-24">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '32px' }}>Featured</div>
          <article className="max-w-3xl">
            <span className="type-pip">{featuredPost.type}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, color: 'var(--color-ink)', marginTop: '24px', marginBottom: '24px' }}>
              {featuredPost.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', lineHeight: 1.75, marginBottom: '24px' }}>
              {featuredPost.excerpt}
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--color-stone)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
              <span>{featuredPost.author}</span>
              <span>·</span>
              <span>{featuredPost.date}</span>
              {featuredPost.readTime && (
                <>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </>
              )}
            </div>
          </article>
        </section>
      )}

      {/* Latest Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-rule">
        <div className="label-caps mb-8">Latest</div>
        <div className="max-w-3xl">
          {latestPosts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* EU Presidency Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-rule">
        <div className="label-caps text-terracotta mb-6">Special Focus</div>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-6">
            Ireland's EU Presidency 2026
          </h2>
          <p className="text-lg text-graphite font-sans leading-relaxed mb-8">
            As Ireland takes the helm of the European Union, questions about security, defence,
            and Ireland's strategic role have never been more urgent. We're tracking how Ireland's
            presidency shapes the security agenda for Europe and what it means for Irish policy.
          </p>
          <Link
            href="/analysis"
            className="text-terracotta font-sans font-bold hover:text-copper transition-colors"
          >
            Explore →
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="border-t border-rule">
        <Newsletter />
      </section>
    </div>
  );
}
