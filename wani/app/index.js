import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import Nav from './components/Nav'
import { ApiKeyProvider } from './context/ApiKey'
import { getApiKey, setApiKey, resetApiKey } from './utils/ApiKey'

const EnterKey = React.lazy(() => import('./components/EnterKey'))
const Main = React.lazy(() => import('./components/Main'))

class App extends React.Component {
  state = {
    apiKey: getApiKey(),
    setApiKey: (key) => {
      //TODO: Validate key
      this.setState({apiKey: key})
      setApiKey(key)
    },
    resetApiKey: () => {
      this.setState({apiKey: null})
      resetApiKey()
    }
  }
  
  render () {
    return (
      <ApiKeyProvider value={this.state}>
        <Router>
          <div className='container'>
            <React.Suspense fallback={<Loading />}>
              {this.state.apiKey
                ? (
                  <React.Fragment>
                    <Nav />
                    <Switch>
                      <Route exact path='/' component={Main} />
                      <Route render={() => <h1>404</h1>} />
                    </Switch>
                  </React.Fragment>
                )
                : <EnterKey />
              }
            </React.Suspense>
          </div>
        </Router>
      </ApiKeyProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
