// import React, { useState, useEffect } from "react";
// import "../../App.css";

// function User({ match }) {
//   useEffect(() => {
//     const fetchUser = async () => {
//       const fetchUser = await fetch(
//         `https://jsonplaceholder.typicode.com/users?id=${match.params.id}`
//       );
//       const user = await fetchUser.json();
//       setUser(...user);
//       //   console.log(...user);
//     };

//     fetchUser();
//     // console.log(match);
//   }, []);

//   const [user, setUser] = useState([]);

//   return (
//     <div className="App container">
//       <header>
//         <h2>User Page for {user.name}</h2>
//         <section className="userinfo">
//           <h3>Address</h3>
//           <section>{}</section>
//         </section>
//       </header>
//     </div>
//   );
// }

// export default User;

import React, { Component } from "react";
import { getQueriesForElement } from "@testing-library/react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  //   Link gives access to this.props.match, with useful data on user
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users?id=${this.props.match.params.id}`
    )
      .then(response => {
        if (response.ok) return response.json();
        else throw Error(response.status + ": " + response.statusText);
      })
      .then(result => {
        this.setState({ user: result[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App container">
        <header>
          <h2>User Page for {JSON.stringify(this.state.user.name)}</h2>
          <section className="userinfo">
            <h3>Address</h3>
            <section></section>
          </section>
        </header>
      </div>
    );
  }
}

export default User;
