import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Display from "./Display";
import Home from "./Home";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
    });
  }, [userData]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home myUser={userData} />
          </Route>
          <Route path="/myData/:id">
            <Display myUserData={userData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
