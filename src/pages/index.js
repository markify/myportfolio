import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const Project = () => (
  <Layout>
    <div>
      <div style={{ padding: '20px' }}>
        <img
          src="https://galaxyproject.org/images/galaxy-logos/galaxy_project_logo.jpg"
          alt=""
          style={{ width: '500px' }}
        />
        <i>Github Icon</i> <i>Milestone</i>
        <h3> My Project Name</h3>
        <p>
          {' '}
          My description of my project. My description of my project.My
          description of my project.My description of my project.
        </p>
      </div>
      <div style={{ padding: '20px' }}>
        <img src="" alt="" />
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <i>Github Icon</i> <i>Milestone</i>
        <h3> My Project Name</h3>
        <p> My description of my project.</p>
      </div>
      <div style={{ padding: '20px' }}>
        <img src="" alt="" />
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <i>Github Icon</i> <i>Milestone</i>
        <h3> My Project Name</h3>
        <p> My description of my project.</p>
      </div>
    </div>
  </Layout>
)

export default Project
