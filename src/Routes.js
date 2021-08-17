import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import Quote from './components/Quote';

const Routes = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  </>
);

export default Routes;
