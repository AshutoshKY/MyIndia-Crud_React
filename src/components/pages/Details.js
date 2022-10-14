import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../layout/navbar.css";

const Details = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  const[query,setquery]=useState("....");

  return (
    <div className="container" style={{ paddingTop:'5%' }}>
      <div className="py-4">
        <span style={{ fontFamily:'Chakra Petch,sans-serif', fontSize:'5vh' }}>User Details</span>
        
        <div style={{margin:"-7% 35% 0% 35%"}}>
            <div className="input-group rounded">
                <input type="search" 
                placeholder="Type a Name to Search...."
                onChange={(e)=>setquery(e.target.value ? e.target.value:"....")}
                id="inp"
                style={{width:"3000px",height:"40px",borderRadius:"25px", backgroundColor:'#F5EFE6'}}
                />
                <div id="ul" className="list">
                    {
                            users.filter((user)=>
                            user.name.toLowerCase().includes(query) 
                            ) .map((user)=>(
                            <div style={{margin:"2% 0% 0% 25%"}} key={user.id} className="listItem">
                                <Link class="btn btn-dark" style={{borderColor: "#e7e7e7;color: black"}} to={`/users/${user.id}`}>
                                {user.name}
                                </Link>
                            </div>
                    ))
                        }
                </div>
            </div>
        </div>


        <Link style={{margin:"0% 0% 1% 91%",backgroundColor:"green"}} className="btn btn-primary" to="/users/add">Add User</Link>
        <table class="table border shadow" style={{backgroundColor:'#CDF0EA', borderRadius:'40px'}}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{fontFamily:'Play,sans-serif', fontWeight:'bolder'}}>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}` } style={{borderRadius:'15px'}} >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                    style={{backgroundColor:"#A5C9CA", borderRadius:'5px'}}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                    style={{borderRadius:'50px'}}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
