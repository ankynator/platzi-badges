// const element = document.createElement('h1')
// element.innerText = "Render con js normalito"

// const container = document.getElementById('app')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const name = "walter"

// const element = <h1>Hello, Platzi from React!</h1>
// const element = React.createElement('h1', {}, 'Hola soy los children')

// const jsx = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a platzi')
// const element = React.createElement('h1', {}, `Hola soy ${2+2}`)

// const jsx = (
//   <div>
//     <h1>Hola soy Vander</h1>
//     <p>Y soy estudiante</p>
//   </div>
// )

const element = React.createElement(
    'div', 
    {},
    React.createElement('h1', {}, 'Hola soy Vander'),
    React.createElement('p', {}, 'Y soy un estudiantoso')
  )


const container = document.getElementById('app')

ReactDOM.render(element, container)

