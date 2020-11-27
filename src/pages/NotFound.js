import React from 'react'

import notFounfImage from '../images/404-Error-bro.svg'

import './styles/NotFound.css'

function NotFound () {
  return (
    <div className="NotFound">
      <img src={notFounfImage} alt="Error bro"/>
    </div>
  )
}

export default NotFound