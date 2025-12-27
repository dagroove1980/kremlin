# Fix 404 Error - Step by Step

## The Problem
You're getting a 404 because there's likely a server running from the wrong directory on port 8000.

## The Solution - Run These Commands:

```bash
# 1. Kill ALL Python servers
killall Python 2>/dev/null
killall python3 2>/dev/null
pkill -f "http.server" 2>/dev/null

# 2. Make absolutely sure you're in the right directory
cd /Users/david.scebat/Documents/kremlin-companion

# 3. Verify files exist
ls -la index.html

# 4. Start server on port 8080 (to avoid conflicts)
python3 -m http.server 8080
```

## Then Open in Browser:
**http://localhost:8080**

NOT port 8000 - use **8080**!

## If Still Not Working:

Try accessing directly:
- http://localhost:8080/index.html
- http://localhost:8080/test.html

## Alternative: Use the Start Script

```bash
cd /Users/david.scebat/Documents/kremlin-companion
./start-server.sh
```

This script automatically:
- Kills old servers
- Verifies you're in the right directory  
- Starts on port 8080

