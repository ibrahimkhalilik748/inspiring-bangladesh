import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Component/Navigation/Navigation';
import Video from './Component/Video/Video';
import Video1 from './Component/Video/Video1';
import Video2 from './Component/Video/Video2';
import Video3 from './Component/Video/Video3';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route exact path="/">
              <Video1></Video1>
            </Route>
            <Route path="/video1">
              <Video1></Video1>
            </Route>
            <Route path="/video2">
              <Video2></Video2>
            </Route>
            <Route path="/video3">
              <Video3></Video3>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
