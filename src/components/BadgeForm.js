import React from 'react'

class BadgeForm extends React.Component{

  // state = {
  //   jobTitle: 'Designer'
  // }

  // handleChange = e => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // })
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = e => {
    console.log("Button was clicked")
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   console.log("Form was submit")
  //   // console.log(this.state)
  // }

  render(){
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              className="form-control" 
              onChange={this.props.onChange} 
              type="text" 
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              className="form-control" 
              onChange={this.props.onChange} 
              type="text" 
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control" 
              onChange={this.props.onChange} 
              type="email" 
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input 
              className="form-control" 
              onChange={this.props.onChange} 
              type="text" 
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              className="form-control" 
              onChange={this.props.onChange} 
              type="text" 
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          
          <button className="btn btn-primary" onClick={this.handleClick} >Save</button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}

        </form>
      </React.Fragment>
    )
  }
}

export default BadgeForm