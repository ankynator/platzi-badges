import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'

import logoConf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

function Home() {
  return (
    <div className="Home">
      <div className="Description__container">
        <img 
          className="Description__image"
          src={logoConf}
          alt="Logo de la conferencia de platzi"
        />
        <h1 className="Description__title">Print your Badges</h1>
        <p className="Description__paragraph">The easiest way to manage your conference</p>

        <Link to="/badges/new" className="Description__button">
          Start Now
        </Link>
      </div>
      
      <figure className="Image__container">
        <img src={astronauts} alt="Astronautas"/>
      </figure>
    </div>
  )
}

export default Home