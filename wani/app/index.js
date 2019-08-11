import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import Nav from './components/Nav'
import { getApiKey } from './utils/ApiKey'

const EnterKey = React.lazy(() => import('./components/EnterKey'))
const Main = React.lazy(() => import('./components/Main'))

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <React.Suspense fallback={<Loading />}>
            {getApiKey()
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
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
