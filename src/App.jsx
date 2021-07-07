import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Film from "./components/Film";
import People from "./components/People";
// import Home from "./components/Home";
// import Peoples from "./Peoples";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/films" component={Films} />
        <Route path="/films/:id" component={Film} />
        <Route exact path="/people" component={People} />
        {/* <Route path="/people/:id" component={} /> */}
        <Route path="home" component={"Home"} />
      </Switch>
    </Router>
  );
}

export default App;
