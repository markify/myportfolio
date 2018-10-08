import React, { Component } from 'react'
import ProjectProp from './projectprop'
import foodtruck from '../images/foodtruck.png'
import ordersf from '../images/ordersf.png'
import ecohazard from '../images/ecohazard.png'
import findlyric from '../images/findlyric.png'
import splittank from '../images/splittank.png'
import swift from '../images/swift/swift-original-wordmark.svg'
import java from '../images/java/java-plain-wordmarks.svg'
import reactgoogle from '../images/react/react-original-wordmarksgoogle.svg'
import react from '../images/react/react-original-wordmarks.svg'
import ecohazardsvg from '../images/ecohazard.svg'
import { FaGithub } from 'react-icons/fa'
import './style/projectprop.css'
export class ProjectName extends Component {
  render() {
    return (
      <div className="project" style={{ padding: '20px' }}>
        <h1 className="section-title"> Projects</h1>

        <ProjectProp
          image={foodtruck}
          tech={swift}
          link="https://github.com/TheFootGang/team-final-project"
          title="Food Truck SF (iOS)"
          icons={<FaGithub />}
          gitlink="https://github.com/TheFootGang/team-final-project"
          date="2018"
          desc=" An app for iOS, which provide San francisco food truck informations
          such as location, menu and distance. Users are able to favorite
          their food trucks, calculate distance of the user to foodtruck, and
          much more."
        />
        <ProjectProp
          image={ecohazard}
          tech={ecohazardsvg}
          link="http://csc648team07.herokuapp.com/"
          title="Eco Hazard"
          date="2018"
          desc="A fullstack web application for solving issues in the environment.
        Users shall be able to report information, view, and search
        environmental hazards. While environmental department agency are
        able to view and update status of the environmental report."
        />

        <ProjectProp
          image={findlyric}
          tech={react}
          link="https://lyricstogo-mark.netlify.com/"
          title="Find Lyrics"
          icons={<FaGithub />}
          gitlink={'https://github.com/markify/find-lyrics'}
          date="2017"
          desc="User's shall be able to view top 10 songs in different countries
          and search for lyrics of a song. The song include information such as genre, date, lyrics, artist, and album."
        />

        <ProjectProp
          image={ordersf}
          tech={reactgoogle}
          title="Order SF (in progress)"
          date="2018"
          desc=" User's are able to easily navigate to their favorite restaurant, select the desired food and add to cart. Use google account to save
          history of orders. App uses redux to keep track of state of items in the cart"
        />
        <ProjectProp
          image={splittank}
          tech={java}
          link="https://docs.google.com/document/d/1Y35IgRdC7Ftr5XohxSb3TIRvxC-OrQhTjt_L8Czr-gE/edit?usp=sharing"
          title="2D Splitscreen Tank Game in Java"
          date="2017"
          desc="A full featured 2D two player splitscreen Java game.
           Learned advanced data structures, structured design in Java game, and documentation creation process.
           
          "
        />
      </div>
    )
  }
}

export default ProjectName
