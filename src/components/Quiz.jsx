import React, { useState } from 'react';
import quizData from '../data/quizData.json';
import QuestionCard from './QuestionCard';
import FinalQuestion from './FinalQuestion';
import Results from './Results';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelect = (answerIndex) => {
    const question = quizData.questions[currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswers([...selectedAnswers, {
      questionId: question.id,
      selected: answerIndex,
      correct: question.correctAnswer,
      isCorrect
    }]);

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Move to final question
        setCurrentQuestion(quizData.questions.length);
      }
    }, 500);
  };

  const handleFinalAnswer = (answer) => {
    if (answer === 'yes') {
      setShowResults(true);
    } else {
      // Show fun message and ask again
      alert("Try again! 😉");
    }
  };

  if (showResults) {
    return <Results score={score} totalQuestions={quizData.questions.length} />;
  }

  if (currentQuestion < quizData.questions.length) {
    const question = quizData.questions[currentQuestion];
    return (
      <div className="quiz-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / (quizData.questions.length + 1)) * 100}%` }}
          ></div>
        </div>
        <div className="question-counter">
          Question {currentQuestion + 1} of {quizData.questions.length}
        </div>
        <QuestionCard 
          key={question.id}
          question={question} 
          onAnswer={handleAnswerSelect}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.questions.length}
        />
      </div>
    );
  } else {
    return (
      <div className="quiz-container">
        <FinalQuestion onAnswer={handleFinalAnswer} />
      </div>
    );
  }
};

export default Quiz;
