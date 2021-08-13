import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import './_resetScss.scss'
import Theme from './components/theme'
//import LayoutMain from './hoc/layout/main'
//import AuthRoute from './hoc/authRoute'
import PrivateRoute from './hoc/privateRoute'

import News from './pages/news'
import Home from './pages/home'
import NotFound from './pages/notFound'

function App() {

  return (
    <div className="App">
      <Theme>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/news" />
            </Route>
            <PrivateRoute exact path='/home' component={Home} />
            <Route exact path='/news' component={News} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
