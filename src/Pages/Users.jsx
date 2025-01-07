import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers]= useState(loadedUsers);

  const handleDeleteUser = (id)=>{
      
      fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
      })
      .then(res => res.json())
      .then(data =>{
            if (data.deletedCount === 1){
                  alert('Successfully Delete a User')
                  const remaining = users.filter(user => user._id !== id);
                  setUsers(remaining);
            }
      })
  }

  return (
    <>
      <h2 className="text-2xl">Users Are coming here: {users.length}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user._id} className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Uniq Id: {user._id}</p>
              <div className="card-actions justify-end">
                <button onClick={()=> handleDeleteUser(user._id)} className="btn btn-sm">X</button>
                <Link to={`/update/${user._id}`}><button className="btn btn-secondary btn-sm">Update</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
