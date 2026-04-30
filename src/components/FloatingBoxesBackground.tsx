import React, { useEffect, useRef } from 'react';

const FloatingBoxesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let boxes: {x: number, y: number, size: number, speed: number, rot: number, rotSpeed: number}[] = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      boxes = [];
      const count = Math.floor(canvas.width / 50);
      for(let i=0; i<count; i++) {
        boxes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 20,
          speed: Math.random() * 0.8 + 0.2,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.01
        });
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      boxes.forEach(b => {
        b.y -= b.speed;
        b.rot += b.rotSpeed;
        if(b.y < -100) {
          b.y = canvas.height + 100;
          b.x = Math.random() * canvas.width;
        }
        
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.strokeStyle = '#86868b';
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 1;
        ctx.strokeRect(-b.size/2, -b.size/2, b.size, b.size);
        ctx.restore();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }} />;
};
export default FloatingBoxesBackground;
