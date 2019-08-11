import React from 'react'
import { KeyProvider } from '../contexts/Key'

export default class EnterKey extends React.Component {
  state = {
    apiKey: ''
  }

  onSubmit = (event) => {
    onValidKey(this.state.apiKey)
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({apiKey: event.target.value})
  }

  render () {
      return (
        <KeyProvider>
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
              <div>Key: {this.state.apiKey}</div>
            </form>
          </div>
        </KeyProvider>
      )
  }
}