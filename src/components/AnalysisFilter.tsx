'use client';

import { useState } from 'react';
import { Post } from '@/lib/posts';
import PublicationCard from '@/components/PublicationCard';

interface AnalysisFilterProps {
  posts: Post[];
}

const TYPES = ['All', 'Research Paper', 'Policy Brief', 'Explainer', 'Data Sheet'];

export default function AnalysisFilter({ posts }: AnalysisFilterProps) {
  const [selectedType, setSelectedType] = useState('All');

  const filteredPosts =
    selectedType === 'All'
      ? posts
      : posts.filter((post) => post.type === selectedType);

  return (
    <>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-colors ${
              selectedType === type
                ? 'bg-terracotta text-cream'
                : 'border border-rule text-stone hover:border-terracotta'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        <div className="max-w-3xl">
          {filteredPosts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-graphite font-sans">
          No publications found for this category.
        </p>
      )}
    </>
  );
}
