import React, { useEffect, useRef } from 'react';
import './Confetti.css';

const Confetti = ({ type = 'celebration', speed = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const celebrationColors = ['#FF6B9D', '#FFC75F', '#845EC2', '#D65DB1', '#FF9671', '#00D9FF'];
    const sadColors = ['#A9A9A9', '#808080', '#696969', '#555555'];
    const colors = type === 'celebration' ? celebrationColors : sadColors;
    const particleCount = type === 'celebration' ? 200 : 100;

    // Create confetti pieces
    for (let i = 0; i < particleCount; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: type === 'celebration' ? Math.random() * canvas.height - canvas.height : Math.random() * canvas.height * 0.3,
        width: Math.random() * 15 + 5,
        height: Math.random() * 15 + 5,
        vx: (Math.random() - 0.5) * 8 * speed,
        vy: type === 'celebration' ? (Math.random() * 8 + 4) * speed : (Math.random() * 3 + 1) * speed,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiPieces.forEach((piece) => {
        piece.y += piece.vy;
        piece.x += piece.vx;
        piece.vx *= 0.99;
        piece.vy += 0.2 * speed; // gravity
        piece.rotation += piece.rotationSpeed;
        piece.opacity -= 0.01 * speed;

        ctx.save();
        ctx.globalAlpha = piece.opacity;
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
        ctx.restore();
      });

      if (confettiPieces.some(p => p.opacity > 0)) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas"></canvas>;
};

export default Confetti;
