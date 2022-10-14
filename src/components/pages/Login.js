import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";
const Login=()=>{
return(
  <section class="main">
  <div class="container box" style={{backgroundColor:'#256D85'}}>
    <div class="login main-container">
      <div class="login-img img-container">
        <img src="https://raw.githubusercontent.com/zinotrust/10-days-of-javascript/a7159092ec6551911839c3bc562b3a8fdd3dce3d/Animated%20Login%20Form/images/login.svg" alt="login" />
      </div>
      <div class="login-form form-container" style={{fontFamily:'fantasy'}}>
        <form action="">
          <h2 class="text-center pb-3">Login</h2>
          <input
            type="text"
            class="form-control form-control-lg mb-3"
            placeholder="Username"
            required
          />
          <input
            type="password"
            class="form-control form-control-lg mb-3"
            placeholder="Password"
            required
          />
          <div class="d-grid">
            <button class="btn btn-primary btn-lg">Login</button>
          </div>
          <br></br>
          <span>
            Don't have an account?
            <a href="/signup" class="register-link">Register</a>
          </span>
        </form>
      </div>
    </div>
  </div>
</section>

);
};
export default Login;