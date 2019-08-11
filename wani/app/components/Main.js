import React from 'react'
import { getApiKey } from '../utils/ApiKey'

export default class Main extends React.Component {

  render () {
    return (
      <React.Fragment>
        <h1>Hallo</h1>
        <div>Key: {getApiKey()}</div>    
      </React.Fragment>
    )
  }
}