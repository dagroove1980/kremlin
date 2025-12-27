#!/bin/bash

# Kill any existing servers
lsof -ti:8000 | xargs kill -9 2>/dev/null
lsof -ti:8080 | xargs kill -9 2>/dev/null
killall -9 Python 2>/dev/null
killall -9 python3 2>/dev/null

# Navigate to the project directory
cd "$(dirname "$0")"

# Verify we're in the right place
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found. Make sure you're running this from the kremlin-companion directory."
    exit 1
fi

# Start the server
echo "Starting Kremlin Companion server..."
echo "Open your browser to: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python3 -m http.server 8080

