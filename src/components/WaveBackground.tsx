import React, { useEffect, useRef } from 'react';

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;
      
      for(let i=0; i<4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for(let x=0; x<canvas.width; x++) {
          const y = canvas.height / 2 + Math.sin(x * 0.003 + time + i) * 60 * (i+1);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = i % 2 === 0 ? '#4285f4' : '#db4437';
        ctx.globalAlpha = 0.05 + (i * 0.01);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
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
export default WaveBackground;
