import React, { useState, useEffect } from "react";
import "./App.css";

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "city") {
      return a.address.city.localeCompare(b.address.city);
    }
    return 0;
  });

  return (
    <div className="container">
      <header>
        <h1>Список пользователей</h1>
      </header>

      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {users.length > 0 && (
        <>
          <div className="sortControls">
            <label className="sortSelect">Сортировать по:</label>
            <select
              id="sortSelect"
              className="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Имени</option>
              <option value="city">Городу</option>
            </select>
          </div>

          <div className="userList">
            {sortedUsers.map((user) => (
              <div className="card" key={user.id} >
                <div className="cardContent">
                  <p className="cardTitle textGradient">{user.name}</p>
                  <p className="cardPara textGradient">{user.email}</p>
                  <p className="cardPara textGradient">{user.address.city}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default User;
