import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
        const user = result.user;
        alert('logged in')
        form.reset();
        console.log(user);
    })
    .catch(error => console.error(error))
  };

  const handleGoogleLogin=()=>{
        googleLogIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
  }

  return (
    <div>
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse my-14">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form  onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <small>Don't have an account?</small>
                    <Link
                      to="/register"
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="flex items-center justify-around">
                <hr className="w-5/12"></hr>
                <span>or</span>
                <hr className="w-5/12"></hr>
              </div>
                  <button onClick={handleGoogleLogin} className="btn btn-outline btn-ghost btn-sm btn-wide">Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
