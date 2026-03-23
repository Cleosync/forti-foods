import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getBlogPosts() {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        description,
        image {
          asset -> {
            url
          },
          alt
        },
        author,
        publishedAt
      }
    `);
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await sanityClient.fetch(
      `
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        image {
          asset -> {
            url
          },
          alt
        },
        content,
        author,
        publishedAt
      }
    `,
      { slug },
    );
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
