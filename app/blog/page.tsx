"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: { asset?: { url: string }; alt?: string };
  author?: string;
  publishedAt?: string;
}

// ─── Original-style insight card (from FortiInsights) ────────────────────────
function InsightCard({ post }: { post: BlogPost }) {
  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="fi-card flex flex-col gap-4 group">
      <div className="w-full h-44 bg-gray-200 overflow-hidden rounded-sm">
        {post.image?.asset?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image.asset.url}
            alt={post.image.alt || post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-xs tracking-widest uppercase">
              No Image
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {publishDate && (
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            {publishDate}
          </p>
        )}

        <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-gray-500 transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {post.description}
        </p>

        {post.author && (
          <p className="text-xs text-gray-400">By {post.author}</p>
        )}

        <Link
          href={`/blog/${post.slug.current}`}
          className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-all duration-300 w-fit inline-flex items-center gap-1 group/link hover:gap-2"
        >
          Read more
          <span className="transition-all duration-300 inline-block group-hover/link:translate-x-1.5">
            ›
          </span>
        </Link>
      </div>
    </div>
  );
}

// ─── Hero — first post, large editorial split ────────────────────────────────
function HeroCard({ post }: { post: BlogPost }) {
  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-gray-200 pb-14">
        <div className="w-full h-64 lg:h-80 overflow-hidden bg-gray-200 rounded-sm">
          {post.image?.asset?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image.asset.url}
              alt={post.image.alt || post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400 text-xs tracking-widest uppercase">
                No Image
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-end lg:pl-12 pt-6 lg:pt-0 gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-xs font-medium uppercase tracking-widest text-white bg-gray-900">
              Latest
            </span>
            {publishDate && (
              <span className="text-xs text-gray-400 tracking-widest">
                {publishDate}
              </span>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
            {post.title}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {post.description}
          </p>

          {post.author && (
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              By {post.author}
            </p>
          )}

          <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-500 transition-all duration-300 inline-flex items-center gap-1.5 w-fit group-hover:gap-3">
            Read Full Article
            <span className="transition-all duration-300 inline-block group-hover:translate-x-2">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const link = document.createElement("link");

    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      .blog-page-root { background: #F6F4EF; }
      .marquee-wrap { overflow: hidden; }
      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 28s linear infinite;
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .fi-card {
        opacity: 0;
        transform: translateY(14px);
        animation: fadeUp 0.5s ease forwards;
      }
      .fi-card:nth-child(1) { animation-delay: 0.04s; }
      .fi-card:nth-child(2) { animation-delay: 0.10s; }
      .fi-card:nth-child(3) { animation-delay: 0.16s; }
      .fi-card:nth-child(4) { animation-delay: 0.22s; }
      .fi-card:nth-child(5) { animation-delay: 0.28s; }
      .fi-card:nth-child(6) { animation-delay: 0.34s; }
      .fi-card:nth-child(7) { animation-delay: 0.40s; }
      .fi-card:nth-child(8) { animation-delay: 0.46s; }
      @keyframes fadeUp {
        to { opacity: 1; transform: none; }
      }
      .tag-pill {
        cursor: pointer;
        padding: 5px 15px;
        border: 1px solid #E2E0DA;
        background: transparent;
        font-size: 10px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        transition: all 0.3s ease;
        border-radius: 999px;
        font-family: 'JetBrains Mono', monospace;
        color: #888;
      }
      .tag-pill:hover, .tag-pill.active {
        background: #111;
        color: #fff;
        border-color: #111;
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      }
    `;
    document.head.appendChild(style);

    async function loadPosts() {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const [hero, ...rest] = posts;

  return (
    <main className="blog-page-root w-full min-h-screen pt-20">
      {/* ── Page header ───────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="flex flex-col gap-1.5">
            <Link
              href="/"
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors w-fit"
            >
              ← Home
            </Link>
            <div className="flex items-baseline gap-4">
              <h1 className="text-5xl sm:text-7xl   text-gray-900 leading-none tracking-tight font-tanker">
                Forti Insights
              </h1>
              {!loading && (
                <span className="text-sm text-gray-400 mb-2">
                  {posts.length} posts
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-500 max-w-xs leading-relaxed pb-1">
            Insights, stories & ideas from the FortiFoods team — written to
            inform and inspire.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2 mt-7">
          {["all", "nutrition", "food science", "stories", "recipes"].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`tag-pill${filter === tag ? " active" : ""}`}
              >
                {tag}
              </button>
            ),
          )}
        </div>

        <div className="w-full h-px bg-gray-200 mt-7" />
      </div>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {loading && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-gray-900 animate-spin" />
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Loading…
            </p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <>
            {hero && (
              <div className="mb-14">
                <HeroCard post={hero} />
              </div>
            )}

            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                More Articles
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* 4-col grid using original card style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
              {rest.map((post) => (
                <InsightCard key={post._id} post={post} />
              ))}
            </div>
          </>
        )}

        {!loading && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              No posts yet — check back soon.
            </p>
            <Link
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors"
            >
              Return to Home →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
