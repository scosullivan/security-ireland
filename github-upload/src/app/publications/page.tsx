import { getAllPosts } from '@/lib/posts';
import PublicationsClient from './PublicationsClient';

export const metadata = {
  title: 'All Publications — Security Ireland',
  description: 'Browse all Security Ireland research papers, policy briefs, explainers, and data sheets.',
};

export default async function PublicationsPage() {
  const posts = await getAllPosts();

  return <PublicationsClient posts={posts} />;
}
