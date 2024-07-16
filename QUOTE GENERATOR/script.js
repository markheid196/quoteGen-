// Array of quotes
const quotes = [
    "Never apologize for being the toxic mess you are. Own your truth.",
    "Wisdom is rare. That explains why most people are idiots.",
    "People saying you do too much is just their attempt to get ahead of you. Ignore them.",
    "Maybe you can't sing or play piano like Ray Charles, but you drive like him. That's something.",
    "Two things you never buy second hand - underwear and whole milk.",
    "I learned there are babies in hospitals addicted to crack. Who sells crack to babies? And how hard is it to catch them? This makes no sense.",
    "How's that inspiring quote tattoo working out? Finally get you over the finish line?",
    "You never really know people. Your mom might hate you. You just don't know.",
    "The most logical reason for relationship problems is that you're physically unattractive.",
    "A bump in the road is the universe reminding you it hates you.",
    "Pursue your dreams, but have a plausible reason it's not your fault if they fail.",
    "Ignore the voice in your head endlessly criticizing you. It's all true, but ignore it anyway.",
    "Failure is never the last word. The scars it leaves behind are the last word.",
    "Honesty creates an authentic life, but living a lie is a close second.",
    "If there's landscaping at a hotel near a state border, check under the plants. Gangs hide drugs there to avoid federal trafficking charges.",
    "You are the reason your therapy dog now needs its own therapy dog. Keep up the good work.",
    "If you fail again and again, remember that other people have really enjoyed hearing about each one.",
    "Reading online quotes is proven to be as effective as facing hard truths week after week with a qualified therapist.",
    "A room without books is probably meant for things other than reading. Maybe it's a dining room, or living room, or possibly a TV room.",
    "If you're nervous to speak in public, don't be. It's unlikely anybody's listening.",
];

// Shuffle the quotes array
for (let i = quotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
}

// Initialize current index
let currentIndex = 0;

// Add event listener for click
document.getElementById('generate').addEventListener('click', function() {
    // Display the current quote
    document.getElementById('quote').textContent = quotes[currentIndex];
    
    // Increment the index
    currentIndex++;
    // Reset index if it reaches the end of the array
    if (currentIndex >= quotes.length) {
        currentIndex = 0; // Optionally reshuffle here if desired
    }
});
