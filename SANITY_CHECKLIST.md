# Sanity CMS Setup Checklist ✅

Follow these steps to get Sanity CMS fully integrated with your FortiFoods project.

## Phase 1: Sanity Project Setup (5 minutes)

- [x] **Step 1**: Visit [https://manage.sanity.io/](https://manage.sanity.io/)
- [x] **Step 2**: Sign up or log in
- [x] **Step 3**: Create a new project named "FortiFoods"
- [x] **Step 4**: Select dataset: "production"
- [x] **Step 5**: Copy your **Project ID**

## Phase 2: Environment Configuration (3 minutes)

- [x] **Step 6**: Get your Auth Token:
  - [x] Go to your Sanity project settings
  - [x] Navigate to "API" tab
  - [x] Click "Add API token"
  - [x] Name it "Next.js Development"
  - [x] Select "Editor" permissions
  - [x] Copy the token

- [x] **Step 7**: Update `.env.local` with your credentials:
  ```env
  NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
  NEXT_PUBLIC_SANITY_DATASET=production
  SANITY_AUTH_TOKEN=your_auth_token_here
  ```

## Phase 3: Deploy Sanity Studio (5-10 minutes)

- [ ] **Step 8**: Build the project:

  ```bash
  npm run build
  ```

- [ ] **Step 9**: Deploy Sanity Studio to the cloud:

  ```bash
  npm run sanity:deploy
  ```

- [ ] **Step 10**: Note your Sanity Studio URL (appears after deployment):
  - [ ] URL format: `https://your-project-id.sanity.studio`
  - [ ] Save this URL for later access

## Phase 4: Add Dummy Blog Content (5-15 minutes)

Choose ONE method:

### Option A: Manual Entry via Sanity Studio (Easier for beginners)

- [ ] **Step 11**: Visit your Sanity Studio: `https://your-project-id.sanity.studio`
- [ ] **Step 12**: Click "Create" button
- [ ] **Step 13**: Select "Blog Post"
- [ ] **Step 14**: Add these 5 blog posts:

**Blog Post 1:**

- [ ] Title: "The Future of Food Preparation"
- [ ] Description: "Discover how modern technology is revolutionizing the way we prepare and cook food in professional kitchens."
- [ ] Author: "Sarah Johnson"
- [ ] Published At: (Pick a date)
- [ ] Click "Publish"

**Blog Post 2:**

- [ ] Title: "Time-Saving Cooking Tips for Busy Chefs"
- [ ] Description: "Learn essential tips and tricks to reduce prep time and increase efficiency in your kitchen operations."
- [ ] Author: "Chef Michael Chen"
- [ ] Published At: (Pick a date)
- [ ] Click "Publish"

**Blog Post 3:**

- [ ] Title: "Sustainable Food Solutions for Modern Restaurants"
- [ ] Description: "Explore sustainable practices that help restaurants reduce waste while maintaining high-quality food standards."
- [ ] Author: "Emily Rodriguez"
- [ ] Published At: (Pick a date)
- [ ] Click "Publish"

**Blog Post 4:**

- [ ] Title: "Nutrition Insights: Building Better Meal Plans"
- [ ] Description: "Understand nutritional science and how to design meal plans that meet diverse dietary requirements."
- [ ] Author: "Dr. James Wilson"
- [ ] Published At: (Pick a date)
- [ ] Click "Publish"

**Blog Post 5:**

- [ ] Title: "Technology Integration in Food Service"
- [ ] Description: "Explore how cutting-edge technology is transforming the food service industry and improving customer experiences."
- [ ] Author: "Lisa Anderson"
- [ ] Published At: (Pick a date)
- [ ] Click "Publish"

### Option B: Automated Import Script (Faster)

- [ ] **Step 11**: Ensure your `.env.local` has `SANITY_AUTH_TOKEN` set (needs Editor permissions)
- [ ] **Step 12**: Run the import script:
  ```bash
  npm run sanity:import-dummy
  ```
- [ ] **Step 13**: Wait for confirmation message: "✅ All dummy blog posts imported successfully!"

## Phase 5: Test the Integration (3 minutes)

- [ ] **Step 14**: Start your development server:

  ```bash
  npm run dev
  ```

- [ ] **Step 15**: Open browser and visit:

  ```
  http://localhost:3000
  ```

- [ ] **Step 16**: Scroll down to the "Forti Insights" section
- [ ] **Step 17**: Verify you see:
  - [ ] 5 blog post cards displayed
  - [ ] Blog titles visible
  - [ ] Descriptions visible
  - [ ] Author names visible (if you added them)
  - [ ] "Read more >" links visible
  - [ ] Loading state works (briefly shows "Loading insights...")
  - [ ] Responsive on mobile (scroll horizontally or resize browser)

## Phase 6: Ongoing Content Management

- [ ] **To add new blog posts**: Visit your Sanity Studio → Create → Blog Post
- [ ] **To edit existing posts**: Find post in Sanity Studio → Click to edit → Save
- [ ] **To delete posts**: Open post → Click menu → Delete → Confirm
- [ ] **To add images**:
  - [ ] Click image field in blog post
  - [ ] Upload from computer
  - [ ] Image appears in blog post card (once published)

## Troubleshooting Checklist

If blog posts aren't showing:

- [ ] Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] Verify dataset is set to `"production"` (or your chosen dataset)
- [ ] Open browser DevTools Console (F12) → Check for errors
- [ ] Visit Sanity Studio and confirm blog posts are published (not just saved as drafts)
- [ ] Try refreshing the page (Ctrl+R)
- [ ] Clear browser cache (Ctrl+Shift+Delete)

If images aren't loading:

- [ ] Ensure images are uploaded in Sanity Studio (not external URLs)
- [ ] Check that image was uploaded successfully (no red error icon)
- [ ] Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- [ ] Check browser console for 404 errors in image URLs

Great job! 🎉 You now have Sanity CMS integrated with FortiFoods!

---

## Next Steps (Optional)

After setup is complete, consider:

1. **Add a Blog Detail Page** - Show full blog post content
2. **Add Categories** - Tag blog posts with topics
3. **Add Search** - Let users search blog posts
4. **Add Comments** - Allow reader engagement
5. **Image Optimization** - Use Next.js Image component for faster loading

See `SANITY_SETUP.md` for detailed guides on these features.

---

**Time to Complete**: ~20-30 minutes total

**Support**: Check `SANITY_SETUP.md` and `SANITY_QUICK_REFERENCE.md` for more details
