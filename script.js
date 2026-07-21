// App State Variables
let currentStage = 1;
let slideshowInterval = null;
let starCount = 65;
let musicPlaying = false;

// Audio Controls Setup
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
    if (!musicPlaying) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        }).catch(err => console.log("Audio Playback configuration error: ", err));
    } else {
        bgMusic.pause();
        musicPlaying = false;
        musicBtn.innerText = "🎵 Play Music";
        musicBtn.classList.remove('playing');
    }
});

// Dynamic Starfield Generation Engine
function initStars() {
    const container = document.querySelector('.stars-container');
    container.innerHTML = '';
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let size = Math.random() * 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}
initStars();

// State Routing Machine
function nextPage(pageNumber) {
    // Standard transitions out of the current view frame
    const currentActive = document.querySelector('.page.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    // Delay entry slightly for a smoother modern DOM flow
    setTimeout(() => {
        const targetPage = document.getElementById(`page-${pageNumber}`) || document.getElementById('final-page');
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 150);
    
    currentStage = pageNumber;
}

// Page 4 Specific Branch Interaction Routine
function revealIrritate() {
    document.getElementById('q4-btns').classList.add('hide');
    document.getElementById('q4-title').classList.add('hide');
    document.getElementById('q4-reveal').classList.remove('hide');
}

// Page 5 Countdown Sequencer
function startCountdown() {
    nextPage(5);
    const counterElement = document.getElementById('countdown-number');
    let count = 3;
    counterElement.innerText = "3️⃣";
    
    let timer = setInterval(() => {
        count--;
        if (count === 2) {
            counterElement.innerText = "2️⃣";
        } else if (count === 1) {
            counterElement.innerText = "1️⃣";
        } else if (count <= 0) {
            clearInterval(timer);
            triggerGrandReveal();
        }
    }, 1000);
}

// Page 6 System Entry Architecture Initialization
function triggerGrandReveal() {
    nextPage(6);
    // Initialize standard programmatic celebration loops
    startCanvasFX(5); 
    spawnBalloonsLoop(25);
}

// Page 7 Core Typing Interface Engine
const letterString = `Happy Birthday! \n\nDo you know how grateful I am to have you as my Bhai? 🤍\n\nYou may not be my brother by blood, but you are definitely my brother by heart.\n\nThank you for always being there.\n\nMay Allah bless you with happiness, success, good health and endless smiles.\n\nHappy Birthday once again. 💙`;

function startSlideshowPage() {
    // Terminate loops gracefully prior to rendering new dynamic frames
    clearInterval(slideshowInterval);
    nextPage(8);
    
    const imageArray = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
    let index = 0;
    const imgElement = document.getElementById('slideshow-img');
    
    // Safety handling for pre-selected fallback arrays
    imgElement.src = imageArray[0];
    
    slideshowInterval = setInterval(() => {
        index = (index + 1) % imageArray.length;
        imgElement.style.opacity = '0.2';
        setTimeout(() => {
            imgElement.src = imageArray[index];
            imgElement.style.opacity = '1';
        }, 250);
    }, 2000);
}

// Route to Page 7, triggering execution thread hook dynamically inside view layer
// Custom interception layer override logic for clean pipeline entry routing hook
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'page-7' && mutation.target.classList.contains('active')) {
            executeTypingEffect();
        }
    });
});
observer.observe(document.getElementById('page-7'), { attributes: true, attributeFilter: ['class'] });

function executeTypingEffect() {
    const container = document.getElementById('typing-text');
    const actionBtn = document.getElementById('letter-continue-btn');
    container.innerText = "";
    actionBtn.classList.add('hide');
    
    let idx = 0;
    function typeChar() {
        if (idx < letterString.length) {
            container.innerText += letterString.charAt(idx);
            idx++;
            // Calculate a speed delta that adjusts dynamically for formatting spacing skips
            let currentDelay = letterString.charAt(idx - 1) === '\n' ? 350 : 45;
            setTimeout(typeChar, currentDelay);
        } else {
            actionBtn.classList.remove('hide');
            container.style.borderRight = 'none';
        }
    }
    setTimeout(typeChar, 400);
}

