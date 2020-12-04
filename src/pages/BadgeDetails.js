import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import confLogo from '../images/platziconf-logo.svg'

import './styles/BadgeDetails.css'

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0)

  if(count > max) {
    setCount(0)
  }
  return [count, setCount]
}

function BadgeDetails (props) {
  const [count, setCount] = useIncreaseCount(5)

  const badge = props.badge
  return (
    <React.Fragment>
        <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="logo de la platzi conf"/>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={badge.firstName || 'First Name'}
                lastName={badge.lastName || 'Last Name'}
                jobTitle={badge.jobTitle || 'Job Title'}
                email={badge.email || 'email'}
                twitter={badge.twitter || 'twitter'}
              />
            </div>
            <div className="col-6">
              <h2>Actions</h2>
              <div>
                <div>

                  {/* <button onClick={() => {
                    setCount(count + 1)
                  }} 
                    className='btn btn-primary mr-4'
                  >
                    Increase Count {count}
                  </button> */}

                  <Link 
                    to={`/badges/${badge.id}/edit`} 
                    className="btn btn-primary mb-4"
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                  <DeleteBadgeModal 
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </React.Fragment>
  )
}

export default BadgeDetails