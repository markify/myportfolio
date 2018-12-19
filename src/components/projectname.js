import React, { Component } from 'react'
import lyrics from '../images/project/lyrics.png'
import ecohazard from '../images/project/hazardhome.png'
import cryptod from '../images/project/cryptod.png'
import { FaGithub } from 'react-icons/fa'
import ProjectProp from './projectprop'

export class ProjectName extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectProp
          image={ecohazard}
          tech={null}
          link="http://csc648team07.herokuapp.com/"
          title="Eco Hazard"
          stack="Django, MySQL, HTML5, CSS3, Javascript, JQuery, Python, Responsive Design, Bootstrap"
          date="2018"
          desc="A fullstack web application to solve environmental issues.
          This is a software engineering project at university to simulate a real working environment.
          Practice agile and scrum with software engineer team. I continued this project learning more on fullstack environment with django and front-end design."
        />

        <ProjectProp
          image={cryptod}
          tech={null}
          title="Cryptodate"
          stack="React.js, Responsive Design, Webpack, Node.js"
          date="2018"
          desc="A web application to calculate crypto profits from past to present. I wanted to calculate my profits I made from my bitcoin investment. 
                In the process, I learned a lot of React.js knowledge from concepts to state management."
        />
     
        <ProjectProp
          image={lyrics}
          tech={null}
          link="https://lyricstogo-mark.netlify.com/"
          title="Find Lyrics"
          stack="React.js, Context API, Bootstrap, Responsive Design, Web Service API, Webpack, Node.js"
          icons={<FaGithub />}
          gitlink={'https://github.com/markify/find-lyrics'}
          date="2018"
          desc="Front end application for users to search lyrics for songs. A front end project to learn react.js further and using web api."
        />

        <ProjectProp
          image={cryptod}
          tech={null}
          title="Food Truck SF"
          stack="Swift, Mapkit, iOS, Mobile"
          date="2018"
          desc=" User's are able to easily navigate to their favorite restaurant, select the desired food and add to cart. Use google account to save
          history of orders. App uses redux to keep track of state of items in the cart"
        />

        <ProjectProp
          image={cryptod}
          tech={null}
          title="Food Truck SF"
          stack="Swift, Mapkit, iOS, Mobile"
          date="2018"
          desc="A mobile app made by team of software engineers to make searching for food trucks and their information with ease. 
                This project developed my skills in mobile architecture and building a full scale application."
        />
      </React.Fragment>
    )
  }
}

export default ProjectName
