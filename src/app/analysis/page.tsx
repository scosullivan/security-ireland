import { getAllPosts, Post } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';
import AnalysisFilter from '@/components/AnalysisFilter';

export default async function AnalysisPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink mb-6">
          Analysis
        </h1>
        <hr className="rule-accent mb-12" />

        {/* Filter Component */}
        <AnalysisFilter posts={posts} />
      </div>
    </div>
  );
}
