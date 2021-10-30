import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Component/Navigation/Navigation';
import Option1 from './Component/Video/Option1';
import Option2 from './Component/Video/Option2';
import Option3 from './Component/Video/Option3';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/">
              <Option1></Option1>
            </Route>
            <Route path="/Option1">
              <Option1></Option1>
            </Route>
            <Route path="/Option2">
              <Option2></Option2>
            </Route>
            <Route path="/Option3">
              <Option3></Option3>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
