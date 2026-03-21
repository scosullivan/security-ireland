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
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink my-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-graphite font-sans italic leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-stone font-mono text-sm mb-8">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span>·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        {/* Divider */}
        <hr className="rule-accent mb-12" />

        {/* Content */}
        {post.html && (
          <div
            className="prose-si mb-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}

        {/* Back Link */}
        <div className="border-t border-rule pt-8">
          <Link
            href="/analysis"
            className="text-terracotta font-sans font-bold hover:text-copper transition-colors"
          >
            ← Back to Analysis
          </Link>
        </div>
      </article>
    </div>
  );
}
