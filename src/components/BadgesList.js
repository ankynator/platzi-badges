import React from 'react'
import { Link } from 'react-router-dom'

import twitterIcon from '../images/twitter-icon.svg'

import './styles/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges where found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
        return (
          <li key={badge.id} className="BadgeItem">
            <img src={badge.avatarUrl} alt="Avatar" className="BadgeItem__avatar"/>
            <div className="BadgeItem__info">
              <p>{badge.firstName} {badge.lastName}</p>
              <a href='/' className="BadgeItem__info-twitter">
                <img src={twitterIcon} alt="logo twitter" width='20px'/>
                <p>@{badge.twitter}</p>
              </a>
              <p>{badge.jobTitle}</p>
            </div>
          </li>
        )
        })}
      </ul>  
    )
  }
}

export default BadgesList