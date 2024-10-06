import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import {AuthContex} from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContex);

  const handleRegister = event => {
    event.preventDefault();
    // const name = event.target.name.value;
    // console.log(name);
    // const form = new FormData(event.currentTarget);
    const form = new FormData(event.currentTarget);
    // console.log(form);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password, name, photo);

    createUser(email, password).then(result => {
      console.log(result.user);
      //   handleUserProfile(name, photo);
      //   toast.success("User Registration Successful", {
      //     position: "top-right",
      //   });
      //   navigate("/login");
    }).catch(error => {
      console.log(error);
    });
  };

  return (<div>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required="required"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required="required"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required="required"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required="required"/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div>
            {" "}
            <Link to="/login">To Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Register;
