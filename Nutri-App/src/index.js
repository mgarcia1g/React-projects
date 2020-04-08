
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';
 
class IndexComp extends React.Component  {
  render() {
    return(
      <div>
 
        {
          // <div>Hello from index</div>
        }
 
        <App />
      </div>
    )
  }
}
 
ReactDOM.render(<IndexComp />, document.getElementById("root"))
