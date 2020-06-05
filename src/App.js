import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation from './components/Confirmation';
import SignUp from './components/SignUp';   
import Verification from './components/Verification';   



function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/verify" component={Verification} />
          <Route part="/confirm" component={Confirmation} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
