import { getAllPosts } from '@/lib/posts';

const BASE_URL = 'https://securityireland.ie';

export default async function sitemap() {
  const posts = await getAllPosts();

  const publicationUrls = posts.map((post) => ({
    url: `${BASE_URL}/publications/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    { url: BASE_URL, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/publications`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/for-policymakers`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/for-media`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/for-the-public`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/for-investors`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/analysis`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/eu-presidency`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/european-defence`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${BASE_URL}/newsletter`, changeFrequency: 'yearly' as const, priority: 0.5 },
  ].map((page) => ({ ...page, lastModified: new Date() }));

  return [...staticPages, ...publicationUrls];
}
