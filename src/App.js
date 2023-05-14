import './App.css';
import { useState, useEffect } from 'react';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import phoneImage from "./asssets/phone.webp";
import foodImage from "./asssets/food.webp"
import healthImage from "./asssets/health.webp"
import stockImage from "./asssets/stock.webp"
import gameImage from "./asssets/game.webp"
import computerImage from "./asssets/computer.webp"



function App() {
  const portfolio = [
    { name: "LiftMate", image: healthImage },
    { name: "Calory Counter", image: foodImage },
    { name: "Group Messages", image: phoneImage },
    { name: "Stock Trading", image: stockImage},
    { name: "Bloodfire - Game", image: gameImage },
    { name: "LAN Ping", image: computerImage },

  ];
  const [word, setWord] = useState(0);

  const words =  [
    "Developer",
    "Full Stack Developer",
    "Coder",
    "Programmer",
    "Software Engineer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Innovator",
    "Learner",
    "Technology Advocate",
    "Team Player",
    "Creative Thinker",
    "Solution Architect",
    "Tech Consultant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="app">
      <div className="container">
        <div className='authortext'>
          Eric Poole a 
        </div>
        <div className="scroll-wheel">
          <div>{words[word]}</div>
        </div>
      </div>

      <div className='mainContainer'>
        {portfolio.map((item, index) => (
          <div key={index} className='innerContainer'>
            <div className='overlayText'>{item.name}</div>
            <img src={item.image} alt="portfolio Picture" className='portImg'/>
          </div>
        ))}
      </div>

      <div className='logoContainer'>

        <a href="https://www.linkedin.com/in/eric-m-poole/" className='logo'>
          <FontAwesomeIcon icon={faLinkedin} className='logoimg' />
        </a>

        <a href="https://github.com/EricAsMyself" className='logo'>
          <FontAwesomeIcon icon={faGithub} className='logoimg' />
        </a>

      </div>
    </div>
  );
}

export default App;

