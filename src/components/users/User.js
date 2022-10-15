import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../layout/navbar.css";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  });
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div class="conatiner" style={{  justifyContent:'center', paddingTop:'5%' }}>
    <div className="container py-4">
      <Link className="btn btn-primary" to="/details">
        Back to Customer Details
      </Link>
      <br></br>
      <br></br>
      <h1 className="display-4" style={{ fontFamily:'Chakra Petch,sans-serif', fontSize:'5vh' }}>User - {user.name}</h1>
      <hr />
      <ul className="list-group w-50" style={{ fontFamily:'Bebas Neue,cursive', fontSize:'3vh' }}>
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Destination: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Stay Duration: {user.website}</li>
      </ul>
    </div>
    </div>
  );
};

export default User;