function goToCakePage() {
    clearInterval(slideshowInterval);
    // Reset structural view nodes of interactive candle
    document.getElementById('cake-candle').classList.remove('blown');
    document.getElementById('blow-btn').removeAttribute('disabled');
    document.getElementById('blow-btn').innerText = "🕯 Blow Candle";
    nextPage(9);
}

function blowCandle() {
    document.getElementById('cake-candle').classList.add('blown');
    document.getElementById('blow-btn').setAttribute('disabled', 'true');
    document.getElementById('blow-btn').innerText = "Blown! 💖";
    
    // Execute particle calculations
    startCanvasFX(8);
    
    setTimeout(() => {
        nextPage(10); // Transitions directly into Outro Screen block
    }, 2500);
}

function restartSurprise() {
    // Wipe canvas states out of memory cache buffers safely
    fxActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Clear UI inputs back to clean state architectures
    document.getElementById('q4-reveal').classList.add('hide');
    document.getElementById('q4-btns').classList.remove('yes', 'hide');
    document.getElementById('q4-title').classList.remove('hide');
    
    nextPage(1);
}

/* ==========================================================================
   ADVANCED PARTICLES ENGINE: CANVAS FX (FIREWORKS & CONFETTI RE-RENDERING)
   ========================================================================== */
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let fxActive = false;
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color, type) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type; // 'firework' or 'confetti'
        this.radius = type === 'firework' ? Math.random() * 3 + 1 : Math.random() * 4 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = type === 'firework' ? Math.random() * 6 + 2 : Math.random() * 3 + 1;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.gravity = type === 'firework' ? 0.12 : 0.06;
        this.opacity = 1;
        this.fade = Math.random() * 0.015 + 0.01;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        if(this.type === 'confetti') {
            this.vx += Math.sin(this.y / 20) * 0.05; // Simulate swaying wind resistance
            this.rotation += this.rotationSpeed;
        }
        this.opacity -= this.fade;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        if(this.type === 'firework') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 1.5);
        }
        ctx.restore();
    }
}

function spawnFireworkBurst() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.5) + canvas.height * 0.15;
    const hues = ['#ffd700', '#aa7c11', '#38bdf8', '#0284c7', '#ffffff', '#f43f5e'];
    const selectedColor = hues[Math.floor(Math.random() * hues.length)];
    for(let i = 0; i < 60; i++) {
        particles.push(new Particle(x, y, selectedColor, 'firework'));
    }
}

function spawnConfettiRain() {
    const colors = ['#ffd700', '#aa7c11', '#38bdf8', '#ffffff', '#e11d48'];
    if(particles.length < 200) {
        for(let i = 0; i < 5; i++) {
            particles.push(new Particle(Math.random() * canvas.width, -10, colors[Math.floor(Math.random() * colors.length)], 'confetti'));
        }
    }
}

function renderFXLoop() {
    if(!fxActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Confetti creation logic
    spawnConfettiRain();
    
    // Dynamic random firework triggers
    if(Math.random() < 0.04) {
        spawnFireworkBurst();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].opacity <= 0) {
            particles.splice(i, 1);
        } else {
            particles[i].draw();
        }
    }
    requestAnimationFrame(renderFXLoop);
}

function startCanvasFX(durationSeconds) {
    fxActive = true;
    particles = [];
    renderFXLoop();
    
    // Clear canvas when duration timer hits ceiling boundaries
    setTimeout(() => {
        fxActive = false;
        setTimeout(() => { ctx.clearRect(0, 0, canvas.width, canvas.height); }, 100);
    }, durationSeconds * 1000);
}

/* ==========================================================================
   FLOATING BALLOONS STRUCTURAL ELEMENT DOM GENERATOR
   ========================================================================== */
function spawnBalloonsLoop(count) {
    const container = document.getElementById('balloon-container');
    container.innerHTML = '';
    const colors = ['rgba(212,175,55,0.7)', 'rgba(56,189,248,0.7)', 'rgba(255,215,0,0.7)', 'rgba(244,63,94,0.7)'];
    
    for(let i=0; i<count; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 95 + '%';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = (Math.random() * 6) + 's';
        balloon.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(balloon);
    }
}
