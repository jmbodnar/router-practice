// ----- Libraries, etc ----- //
import React, { Component } from "react";
import { Link } from "react-router-dom";

// ----- Components ----- //
import PageHeader from "../../components/page-header";

class Recipes extends Component {
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

  getCategoryTitle = id => {
    let x = this.state.categories.filter(c => Number(id) === c._id)[0];
    return x.title;
  };

  render() {
    return (
      <React.Fragment>
        <PageHeader title="Recipes" />
        <div className="table-responsive">
          <table className="table table-striped table-borderless table-hover">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Main Ingredient</th>
                <th>Category</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.recipes.map(r => {
                return (
                  <tr key={r._id}>
                    <td>
                      <Link to={"recipes/" + r._id}>{r.title}</Link>
                    </td>
                    <td>{r.mainIngredient}</td>
                    <td>{this.getCategoryTitle(r.categoryId)}</td>
                    <td>{r.likes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipes;
