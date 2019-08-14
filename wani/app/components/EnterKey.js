import React from 'react'
import { ApiKeyConsumer } from '../context/ApiKey'

export default class EnterKey extends React.Component {
  state = {
    apiKey: ''
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({apiKey: event.target.value})
  }

  render () {
    return (
      <ApiKeyConsumer>
        {({apiKey, setApiKey}) => (
          <div>
            <h1>Enter</h1>
            <form onSubmit={(e) => {e.preventDefault(); setApiKey(this.state.apiKey)}}>
              <input 
                type='text'
                name='apikey'
                value={this.state.apiKey}
                onChange={this.onChange}
              />
              <button>Set</button>
            </form>
          </div>
        )}
      </ApiKeyConsumer>
    )
  }
}