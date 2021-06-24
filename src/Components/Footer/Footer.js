import React from 'react';
import './Footer.css';
import quotes from '../../Data/movieQuotes';
import liLogo from '../../Images/LI-In-Bug.png';
import ghLogo from '../../Images/GitHub_Logo_White.png';

const Footer = () => {

  const randomNum = Math.floor(Math.random() * 5)

  return (
    <footer>
      <div className="movieQuote">
        <p>{quotes[randomNum]}</p>
      </div>
      <div className="pdIcons">
      <a href="https://github.com/colefiscus">
          <img className="ghLogo" src={ghLogo} alt='GitHub logo' />
      </a>
        <a href="https://www.linkedin.com/in/colefiscus/">
          <img className="liLogo" src={liLogo} alt='LinkedIn logo' />
        </a>
      </div>
    </footer>
  )
}

export default Footer;