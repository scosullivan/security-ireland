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

export default async function PublicationPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p>Publication not found</p>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb */}
        <div className="font-mono text-sm text-stone mb-8">
          <Link href="/analysis" className="hover:text-terracotta transition-colors">
            Analysis
          </Link>
          <span className="mx-2">›</span>
          <span>{post.type}</span>
          <span className="mx-2">›</span>
          <span className="truncate">{post.title}</span>
        </div>

        {/* Type Label */}
        <span className="label-accent">{post.type}</span>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--color-ink)',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.125rem',
            fontStyle: 'italic',
            lineHeight: 1.75,
            color: 'var(--color-graphite)',
            marginBottom: '24px',
          }}
        >
          {post.excerpt}
        </p>

        {/* Meta */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-stone)',
            marginBottom: '24px',
          }}
        >
          {post.readTime && (
            <span>{post.readTime}</span>
          )}
        </div>

        {/* PDF Download Button — prominent, before the divider */}
        {post.pdfUrl && (
          <div className="mb-8">
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

        {/* Divider */}
        <hr className="rule-accent mb-12" />

        {/* Key Findings (if present) */}
        {post.keyFindings && post.keyFindings.length > 0 && (
          <div
            style={{
              borderLeft: '3px solid var(--color-terracotta)',
              padding: '24px 28px',
              marginBottom: '48px',
              backgroundColor: 'var(--color-cream)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                marginBottom: '16px',
              }}
            >
              Key Findings
            </div>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--color-ink)',
              }}
            >
              {post.keyFindings.map((finding: string, i: number) => (
                <li key={i} style={{ marginBottom: '8px' }}>{finding}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Content */}
        {post.html && (
          <div
            className="prose-si mb-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}

        {/* Bottom divider and back link — clean */}
        <hr className="rule-accent mt-12 mb-8" />

        {/* Repeat PDF download at bottom for convenience */}
        {post.pdfUrl && (
          <div className="mb-6">
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
          </div>
        )}

        <Link
          href="/analysis"
          className="text-terracotta font-sans font-bold hover:text-copper transition-colors"
        >
          ← Back to Analysis
        </Link>
      </article>
    </div>
  );
}
