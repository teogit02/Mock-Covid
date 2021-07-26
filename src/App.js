import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './_resetScss.scss'

import Theme from './components/theme'
import AuthRoute from './components/authRoute'
import Login from './pages/login'
//import Home from './pages/home'
import News from './pages/news'

function App() {

  return (
    <div className="App">
      <Theme>
        <Router>
          <Switch>
            <AuthRoute exact path='/login' component={Login} />
            {/* <Route exact path='/home' component={Home} /> */}
            <Route exact path='/news' component={News} />

          </Switch>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
