# Sanity CMS Architecture & Integration

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     FortiFoods Next.js App                       │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              Browser / Client                              │  │
│  │                                                              │  │
│  │  ┌────────────────────────────────────────────────────────┐ │  │
│  │  │  FortiInsights Component                               │ │  │
│  │  │                                                          │ │  │
│  │  │  ┌─────────────────────────────────────────────────┐   │ │  │
│  │  │  │  useEffect(() => {                              │   │ │  │
│  │  │  │    const posts = await getBlogPosts()           │   │ │  │
│  │  │  │    setPosts(posts)                              │   │ │  │
│  │  │  │  })                                             │   │ │  │
│  │  │  └─────────────────────────────────────────────────┘   │ │  │
│  │  │                                                          │ │  │
│  │  │  Display: 5 Blog Post Cards (Responsive Grid)           │ │  │
│  │  │  - Title, Description, Author                           │ │  │
│  │  │  - Image preview                                        │ │  │
│  │  │  - Loading state                                        │ │  │
│  │  └────────────────────────────────────────────────────────┘ │  │
│  │                      ↓                                        │  │
│  │  ┌────────────────────────────────────────────────────────┐ │  │
│  │  │  lib/sanity.ts                                         │ │  │
│  │  │  - getBlogPosts()                                      │ │  │
│  │  │  - getBlogPostBySlug()                                 │ │  │
│  │  │  - sanityClient configuration                          │ │  │
│  │  └────────────────────────────────────────────────────────┘ │  │
│  └────────────────────────────────────────────────────────────┘  │
│                           ↓ HTTPS                                │
└───────────────────────────┼───────────────────────────────────────┘
                            │
                            ↓
         ┌──────────────────────────────────────────┐
         │     Sanity Backend API                    │
         │  (CDN - Fast Global Distribution)         │
         │                                            │
         │  Query: *[_type == "blogPost"]           │
         │           | order(publishedAt desc)       │
         │                                            │
         │  Response: 5 Blog Posts                  │
         │  {                                        │
         │    _id, title, slug, description,        │
         │    author, publishedAt, image            │
         │  }                                        │
         └──────────────────────────────────────────┘
                           ↑
         ┌─────────────────┴──────────────────┐
         │                                     │
         ↓                                     ↓
    ┌────────────────────┐         ┌────────────────────┐
    │  Sanity Studio     │         │  Sanity Database   │
    │  (Web Interface)   │         │  (Postgres)        │
    │                    │         │                    │
    │ - Create posts     │         │ - Stores content   │
    │ - Edit content     │         │ - Versioning       │
    │ - Upload images    │         │ - Collaboration    │
    │ - Publish         │         │ - Backups          │
    │                    │         │                    │
    │ URL:              │         │ Accessible via:    │
    │ *.sanity.studio   │         │ NEXT_PUBLIC_*      │
    │                    │         │ env variables      │
    └────────────────────┘         └────────────────────┘
```

## Data Flow Sequence

```
1. User visits FortiFoods homepage
   ↓
2. React renders FortiInsights component
   ↓
3. useEffect hook triggers on component mount
   ↓
4. Call: getBlogPosts()
   ↓
5. Sanity client creates GROQ query:
   *[_type == "blogPost"] | order(publishedAt desc)
   ↓
6. Query sent to Sanity API:
   https://projectid.api.sanity.io/v2024-01-01/data/query/production
   ↓
7. Sanity Backend:
   - Authenticates request
   - Queries Postgres database
   - Filters published posts
   - Orders by date
   - Returns JSON response
   ↓
8. Component receives posts array:
   [{_id: "...", title: "...", description: "...", ...}, ...]
   ↓
9. setPosts() updates component state
   ↓
10. Component re-renders with blog posts
   ↓
11. User sees 5 blog cards in Forti Insights section
   ↓
12. Cards are fully interactive and responsive
```

## File Connections

```
components/forti-insights.tsx
         ↓
         └─→ imports getBlogPosts()
                     ↓
              lib/sanity.ts
              ├─→ imports from @sanity/client
              │
              └─→ uses sanityClient configuration
                        ↓
                  sanity.config.ts
                  ├─→ NEXT_PUBLIC_SANITY_PROJECT_ID from .env.local
                  ├─→ NEXT_PUBLIC_SANITY_DATASET from .env.local
                  │
                  └─→ Sanity Backend (Database)


forti-insights.tsx renders BlogPost interface:
{
  _id: string
  title: string
  description: string
  image?: { asset?: { url: string }, alt?: string }
  author?: string
  publishedAt?: string
}

This matches sanity/schemas/blog.ts schema:
defineType({
  name: 'blogPost',
  fields: [
    { title },
    { slug },
    { description },
    { image },
    { author },
    { publishedAt }
  ]
})
```

## Configuration Dependencies

```
.env.local (Not in Git)
│
├─→ NEXT_PUBLIC_SANITY_PROJECT_ID
│   └─→ Used by: sanity/sanity.config.ts
│       └─→ Used by: lib/sanity.ts (sanityClient)
│
├─→ NEXT_PUBLIC_SANITY_DATASET
│   └─→ Used by: sanity/sanity.config.ts
│       └─→ Used by: lib/sanity.ts (sanityClient)
│
└─→ SANITY_AUTH_TOKEN
    └─→ Used by: import-dummy-data.ts (for importing data)
        └─→ Used by: sanity/import-dummy-data.ts script
```

## Image Handling Flow

```
Sanity Studio
      ↓
