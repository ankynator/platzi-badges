import React from 'react'

import header from '../images/platziconf-logo.svg'

import './styles/BadgeNew.css'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import api from '../api'

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading:true, error:null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })

    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'email'}
                twitter={this.state.form.twitter || 'twitter'}
                // avatarUrl="https://s.gravatar.com/avatar/0468808e151674854313309a5f498817?s=80"
              />
            </div>
            <div className="col">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default BadgeNew