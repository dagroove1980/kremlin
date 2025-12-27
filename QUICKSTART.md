# Quick Start Guide

## What You've Got

A complete, production-ready Kremlin companion website with:

✅ **Complete Rules Database** - All phases, actions, and mechanics  
✅ **AI Chat Companion** - Powered by OpenAI GPT-4  
✅ **Search Functionality** - Find rules instantly  
✅ **Strategy Tips** - Expert gameplay advice  
✅ **Beautiful Design** - Black & red theme inspired by game box  
✅ **Responsive** - Works on desktop and mobile  

## Files Structure

```
kremlin-companion/
├── index.html          # Main HTML structure
├── styles.css          # Black/red theme styling
├── app.js             # Main JavaScript (search, chat, navigation)
├── rules-data.js      # Complete rules database
├── vercel.json        # Vercel deployment config
├── package.json       # Project metadata
├── README.md          # Full documentation
├── DEPLOY.md          # Deployment guide
└── QUICKSTART.md      # This file
```

## Test Locally

```bash
cd kremlin-companion

# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd kremlin-companion
vercel

# Follow prompts, then:
vercel --prod
```

Or use the GitHub integration - just push to GitHub and connect in Vercel dashboard.

## Features Overview

### 1. Rules Browser
- **Search**: Type to find specific rules
- **Filters**: Filter by Setup, Phases, Actions, Winning
- **Navigation**: Quick links to all sections
- **Reference**: Complete rule explanations

### 2. AI Companion
- Ask any question about rules
- Get strategic advice
- References specific phases
- Powered by GPT-4

### 3. Strategy Tips
- 10 expert tips
- Covers influence, timing, winning
- Visual card layout

## Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus search
- `Escape` - Clear search
- `Enter` - Send chat message

## Customization

### Change Colors
Edit `styles.css` - modify CSS variables:
```css
:root {
    --color-red: #dc2626;  /* Change this */
    --color-black: #0a0a0a; /* Or this */
}
```

### Add More Rules
Edit `rules-data.js` - add to `sections` array:
```javascript
{
    id: 'new-section',
    title: 'New Section',
    category: 'phases',
    content: '<h3>Content here</h3>'
}
```

### Add More Tips
Edit `rules-data.js` - add to `tips` array:
```javascript
{
    title: 'New Tip',
    content: 'Tip content here'
}
```

## API Key Security

⚠️ **Current Setup**: API key is in `app.js` (client-side)

**For Production**: 
1. Create Vercel serverless function (see `DEPLOY.md`)
2. Move API key to environment variables
3. Update `app.js` to call `/api/chat`

## Next Steps

1. ✅ Test locally
2. ✅ Deploy to Vercel
3. ✅ Share with players!
4. (Optional) Add custom domain
5. (Optional) Secure API key with backend

## Support

- Check `README.md` for full documentation
- Check `DEPLOY.md` for deployment help
- Review code comments for implementation details

Enjoy your Kremlin companion! 🎲

