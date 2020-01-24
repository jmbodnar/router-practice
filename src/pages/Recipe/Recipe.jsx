import React, { Component } from "react";

class Recipe extends Component {
  state = {
    recipe: {},
    comments: [],
    category: {},
    user: {}
  };

  // React router's Link element gives access to this.props.match,
  getRecipe = async () => {
    return await (
      await fetch(
        `https://my-json-server.typicode.com/jmbodnar/recipes-db/recipes?_id=${this.props.match.params.id}`
      )
    ).json();
  };

  getComments = async () => {
    return await (
      await fetch(
        `https://my-json-server.typicode.com/jmbodnar/recipes-db/comments`
      )
    ).json();
  };

  getUser = async () => {
    return await (
      await fetch(
        `https://my-json-server.typicode.com/jmbodnar/recipes-db/users`
      )
    ).json();
  };

  getCategory = async () => {
    return await (
      await fetch(
        `https://my-json-server.typicode.com/jmbodnar/recipes-db/categories`
      )
    ).json();
  };

  componentDidMount() {
    this.getRecipe()
      .then(data => {
        const [recipe] = data;
        this.setState({ recipe });
      })
      .then(() => {
        this.getComments().then(data => {
          const comments = data.filter(comment => {
            return (
              String(comment.recipeId) === String(this.props.match.params.id)
            );
          });

          this.setState({ comments });
        });

        this.getUser().then(data => {
          const [user] = data.filter(user => {
            return String(this.props.match.params.id) === String(user._id);
          });
          this.setState({ user });
        });

        this.getCategory().then(data => {
          const [category] = data.filter(category => {
            return (
              String(this.state.recipe.categoryId) === String(category._id)
            );
          });
          this.setState({ category });
        });
      });
  }

  render() {
    return (
      <div className="App container">
        <header>
          <h2>{this.state.recipe.title}</h2>
          <section className="userinfo"></section>
        </header>
      </div>
    );
  }
}

export default Recipe;
