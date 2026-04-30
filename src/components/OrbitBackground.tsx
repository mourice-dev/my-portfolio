import React, { useEffect, useRef } from 'react';

const OrbitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;
      
      // Smoothly interpolate center towards mouse
      const targetX = mouse.x !== -1000 ? mouse.x : canvas.width / 2;
      const targetY = mouse.y !== -1000 ? mouse.y : canvas.height / 2;
      
      const centerX = targetX;
      const centerY = targetY;

      for(let i=1; i<=6; i++) {
        const radius = i * 100;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#db4437';
        ctx.globalAlpha = 0.03;
        ctx.lineWidth = 1;
        ctx.stroke();

        const x = centerX + Math.cos(time * (7-i) * 0.1) * radius;
        const y = centerY + Math.sin(time * (7-i) * 0.1) * radius;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#4285f4';
        ctx.globalAlpha = 0.3;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }} />;
};
export default OrbitBackground;
