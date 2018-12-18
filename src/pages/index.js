import React from 'react'
import '../components/styles/index.css'
import '../components/styles/mouse.css'
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
        <p>  I'm a software engineer based in San Francisco. Currently working as a freelance front end developer and flutter mobile developer. </p>
        </Fade>
        <Link to="/about/" style={{textDecoration:'none'}}>
        <a className="index-btn"> Get in Touch </a>
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
              <h1> Tech and Skills </h1>
              <h3> I'm always learning new modern technologies. Right now, I am developing a web application using serverless architecture and React.</h3>
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
            <div className="col">
              <MdFavoriteBorder style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}}/>
              <h2>Passionate</h2>
              <p>Big believer in the fact that the greatest work is done by passionate people.</p>
            </div >
            <div className="col">
              <MdBugReport style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}} />
              <h2>Problem Solver</h2>
              <p>Always excited to push my limits and face new obstacles.</p>
            </div >
            <div className="col">
              <MdLibraryBooks style={{fontSize:'80px', color: 'rgb(136, 146, 176)'}} />
              <h2>Quick Learner</h2>
              <p>Confident in my ability to learn something new and put it into production.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default IndexPage
