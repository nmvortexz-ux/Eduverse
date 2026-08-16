'use client';

import { useEffect, useRef } from 'react';

interface Orb {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const orbs: Orb[] = [
      { x: 0.15, y: 0.2,  size: 380, color: '#7c3aed', speedX: 0.00015, speedY: 0.0001,  opacity: 0.20 },
      { x: 0.85, y: 0.15, size: 320, color: '#06b6d4', speedX: -0.0001, speedY: 0.00015, opacity: 0.18 },
      { x: 0.5,  y: 0.75, size: 280, color: '#a855f7', speedX: 0.0001,  speedY: -0.0001, opacity: 0.15 },
      { x: 0.8,  y: 0.7,  size: 200, color: '#ec4899', speedX: -0.00015,speedY: -0.0001, opacity: 0.12 },
      { x: 0.2,  y: 0.8,  size: 240, color: '#06b6d4', speedX: 0.00012, speedY: 0.00008, opacity: 0.14 },
    ];

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep background gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#050510');
      grad.addColorStop(0.5, '#0a0520');
      grad.addColorStop(1, '#050510');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated orbs
      orbs.forEach((orb) => {
        const x = (Math.sin(t * orb.speedX * 1000) * 0.1 + orb.x) * canvas.width;
        const y = (Math.cos(t * orb.speedY * 1000) * 0.1 + orb.y) * canvas.height;
        const radialGrad = ctx.createRadialGradient(x, y, 0, x, y, orb.size);
        radialGrad.addColorStop(0, `${orb.color}55`);
        radialGrad.addColorStop(0.5, `${orb.color}22`);
        radialGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(x, y, orb.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let gx = 0; gx < canvas.width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, canvas.height);
        ctx.stroke();
      }
      for (let gy = 0; gy < canvas.height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(canvas.width, gy);
        ctx.stroke();
      }

      t += 16;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
