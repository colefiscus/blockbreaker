import React from 'react';
import './TriviaQuestion.css';

const TriviaQuestion = ({ trivia }) => {

  const decodeQuestion = (question) => {
    const text = document.createElement("textarea");
    text.innerHTML = question;
    return text.value;
  }

  const randomizeQuestions = () => {
    let allAnswers = [...trivia.incorrect_answers, trivia.correct_answer]
    let currentIndex = allAnswers.length, tempAnswer, randomIndex
    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      tempAnswer = allAnswers[currentIndex];
      allAnswers[currentIndex] = allAnswers[randomIndex];
      allAnswers[randomIndex] = tempAnswer;
    }
    return allAnswers
  }

  const randomizedAnswers = randomizeQuestions()

  return (
    <section className="triviaQuestion">
      <h2><u>MOVIE TRIVIA</u></h2>
      <p>{decodeQuestion(trivia.question)}</p>
      <form className="triviaAnswers">
        <input type="button" value={randomizedAnswers[0]} />
        <input type="button" value={randomizedAnswers[1]} />
        <input type="button" value={randomizedAnswers[2]} />
        <input type="button" value={randomizedAnswers[3]} />
      </form>
    </section>
  )
}

export default TriviaQuestion;