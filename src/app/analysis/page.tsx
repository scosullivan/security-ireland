import { getAllPosts } from '@/lib/posts';
import AnalysisFilter from '@/components/AnalysisFilter';

export default async function AnalysisPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-cream min-h-screen">
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        {/* Hub intro */}
        <div style={{ padding: '56px 0 0' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '34px',
              fontWeight: 400,
              color: 'var(--color-ink)',
              marginBottom: '8px',
            }}
          >
            Analysis
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              color: 'var(--color-graphite)',
              maxWidth: '460px',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            Evidence-based research, policy briefs, and commentary on Irish and European security.
          </p>

          {/* Filter + posts */}
          <AnalysisFilter posts={posts} />
        </div>
      </div>
    </div>
  );
}
