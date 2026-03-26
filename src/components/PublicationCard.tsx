'use client';

import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PublicationCardProps {
  post: Post;
}

function formatCardDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IE', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export default function PublicationCard({ post }: PublicationCardProps) {
  return (
    <Link
      href={`/analysis/${post.slug}`}
      className="pub-list-item"
    >
      <span className="type-pip-inline">{post.type}</span>
      <h3>{post.title}</h3>
      {post.excerpt && <p>{post.excerpt}</p>}
      <div className="meta">
        <span>{post.author || 'Security Ireland'}</span>
        <span>·</span>
        <span>{formatCardDate(post.date)}</span>
        {post.readTime && (
          <>
            <span>·</span>
            <span>{post.readTime}</span>
          </>
        )}
        {post.pdfUrl && (
          <>
            <span>·</span>
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(post.pdfUrl, '_blank');
              }}
              style={{ color: 'var(--color-terracotta)', cursor: 'pointer' }}
            >
              PDF ↓
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
