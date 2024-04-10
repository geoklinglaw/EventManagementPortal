import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    if (user) {
      console.log("User is logged in");
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid px-12 pt-5 flex flex-row justify-between items-center">
        <div className="flex justify-start">
          <p className="mt-1 text-[25px] font-bold font-montserrat text-purple ">
            Eventopedia
          </p>
        </div>
        {loggedIn ? (
          <div className="flex justify-end">
            <a
              className="navbar-brand text-purple font-montserrat mt-2 mr-5"
              href="/"
            >
              Create New Event
            </a>
            <a
              className="navbar-brand text-purple font-montserrat mt-2 mr-5"
              href="/"
            >
              Manage Events
            </a>
            <button className="bg-purple flex items-center rounded-md">
              <a
                className="flex justify-center align-items navbar-brand text-white font-montserrat px-5 py-2"
                href="/"
              >
                {loggedIn ? user.password : "Login"}
              </a>
            </button>
          </div>
        ) : (
          <div className="flex justify-end">
            <a
              className="navbar-brand text-purple font-montserrat mt-2 mr-5"
              href="/"
            >
              Login
            </a>
            <button className="bg-purple flex items-center rounded-md">
              <a
                className="flex justify-center align-items navbar-brand text-white font-montserrat px-5 py-2"
                href="/"
              >
                Sign up
              </a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
