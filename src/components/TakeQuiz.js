// src/components/TakeQuiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TakeQuiz({ match }) {
  const quizId = match.params.quizId;
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        // Fetch quiz details based on the quizId
        const response = await axios.get(`http://your-backend-url/api/quizzes/${quizId}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
        // Handle error (e.g., show an error message to the user)
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleAnswerChange = (questionIndex, choiceIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = choiceIndex;
    setUserAnswers(updatedUserAnswers);
  };

  const handleSubmit = async () => {
    try {
      // Implement logic to submit user answers to the backend
      const response = await axios.post(`http://your-backend-url/api/quizzes/submit/${quizId}`, {
        userAnswers,
      });
      console.log(response.data); // Handle the response (e.g., show score to the user)
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Take Quiz</h2>
      <h3>{quiz.title}</h3>
      <form>
        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <p>{question.text}</p>
            <ul>
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={choiceIndex}
                      checked={userAnswers[questionIndex] === choiceIndex}
                      onChange={() => handleAnswerChange(questionIndex, choiceIndex)}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit Quiz
        </button>
      </form>
    </div>
  );
}

export default TakeQuiz;
