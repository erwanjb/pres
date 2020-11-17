import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
  } from "react-router-dom";
import Home from './Home';
import Mention from './Mention';
import Pol from './Pol';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/mentions-legales"  component={Mention}/>
                <Route exact path="/politique-de-confidentialite"  component={Pol}/>
                <Route path="/"  component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;