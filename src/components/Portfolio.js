import React from 'react';
import chatApp from '../images/chat-app.png';
import choiceClass from '../images/choice-class.png';
import furimaApp from '../images/furima-app.png';
import protoSpace from '../images/proto-space.png';
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
  const openPopupboxChoiceClass = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={choiceClass} alt="Review Tokoha university's curriculums application..."/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos amet perspiciatis nihil alias quis temporibus asperiores. Pariatur, quam laudantium?</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ko1219/choice-class")}>https://github.com/ko1219/choice-class</a>
      </>
    )
      PopupboxManager.open({ content })
  }

  const popupboxConfigChoiceClass = {
    titleBar: {
      enable: true,
      text: "Review Tokoha university's curriculums application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // FurimaApp
  const openPopupboxFurimaApp = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={furimaApp} alt="Free market application..."/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos amet perspiciatis nihil alias quis temporibus asperiores. Pariatur, quam laudantium?</p>
      <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://furima-34865.herokuapp.com/", "_blank")}>https://furima-34865.herokuapp.com/</a>
      <br/>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ko1219/furima-34865")}>https://github.com/ko1219/furima-34865</a>
      </>
    )
      PopupboxManager.open({ content })
  }

  const popupboxConfigFurimaApp = {
    titleBar: {
      enable: true,
      text: "Free market application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Protospace
  const openPopupboxProtoSpace = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={protoSpace} alt="Upload your portfolio..."/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos amet perspiciatis nihil alias quis temporibus asperiores. Pariatur, quam laudantium?</p>
      <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://protospace-34865.herokuapp.com/", "_blank")}>https://protospace-34865.herokuapp.com/</a>
      <br/>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ko1219/protospace-34865")}>https://github.com/ko1219/protospace-34865</a>
      </>
    )
      PopupboxManager.open({ content })
  }

  const popupboxConfigProtoSpace = {
    titleBar: {
      enable: true,
      text: "Upload your portfolio."
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
          <div className="portfolio-image-box" onClick={openPopupboxChoiceClass}>
            <img className="portfolio-image " src={choiceClass} alt="Review curriculums application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFurimaApp}>
            <img className="portfolio-image " src={furimaApp} alt="Free market application..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxProtoSpace}>
            <img className="portfolio-image " src={protoSpace} alt="Upload your portfolio..."/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigChatApp}/>
      <PopupboxContainer {...popupboxConfigChoiceClass}/>
      <PopupboxContainer {...popupboxConfigFurimaApp}/>
      <PopupboxContainer {...popupboxConfigProtoSpace}/>
    </div>
  )
}

export default Portfolio
