import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Books from "./Components/Book/Books";
import Quotes from "./Components/Quote/Quotes";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  return (

      <div>
          <NavBar/>
          <Router>
              <div className="App">
                  <Switch>
                      <Route exact path="/">
                            <Home/>
                      </Route>
                      <Route exact path="/books">
                          <Books />
                      </Route>
                      <Route exact path="/quotes">
                          <Quotes />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
