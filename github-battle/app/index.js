import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
