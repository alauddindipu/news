import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import {AuthContex} from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {signIn} = useContext(AuthContex);
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log(form);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    
    signIn(email, password).then(result => {
      console.log(result.user);
      toast.success("User login successful", {position: "top-right"});
      navigate("/");
    }).catch(error => {
      console.log(error);
    });
  };

  return (<div>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required="required"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required="required"/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Login with Google</button>
            </div>
          </form>
          <div>
            {" "}
            <Link to="/register">To Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Login;