User uploads image
      ↓
Sanity processes & CDN caches
      ↓
Stored as:
{
  "image": {
    "asset": {
      "_ref": "image-abc123-600x400-jpg",
      "url": "https://cdn.sanity.io/images/..."
    },
    "alt": "Description"
  }
}
      ↓
getBlogPosts() receives image data
      ↓
Component renders:
<img
  src={card.image.asset.url}
  alt={card.image.alt || card.title}
/>
      ↓
Browser displays image (served from CDN for speed)
```

## Environment Variable Usage

```
Development (.env.local)
│
├─→ NEXT_PUBLIC_SANITY_PROJECT_ID = "your-project-id"
│   (Visible in browser - safe, public key)
│
├─→ NEXT_PUBLIC_SANITY_DATASET = "production"
│   (Visible in browser - dataset name is not sensitive)
│
└─→ SANITY_AUTH_TOKEN = "sanity_xxxxxxxxxxxx"
    (Secret - NOT visible in browser, server-only)
    (Used only for import script in this setup)


Production (.env.production)
(Same as above but with production project credentials)
```

## Component Lifecycle

```
1. FortiInsights component mounts
   ├─→ useState([]) - empty posts
   ├─→ useState(true) - loading starts
   └─→ useEffect registered

2. First render (before effect)
   ├─→ Shows loading state
   │   "Loading insights..."
   └─→ Height placeholder for FOUC prevention

3. Effect runs (componentDidMount equivalent)
   ├─→ Call getBlogPosts()
   ├─→ Sanity client fetches data
   └─→ setLoading(false)

4. Second render (with data)
   ├─→ Map posts array
   ├─→ Render 5 blog cards
   ├─→ Each card displays:
   │   ├─→ Image (if available)
   │   ├─→ Title
   │   ├─→ Description
   │   ├─→ Author
   │   └─→ Read more button
   └─→ Grid responsive to screen size

5. Error handling (if fetch fails)
   ├─→ Catch block logs error
   ├─→ setPosts([]) - empty
   └─→ User sees "No insights available yet"
```

## API Query Structure

```typescript
// The GROQ Query being executed:

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

// Breakdown:
// *[_type == "blogPost"]  - Select all blog post documents
// | order(publishedAt desc) - Sort by newest first
// { ... }                   - Select only these fields
// asset ->                  - Follow reference to image asset
// {url}                     - Get the CDN URL
```

## Responsive Design Breakpoints

```
Components/forti-insights.tsx Grid:

grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

Mobile (< 640px)
└─→ grid-cols-1
    Shows 1 blog card per row
    Full width minus padding

Tablet (640px - 1024px)
└─→ sm:grid-cols-2
    Shows 2 blog cards per row
    Nice tablet layout

Desktop (> 1024px)
└─→ lg:grid-cols-4
    Shows 4 blog cards per row
    Optimal for widescreen
    All 5 posts still fit with scrolling/wrapping
```

## Security Model

```
Public (Browser-safe):
├─→ NEXT_PUBLIC_SANITY_PROJECT_ID
└─→ NEXT_PUBLIC_SANITY_DATASET

Secret (Server/Dev-only):
└─→ SANITY_AUTH_TOKEN
    ├─→ Used for import-dummy-data.ts
    ├─→ Used for Sanity Studio deployment
    └─→ NOT sent to browser

Data Access:
├─→ Sanity API has CDP (Content Data Platform)
│   └─→ Free tiered read access by default
│
├─→ Studio Deploy
│   └─→ Requires Auth Token with Author role
│
└─→ Data Import
    └─→ Requires Auth Token with Editor role
```

## Performance Characteristics

```
First Page Load:
├─→ FortiInsights component loads
├─→ Shows "Loading insights..."
├─→ useEffect calls getBlogPosts()
├─→ Sanity CDN responds (typically < 200ms)
└─→ Blog cards render

Subsequent Visits:
├─→ Browser caches API responses (if enabled)
├─→ Faster load on repeat visits
└─→ Can implement ISR for static generation

When Content Changes:
├─→ Editor updates in Sanity Studio
├─→ Clicks Publish
├─→ Next page load fetches fresh data
├─→ No code redeploy needed!
└─→ Content live within seconds
```

## Failure Scenarios & Handling

```
Scenario 1: Sanity API Unavailable
├─→ getBlogPosts() throws error
├─→ catch block catches it
├─→ console.error() logs it
├─→ setPosts([]) - sets to empty
├─→ setLoading(false) - stops loading
└─→ User sees: "No insights available yet"

Scenario 2: Bad Project Credentials
├─→ API returns 401 Unauthorized
├─→ Error caught
└─→ User sees: "No insights available yet"

Scenario 3: Missing Image Data
├─→ card.image?.asset?.url is undefined
├─→ Conditional rendering shows fallback
└─→ User sees: gray box with "No image"

Scenario 4: Network Timeout
├─→ Request takes too long
├─→ Error caught
├─→ Graceful fallback
└─→ User sees: "No insights available yet"
```

---

## Summary

✅ **Decoupled Architecture**: Content (Sanity) ↔ Code (Next.js)
✅ **Global CDN**: Fast delivery worldwide
✅ **Real-time Updates**: Publish in CMS, seen immediately
✅ **Type-safe**: Full TypeScript integration
✅ **Responsive**: Mobile → Desktop perfectly
✅ **Error Handling**: Graceful fallbacks for all scenarios
✅ **Scalable**: Easy to add more content types later
