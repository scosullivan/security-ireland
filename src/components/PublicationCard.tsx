import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PublicationCardProps {
  post: Post;
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function PublicationCard({ post }: PublicationCardProps) {
  return (
    <Link
      href={`/analysis/${post.slug}`}
      className="pub-list-item"
    >
      <span className="type-pip-inline">{post.type}</span>
      <h3>{post.title}</h3>
      <span className="date">{formatShortDate(post.date)}</span>
    </Link>
  );
}
