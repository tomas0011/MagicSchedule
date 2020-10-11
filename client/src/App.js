import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as render from "./AppImports"

// desde aca se corre toda la app
function App() {

  
  return (
    <Router>
      <div className="App">
        <render.Navbar/>
        <Switch>
          <Route exact path="/" component={render.Home}/>
          <Route exact path="/day" component={render.Day}/>
          <Route exact path="/register" component={render.Register}/>
          <Route exact path="/login" component={render.Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
