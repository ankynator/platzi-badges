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

function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState("")
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [ badges, query ])

  return { query, setQuery, filteredBadges }
}

function BadgesList (props) {
  const badges = props.badges

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          type="text" 
          className="form-control" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      
      {filteredBadges.length === 0 && (
        <div>
          <h3>No badges where found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      )}

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgeListItem badge={badge}/>
              </Link>
            </li>
          )
        })}
      </ul> 
    </React.Fragment> 
  )
}

export default BadgesList