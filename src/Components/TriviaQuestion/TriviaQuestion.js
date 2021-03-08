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

  const revealTriviaFeedback = () => {
    const answerOne =  document.querySelector('.answerOne');
    const answerTwo = document.querySelector('.answerTwo');
    const answerThree = document.querySelector('.answerThree');
    const answerFour = document.querySelector('.answerFour');
    const answers = [answerOne, answerTwo, answerThree, answerFour]

    answers.forEach(answer => {
      if (answer.value === trivia.correct_answer) {
        answer.classList.add('rightAnswer')
        answer.setAttribute('disabled', true)
      } else {
        answer.classList.add('wrongAnswer')
      }
    })
  }

  const randomizedAnswers = randomizeQuestions()

  return (
    <section className="triviaQuestion">
      <h2><u>MOVIE TRIVIA</u></h2>
      <p>{decodeQuestion(trivia.question)}</p>
      <form className="triviaAnswers">
        <input className="answerOne" type="button" value={randomizedAnswers[0]} onClick={revealTriviaFeedback} />
        <input className="answerTwo" type="button" value={randomizedAnswers[1]} onClick={revealTriviaFeedback} />
        <input className="answerThree" type="button" value={randomizedAnswers[2]} onClick={revealTriviaFeedback} />
        <input className="answerFour" type="button" value={randomizedAnswers[3]} onClick={revealTriviaFeedback} />
      </form>
    </section>
  )
}

export default TriviaQuestion;