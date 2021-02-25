import React from 'react';
import './TriviaQuestion.css';

const TriviaQuestion = ({ trivia }) => {

  return (
    <section className="triviaQuestion">
      <h2><u>MOVIE TRIVIA</u></h2>
      <p>{trivia.question}</p>
      <form className="triviaAnswers">
        <input type="button" value={trivia.incorrect_answers[0]} />
        <input type="button" value={trivia.incorrect_answers[1]} />
        <input type="button" value={trivia.incorrect_answers[2]} />
        <input type="button" value={trivia.correct_answer} />
      </form>
    </section>
  )
}

export default TriviaQuestion;