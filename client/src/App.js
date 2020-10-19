import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as render from "./AppImports"

// desde aca se corre toda la app
function App() {
  const user = useSelector(state=>state.userActive)
  
  return (
    <Router>
      <div className="App">
        <render.Navbar {...{user}}/>
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
