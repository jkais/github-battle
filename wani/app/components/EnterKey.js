import React from 'react'
import { setApiKey } from '../utils/ApiKey'

export default class EnterKey extends React.Component {
  state = {
    apiKey: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    setApiKey(this.state.apiKey)
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({apiKey: event.target.value})
  }

  render () {
      return (
        <div>
          <h1>Enter</h1>
          <form onSubmit={this.onSubmit}>
            <input 
              type='text'
              name='apikey'
              value={this.state.apiKey}
              onChange={this.onChange}
            />
            <button>Set</button>
          </form>
        </div>
      )
  }
}