import Link from 'next/link';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';
import BriefVisualizations from '@/components/BriefVisualizations';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Security Ireland`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, 3);
  const dateStr = new Date(post.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-cream">
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 0' }}>
        {/* Type label */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
          {post.type}
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.25, marginBottom: '12px', maxWidth: '680px' }}>
          {post.title}
        </h1>

        {/* Subtitle/excerpt */}
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontStyle: 'italic', color: 'var(--color-graphite)', lineHeight: 1.6, maxWidth: '600px', marginBottom: '16px' }}>
          {post.excerpt}
        </p>

        {/* Date + read time */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)', marginBottom: '24px' }}>
          {dateStr} · {post.readTime}
        </div>

        {/* PDF Download Button — prominent, near the top */}
        {post.pdfUrl && (
          <div style={{ marginBottom: '32px' }}>
            <a
              href={post.pdfUrl}
              download
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-forest text-white font-sans font-semibold text-[0.95rem] tracking-wide rounded-md no-underline transition-colors duration-200 hover:bg-fern"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        )}

        {/* Key findings */}
        {post.keyFindings && post.keyFindings.length > 0 && (
          <div className="key-findings">
            <div className="kf-title">Key Findings</div>
            <ul>
              {post.keyFindings.map((kf, i) => (
                <li key={i}>{kf}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Brief-specific visualizations */}
        <BriefVisualizations slug={slug} />

        {/* Body */}
        {post.html && (
          <div className="prose-si" dangerouslySetInnerHTML={{ __html: post.html }} />
        )}

        {/* Clean bottom actions */}
        <div style={{ borderTop: '1px solid var(--color-rule)', marginTop: '48px', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
          {post.pdfUrl && (
            <a
              href={post.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border-[1.5px] border-forest text-forest font-sans text-sm font-semibold rounded-md no-underline bg-transparent transition-colors duration-200 hover:bg-forest hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          )}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://securityireland.ie/publications/' + post.slug)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--color-stone)', textDecoration: 'none' }}
          >
            Share on Twitter
          </a>
          <span style={{ color: 'var(--color-rule)' }}>·</span>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://securityireland.ie/publications/' + post.slug)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--color-stone)', textDecoration: 'none' }}
          >
            Share on LinkedIn
          </a>
        </div>

      </article>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 48px' }}>
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-rule)' }} />
          <div className="label-caps" style={{ margin: '32px 0 16px' }}>Related</div>
          {related.map((r) => (
            <PublicationCard key={r.slug} post={r} />
          ))}
        </section>
      )}

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter headline="Get analysis like this in your inbox" subtitle="Weekly. Independent. No fluff." />
      </section>
    </div>
  );
}
