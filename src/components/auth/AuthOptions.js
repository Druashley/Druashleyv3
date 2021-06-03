import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="md:mr-24 text-right">
      {userData.user ? (
        <button
          className="hover:text-blue-700 hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
          onClick={logout}
        >
          Log Out
        </button>
      ) : (
        <>
          <button
            className="hover:text-pink-700  hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            onClick={register}
          >
            Register
          </button>

          <button
            className="hover:text-blue-700 hover:underline px-4 py-1 mr-1 text-base text-black transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            onClick={login}
          >
            Log in
          </button>
        </>
      )}
    </nav>
  );
}
