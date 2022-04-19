import React from "react";
import mindbook from "../mindbook.png";
import portfolio from "../portfolio.jpeg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { openPopupboxMindbook, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  const openPopupboxMindbook = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={mindbook} alt="Mindbook Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Grabielavrapi/portfolio-project.git")}>https://github.com/Grabielavrapi/portfolio-project.git</a>
      </>
    )
    popupboxConfigMindbook.open({ content })
  }

  const popupboxConfigMindbook = {
    titleBar: {
      enable: true,
      text: "Mindbook clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  
// Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Grabielavrapi/portfolio-project.git")}>https://github.com/Grabielavrapi/portfolio-project.git</a>
      </>
    )
    popupboxConfigMindbook.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-3">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxMindbook}>
            <img className="portfolio-image" src={mindbook} alt="Mindbook Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigMindbook} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      
    </div>
  )
}

export default Portfolio;

