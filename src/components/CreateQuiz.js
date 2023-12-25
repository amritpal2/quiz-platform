// src/components/CreateQuiz.js
import React, { useState } from 'react';

function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', choices: ['', ''], correctAnswer: 0 }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', choices: ['', ''], correctAnswer: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (questionIndex, choiceIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices[choiceIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    // Implement logic to submit quiz to the backend
    console.log({ quizTitle, questions });
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form>
        <label>
          Quiz Title:
          <input type="text" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} />
        </label>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input
                type="text"
                value={question.text}
                onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
              />
            </label>
            <ul>
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>
                  <label>
                    Choice {choiceIndex + 1}:
                    <input
                      type="text"
                      value={choice}
                      onChange={(e) => handleChoiceChange(index, choiceIndex, e.target.value)}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <label>
              Correct Answer:
              <select
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(index, 'correctAnswer', parseInt(e.target.value))}
              >
                {question.choices.map((_, choiceIndex) => (
                  <option key={choiceIndex} value={choiceIndex}>
                    Choice {choiceIndex + 1}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" onClick={() => handleRemoveQuestion(index)}>
              Remove Question
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit Quiz
        </button>
      </form>
    </div>
  );
}

export default CreateQuiz;
