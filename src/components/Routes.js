import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Home from "../views/Home";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <li>
          <Link to="/">Home</Link>
        </li>

        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}
