import React from 'react'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'
import { MdBugReport, MdFavoriteBorder, MdLibraryBooks} from "react-icons/md";
import Scroll from '../components/scroll'

const IndexPage = () => (

  <Layout>
    <div className="index">
      <section className="intro container">
      <div className="info ">
        <Fade down>
        <h1> Hi, <br></br>I am Mark Soriano </h1>
        <h3> I make excellent modern web and mobile applications.</h3>
        <p>  I'm a developer based in San Francisco. Currently working as a freelance front end web developer and mobile developer. </p>
        </Fade>
        <Link to="/about/" style={{textDecoration:'none'}}>
        <button className="index-btn" href> Get in Touch </button>
        </Link>
      </div>
      <div className="hero-img">
        {/*<img src="" alt="logo"></img>*/}
      </div>
      <div className='scroll-wrap'>
        <div className="scrolling">
        </div>
      </div>
      </section>
      <section className="skills">
        <div className="top-tab">
        </div>
        <div className="skill-info">
          <div className="contain container">
            <Fade up duration="2800">
            <h1> Tech and Skills </h1>  
            <h3> I'm always learning new modern technologies. Right now, I am developing a web application using serverless architecture and React.</h3>
            </Fade>
          </div>
        </div>
        <Scroll/>
      </section>
      <section className="work">
        <div className="top-tab">
        </div>
        <div className="work-tab container">
          <div className="with"> Why work with me?</div>
          <div className="normal"> 
            <Fade left duration="1800">
            <div className="col">
              <MdFavoriteBorder style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}}/>
              <h2>Passionate</h2>
              <p>Big believer in the fact that the best work is created by passionate people.</p>
            </div >
            </Fade>
            <div className="col">
              <MdBugReport style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}} />
              <h2>Problem Solver</h2>
              <p>Always excited to push my limits and face new obstacles.</p>
            </div >
            <Fade right duration="1800">
            <div className="col">
              <MdLibraryBooks style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}} />
              <h2>Quick Learner</h2>
              <p>Confident in my ability to learn something new and put it into production.</p>
            </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
