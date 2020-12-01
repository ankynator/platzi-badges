import React from 'react'
import { Link } from 'react-router-dom'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'

import './styles/BadgeDetails.css'

import confLogo from '../images/platziconf-logo.svg'
import api from '../api'

class BadgeDetails extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async (e) => {
    this.setState({ loading:true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)

      this.setState({ loading:false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }

    const badge = this.state.data

    return (
      <div>
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
                  <Link 
                    to={`/badges/${badge.id}/edit`} 
                    className="btn btn-primary mb-4"
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )  
  }
}

export default BadgeDetails