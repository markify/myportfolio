import React from 'react'
import '../components/styles/index.css'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'

const IndexPage = () => (
  <Layout>
    <div className="index">
      <section className="intro">
     
      <div className="info">
        <Fade down>
        <h1> Hi, <br></br>I am Mark </h1>
        <h3> I make excellent modern web and mobile applications.</h3>
        <p>  I'm a software engineer based in San Francisco. Currently working as a freelance front end developer and flutter mobile developer. </p>
        </Fade>
      
        <a className="index-btn"> Get in Touch </a>
     
      </div>
      
      <div className="">

      </div>
      <div className="">
      
      </div>
      </section>
      <section className="skills">
        <div className="top-tab">
        </div>
        <div className="skill-tab">
        <h1> Here are some technologies I use.</h1>
        <h3> I'm always learning new modern technologies. Right now, I am developing a web application for combat sports, 
            boxing and mma using serverless architecture and React.</h3>
        </div>
        <div className="skill-scroll">

        </div>
      </section>

      <section className="work">
        <div className="top-tab">
        </div>
        <div className="work-tab">
          <div className="with"> Why work with me</div>
          <div className="col">
            Passionate
          </div >
          <div className="col">
            Adaptable
          </div >
          <div className="col">
            Learner
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default IndexPage
