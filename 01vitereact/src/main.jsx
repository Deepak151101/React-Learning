import React from "react";
import ReactDom from "react-dom/client";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp () {
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}

// const ReactElement = {      // We are defining our react so we tell every element should be made in this format only.
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)


const reactElement = React.createElement(   // createElement method of React takes 1st parameter as any tag like 'div', 'a', 'p' & 2nd parameter is a object that adds all the properties it is like setAttribute & 3rd parameter is direct text
  'a',  // 1st parameter - any tag
  {href: 'https://google.com', target: '_blank'},   // 2nd parameter - any object or attributes
  'Click me to visit google page'    // 3rd parameter - direct text
)

createRoot(document.getElementById('root')).render(   // This .render we are using is a inbuilt function of main react

    // <MyApp />    // As MyApp is a component we can execute it like this.
    // MyApp()      // As MyApp is just a function we can execute it like this.

    // <reactElement />  // This won't run bcz, a object cannot be executed in this way. 
    // ReactElement

    // anotherElement      // This will work

    // reactElement       // This will work too bcz we are using .render inbuilt function

    <App />

)
