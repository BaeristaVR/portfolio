// particles.js
export function startParticleGlow(canvas) {
  // animation logic here
}

// particles.js
export function startParticleGlow(canvasElement) {
  const ctx = canvasElement.getContext('2d');
  let particles = [];
  const particleCount = 80;
  const maxDistance = 120;

  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  class Particle {
    constructor() {
      this.x = Math.random() * canvasElement.width;
      this.y = Math.random() * canvasElement.height;
      this.vx = Math.random() * 1.5 - 0.75;
      this.vy = Math.random() * 1.5 - 0.75;
      this.radius = 2;
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x <= 0 || this.x >= canvasElement.width) this.vx *= -1;
      if (this.y <= 0 || this.y >= canvasElement.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowColor = '#0ff';
      ctx.shadowBlur = 10;
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connect(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < maxDistance) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0,255,255,${1 - dist / maxDistance})`;
      ctx.lineWidth = 1;
      ctx.shadowColor = '#0ff';
      ctx.shadowBlur = 6;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    particles.forEach(p => {
      p.move();
      p.draw();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connect(particles[i], particles[j]);
      }
    }
    requestAnimationFrame(animate);
  }

  init();
  animate();

  window.addEventListener('resize', () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    init();
  });
}
