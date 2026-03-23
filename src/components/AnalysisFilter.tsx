'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/lib/posts';

interface AnalysisFilterProps {
  posts: Post[];
}

const TYPES = [
  { label: 'All', value: 'All' },
  { label: 'Research Papers', value: 'Research Paper' },
  { label: 'Policy Briefs', value: 'Policy Brief' },
  { label: 'Explainers', value: 'Explainer' },
  { label: 'Working Papers', value: 'Working Paper' },
  { label: 'Data Sheets', value: 'Data Sheet' },
];

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function AnalysisFilter({ posts }: AnalysisFilterProps) {
  const [selectedType, setSelectedType] = useState('All');

  const filteredPosts =
    selectedType === 'All'
      ? posts
      : posts.filter((post) => post.type === selectedType);

  return (
    <>
      {/* Filter row */}
      <div className="filter-row">
        {TYPES.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`filter-item ${selectedType === type.value ? 'active' : ''}`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Publication list */}
      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/analysis/${post.slug}`}
              className="pub-list-item"
            >
              <span className="type-pip-inline">{post.type}</span>
              <h3>{post.title}</h3>
              <span className="date">{formatShortDate(post.date)}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            color: 'var(--color-graphite)',
            padding: '48px 0',
          }}
        >
          No publications found for this category.
        </p>
      )}
    </>
  );
}
