import React from 'react'

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo de la platziConf"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Vander <br/> Idme</h1>
        </div>
        
        <div className="Badge__section-info">
          <h3>Student</h3>
          <div>@ankynator</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge