import Link from 'next/link';
import { getAllPosts, getPostBySlug, Post } from '@/lib/posts';

interface PublicationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default async function PublicationPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px' }}>
        <p>Publication not found</p>
      </div>
    );
  }

  // Get all posts for "Related" section
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="bg-cream min-h-screen">
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* Publication Header */}
        <div style={{ padding: '56px 0 36px' }}>
          {/* Type Label */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              marginBottom: '14px',
            }}
          >
            {post.type}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--color-ink)',
              marginBottom: '14px',
              maxWidth: '620px',
            }}
          >
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              fontStyle: 'italic',
              color: 'var(--color-graphite)',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginBottom: '24px',
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta Row */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-stone)',
              display: 'flex',
              gap: '20px',
            }}
          >
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </div>

        {/* Accent rule */}
        <hr className="rule-accent" />

        {/* Key Findings */}
        {post.keyFindings && post.keyFindings.length > 0 && (
          <div className="key-findings">
            <div className="kf-title">Key Findings</div>
            <ul>
              {post.keyFindings.map((finding: string, i: number) => (
                <li key={i}>{finding}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Content */}
        {post.html && (
          <div
            className="prose-si"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}

        {/* Pub Actions */}
        <div className="pub-actions">
          <a href="#" className="action-link primary">
            Download PDF
          </a>
          <a href="#" className="action-link">
            Twitter
          </a>
          <a href="#" className="action-link">
            LinkedIn
          </a>
          <a href="#" className="action-link">
            Copy Link
          </a>
        </div>

        {/* Author Block */}
        <div className="author-block">
          <div className="author-avatar" />
          <div>
            <div className="author-name">{post.author}</div>
            <div className="author-role">Research Fellow, Security Ireland.</div>
          </div>
        </div>

        {/* Related Section */}
        {relatedPosts.length > 0 && (
          <div style={{ padding: '36px 0', borderTop: '1px solid var(--color-rule)' }}>
            <div className="label-caps" style={{ marginBottom: '20px' }}>
              Related
            </div>
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/analysis/${p.slug}`}
                className="pub-list-item"
              >
                <span className="type-pip-inline">{p.type}</span>
                <h3>{p.title}</h3>
                <span className="date">{formatShortDate(p.date)}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter (pub page version) */}
        <div style={{ margin: '48px 0', padding: '36px 0', borderTop: '1px solid var(--color-rule)' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--color-ink)',
              marginBottom: '6px',
            }}
          >
            Get analysis like this in your inbox
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '14px',
              color: 'var(--color-graphite)',
              lineHeight: 1.6,
              marginBottom: '20px',
              maxWidth: '400px',
            }}
          >
            Weekly. Independent. No fluff.
          </p>
          <div style={{ display: 'flex', gap: '8px', maxWidth: '380px' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                padding: '10px 14px',
                border: '1px solid var(--color-rule)',
                borderRadius: 0,
                background: 'transparent',
                color: 'var(--color-ink)',
                flex: 1,
                outline: 'none',
              }}
            />
            <button
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background: 'none',
                border: '1px solid var(--color-ink)',
                color: 'var(--color-ink)',
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
