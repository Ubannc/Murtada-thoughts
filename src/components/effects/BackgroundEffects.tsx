import React, { useEffect, useRef } from 'react';

const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    class LiquidShape {
      x: number;
      y: number;
      radius: number;
      angle: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 150 + 100;
        this.angle = 0;
        this.speed = Math.random() * 0.01 + 0.005; // Slower speed
        this.opacity = Math.random() * 0.15 + 0.05; // More subtle opacity
      }

      update() {
        this.angle += this.speed;
        this.x += Math.sin(this.angle) * 1.5; // Reduced movement
        this.y += Math.cos(this.angle) * 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 242, 247, ${this.opacity})`;
        ctx.filter = 'blur(80px)'; // Increased blur for mesomorphic effect
        ctx.fill();
        ctx.filter = 'none';
      }
    }

    const shapes: LiquidShape[] = Array(4).fill(null).map(() => new LiquidShape());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default BackgroundEffects;