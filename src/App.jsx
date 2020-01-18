import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// ----- Component Imports ----- //
import Nav from "./components/Nav";

// ----- Page Imports ----- //
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";

// ----- Main Componentn ----- //

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>
            <Link to="/">App.jsx Header</Link>
          </h1>
        </header>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
