// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="App container">
        <header>
          <h2>Recipes</h2>
          <table>
            <thead>
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
        </header>
      </div>
    );
  }
}

export default Recipes;
