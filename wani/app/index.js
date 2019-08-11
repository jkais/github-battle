import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import { KeyProvider } from './contexts/Key'

const EnterKey = React.lazy(() => import('./components/EnterKey'))
const Main = React.lazy(() => import('./components/Main'))

class App extends React.Component {
  render () {
    return (
      <KeyProvider>
        <Router>
          <div className='container'>
            <React.Suspense fallback={<Loading />}>
              {KeyProvider.value
                ? (
                  <Switch>
                    <Route exact path='/' component={Main} />
                    <Route render={() => <h1>404</h1>} />
                  </Switch>
                )
                : <EnterKey />
              }
            </React.Suspense>
          </div>
        </Router>
      </KeyProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
