function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const emojis = ['🤍', '💕', '✨', '💖', '💗', '🍓'];
    
    // Ambient heart particles
    setInterval(() => {
        const particle = document.createElement('div');
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        particle.className = 'heart-particle text-2xl lg:text-3xl fixed bottom-[-20%] drop-shadow-md';
        
        const startPosX = Math.random() * 100;
        particle.style.left = `${startPosX}vw`;
        
        const duration = Math.random() * 7 + 8;
        particle.style.animationDuration = `${duration}s`;
        
        let size = Math.random() * 1.5 + 0.5;
        particle.style.transform = `scale(${size})`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }, 400);
}

function initFlipCards() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

function handleReveal() {
    const revealBtn = document.getElementById('reveal-btn');
    const finalSurprise = document.getElementById('final-surprise');
    
    if (revealBtn && finalSurprise) {
        revealBtn.addEventListener('click', () => {
            finalSurprise.classList.remove('hidden');
            finalSurprise.classList.add('animate-fade-in-up');
            revealBtn.style.display = 'none';
            
            const count = 200;
            const defaults = { origin: { y: 0.7 } };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, { spread: 26, startVelocity: 55, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
            fire(0.2, { spread: 60, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
            fire(0.1, { spread: 120, startVelocity: 45, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
            
            setTimeout(() => {
                 const duration = 3000;
                 const end = Date.now() + duration;

                 (function frame() {
                     confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
                     confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FFB6C1', '#ffc0cb', '#FF69B4'] });
                     if (Date.now() < end) requestAnimationFrame(frame);
                 }());
            }, 500);
        });
    }
}

// Single-page navigation logic
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Check for specific initialization per-page
        if (pageId === 'hero') {
            targetPage.classList.add('animate-fade-in-up');
        }
    }
}

// Initializing Dexie for persistent data (as requested)
const db = new Dexie("BirthdaySurpriseDB");
db.version(1).stores({
    visits: '++id, date'
});
db.visits.add({date: new Date().toISOString()});

// Setup navigation triggers
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initFlipCards();
    handleReveal();

    // Default to the hero page
    navigateTo('hero');

    // Attach click events for navigation
    document.querySelector('[data-target="love-letter"]').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('love-letter');
    });

    document.querySelectorAll('[data-target="reasons"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('reasons');
        });
    });

    document.querySelectorAll('[data-target="final"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('final');
        });
    });

    document.querySelectorAll('[data-target="hero"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('hero');
        });
    });
});
