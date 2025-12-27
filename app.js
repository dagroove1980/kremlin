// OpenAI API Configuration
// Note: Set OPENAI_API_KEY environment variable or use Vercel environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || window.OPENAI_API_KEY || '';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// DOM Elements
const navTabs = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');
const rulesSearch = document.getElementById('rules-search');
const searchBtn = document.querySelector('.search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const rulesContent = document.getElementById('rules-content');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const tipsGrid = document.getElementById('tips-grid');

// State
let currentFilter = 'all';
let chatHistory = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeRules();
    initializeSearch();
    initializeChat();
    initializeTips();
    initializeNavigation();
});

// Tab Navigation
function initializeTabs() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Update active states
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${targetTab}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Rules Display
function initializeRules() {
    displayRules(kremlinRules.sections);
}

function displayRules(sections) {
    rulesContent.innerHTML = sections.map(section => `
        <div class="rule-section" id="${section.id}" data-category="${section.category}">
            <h2>${section.title}</h2>
            ${section.content}
        </div>
    `).join('');
}

// Search Functionality
function initializeSearch() {
    searchBtn.addEventListener('click', performSearch);
    rulesSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            performSearch();
        });
    });
}

function performSearch() {
    const query = rulesSearch.value.toLowerCase().trim();
    const sections = kremlinRules.sections;
    
    let filteredSections = sections;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredSections = filteredSections.filter(s => s.category === currentFilter);
    }
    
    // Apply search query
    if (query) {
        filteredSections = filteredSections.filter(section => {
            const searchableText = (section.title + ' ' + section.content).toLowerCase();
            return searchableText.includes(query);
        });
        
        // Highlight search terms in results
        filteredSections = filteredSections.map(section => ({
            ...section,
            content: highlightSearchTerms(section.content, query)
        }));
    }
    
    displayRules(filteredSections);
    
    // Scroll to first result
    if (filteredSections.length > 0) {
        const firstSection = document.getElementById(filteredSections[0].id);
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function highlightSearchTerms(text, query) {
    if (!query) return text;
    const terms = query.split(' ').filter(t => t.length > 2);
    let highlighted = text;
    terms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlighted = highlighted.replace(regex, '<span class="highlight">$1</span>');
    });
    return highlighted;
}

// Chat Functionality
function initializeChat() {
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat('user', message);
    chatInput.value = '';
    
    // Disable input while processing
    chatInput.disabled = true;
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<span class="loading"></span>';
    
    try {
        // Get AI response
        const response = await getAIResponse(message);
        addMessageToChat('bot', response);
    } catch (error) {
        console.error('Error:', error);
        addMessageToChat('bot', 'Sorry, I encountered an error. Please try again.');
    } finally {
        // Re-enable input
        chatInput.disabled = false;
        sendBtn.disabled = false;
        sendBtn.innerHTML = 'Send';
        chatInput.focus();
    }
}

function addMessageToChat(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;
    
    let avatarHTML;
    if (role === 'user') {
        avatarHTML = '👤';
    } else {
        avatarHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQKGzvamlWrExgeCrXtKhq40VIXEiWUiVSg&s" alt="AI Companion" class="avatar-image">';
    }
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatarHTML}</div>
        <div class="message-content">
            <p>${formatMessage(content)}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add to history
    chatHistory.push({ role, content });
}

function formatMessage(text) {
    // Convert markdown-like formatting to HTML
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>')
        .replace(/Phase (\d+)/g, '<strong>Phase $1</strong>')
        .replace(/(Phase \d+):/g, '$1:');
}

async function getAIResponse(userMessage) {
    if (!OPENAI_API_KEY) {
        return 'OpenAI API key is not configured. Please set OPENAI_API_KEY environment variable or configure it in Vercel settings.';
    }
    // Create system prompt with game rules context
    const systemPrompt = `You are an expert assistant for the board game "Kremlin" (3rd Edition). You have complete knowledge of the game rules and can provide precise answers with specific rule references.

Key Rules Context:
- The game is for 3-6 players, starting in 1951
- Players secretly allocate 1-10 influence points to 10 politicians (except Nestor Aparatschik)
- Players declare influence to control politicians
- Each year has 8 phases: Ageing, Curing, Purges, Promotions, Foreign Minister, Elections, Volk, Winning
- The winner is the player with most influence on the Party Chief
- Politicians age, can become sick, be purged, or die
- The Foreign Minister can act even when uncontrolled
- Influence can be declared at any time, even during actions

Always:
1. Provide accurate, specific answers based on the rules
2. Reference specific phases or rules when relevant
3. Give strategic advice when asked
4. Be concise but thorough
5. If unsure, say so rather than guessing

Answer the user's question about Kremlin rules, strategy, or gameplay:`;

    // Build conversation history
    const messages = [
        { role: 'system', content: systemPrompt },
        ...chatHistory.slice(-10).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        })),
        { role: 'user', content: userMessage }
    ];
    
    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: messages,
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw error;
    }
}

// Tips Display
function initializeTips() {
    const tips = kremlinRules.tips;
    tipsGrid.innerHTML = tips.map(tip => `
        <div class="tip-card">
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
        </div>
    `).join('');
}

// Smooth Navigation
function initializeNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Switch to rules tab if not already there
                const rulesTab = document.querySelector('[data-tab="rules"]');
                if (rulesTab && !rulesTab.classList.contains('active')) {
                    rulesTab.click();
                }
                
                // Scroll to target
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

// Add some helpful keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        rulesSearch.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === rulesSearch) {
        rulesSearch.value = '';
        performSearch();
    }
});

