import React, { Component } from 'react'
import ProjectProp from './projectprop'
import foodtruck from '../images/foodtruck.png'
import ordersf from '../images/ordersf.png'
import ecohazard from '../images/ecohazard.png'
import findlyric from '../images/findlyric.png'
import splittank from '../images/splittank.png'
import './projectprop.css'
export class ProjectName extends Component {
  render() {
    return (
      <div className="project" style={{ padding: '20px' }}>
        <h1 className="section-title"> Projects</h1>

        <ProjectProp
          image={foodtruck}
          link="https://www.google.com"
          title="Food Truck SF (iOS)"
          date="2018"
          desc=" An app for iOS, which provide San francisco food truck informations
          such as location, menu and distance. Users are able to favorite
          their food trucks, calculate distance of user to foodtruck, and
          much more."
        />
        <ProjectProp
          image={ecohazard}
          link="https://www.google.com"
          title="Eco Hazard"
          date="2018"
          desc="A fullstack web application for solving issues in the environment.
        Users shall be able to report information, view, and search
        environmental hazards. While environmental department agency are
        able to view and update status of the environmental report."
        />

        <ProjectProp
          image={findlyric}
          link="https://www.google.com"
          title="Find Lyrics"
          date="2017"
          desc="User's shall be able to view top 10 songs in different countries
          and search for lyrics of a song. The song include information such as genre, date, lyrics, artist, and album."
        />

        <ProjectProp
          image={ordersf}
          link="https://www.google.com"
          title="Order SF"
          date="2018"
          desc=" User's are able to easily navigate to their favorite restaurant, select the desired food and add to cart. The selected item will show up in the screen and
          will automatically call the store to order the food."
        />
        <ProjectProp
          image={splittank}
          link="https://www.google.com"
          title="2D Splitscreen Tank Game in Java"
          date="2017"
          desc="A full featured 2D 2 player splitscreen Java game.
           Learned advanced data structures and structured design in Java game.
          "
        />
      </div>
    )
  }
}

export default ProjectName
