# Kremlin Companion

An intelligent companion website for the **Kremlin 3rd Edition** board game, featuring:

- 📖 **Complete Rules Reference** - Organized, searchable rules sections
- 🤖 **AI Game Companion** - Ask questions and get precise rule answers
- 💡 **Strategy Tips** - Expert tactics and gameplay advice
- 🎨 **Beautiful Design** - Black and red theme inspired by the game box

## Features

### Rules Browser
- Searchable rules database
- Organized by categories (Setup, Phases, Actions, Winning)
- Quick navigation sidebar
- Reference tables for ageing and sanatorium

### AI Companion
- Powered by OpenAI GPT-4
- Answers questions about rules, strategies, and gameplay
- References specific phases and rules
- Provides strategic advice

### Strategy Tips
- Collection of expert tips and tactics
- Covers influence management, timing, and winning strategies

## Setup

### Local Development

```bash
# Serve locally
python3 -m http.server 8000

# Or use any static file server
npx serve
```

Then open `http://localhost:8000` in your browser.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect via GitHub for automatic deployments
```

## Configuration

### OpenAI API Key

The OpenAI API key is currently embedded in `app.js` for simplicity. **Important Security Note:**

⚠️ **For production use**, you should:
1. Move the API key to environment variables
2. Create a backend API endpoint (e.g., Vercel Serverless Function) to proxy requests
3. Use Vercel environment variables and access them server-side only

**Current setup exposes the API key in client-side code**, which means anyone can see and potentially misuse it. For a production deployment, implement a backend proxy.

### Environment Variables (Recommended)

Create a Vercel serverless function to handle API calls:

```javascript
// api/chat.js (Vercel Serverless Function)
export default async function handler(req, res) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  // ... handle response
}
```

Then set `OPENAI_API_KEY` in Vercel dashboard → Settings → Environment Variables.

## Design

The site features a dramatic black and red color scheme inspired by the Kremlin game box, with:
- Classic typography (Playfair Display for headings)
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Game-themed imagery integration

## Based On

- **Kremlin 3rd Edition** rules by Fata Morgana Spiele
- Original Swiss rules (1986)
- Game design by Urs Hostettler

## License

MIT License - Unofficial companion guide

