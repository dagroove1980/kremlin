# IMPORTANT: Add og-image.png to Git

The OG image file (`og-image.png`) is **not in the repository**. This is why you're getting the "Invalid Image Content Type" error.

## To Fix:

1. Make sure `og-image.png` exists in the `kremlin-companion` folder
2. Add it to git:
   ```bash
   cd /Users/david.scebat/Documents/kremlin-companion
   git add og-image.png
   git commit -m "Add OG image file"
   git push
   ```

3. After pushing, Vercel will auto-deploy and the image will be available at:
   `https://kremlin-companion.vercel.app/og-image.png`

The Vercel configuration is already set up correctly with:
- Proper Content-Type headers for PNG files
- Rewrite rules that exclude image files
- Caching headers

**The file just needs to be in the repository!**

