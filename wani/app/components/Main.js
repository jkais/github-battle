import React from 'react'
import { getProfile } from '../utils/api'
import { ApiKeyConsumer } from '../context/ApiKey'
import Loading from './Loading'

export default class Main extends React.Component {
  state = {
    userinfo: null
  }

  componentDidMount () {
    getProfile().then((userinfo) => {
      this.setState({
        userinfo: userinfo
      })
    })
  }

  render () {
    return (
      <ApiKeyConsumer>
        {({ apiKey }) => (
          this.state.userinfo
          ? (
              <h1>
                Hallo {this.state.userinfo.username}
              </h1>
          )
          : <Loading />
        )}
      </ApiKeyConsumer>
    )
  }
}