import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <h1>App.jsx Header</h1>
        </header>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
