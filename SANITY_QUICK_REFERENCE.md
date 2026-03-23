# Sanity CMS Quick Reference

## Project Structure

```
sanity/
├── sanity.config.ts          # Main Sanity configuration
├── schemas/
│   ├── index.ts              # Schema exports
│   └── blog.ts               # Blog post schema definition
└── import-dummy-data.ts      # Script to import dummy blog posts

lib/
└── sanity.ts                 # Sanity client and API functions

components/
└── forti-insights.tsx        # Updated to fetch from Sanity

.env.local                    # Environment variables (not in git)
SANITY_SETUP.md              # Full setup guide
```

## Blog Post Schema Fields

```typescript
{
  title: string                    // Required: Blog post title
  slug: slug                       // Auto-generated from title
  description: string              // Required: Short excerpt/summary
  image?: {                       // Optional: Featured image
    asset: { url: string }
    alt: string
  }
  content?: blockContent           // Optional: Rich text content
  author?: string                  // Optional: Author name
  publishedAt?: datetime           // Optional: Publication date
}
```

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=    # Your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET=       # Dataset name (usually "production")
SANITY_AUTH_TOKEN=                # Auth token for server-side operations
```

## Useful Commands

```bash
# Start development server (includes hot reload)
npm run dev

# Deploy Sanity Studio
npm run sanity:deploy

# Import dummy blog data
npm run sanity:import-dummy

# Build for production
npm run build

# Start production server
npm start
```

## Using Sanity Data in Components

### Fetch all blog posts

```typescript
"use client";

import { useEffect, useState } from 'react';
import { getBlogPosts } from '@/lib/sanity';

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getBlogPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Fetch single blog post

```typescript
import { getBlogPostBySlug } from "@/lib/sanity";

const post = await getBlogPostBySlug("future-of-food-preparation");
```

## FortiInsights Component Changes

The component was updated to:

✅ Fetch blog posts from Sanity on component mount
✅ Display loading state while fetching data
✅ Show blog post images if available
✅ Display author information
✅ Handle empty state when no posts available
✅ Remains fully responsive (4 cols on desktop, 2 on tablet, 1 on mobile)

### Before (Hardcoded):

```typescript
const insightCards = [
  { id: 1, title: "...", description: "..." },
  // ...
];
```

### After (Sanity-powered):

```typescript
const [posts, setPosts] = useState<BlogPost[]>([]);
useEffect(() => {
  const blogPosts = await getBlogPosts();
  setPosts(blogPosts);
}, []);
```

## Dummy Data Included

Five blog posts are ready to import:

1. **The Future of Food Preparation** by Sarah Johnson
2. **Time-Saving Cooking Tips for Busy Chefs** by Chef Michael Chen
3. **Sustainable Food Solutions for Modern Restaurants** by Emily Rodriguez
4. **Nutrition Insights: Building Better Meal Plans** by Dr. James Wilson
5. **Technology Integration in Food Service** by Lisa Anderson

## Data Flow

```
Sanity Studio (CMS)
      ↓
Sanity Backend (API)
      ↓
getBlogPosts() / getBlogPostBySlug()
      ↓
FortiInsights Component
      ↓
Browser (Display)
```

## Tips

- 🖼️ Upload images in Sanity Studio for better performance
- 📝 Use descriptive titles and descriptions for SEO
- 📅 Set publication dates to control visibility
- 🔄 Make updates in Sanity Studio - they appear instantly
- 🚀 No redeploy needed when updating content
- 💾 All content is saved in Sanity database

## Common Tasks

### Add a new blog post

1. Visit your Sanity Studio
2. Click "Create" → "Blog Post"
3. Fill in: Title, Description, Author, Published At
4. Upload an image (optional)
5. Click "Publish"
6. Refresh your site to see it

### Edit a blog post

1. Find the post in Sanity Studio
2. Make changes
3. Click "Publish"
4. Changes appear instantly

### Delete a blog post

1. Open the post in Sanity Studio
2. Click the three-dot menu
3. Select "Delete"
4. Confirm deletion

### Add custom fields to blog posts

1. Edit `sanity/schemas/blog.ts`
2. Add new fields using `defineField()`
3. Deploy Sanity Studio: `npm run sanity:deploy`
4. The new fields will appear in your CMS

## Debugging

### Check if Sanity is connected

Open browser DevTools Console and check for errors:

- CORS issues? Check project settings in Sanity
- Auth issues? Verify API token in .env.local
- No data? Check that posts are published

### View raw data

Visit your Sanity API directly:

```
https://projectid.api.sanity.io/v2024-01-01/data/query/production?query=*[_type=="blogPost"]
```

(Replace `projectid` with your actual project ID)

## Next: Add Blog Detail Pages

Create a dynamic route to show full blog posts:

```typescript
// app/blog/[slug]/page.tsx
import { getBlogPostBySlug } from '@/lib/sanity';

export default async function BlogPost({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      {post.image?.asset?.url && (
        <img src={post.image.asset.url} alt={post.title} />
      )}
      <div>{post.description}</div>
    </article>
  );
}
```

---

**Last Updated**: March 10, 2026
