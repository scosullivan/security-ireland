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
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)', marginBottom: '32px' }}>
          {dateStr} · {post.readTime}
        </div>

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

        {/* Pub actions */}
        <div className="pub-actions">
          {post.pdfUrl && (
            <>
              <a href={post.pdfUrl} className="action-link primary" target="_blank" rel="noopener noreferrer">Read full paper →</a>
              <a href={post.pdfUrl} className="action-link" download>Download PDF</a>
            </>
          )}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://securityireland.ie/publications/' + post.slug)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://securityireland.ie/publications/' + post.slug)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
          >
            LinkedIn
          </a>
        </div>

        {/* Author block */}
        <div className="author-block">
          <div>
            <div className="author-name">{post.author}</div>
            <div className="author-role">Independent analysis on Irish and European security.</div>
          </div>
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
