import React, { Component } from "react";

import { getOneRecipe, getAllComments } from "../../services/api";

// ----- Components ----- //
import PageHeader from "../../components/page-header";

class Recipe extends Component {
  state = {
    recipe: {},
    comments: [],
    category: {},
    user: {}
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

  // ----- Calling ----- //
  componentDidMount() {
    getOneRecipe(this.props.match.params.id)
      .then(data => {
        const [recipe] = data;
        this.setState({ recipe });
      })
      .then(() => {
        getAllComments().then(data => {
          const comments = data.filter(comment => {
            return (
              String(comment.recipeId) === String(this.props.match.params.id)
            );
          });

          comments.forEach(comment => {
            this.getUser()
              .then(users => {
                let [user] = users.filter(user => {
                  return String(comment.userId) === String(user._id);
                });
                return user;
              })
              .then(user => {
                comment.username = user.firstname + " " + user.lastname;
                this.setState({ comments });
              });
          });
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

  getDate = string => {
    let date = new Date(string);
    return date.toLocaleDateString();
  };

  render() {
    return (
      <React.Fragment>
        <PageHeader title={this.state.recipe.title} />
        <section className="row">
          <div className="col-sm-8">
            <dl>
              <dt>Description</dt>
              <dd>
                This wonderful recipe is summarized in this blurb. It's so good
                and people love to it eat. Every recipe will have a short
                marketing blurb like this.
              </dd>

              <dt>Directions</dt>
              <dd>{this.state.recipe.directions}</dd>

              <dt>Added by</dt>
              <dd>
                {this.state.user.firstname +
                  " " +
                  this.state.user.lastname +
                  " | " +
                  this.getDate(this.state.recipe.dateAdded)}
              </dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <dl>
              <dt>Category</dt>
              <dd>{this.state.category.title}</dd>

              <dt>Main Ingredient</dt>
              <dd>{this.state.recipe.mainIngredient}</dd>

              <dt>Ingredients</dt>
              <dd>{this.state.recipe.ingredients}</dd>

              <dt>Creator</dt>
              <dd>
                {this.state.user.firstname + " " + this.state.user.lastname}
              </dd>
            </dl>
          </div>
        </section>
        <PageHeader title="Comments" />
        <section className="row list-group mb-4 px-3">
          {this.state.comments.map(comment => {
            return (
              <details className="mb-1" key={comment._id}>
                <summary>
                  {comment.username} ({this.getDate(comment.dateAdded)})
                </summary>
                <div className="alert">
                  <p>{comment.text}</p>
                </div>
              </details>
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default Recipe;
