import React, { Component } from "react";

class Recipe extends Component {
  state = {
    user: {},
    address: {},
    company: {}
  };

  // React router's Link element gives access to this.props.match,
  getUser = async () => {
    return await (
      await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${this.props.match.params.id}`
      )
    ).json();
  };

  componentDidMount() {
    this.getUser().then(data => {
      const [user] = data;
      const { address, company } = user;
      this.setState({ user, address, company });
      console.log(user);
    });
  }

  render() {
    const { user, company, address } = this.state;
    return (
      <div className="App container">
        <header>
          <h2>Recipe Page for {this.state.user.name}</h2>
          <section className="userinfo">
            <dl>
              <dt>{user.name}</dt>
              <dd>{user.email}</dd>
              <dd>{user.phone}</dd>
              <dd>{user.username}</dd>
              <dd>{user.website}</dd>

              <dt>Address</dt>
              <dd>{address.street}</dd>
              <dd>{address.suite}</dd>
              <dd>{address.city + " " + address.zipcode}</dd>
              <dt>Company</dt>
              <dd>{company.name}</dd>
              <dd>{company.catchPhrase}</dd>
              <dd>{company.bs}</dd>
              <dd>{company.name}</dd>
            </dl>
          </section>
        </header>
      </div>
    );
  }
}

export default Recipe;
