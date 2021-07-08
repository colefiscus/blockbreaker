import React from 'react';
import './TriviaQuestion.css';

const TriviaQuestion = ({ trivia }) => {

  // Trivia questions from API come in with encoded symbols - must be decoded for UX.
  const decodeQuestion = (question) => {
    const text = document.createElement("textarea");
    text.innerHTML = question;
    return text.value;
  }

  // Trivia answers must be randomized otherwise they'll show up the same on every load.
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

  // Reveals button to reload page for new trivia question after selection is made.
  const revealTriviaRefresh = () => {
    const triviaButton = document.querySelector('.triviaRefreshButton');
    triviaButton.classList.remove('hidden');
  }

  // Reveals correct answer after selection is made.
  const revealTriviaFeedback = () => {
    const answerOne =  document.querySelector('.answerOne');
    const answerTwo = document.querySelector('.answerTwo');
    const answerThree = document.querySelector('.answerThree');
    const answerFour = document.querySelector('.answerFour');
    const answers = [answerOne, answerTwo, answerThree, answerFour]

    answers.forEach(answer => {
      if (answer.value === trivia.correct_answer) {
        answer.classList.add('rightAnswer')
      } else {
        answer.classList.add('wrongAnswer')
      }
    })
    revealTriviaRefresh();
  }

  // Reloads page for new trivia question.
  const refreshTrivia = () => {
    window.location.reload();
  }

  const randomizedAnswers = randomizeQuestions()

  return (
    <section className="triviaQuestion">
      <h2><u>MOVIE TRIVIA</u></h2>
      <p>{decodeQuestion(trivia.question)}</p>
      <form className="triviaAnswers">
        <input className="answerOne" type="button" value={decodeQuestion(randomizedAnswers[0])} onClick={revealTriviaFeedback} />
        <input className="answerTwo" type="button" value={decodeQuestion(randomizedAnswers[1])} onClick={revealTriviaFeedback} />
        <input className="answerThree" type="button" value={decodeQuestion(randomizedAnswers[2])} onClick={revealTriviaFeedback} />
        <input className="answerFour" type="button" value={decodeQuestion(randomizedAnswers[3])} onClick={revealTriviaFeedback} />
      </form>
      <button className='triviaRefreshButton hidden' onClick={() => refreshTrivia()}>REFRESH</button>
    </section>
  )
}

export default TriviaQuestion;