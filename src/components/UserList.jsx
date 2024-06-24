import React from 'react';
import useFetch from '../hooks/useFetch';
import './UserList.css'; 

function UserList() {

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }


  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
