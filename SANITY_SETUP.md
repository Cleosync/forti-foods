# Sanity CMS Setup Guide for FortiFoods

## Overview

This guide will help you set up Sanity CMS integration with the FortiFoods project. Sanity provides a modern, headless CMS that allows you to manage blog content independently from your Next.js frontend.

## Quick Start

### Step 1: Create a Sanity Project (if you don't have one)

1. Visit [https://manage.sanity.io/](https://manage.sanity.io/)
2. Sign up or log in with your account
3. Click "Create a Project"
4. Choose a project name: "FortiFoods"
5. Select a dataset: "production"
6. Copy your **Project ID** (you'll need this)

### Step 2: Configure Environment Variables

Update your `.env.local` file with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_AUTH_TOKEN=your_auth_token_here
```

**How to get your Auth Token:**

1. Go to your Sanity project settings
2. Navigate to the "API" tab
3. Click "Add API token"
4. Name it "Next.js Development"
5. Select "Editor" permissions
6. Copy the token and paste it in `.env.local`

### Step 3: Deploy Sanity Studio (Optional but Recommended)

To manage content through Sanity's web interface:

```bash
npm run build
npm run sanity deploy
```

This will deploy your studio to a URL like: `https://projectid.sanity.studio`

### Step 4: Add Dummy Blog Content

You have two options:

#### Option A: Manually via Sanity Studio

1. Visit your Sanity Studio (https://your-project-id.sanity.studio)
2. Click "Create" and select "Blog Post"
3. Fill in the fields:
   - **Title**: Blog post title
   - **Slug**: Auto-generated from title
   - **Description**: Short excerpt
   - **Author**: Author name
   - **Published At**: Publication date
   - **Image**: Upload an image (optional)

Add these 5 blog posts:

**Post 1:**

- Title: "The Future of Food Preparation"
- Description: "Discover how modern technology is revolutionizing the way we prepare and cook food in professional kitchens."
- Author: Sarah Johnson

**Post 2:**

- Title: "Time-Saving Cooking Tips for Busy Chefs"
- Description: "Learn essential tips and tricks to reduce prep time and increase efficiency in your kitchen operations."
- Author: Chef Michael Chen

**Post 3:**

- Title: "Sustainable Food Solutions for Modern Restaurants"
- Description: "Explore sustainable practices that help restaurants reduce waste while maintaining high-quality food standards."
- Author: Emily Rodriguez

**Post 4:**

- Title: "Nutrition Insights: Building Better Meal Plans"
- Description: "Understand nutritional science and how to design meal plans that meet diverse dietary requirements."
- Author: Dr. James Wilson

**Post 5:**

- Title: "Technology Integration in Food Service"
- Description: "Explore how cutting-edge technology is transforming the food service industry and improving customer experiences."
- Author: Lisa Anderson

#### Option B: Using the Import Script

1. Install ts-node:

   ```bash
   npm install --save-dev ts-node
   ```

2. Run the import script:

   ```bash
   npx ts-node sanity/import-dummy-data.ts
   ```

   Note: Make sure your `SANITY_AUTH_TOKEN` is set in `.env.local` with Editor permissions.

### Step 5: Update Your Next.js App

Your Next.js app is now configured to fetch blog posts from Sanity. The configuration includes:

- **Sanity Client**: `lib/sanity.ts` - Fetches data from your Sanity project
- **Blog Schema**: `sanity/schemas/blog.ts` - Defines the blog post structure
- **FortiInsights Component**: `components/forti-insights.tsx` - Now fetches from Sanity instead of using hardcoded data

### Step 6: Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Scroll to the "Forti Insights" section
   - Blog posts should load from Sanity
   - Posts are displayed in a 4-column grid on desktop (responsive)
   - Click "Read more" to expand the blog post

## Available Files

### Configuration Files

- `.env.local` - Environment variables for Sanity credentials
- `sanity/sanity.config.ts` - Main Sanity configuration

### Schema Definitions

- `sanity/schemas/index.ts` - Exports all schemas
- `sanity/schemas/blog.ts` - Blog post document schema

### API Integration

- `lib/sanity.ts` - Sanity client and fetch functions
- `sanity/import-dummy-data.ts` - Script to import dummy data

### Updated Components

- `components/forti-insights.tsx` - Now fetches blog posts from Sanity

## API Functions

### `getBlogPosts()`

Fetches all published blog posts ordered by publication date (newest first).

```typescript
import { getBlogPosts } from "@/lib/sanity";

const posts = await getBlogPosts();
```

### `getBlogPostBySlug(slug: string)`

Fetches a single blog post by its slug.

```typescript
import { getBlogPostBySlug } from "@/lib/sanity";

const post = await getBlogPostBySlug("future-of-food-preparation");
```

## Troubleshooting

### Blog posts not showing up?

1. Check that your `.env.local` has correct Project ID and Dataset
2. Verify blog posts are published in Sanity Studio
3. Check browser console for errors
4. Make sure your Auth Token has Editor permissions

### Images not loading?

1. Ensure images are uploaded to Sanity (not external URLs)
2. Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
3. Sanity image URLs should follow format: `https://cdn.sanity.io/images/projectid/...`

### Can't deploy Sanity Studio?

1. Run `npm run sanity:deploy` in terminal
2. You may need to set up a Sanity API token with Author permissions
3. Visit your deployed studio at: `https://your-project-id.sanity.studio`

## Next Steps

1. **Customize the Blog Schema**: Add more fields like tags, categories, or featured status
2. **Create a Blog Detail Page**: Build a dynamic `[slug]` route to show full blog posts
3. **Add Image Optimization**: Use Next.js Image component with Sanity URL builder
4. **Implement Search**: Add Sanity search capabilities for finding blog posts
5. **Add Comments**: Integrate Sanity comments for reader engagement

## Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity + Next.js Guide](https://www.sanity.io/guides/sanity-nextjs-integration)
- [Sanity CLI Reference](https://www.sanity.io/docs/cli)

## Support

For issues or questions:

- Check Sanity docs: https://www.sanity.io/docs
- Check Next.js docs: https://nextjs.org/docs
- Review the project's copilot-instructions.md for FortiFoods conventions
