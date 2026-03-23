"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";
import Button from "./ui/button";
import { Icon } from "@iconify/react";

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  author?: string;
  publishedAt?: string;
}

function InsightCardComponent({ card }: { card: BlogPost }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image Placeholder or Sanity Image */}
      <div className="w-full h-48 lg:h-32 bg-gray-300  rounded-lg overflow-hidden">
        {card.image?.asset?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.image.asset.url}
            alt={card.image.alt || card.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {card.description}
        </p>

        {/* Author Info */}
        {card.author && (
          <p className="text-xs text-gray-600">By {card.author}</p>
        )}

        {/* Read More Link */}
        <Link
          href={`/blog/${card.slug.current}`}
          className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors text-left w-fit"
        >
          Read more &gt;
        </Link>
      </div>
    </div>
  );
}

function FortiInsights() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  // Show only first 4 posts
  const displayPosts = posts.slice(0, 4);
  const hasMore = posts.length > 4;

  return (
    <section className="w-full py-16 px-4" style={{ background: "#f9f8f6" }}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
            Forti Insights
          </h2>
          <div className="w-full h-px bg-gray-300 mt-6"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <p className="text-gray-600">Loading insights...</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && displayPosts.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {displayPosts.map((post) => (
                <InsightCardComponent key={post._id} card={post} />
              ))}
            </div>

            {/* View All Button */}
            {hasMore && (
              <div className="flex justify-center mt-12">
                <Link href="/blog">
                  <Button className="w-full! lg:w-fit!">
                    View All Blog Posts
                    <Icon
                      icon="heroicons-solid:arrow-sm-right"
                      width="20"
                      height="20"
                    />
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && displayPosts.length === 0 && (
          <div className="flex justify-center items-center py-8">
            <p className="text-gray-600">
              No insights available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FortiInsights;
