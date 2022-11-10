import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitleHook from "../../Hooks/useTitleHook";
import { toast } from "react-toastify"

const Register = () => {
  const [loading, setLoading] = useState(false);
  useTitleHook("Register");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  if (loading) {
    return <div className="w-full h-full align-middle flex justify-center">
      <button className="btn loading"></button>
    </div>
  }

  const handleCreateUser = (event) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("https://pi-journal-server.vercel.app/jwt", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("PiToken", data.token);
          });
        setLoading(false);
        toast.success("user Created");
        form.reset();
        console.log(user);
        updateUserProfile(profile)
          .then((result) => console.log(result))
          .catch((err) => console.error(err));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleCreateUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photoURL"
                    className="input input-bordered"
                    name="photo"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <small>Already have an account?</small>
                    <Link
                      to="/login"
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
