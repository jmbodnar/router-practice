import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Shop() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);
    setUsers(users);
  };

  return (
    <div className="App container">
      <header>
        <h2>Users Header</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={"users/" + user.id}>{user.name}</Link>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Shop;
