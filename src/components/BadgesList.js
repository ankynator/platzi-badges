import React from 'react'
import { Link } from 'react-router-dom'

import twitterIcon from '../images/twitter-icon.svg'
import Gravatar from '../components/Gravatar'
import './styles/BadgesList.css'

class BadgeListItem extends React.Component {
  render() {
    return(
      <div className="BadgeItem">
        <Gravatar 
          className="BadgeItem__avatar" 
          email={this.props.badge.email} 
        />
        <div className="BadgeItem__info">
          <p>{this.props.badge.firstName} {this.props.badge.lastName}</p>
          <span href='/' className="BadgeItem__info-twitter">
            <img src={twitterIcon} alt="logo twitter" width='20px'/>
            <p>@{this.props.badge.twitter}</p>
          </span>
          <p>{this.props.badge.jobTitle}</p>
        </div>
      </div>
    )
  }
}

class BadgesList extends React.Component {
  badgeList = [...this.props.badges].reverse()

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
        {this.badgeList.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                <BadgeListItem badge={badge}/>
              </Link>
            </li>
          )
        })}
      </ul>  
    )
  }
}

export default BadgesList