import { useEffect, useRef } from 'react';

// --- Particle Class ---
class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  dx = 0;
  dy = 0;
  vx = 0;
  vy = 0;
  friction = 0.95;
  ease = 0.06;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    // 1. Calculate distance from mouse
    this.dx = mouse.x - this.x;
    this.dy = mouse.y - this.y;
    const distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    const forceDirectionX = this.dx / distance;
    const forceDirectionY = this.dy / distance;

    // 2. If mouse is close, apply repulsion force
    if (distance < mouse.radius) {
      const force = (mouse.radius - distance) / mouse.radius;
      this.vx -= forceDirectionX * force * 0.5; // Repulsion strength
      this.vy -= forceDirectionY * force * 0.5;
    }

    // 3. Apply friction to slow down
    this.vx *= this.friction;
    this.vy *= this.friction;

    // 4. Apply easing to return to origin
    this.x += this.vx + (this.originX - this.x) * this.ease;
    this.y += this.vy + (this.originY - this.y) * this.ease;
  }
}

// --- Component ---
export default function AntigravityParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 120 };

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const gap = 25; // Space between particles
      const particleSize = 2;
      const color = '#9ca3af'; // gray-400

      for (let y = gap; y < canvas.height; y += gap) {
        for (let x = gap; x < canvas.width; x += gap) {
          particles.push(new Particle(x, y, particleSize, color));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(mouse);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // --- Setup ---
    resizeCanvas();
    animate();

    // --- Event Listeners ---
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
