import React, { useState, useEffect } from "react";
import "../../App.css";

function User({ match }) {
  useEffect(() => {
    const fetchUser = async () => {
      const fetchUser = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${match.params.id}`
      );
      const user = await fetchUser.json();
      console.log(user);
      setUser(...user);
    };

    fetchUser();
    // console.log(match);
  }, []);

  const [user, setUser] = useState([]);

  return (
    <div className="App container">
      <header>
        <h2>User Page for {user.name}</h2>
      </header>
    </div>
  );
}

export default User;
