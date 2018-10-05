import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaNewspaper } from 'react-icons/fa'
import Layout from '../components/layout'
import Image from '../components/image'
import '../components/image'
import '../components/index.css'

const Project = () => (
  <Layout>
    <div>
      <div className="project" style={{ padding: '20px' }}>
        <h1> Projects</h1>
        <div className="topsect">
          <div className="left">
            <div className="top">a</div>
            <FaGithub />
            <FaNewspaper />
          </div>
          <div className="right">
            <h4>Eco Hazards</h4>
            <p>2017</p>
            <p>
              A fullstack web application for solving issues in the environment.
              Users shall be able to report information, view, and search
              environmental hazards. While environmental department agency are
              able to view and update status of the environmental report.
            </p>
          </div>
        </div>

        <div className="topsect">
          <div className="left">
            <div className="top">a</div>
            <FaGithub />
          </div>
          <div className="right">
            <h4>SF Food Trucks</h4>
            <p>2017</p>
            <p>
              An app for iOS which provide san francisco food truck informations
              such as location, menu and distance. Users are able to favorite
              their food trucks, calculate distance of user to foodtruck, and
              much more.
            </p>
          </div>
        </div>

        <div className="topsect">
          <div className="left">
            <div className="top">
              <img
                src="https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg"
                alt=""
                style={{ width: '300px' }}
              />
            </div>
            <FaGithub />
          </div>
          <div className="right">
            <h4>Find Lyrics</h4>
            <p>2017</p>
            <p>
              User's shall be able to view top 10 songs in different countries
              and search for lyrics of a song.
            </p>
          </div>
        </div>

        <div className="topsect">
          <div className="left">
            <div className="top">
              <img
                src="https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg"
                alt=""
                style={{ width: '300px' }}
              />
            </div>
            <FaGithub />
          </div>
          <div className="right">
            <h4> Order SF</h4>
            <p>2017</p>
            <p>
              User's are able to find food information such as menu and add them
              to cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Project
