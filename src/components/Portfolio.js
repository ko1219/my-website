import React from 'react';
import chatApp from '../images/chat-app.png';
import choiceClass from '../images/choice-class.png';
import furimaApp from '../images/furima-app.png';
import pictweet from '../images/pictweet.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Portfolio = () => {

// ChatApp
  const openPopupboxChatApp = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={chatApp} alt="Chat application..."/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos amet perspiciatis nihil alias quis temporibus asperiores. Pariatur, quam laudantium?</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ko1219/chat-app")}>https://github.com/ko1219/chat-app</a>
      </>
    )
      PopupboxManager.open({ content })
  }

  const popupboxConfigChatApp = {
    titleBar: {
      enable: true,
      text: "Chat application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // ChoiceClass App
  const openPopupboxChatApp = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={choiceClass} alt="Review curriculums application..."/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos amet perspiciatis nihil alias quis temporibus asperiores. Pariatur, quam laudantium?</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ko1219/chat-app")}>https://github.com/ko1219/chat-app</a>
      </>
    )
      PopupboxManager.open({ content })
  }

  const popupboxConfigChatApp = {
    titleBar: {
      enable: true,
      text: "Chat application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxChatApp}>
            <img className="portfolio-image " src={chatApp} alt="Chat application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img className="portfolio-image " src={choiceClass} alt="Review curriculums application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img className="portfolio-image " src={furimaApp} alt="Free market application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img className="portfolio-image " src={pictweet} alt="Tweet application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigChatApp}/>
    </div>
  )
}

export default Portfolio
