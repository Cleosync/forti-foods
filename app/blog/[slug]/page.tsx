import React from "react";
import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Button from "@/components/ui/button";

interface BlogPostContent {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: { asset?: { url: string }; alt?: string };
  author?: string;
  publishedAt?: string;
  content?: any[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post: any) => ({ slug: post.slug.current }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Blog Post Not Found" };
  return { title: post.title, description: post.description };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p
        className="text-gray-700 leading-[1.85] mb-6 text-[17px]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className="text-gray-700 mb-6 space-y-2 pl-0"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className="text-gray-700 mb-6 space-y-2 pl-0 list-none counter-reset-list"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-[17px] leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4 text-[17px] leading-relaxed">{children}</li>
    ),
  },
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = (await getBlogPostBySlug(slug)) as BlogPostContent | null;

  if (!post) {
    return (
      <main className="w-full min-h-screen" style={{ background: "#F7F6F3" }}>
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <p
            className="text-xs uppercase tracking-widest text-gray-400 mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            404 — Not Found
          </p>
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p
            className="text-gray-500 mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link
            href="/blog"
            className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ← Back to All Posts
          </Link>
        </div>
      </main>
    );
  }

  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main className="w-full min-h-screen" style={{ background: "#F7F6F3" }}>
      {/* Hero */}
      {post.image?.asset?.url && (
        <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image.asset.url}
            alt={post.image.alt || post.title}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

          {/* Title overlaid on hero */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-4xl mx-auto w-full">
            <p
              className="text-xs uppercase tracking-widest text-white/60 mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {publishDate}
              {post.author && ` · By ${post.author}`}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      )}

      {/* Article */}
      <article className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-14">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors mb-10"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            ← All Posts
          </Link>

          {/* If no hero image, show title here */}
          {!post.image?.asset?.url && (
            <header className="mb-10">
              <p
                className="text-xs uppercase tracking-widest text-gray-400 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {publishDate}
                {post.author && ` · By ${post.author}`}
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-0">
                {post.title}
              </h1>
            </header>
          )}

          {/* Description / Pull quote */}
          {post.description && (
            <div
              className="relative pl-6 mb-10 py-1"
              style={{ borderLeft: "3px solid #111" }}
            >
              <p className="text-xl text-gray-700 leading-relaxed italic">
                {post.description}
              </p>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1 h-px bg-gray-200" />
            <span
              className="text-xs text-gray-300 uppercase tracking-widest"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              ✦
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Body */}
          <div className="prose-custom">
            {post.content && Array.isArray(post.content) ? (
              <PortableText
                value={post.content}
                components={portableTextComponents as any}
              />
            ) : (
              <p
                className="text-gray-500"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                No additional content available.
              </p>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-xs uppercase tracking-widest text-gray-400 mb-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Continue Reading
              </p>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore more insights from FortiFoods
              </p>
            </div>
            <Link href="/blog">
              <Button className="w-full! sm:w-fit!">← Back to All Posts</Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
