// ===== Partículas =====
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<80;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.7,
    dy: (Math.random()-0.5)*0.7,
    alpha: Math.random()
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(191,170,253,${p.alpha})`;
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== Cards flutuantes =====
const floatCards = document.querySelectorAll('.float-card');
let t0 = Date.now();

floatCards.forEach((card, i)=>{
  card.dataset.index = i;
});

function animateCards(){
  const t = Date.now() - t0;
  floatCards.forEach(card=>{
    const i = parseInt(card.dataset.index);
    const xBase = 0;
    const yBase = 0;
    const xAmp = 5 + i*2;
    const yAmp = 5 + i*2;
    const xSpeed = 0.002 + i*0.0005;
    const ySpeed = 0.0015 + i*0.0005;
    card.style.transform = `translate(${xAmp*Math.sin(t*xSpeed)}px, ${yAmp*Math.sin(t*ySpeed)}px)`;
  });
  requestAnimationFrame(animateCards);
}
animateCards();
