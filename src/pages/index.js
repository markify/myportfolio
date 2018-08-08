import React from 'react'
import { Link } from 'gatsby'

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
            <div className="bot">
              <i>Github Icon</i> <i>Milestone</i>
              <h4> My Project Name</h4>
            </div>
          </div>
          <div className="right">
            <h5>description</h5>
            <p>
              My description of my project. My description of my project.My
              description of my project.My description of my project.
              description of my project. My description of my project.My
              description of my project.My description of my project.
            </p>
          </div>
        </div>

        <div className="topsect">
          <div className="left">
            {' '}
            <img
              src="https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg"
              alt=""
              style={{ width: '300px' }}
            />
          </div>
          <div className="right">
            <i>Github Icon</i> <i>Milestone</i>
            <h3> My Project Name</h3>
            <p>
              {' '}
              My description of my project. My description of my project.My
              description of my project.My description of my project.
            </p>
          </div>
        </div>

        <div className="topsect">
          <div className="left">
            {' '}
            <img
              src="https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg"
              alt=""
              style={{ width: '300px' }}
            />
          </div>
          <div className="right">
            <i>Github Icon</i> <i>Milestone</i>
            <h3> My Project Name</h3>
            <p>
              {' '}
              My description of my project. My description of my project.My
              description of my project.My description of my project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Project
