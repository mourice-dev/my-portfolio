import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      angle: number;
      speed: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5 ? '#86868b' : '#6e6e73';
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction (antigravity repel)
        const maxDistance = 150;
        
        if (distance < maxDistance && mouseX !== -1000) {
          const force = (maxDistance - distance) / maxDistance;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          this.x -= forceDirectionX * force * 2.5;
          this.y -= forceDirectionY * force * 2.5;
        } else {
          // Return to base smoothly
          if (this.x !== this.baseX) {
            const ddx = this.x - this.baseX;
            this.x -= ddx / 25;
          }
          if (this.y !== this.baseY) {
            const ddy = this.y - this.baseY;
            this.y -= ddy / 25;
          }
        }
        
        // Slow continuous drift
        this.baseX += Math.cos(this.angle) * this.speed;
        this.baseY += Math.sin(this.angle) * this.speed;
        
        // Gentle bounce off edges
        if (this.baseX > canvas!.width) { this.baseX = canvas!.width; this.angle = Math.PI - this.angle; }
        if (this.baseX < 0) { this.baseX = 0; this.angle = Math.PI - this.angle; }
        if (this.baseY > canvas!.height) { this.baseY = canvas!.height; this.angle = -this.angle; }
        if (this.baseY < 0) { this.baseY = 0; this.angle = -this.angle; }
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 7000);
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    resize();

    const connectParticles = () => {
      let maxDistance = 130;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(134, 134, 139, ${opacity * 0.35})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
        
        // Connect nodes to mouse for a magnetic/antigravity feel
        if (mouseX !== -1000) {
          let dx = particles[a].x - mouseX;
          let dy = particles[a].y - mouseY;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance + 20) {
            const opacity = 1 - (distance / (maxDistance + 20));
            ctx!.beginPath();
            // Subtle blue glow for mouse connections
            ctx!.strokeStyle = `rgba(66, 133, 244, ${opacity * 0.5})`; 
            ctx!.lineWidth = 1.2;
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(mouseX, mouseY);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;
