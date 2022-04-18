import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          Hello, I’m Grabiela, and I’m passionate about building things for the web.
        I started my journey as a developer when I was a eighteen.
        I found a tutorial on how to use Visual Basic to display a phone on my computer screen, and once that happened, I was completely hooked to the world of computers.
        In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all, by building simple pages using WordPress.
        Lately, I’ve discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio.
        I’m now looking for a junior dev position to finally kick start my career and learn among professionals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe