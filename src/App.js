import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import './_resetScss.scss'
import Theme from './components/theme'
import LayoutMain from './components/layout/main'
import AuthRoute from './components/authRoute'
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
              <Route exact path='/home' component={Home} />
              <Route exact path='/news' component={News} />
              <Route exact path='/map' component={Map} />
            </LayoutMain>
          </Switch>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
