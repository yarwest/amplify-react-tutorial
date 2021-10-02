import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Error404 from "./views/404";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='logoutWrapper'>
          <AmplifySignOut />
        </div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Error404/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
