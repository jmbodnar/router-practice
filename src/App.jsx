import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// ----- Component Imports ----- //
import Nav from "./components/Nav";

// ----- Page Imports ----- //
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import About from "./pages/About";

// ----- Main Componentn ----- //
class App extends Component {
  state = {
    recipes: [],
    categories: [],
    users: []
  };

  getRecipes = async () => {
    return await (
      await fetch(`https://my-json-server.typicode.com/jmbodnar/recipes-db/db`)
    ).json();
  };

  componentDidMount() {
    this.getRecipes().then(data => {
      const { recipes, categories, users } = data;
      this.setState({ recipes, categories, users });
    });
  }

  render() {
    return (
      <div className="App">
        <Router basename="/router-practice/">
          <header>
            <h1>
              <Link to="">App.jsx Header</Link>
            </h1>
          </header>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/recipes"
                component={Recipes}
                data={this.state}
              />
              <Route path="/recipes/:id" component={Recipe} />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
