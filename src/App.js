import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import './_resetScss.scss'
import Theme from './components/theme'
import LayoutMain from './hoc/layout/main'
import AuthRoute from './hoc/authRoute'
import PrivateRoute from './hoc/privateRoute'
//import Map from './components/map'

import Map from './pages/map'
import News from './pages/news'
import Home from './pages/home'

function App() {

  return (
    <div className="App">
      <Theme>
        <Router>
          <Switch>
            <LayoutMain>
              <Route exact path="/">
                <Redirect to="/news" />
              </Route>
              <PrivateRoute exact path='/home' component={Home} />
              <Route exact path='/news' component={News} />
              <PrivateRoute exact path='/map' component={Map} />
            </LayoutMain>
          </Switch>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
