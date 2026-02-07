import React, { useState } from 'react';
import Confetti from './Confetti';
import './QuestionCard.css';

const QuestionCard = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSelectAnswer = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      const correct = index === question.correctAnswer;
      setIsCorrect(correct);
      setFeedback(true);

      if (correct) {
        setShowCelebration(true);
      }
    }
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
    }
  };

  const feedbackMessage = showFeedback && selectedAnswer !== null
    ? isCorrect
      ? (question.correctFeedback && question.correctFeedback.length
          ? question.correctFeedback[Math.floor(Math.random() * question.correctFeedback.length)]
          : "✨ That's right! You know us so well! 💕")
      : (question.wrongFeedback && question.wrongFeedback.length
          ? question.wrongFeedback[Math.floor(Math.random() * question.wrongFeedback.length)]
          : '')
    : '';

  const setFeedback = (value) => {
    setShowFeedback(value);
  };

  return (
    <div className="question-card">
      {showCelebration && isCorrect && <Confetti type="celebration" speed={0.7} />}
      {showFeedback && !isCorrect && <Confetti type="sad" speed={0.7} />}
      
      {question.imageUrl && (
        <div className="question-image">
          <img
            src={
              // Prepend Vite base URL so assets from `public` or built assets
              // resolve correctly when deployed to GitHub Pages with a subpath
              `${import.meta.env.BASE_URL}${String(question.imageUrl).replace(/^\/+/, '')}`
            }
            alt="Quiz question"
          />
        </div>
      )}
      
      <h2 className="question-text">{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === index 
                ? isCorrect 
                  ? 'correct' 
                  : 'incorrect'
                : ''
            } ${selectedAnswer !== null && index === question.correctAnswer && selectedAnswer !== index ? 'show-correct' : ''}`}
            onClick={() => handleSelectAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
          {feedbackMessage}
          {!isCorrect && <div className="sad-animation">😢</div>}
        </div>
      )}

      {showFeedback && (
        <button className="next-button" onClick={handleNext}>
          Next Question →
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
