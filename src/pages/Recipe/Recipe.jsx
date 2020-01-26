import React, { Component } from "react";

import {
  getOneRecipe,
  getAllComments,
  getAllUsers,
  getAllCategories
} from "../../services/api";

import { jsonToDateString } from "../../services/general";

// ----- Components ----- //
import PageHeader from "../../components/page-header";

class Recipe extends Component {
  state = {
    recipe: {},
    comments: [],
    category: {},
    user: {}
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
            getAllUsers()
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

        getAllUsers().then(data => {
          const [user] = data.filter(user => {
            return String(this.props.match.params.id) === String(user._id);
          });
          this.setState({ user });
        });

        getAllCategories().then(data => {
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
    const { recipe, user, category, comments } = this.state;
    return (
      <React.Fragment>
        <PageHeader title={recipe.title} />
        <section className="row">
          <div className="col-sm-8">
            <dl>
              <dt>Directions</dt>
              <dd>{recipe.directions}</dd>

              <dt>Added by</dt>
              <dd>
                {user.firstname +
                  " " +
                  user.lastname +
                  " | " +
                  jsonToDateString(recipe.dateAdded)}
              </dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <dl>
              <dt>Category</dt>
              <dd>{category.title}</dd>

              <dt>Main Ingredient</dt>
              <dd>{recipe.mainIngredient}</dd>

              <dt>Ingredients</dt>
              <dd>{recipe.ingredients}</dd>

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
                  {comment.username} ({jsonToDateString(comment.dateAdded)})
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
