'use client';

import { useState, useMemo } from 'react';
import PublicationCard from '@/components/PublicationCard';
import Newsletter from '@/components/Newsletter';

interface Post {
  slug: string;
  title: string;
  type: string;
  date: string;
  topics: string[];
}

const types = ['All', 'Research Paper', 'Policy Brief', 'Explainer', 'Data Sheet'];

const topicLabels: Record<string, string> = {
  'maritime-security': 'Maritime Security',
  'european-defence': 'European Defence',
  'uk-ireland': 'UK–Ireland',
  'eu-presidency': 'EU Presidency',
  'defence-capability': 'Defence Capability',
  'defence-transformation': 'Defence Transformation',
  'pesco': 'PESCO',
};

export default function PublicationsClient({ posts }: { posts: Post[] }) {
  const [activeType, setActiveType] = useState('All');
  const [activeTopic, setActiveTopic] = useState('All');

  // Extract unique topics
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    posts.forEach((p) => p.topics?.forEach((t) => topics.add(t)));
    return ['All', ...Array.from(topics).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (activeType !== 'All' && p.type !== activeType) return false;
      if (activeTopic !== 'All' && !p.topics?.includes(activeTopic)) return false;
      return true;
    });
  }, [posts, activeType, activeTopic]);

  return (
    <div className="bg-cream">
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 48px' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 400, color: 'var(--color-ink)', marginBottom: '8px' }}>
          All Publications
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-graphite)', marginBottom: '32px' }}>
          Browse our research papers, policy briefs, explainers, and data sheets.
        </p>

        {/* Type filters */}
        <div className="filter-row" style={{ marginBottom: '12px' }}>
          {types.map((t) => (
            <button
              key={t}
              className={`filter-item ${activeType === t ? 'active' : ''}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Topic filters */}
        <div className="filter-row">
          {allTopics.map((t) => (
            <button
              key={t}
              className={`filter-item ${activeTopic === t ? 'active' : ''}`}
              onClick={() => setActiveTopic(t)}
            >
              {t === 'All' ? 'All Topics' : topicLabels[t] || t}
            </button>
          ))}
        </div>

        {/* Results */}
        <div style={{ marginTop: '8px' }}>
          {filtered.length > 0 ? (
            filtered.map((post) => (
              <PublicationCard key={post.slug} post={post} />
            ))
          ) : (
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-stone)', fontStyle: 'italic', padding: '32px 0' }}>
              No publications match this filter.
            </p>
          )}
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-stone)', padding: '24px 0' }}>
          {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--color-rule)' }}>
        <Newsletter />
      </section>
    </div>
  );
}
