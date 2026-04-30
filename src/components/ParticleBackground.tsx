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
      distance: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 6 + 2; // Increased size for visibility
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        // Mostly blue-ish, some red-ish
        this.color = Math.random() > 0.8 ? '#db4437' : '#4285f4';
        this.distance = Math.random() * 50 + 20;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        // Point towards the center or mouse
        let rotAngle = Math.atan2(mouseY - this.y, mouseX - this.x);
        // If mouse is far, point towards center of screen
        if (mouseX === -1000) {
           rotAngle = Math.atan2(canvas!.height/2 - this.y, canvas!.width/2 - this.x);
        }
        
        ctx.rotate(rotAngle);
        ctx.fillStyle = this.color;
        // Draw a small dash
        ctx.globalAlpha = Math.max(0.1, 1 - Math.abs(this.x - canvas!.width/2) / (canvas!.width/2));
        ctx.fillRect(-this.size, -1, this.size * 2, 2);
        ctx.restore();
      }

      update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction (repel)
        const maxDistance = 200;
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        const force = (maxDistance - distance) / maxDistance;
        
        if (distance < maxDistance && mouseX !== -1000) {
          this.x -= forceDirectionX * force * 5;
          this.y -= forceDirectionY * force * 5;
        } else {
          // Return to base
          if (this.x !== this.baseX) {
            const ddx = this.x - this.baseX;
            this.x -= ddx / 20;
          }
          if (this.y !== this.baseY) {
            const ddy = this.y - this.baseY;
            this.y -= ddy / 20;
          }
        }
        
        // Slow drift
        this.baseX += Math.cos(this.angle) * this.speed;
        this.baseY += Math.sin(this.angle) * this.speed;
        
        // Wrap around
        if (this.baseX > canvas!.width + 50) this.baseX = -50;
        if (this.baseX < -50) this.baseX = canvas!.width + 50;
        if (this.baseY > canvas!.height + 50) this.baseY = -50;
        if (this.baseY < -50) this.baseY = canvas!.height + 50;
      }
    }

    const initParticles = () => {
      particles = [];
      // Increase particle count by dividing by a smaller number
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < numberOfParticles; i++) {
        // Distribute evenly across the whole screen
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
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
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;
