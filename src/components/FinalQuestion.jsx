import React, { useState, useRef, useEffect } from 'react';
import './FinalQuestion.css';

const FinalQuestion = ({ onAnswer }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!noButtonRef.current || isMoving) return;

    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distX = mousePos.x - buttonCenterX;
    const distY = mousePos.y - buttonCenterY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    // If mouse is too close, move the button away to a random position
    if (distance < 100) {
      const randomX = (Math.random() - 0.5) * window.innerWidth * 0.6;
      const randomY = (Math.random() - 0.5) * window.innerHeight * 0.4;
      
      setIsMoving(true);
      setNoButtonPos({ x: randomX, y: randomY });
      
      // Allow movement again after animation completes
      setTimeout(() => setIsMoving(false), 300);
    }
  }, [mousePos, isMoving]);

  return (
    <div className="final-question-container" ref={containerRef}>
      <div className="final-question-content">
        <div className="heart-animation">💕</div>
        <h1 className="final-question">Will you marry me again?</h1>
        <p className="final-subtitle">Because you make every day feel like our wedding day! ✨</p>

        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={() => onAnswer('yes')}
          >
            Yes! 💕
          </button>

          <button
            ref={noButtonRef}
            className="no-button"
            style={{
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              transition: isMoving ? 'transform 0.3s ease-out' : 'none'
            }}
          >
            No 😅
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalQuestion;
