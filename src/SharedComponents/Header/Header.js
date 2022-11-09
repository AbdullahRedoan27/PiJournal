import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaUser } from "react-icons/fa";
import logo from "../../images/logo wh.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <div className="navbar mb-4 bg-slate-700 p-3 rounded-b-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/services">Services</Link>
              </li>
              {user?.uid ? (
              <div>
                <li>
                  <Link to="/myReviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="/addService">Add Service</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </div>
            )}
            </ul>
          </div>
          <div className="btn-wide btn btn-ghost normal-case text-3xl">
            <img className="w-3/12" src={logo} alt=""></img>
            <Link to="/">PiJournal</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {user?.uid ? (
              <div className="flex">
                <li>
                  <Link to="/myReviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="/addService">Add Service</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            {user?.photoURL?
              <img  className="tooltip w-8 rounded-full border border-gray-200" src={user?.photoURL} alt=""></img>
              :
              <FaUser></FaUser>
            }
            </div>
            <Link onClick={handleLogOut} className="btn btn-sm mx-4">Log Out</Link>
            </>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
