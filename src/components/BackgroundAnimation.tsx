"use client";

import React, { useRef, useEffect } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Set canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles array
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(width * height / 20000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: '#9b87f5',
          alpha: Math.random() * 0.6 + 0.1
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Check boundaries
        if (particle.x < 0 || particle.x > width) particle.speedX = -particle.speedX;
        if (particle.y < 0 || particle.y > height) particle.speedY = -particle.speedY;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${particle.alpha})`;
        ctx.fill();
        
        // Connect particles
        connectParticles(particle, i);
      });
    };

    // Connect nearby particles with lines
    const connectParticles = (p: typeof particles[0], index: number) => {
      const maxDistance = 100;
      
      for (let i = index + 1; i < particles.length; i++) {
        const dx = p.x - particles[i].x;
        const dy = p.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(155, 135, 245, ${0.1 * (1 - distance / maxDistance)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};

export default BackgroundAnimation;
