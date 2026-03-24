import 'server-only';
 
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
 
export interface Post {
  slug: string;
  title: string;
  type: 'Research Paper' | 'Policy Brief' | 'Explainer' | 'Data Sheet' | 'Policy Framework';
  date: string;
  author: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  keyFindings?: string[];
  pdfUrl?: string;
  content?: string;
  html?: string;
}
 
const postsDirectory = path.join(process.cwd(), 'content', 'posts');
 
function getPostSlug(filename: string): string {
  return filename.replace(/\.md$/, '');
}
 
function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}
 
function getPostData(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
 
    return {
      slug,
      title: data.title || '',
      type: data.type || 'Research Paper',
      date: data.date || '',
      author: data.author || '',
      excerpt: data.excerpt || '',
      readTime: data.readTime || '',
      featured: data.featured || false,
      tags: data.tags || [],
      keyFindings: data.keyFindings || [],
      pdfUrl: data.pdfUrl || undefined,
      content,
    };
  } catch (error) {
    return null;
  }
}
 
export async function getAllPosts(): Promise<Post[]> {
  const files = getPostFiles();
  const posts = files
    .map((filename) => {
      const slug = getPostSlug(filename);
      return getPostData(slug);
    })
    .filter((post) => post !== null) as Post[];
 
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
 
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = getPostData(slug);
  if (!post) return null;
 
  if (post.content) {
    const processedContent = await remark().use(remarkHtml).process(post.content);
    post.html = processedContent.toString();
  }
 
  return post;
}
 
export async function getFeaturedPost(): Promise<Post | null> {
  const posts = await getAllPosts();
  const featured = posts.find((post) => post.featured);
 
  if (featured) {
    return await getPostBySlug(featured.slug);
  }
 
  return null;
}
 
export async function getPostsByType(type: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.type === type);
}
 
