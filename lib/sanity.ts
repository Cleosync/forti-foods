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

// ───────────────────────────────────────────────────────────────
// LANDING PAGE DATA - Images, Videos, and All Content Editable
// ───────────────────────────────────────────────────────────────

export async function getLandingPageData() {
  try {
    const landingPageData = await sanityClient.fetch(`
      *[_type == "landingPage"][0] {
        title,
        heroSection {
          heroVideo
        },
        fortiSystemSection {
          fortiSystemVideo
        },
        problemSection {
          problemImage1 {
            asset -> { url },
            alt
          },
          problemImage2 {
            asset -> { url },
            alt
          },
          problemImage3 {
            asset -> { url },
            alt
          }
        },
        solutionSection {
          solutionImage {
            asset -> { url },
            alt
          }
        },
        magicSection {
          magicImage1 {
            asset -> { url },
            alt
          },
          magicImage2 {
            asset -> { url },
            alt
          },
          magicImage3 {
            asset -> { url },
            alt
          }
        },
        useCasesSection {
          useCaseImages[] {
            caseId,
            image {
              asset -> { url },
              alt
            }
          }
        },
        fortiBoxSection {
          fortiBoxImage1 {
            asset -> { url },
            alt
          },
          fortiBoxImage2 {
            asset -> { url },
            alt
          }
        },
        insightsSection {
          insightsHeroImage {
            asset -> { url },
            alt
          }
        },
        contactSection {
          contactBackgroundImage {
            asset -> { url },
            alt
          }
        },
        partnersSection {
          partnerLogos[] {
            partnerName,
            logo {
              asset -> { url },
              alt
            }
          }
        }
      }
    `);
    console.log("📊 Full Sanity Document:", landingPageData);
    return landingPageData;
  } catch (error) {
    console.error("Error fetching landing page data:", error);
    return null;
  }
}
