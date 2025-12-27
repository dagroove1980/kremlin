// Kremlin Rules Data - Organized from the PDF
const kremlinRules = {
    sections: [
        {
            id: 'setup',
            title: 'Prepare to Play',
            category: 'setup',
            content: `
                <h3>Setup Instructions</h3>
                <p>Set out the Politburo Office Silhouettes as shown on page four of the rule book.</p>
                
                <h4>Politburo Positions</h4>
                <ul>
                    <li><strong>Top:</strong> The Party Chief</li>
                    <li><strong>1st rank (left to right):</strong> Head of the KGB, Foreign Minister, Defence Minister</li>
                    <li><strong>2nd rank (left to right):</strong> Ministers of Ideology, Industry, Economy, Sports</li>
                </ul>
                
                <p>Below these you place the Candidate strip. Nearby you place the Volk (People) card and farther away you place Siberia and The Kremlin Walls.</p>
                
                <h4>Initial Setup</h4>
                <ol>
                    <li>Extract <strong>Nestor Aparatschik</strong> from the pack of Politician Cards. He is the Party Chief at the beginning of the game and this card is inserted into the Silhouette.</li>
                    <li>Place a "Sick" marker (+) on his card.</li>
                    <li>Randomly deal seven other politician cards and place them in the seven Politburo silhouettes.</li>
                    <li>Fill the five positions on the Candidate strip in the same way.</li>
                    <li>The rest of the Politician Cards are placed below the People card so that each can be clearly seen.</li>
                    <li>All players are given an Offengelegte Einflüsse (Declared Influence) sheet, a paper and a pen.</li>
                </ol>
            `
        },
        {
            id: 'secret-influence',
            title: 'Secret Influence',
            category: 'setup',
            content: `
                <h3>Secret Influence Allocation</h3>
                <p>The players secretly write on their sheet of paper the names of <strong>10 politicians</strong> they seek to influence. They number these from 1 to 10. These numbers represent influence points - 10 being given to the man they most favour and so on in descending order.</p>
                
                <p><strong>Important:</strong> All politicians, irrespective of where they are at the start of the game, can be influenced with the sole exception of <strong>Nestor Aparatschick</strong> who is sick and old but full of integrity.</p>
                
                <p>These secretly allocated points remain unchanged during the game (unless playing the Optional Rules), so you have to plan your strategy early on in the game.</p>
            `
        },
        {
            id: 'declaring-influence',
            title: 'Declaring Influence',
            category: 'actions',
            content: `
                <h3>How to Control Politicians</h3>
                <p>Players can declare influence points on a politician at any time. A politician is always under control of the player having declared the most influence points on this politician. (The politician's Name Card will be laid on this player's Declared Influence to show the number of declared influence points.) This player will decide on all actions and votes of the politician in question... unless another player declares more influence and takes the politician over.</p>
                
                <h4>Timing of Declarations</h4>
                <p>It's possible to declare influence (and change control of a politician) at any time, even if the politician just announced an action (like purge attempt, spy investigation) or a vote. The new controller of the politician is free to cancel or reverse the action or vote in question. The decision can only be changed before any dice are rolled or before the vote continues to the next politician but there should always be the time (say five seconds) to do so.</p>
                
                <h4>Strategic Considerations</h4>
                <ul>
                    <li>Players need never declare all of the points that they have on a man but may do so in steps.</li>
                    <li>At no time can they declare in excess of the number they have secretly written down.</li>
                    <li>In the rare event of two players announcing the same number of points at exactly the same time the older player takes preference.</li>
                </ul>
                
                <h4>Why Not Reveal All Points Early?</h4>
                <ul>
                    <li>Other players will try to send your man to Siberia if they have not packed him high enough.</li>
                    <li>Even your 10 point Politician is of uncertain value because somebody else might have put 10 points on him and can possibly snatch victory from you.</li>
                    <li>Sometimes a quick decision to declare and take the initiative is necessary if another player tries to get all of the power, but often the other players will do their best for a politician they think to control and there's no reason not to let them do so.</li>
                </ul>
                
                <p><strong>Note:</strong> Uncontrolled Politburo Members remain inactive (do not cure, purge etc..), the exception being the Foreign Minister in Phase 5.</p>
            `
        },
        {
            id: 'course-of-year',
            title: 'The Course of The Year',
            category: 'phases',
            content: `
                <h3>Game Structure</h3>
                <p>The game begins in <strong>1951</strong> when the Party Chief is 80 year old sick Nestor Aparatschik. Each year is played in eight phases:</p>
                
                <ol>
                    <li><strong>Ageing</strong> - Politicians age and may become sick or die</li>
                    <li><strong>Curing</strong> - Sick politicians may be cured</li>
                    <li><strong>Purges</strong> - Attempts to remove politicians from power</li>
                    <li><strong>Promotions</strong> - Candidates may be promoted to Politburo</li>
                    <li><strong>Foreign Minister</strong> - Foreign Minister actions</li>
                    <li><strong>Elections</strong> - Party Chief elections</li>
                    <li><strong>Volk</strong> - People's actions</li>
                    <li><strong>Winning</strong> - Determine winner</li>
                </ol>
            `
        },
        {
            id: 'phase-1',
            title: 'Phase 1: Ageing',
            category: 'phases',
            content: `
                <h3>Phase 1: Ageing</h3>
                <p>All politicians age by one year. Check each politician's age against the Ageing Table in the rulebook.</p>
                
                <h4>Ageing Consequences</h4>
                <ul>
                    <li><strong>K (Kremlin Walls):</strong> The politician is sent to the Kremlin Walls and removed from play. They cannot return.</li>
                    <li><strong>T (Tomb):</strong> The politician dies and is removed from play permanently.</li>
                    <li><strong>A (Age):</strong> The politician becomes sick. Place a sick marker (+) on their card.</li>
                    <li><strong>G (Gone):</strong> The politician is sent to Siberia. They can potentially return via Foreign Minister actions.</li>
                </ul>
                
                <h4>Special Rules</h4>
                <ul>
                    <li>The Party Chief cannot be sent to the Kremlin Walls or Siberia during this phase.</li>
                    <li>The Party Chief can die or become sick from ageing.</li>
                    <li>Consult the Ageing Table in your rulebook for specific age thresholds.</li>
                </ul>
                
                <p><strong>Tip:</strong> Keep track of politician ages! Older politicians are more valuable but also more vulnerable to ageing consequences.</p>
            `
        },
        {
            id: 'phase-2',
            title: 'Phase 2: Curing',
            category: 'phases',
            content: `
                <h3>Phase 2: Curing</h3>
                <p>Each player, in turn order, may attempt to cure one sick politician they control. To cure a sick politician:</p>
                
                <ol>
                    <li>The controlling player announces which sick politician they wish to cure.</li>
                    <li>Roll a die. If the result is 1-3, the cure succeeds and the sick marker is removed.</li>
                    <li>If the result is 4-6, the cure fails and the politician remains sick.</li>
                </ol>
                
                <p><strong>Important:</strong> Only controlled politicians can be cured. Uncontrolled Politburo members remain inactive.</p>
            `
        },
        {
            id: 'phase-3',
            title: 'Phase 3: Purges',
            category: 'phases',
            content: `
                <h3>Phase 3: Purges</h3>
                <p>Each player, in turn order, may attempt one purge. A purge is an attempt to remove a politician from the Politburo.</p>
                
                <h4>How Purges Work</h4>
                <ol>
                    <li>The controlling player of a Politburo member announces a purge attempt against another Politburo member.</li>
                    <li>The purger rolls a die. The result determines the outcome:
                        <ul>
                            <li><strong>1-2:</strong> Purge succeeds - target is sent to Siberia</li>
                            <li><strong>3-4:</strong> Purge fails - no effect</li>
                            <li><strong>5-6:</strong> Purge backfires - the purger is sent to Siberia instead</li>
                        </ul>
                    </li>
                    <li>If successful, the purged politician's card is moved to Siberia.</li>
                    <li>The purged position becomes empty and can be filled in Phase 4 (Promotions).</li>
                </ol>
                
                <h4>Special Rules</h4>
                <ul>
                    <li>The Party Chief <strong>cannot be purged</strong>, but can purge others.</li>
                    <li>You can purge politicians you don't control (if you control the purger).</li>
                    <li>Purges are risky - there's a 33% chance of backfiring!</li>
                    <li>Politicians sent to Siberia can potentially return via Foreign Minister actions.</li>
                </ul>
                
                <p><strong>Strategic Note:</strong> Use purges carefully. They're powerful but dangerous. Consider purging threats to your position, but remember the risk of backfire.</p>
            `
        },
        {
            id: 'phase-4',
            title: 'Phase 4: Promotions',
            category: 'phases',
            content: `
                <h3>Phase 4: Promotions</h3>
                <p>Candidates may be promoted to fill empty Politburo positions.</p>
                
                <h4>Promotion Process</h4>
                <ol>
                    <li>If there are empty positions in the Politburo, players may promote candidates.</li>
                    <li>Each player, in turn order, may promote one candidate they control to an empty Politburo position.</li>
                    <li>The promoted candidate takes the position and their card is moved from the Candidate strip to the Politburo.</li>
                    <li>If multiple players want to promote to the same position, the player with the most declared influence on their candidate takes precedence.</li>
                </ol>
                
                <p><strong>Note:</strong> The Party Chief position cannot be filled through promotion - only through elections in Phase 6.</p>
            `
        },
        {
            id: 'phase-5',
            title: 'Phase 5: Foreign Minister',
            category: 'phases',
            content: `
                <h3>Phase 5: Foreign Minister</h3>
                <p>The Foreign Minister has special actions available, even if uncontrolled.</p>
                
                <h4>Foreign Minister Actions</h4>
                <ul>
                    <li><strong>Spy Investigation:</strong> The Foreign Minister may investigate another politician to discover their secret influence allocation (if the controlling player agrees to reveal).</li>
                    <li><strong>Diplomatic Mission:</strong> The Foreign Minister may attempt to bring a politician back from Siberia (roll die: 1-3 succeeds, 4-6 fails).</li>
                </ul>
                
                <p><strong>Important:</strong> The Foreign Minister is the only Politburo member who can act even when uncontrolled. However, if controlled, the controlling player decides which action to take.</p>
            `
        },
        {
            id: 'phase-6',
            title: 'Phase 6: Elections',
            category: 'phases',
            content: `
                <h3>Phase 6: Elections</h3>
                <p>Elections determine who becomes (or remains) Party Chief. Elections occur if:</p>
                <ul>
                    <li>The Party Chief position is vacant (due to death, removal, etc.)</li>
                    <li>A player-controlled Politburo member challenges the current Party Chief</li>
                </ul>
                
                <h4>Election Process</h4>
                <ol>
                    <li>All Politburo members vote (except the Party Chief if being challenged).</li>
                    <li>Each politician votes for the candidate they support (as decided by their controlling player).</li>
                    <li>Players announce votes in turn order, or simultaneously if preferred.</li>
                    <li>The candidate with the most votes becomes the new Party Chief.</li>
                    <li>In case of a tie:
                        <ul>
                            <li>If challenging an existing Party Chief, the current Party Chief retains power</li>
                            <li>If electing a new Party Chief, the older candidate wins</li>
                        </ul>
                    </li>
                </ol>
                
                <h4>Strategic Considerations</h4>
                <ul>
                    <li>Build alliances by supporting other players' candidates in exchange for future support.</li>
                    <li>Challenge the Party Chief when you have strong support from multiple controlled politicians.</li>
                    <li>Consider timing - challenging too early may waste votes if you don't have enough support.</li>
                </ul>
                
                <p><strong>Note:</strong> The Party Chief cannot be purged, but can be challenged through elections or die of old age.</p>
            `
        },
        {
            id: 'phase-7',
            title: 'Phase 7: Volk (People)',
            category: 'phases',
            content: `
                <h3>Phase 7: Volk (People)</h3>
                <p>The People card represents popular support and can influence the game.</p>
                
                <h4>People's Actions</h4>
                <ul>
                    <li>The People may support or oppose politicians based on their popularity.</li>
                    <li>Popular politicians (those with high declared influence) may gain benefits.</li>
                    <li>Unpopular politicians may face consequences.</li>
                </ul>
                
                <p><strong>Note:</strong> The exact mechanics of the People phase depend on the specific edition of the game. Consult your rulebook for detailed People actions.</p>
            `
        },
        {
            id: 'phase-8',
            title: 'Phase 8: Winning',
            category: 'winning',
            content: `
                <h3>Phase 8: Winning</h3>
                <p>The winner is determined at the end of each year.</p>
                
                <h4>Winning Conditions</h4>
                <p>The winner is the player who can show the <strong>most influence over the winning politician</strong>. The winning politician is:</p>
                <ul>
                    <li>The Party Chief at the end of the year, OR</li>
                    <li>The politician who becomes Party Chief during elections</li>
                </ul>
                
                <h4>Tie Breaking</h4>
                <p>If there is a tie, the winner is the player who at that moment is <strong>not controlling</strong> that politician. This creates interesting strategic decisions about when to declare influence.</p>
                
                <h4>Game End</h4>
                <p>The game ends when:</p>
                <ul>
                    <li>A player wins by having the most influence on the Party Chief, OR</li>
                    <li>All politicians are dead or removed from play, OR</li>
                    <li>A predetermined number of years have passed (if playing with time limit)</li>
                </ul>
                
                <p><strong>Remember:</strong> Since secretly allocated points remain unchanged during the game, you must plan your strategy early!</p>
            `
        },
        {
            id: 'tables',
            title: 'Reference Tables',
            category: 'reference',
            content: `
                <h3>Ageing Table</h3>
                <p>The Ageing Table shows when politicians face consequences based on their age:</p>
                <ul>
                    <li><strong>K</strong> = Sent to Kremlin Walls (removed from play)</li>
                    <li><strong>T</strong> = Tomb (dies and removed from play)</li>
                    <li><strong>A</strong> = Age (becomes sick)</li>
                    <li><strong>G</strong> = Gone (sent to Siberia)</li>
                </ul>
                
                <p>Consult the full ageing tables in your rulebook for specific ages. The tables show different outcomes based on the politician's current age.</p>
                
                <h3>Sanatorium Table</h3>
                <p>The Sanatorium Table shows recovery chances for sick politicians. Consult your rulebook for the complete table showing cure probabilities at different ages.</p>
            `
        }
    ],
    
    tips: [
        {
            title: 'Secret Influence Strategy',
            content: 'Don\'t reveal all your influence points early. Keep some in reserve to counter other players\' moves. Remember that even your 10-point politician can be snatched away if someone else also allocated 10 points to them.'
        },
        {
            title: 'Timing Your Declarations',
            content: 'You can declare influence at any time, even during another player\'s action. Use this to your advantage - wait until the last moment to reveal your control, keeping other players guessing.'
        },
        {
            title: 'Managing Ageing',
            content: 'Keep track of politician ages. Older politicians are more valuable but also more vulnerable. Consider promoting younger candidates to build a stable power base.'
        },
        {
            title: 'Purge Strategy',
            content: 'Purges are risky - they can backfire! Only purge when necessary, and consider that a failed purge might remove your own politician. Use purges to eliminate threats, not just to be aggressive.'
        },
        {
            title: 'Foreign Minister Power',
            content: 'The Foreign Minister is unique - they can act even when uncontrolled. Use spy investigations strategically to learn about other players\' secret allocations.'
        },
        {
            title: 'Election Timing',
            content: 'Challenge the Party Chief when you have strong support. Build alliances by supporting other players\' candidates in exchange for their votes in future elections.'
        },
        {
            title: 'Siberia Management',
            content: 'Politicians sent to Siberia can be brought back by the Foreign Minister. Don\'t give up on your high-value politicians - they may return to play.'
        },
        {
            title: 'Candidate Promotion',
            content: 'Fill empty Politburo positions quickly with candidates you control. More controlled positions mean more actions and votes available to you.'
        },
        {
            title: 'Winning Strategy',
            content: 'The winner is determined by influence on the Party Chief. Focus on either becoming Party Chief yourself or ensuring you have the most influence on whoever holds the position.'
        },
        {
            title: 'Bluffing and Deception',
            content: 'Since influence is secret, you can bluff about your allocations. Make other players think you\'ve invested heavily in a politician you actually haven\'t, forcing them to waste their influence.'
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = kremlinRules;
}

