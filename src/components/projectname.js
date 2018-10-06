import React, { Component } from 'react'
import ProjectProp from './projectprop'
import foodtruck from '../images/foodtruck.png'
import ecologo from '../images/ecologo.png'
import './projectprop.css'
export class ProjectName extends Component {
  render() {
    return (
      <div className="project" style={{ padding: '20px' }}>
        <h1> Projects</h1>

        <ProjectProp
          image={foodtruck}
          link="https://www.google.com"
          title="Food Truck SF"
          date="2017"
          desc=" An app for iOS, which provide San francisco food truck informations
          such as location, menu and distance. Users are able to favorite
          their food trucks, calculate distance of user to foodtruck, and
          much more."
        />
        <ProjectProp
          image={ecologo}
          link="https://www.google.com"
          title="Eco Hazard"
          date="2017"
          desc="A fullstack web application for solving issues in the environment.
        Users shall be able to report information, view, and search
        environmental hazards. While environmental department agency are
        able to view and update status of the environmental report."
        />

        <ProjectProp
          image={ecologo}
          link="https://www.google.com"
          title="Find Lyrics"
          date="2017"
          desc="User's shall be able to view top 10 songs in different countries
          and search for lyrics of a song. The song include information such as genre, date, lyrics, artist, and album."
        />

        <ProjectProp
          image={foodtruck}
          link="https://www.google.com"
          title="Order SF"
          date="2017"
          desc=" User's are able to easily navigate to their favorite restaurant, select the desired food and add to cart. The selected item will show up in the screen and
          will automatically call the store to order the food."
        />
        <ProjectProp
          image={ecologo}
          link="https://www.google.com"
          title="Find Lyrics"
          date="2017"
          desc="User's shall be able to view top 10 songs in different countries
          and search for lyrics of a song. The song include information such as genre, date, lyrics, artist, and album."
        />
      </div>
    )
  }
}

export default ProjectName
