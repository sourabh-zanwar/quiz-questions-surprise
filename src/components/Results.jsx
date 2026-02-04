import React, { useEffect, useState } from 'react';
import Confetti from './Confetti';
import quizData from '../data/quizData.json';
import './Results.css';

const Results = ({ score, totalQuestions }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const percentage = Math.round((score / totalQuestions) * 100);

  let resultMessage = '';
  let resultTitle = '';

  if (percentage === 100) {
    resultTitle = '🎉 PERFECT SCORE! 🎉';
    resultMessage = quizData.summaryMessages.perfect;
  } else if (percentage >= 87) {
    resultTitle = '🌟 EXCELLENT! 🌟';
    resultMessage = quizData.summaryMessages.excellent;
  } else if (percentage >= 75) {
    resultTitle = '💕 GREAT JOB! 💕';
    resultMessage = quizData.summaryMessages.great;
  } else if (percentage >= 62) {
    resultTitle = '😊 GOOD TRY! 😊';
    resultMessage = quizData.summaryMessages.good;
  } else if (percentage >= 50) {
    resultTitle = '🤔 NOT BAD! 🤔';
    resultMessage = quizData.summaryMessages.okay;
  } else {
    resultTitle = '😅 OOPS! 😅';
    resultMessage = quizData.summaryMessages.needsWork;
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="results-container">
      {showConfetti && <Confetti />}
      
      <div className="results-content">
        <h1 className="results-title">{resultTitle}</h1>
        
        <div className="score-display">
          <div className="score-circle" style={{ ['--pct']: `${percentage}%` }}>
            <span className="score-number">{score}</span>
            <span className="score-total">/ {totalQuestions}</span>
          </div>
          <div className="percentage">{percentage}%</div>
        </div>

        <p className="results-message">{resultMessage}</p>

        <div className="closing-message">
          <p>I love you so much, Aditi! ❤️</p>
          <p>Happy Anniversary! 💑</p>
          <p>Here's to many more years together! 🥂</p>
        </div>

        <button 
          className="restart-button"
          onClick={() => window.location.reload()}
        >
          Take Quiz Again 🔄
        </button>
      </div>
    </div>
  );
};

export default Results;
