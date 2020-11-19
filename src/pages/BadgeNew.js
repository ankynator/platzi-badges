import React from 'react'

import header from '../images/badge-header.svg'

import './styles/BadgeNew.css'

import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Vander"
                lastName="Idme"
                jobTitle="Student"
                twitter="ankynator"
                avatarUrl="https://s.gravatar.com/avatar/0468808e151674854313309a5f498817?s=80"
              />
            </div>
            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeNew