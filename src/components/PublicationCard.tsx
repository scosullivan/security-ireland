import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PublicationCardProps {
  post: Post;
}

export default function PublicationCard({ post }: PublicationCardProps) {
  return (
    <article
      style={{
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid var(--color-rule)',
      }}
      className="last:border-b-0"
    >
      <div className="flex items-start gap-4">
        {/* Type badge */}
        <span
          className="type-pip flex-shrink-0"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '3px 10px',
            border: '1px solid var(--color-rule)',
            color: 'var(--color-stone)',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          {post.type}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: '400',
              color: 'var(--color-ink)',
              marginBottom: '0.5rem',
            }}
            className="hover:opacity-75 transition-opacity"
          >
            <Link href={`/analysis/${post.slug}`} className="hover:text-terracotta">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.0625rem',
              color: 'var(--color-graphite)',
              marginBottom: '0.75rem',
              lineHeight: '1.75',
            }}
          >
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-stone)',
            }}
          >
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>·</span>
                <span>{post.readTime}</span>
              </>
            )}
            {post.pdfUrl && (
              <>
                <span>·</span>
                <a
                  href={post.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-terracotta)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  PDF ↓
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
