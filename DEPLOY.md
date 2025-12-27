# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd kremlin-companion

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? kremlin-companion (or your choice)
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Kremlin Companion"
git remote add origin https://github.com/YOUR_USERNAME/kremlin-companion.git
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: `./`
6. Click "Deploy"

### Option 3: Vercel Web Interface

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the `kremlin-companion` folder
3. Vercel will automatically detect and deploy

## Environment Variables (Optional - for API security)

If you want to secure the OpenAI API key:

1. Create a Vercel Serverless Function:
   - Create `api/chat.js`:
   ```javascript
   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ error: 'Method not allowed' });
     }
     
     const response = await fetch('https://api.openai.com/v1/chat/completions', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(req.body)
     });
     
     const data = await response.json();
     res.status(200).json(data);
   }
   ```

2. Set environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `OPENAI_API_KEY` with your key
   - Update `app.js` to call `/api/chat` instead of OpenAI directly

## Post-Deployment

After deployment:
1. Visit your Vercel URL (e.g., `https://kremlin-companion.vercel.app`)
2. Test all features:
   - Rules search
   - AI chat
   - Navigation
   - Tips section

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Images not loading
- Check CORS settings if images are blocked
- Some external images may require proxy

### API errors
- Check browser console for errors
- Verify API key is correct
- Check Vercel function logs if using serverless functions

### Build errors
- Ensure `vercel.json` is correct
- Check that all files are committed
- Review Vercel build logs

