import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './component/navigation'
import LoginPage from './pages/loginPage'
import { Route, Switch } from 'react-router-dom'
import loginPage from './pages/loginPage'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
