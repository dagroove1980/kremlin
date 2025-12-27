# OG Image Setup

## Issue
The OG image (`og-image.png`) needs to be:
1. Present in the repository
2. Served with correct Content-Type header

## Solution Applied
✅ Updated `vercel.json` to:
- Set proper `Content-Type: image/png` header for PNG files
- Exclude image files from rewrite rules (so they're served directly)
- Add caching headers for images

## Next Steps
1. Make sure `og-image.png` exists in the project root
2. Add it to git: `git add og-image.png`
3. Commit and push: `git commit -m "Add OG image" && git push`

The Vercel configuration is now fixed to serve images with the correct content type.

