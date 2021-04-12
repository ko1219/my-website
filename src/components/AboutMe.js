import React from 'react'
import author from '../me.jpg'

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
          <img className="profile-img" src={author} alt="author..."></img>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          Hello! I am Koichi. I'm 4th years college student. I have been developing  website and webapp for 1 year. I'm Full-Stack Web Developer. Technologies I use is MJR3(Mysql, JavaScript, Ruby, Ruby on Rails, React).

          I learn 2 languages in my university. I specialize in spanish. I have been to Spain for study abroad. I can speak Spanish better than English. So I created Spanish society and I teach them.

          I'm interested in React, TypeScript and Next.js so, I learn them every day using Udemy. I created my portfolios, Please watch them and if you any feedback, contact me!!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
