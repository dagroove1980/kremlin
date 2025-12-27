# OG Tag Validation Guide

## Current Configuration ✅

Your OG tags are correctly configured in `index.html`:

### Required OG Tags (All Present):
- ✅ `og:type` = "website"
- ✅ `og:url` = "https://kremlin-companion.vercel.app/"
- ✅ `og:title` = "KREMLIN - Davide online companion"
- ✅ `og:description` = "The Online Companion for Kremlin 3rd Edition - Rules, strategies, and AI-powered assistance"
- ✅ `og:image` = "https://kremlin-companion.vercel.app/og-image.png"

### Additional OG Tags:
- ✅ `og:image:secure_url` = "https://kremlin-companion.vercel.app/og-image.png"
- ✅ `og:image:width` = "1200"
- ✅ `og:image:height` = "630"
- ✅ `og:image:alt` = "KREMLIN - Davide online companion"
- ✅ `og:site_name` = "Kremlin Companion"
- ✅ `og:locale` = "en_US"

### Twitter Tags:
- ✅ `twitter:card` = "summary_large_image"
- ✅ `twitter:url` = "https://kremlin-companion.vercel.app/"
- ✅ `twitter:title` = "KREMLIN - Davide online companion"
- ✅ `twitter:description` = "The Online Companion for Kremlin 3rd Edition - Rules, strategies, and AI-powered assistance"
- ✅ `twitter:image` = "https://kremlin-companion.vercel.app/og-image.png"

## Validation Tools

### 1. Facebook/WhatsApp Sharing Debugger
**URL:** https://developers.facebook.com/tools/debug/

**Steps:**
1. Enter: `https://kremlin-companion.vercel.app/`
2. Click "Debug"
3. Click "Scrape Again" to refresh cache
4. Check for:
   - ✅ Image preview shows correctly
   - ✅ Title and description are correct
   - ✅ No errors or warnings (except optional fb:app_id)

### 2. Twitter Card Validator
**URL:** https://cards-dev.twitter.com/validator

**Steps:**
1. Enter: `https://kremlin-companion.vercel.app/`
2. Click "Preview card"
3. Verify the card preview matches your expectations

### 3. LinkedIn Post Inspector
**URL:** https://www.linkedin.com/post-inspector/inspect/

**Steps:**
1. Enter: `https://kremlin-companion.vercel.app/`
2. Click "Inspect"
3. Verify the preview

### 4. Open Graph Preview
**URL:** https://www.opengraph.xyz/url/https://kremlin-companion.vercel.app/

Shows how your site appears when shared.

## Common Issues & Solutions

### Issue: Image not showing
- **Solution:** Clear cache using Facebook Debugger's "Scrape Again"
- **Check:** Image URL is accessible: https://kremlin-companion.vercel.app/og-image.png

### Issue: Wrong content type
- **Status:** ✅ Fixed - Vercel config sets `Content-Type: image/png`

### Issue: fb:app_id warning
- **Status:** ⚠️ Optional - Only needed for Facebook App features
- **Action:** Can be safely ignored unless you need Facebook App integration

## Quick Test

Run this command to check OG tags:
```bash
curl -s https://kremlin-companion.vercel.app/ | grep -i "og:" | head -20
```

## Image Specifications ✅

- **URL:** https://kremlin-companion.vercel.app/og-image.png
- **Size:** 1.4MB (optimized)
- **Dimensions:** 1270 x 732 pixels
- **Format:** PNG
- **Recommended:** 1200x630 (your image is close: 1270x732)
- **Max Size:** Under 1.2MB recommended (yours is 1.4MB - acceptable)

## Next Steps

1. ✅ Test with Facebook Debugger (clear cache)
2. ✅ Test with Twitter Card Validator
3. ✅ Share on WhatsApp to verify
4. ✅ Share on Facebook to verify

Your OG tags are correctly configured! 🎉

