import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };

      const loginRes = await Axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        role: loginRes.data.role,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="min-h-screen  container items-center py-12 mx-auto">
      <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
        <h2 className="bold text-3xl text-center">Log in</h2>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <form onSubmit={submit}>
          <div className=" mt-4">
            <label
              className="text-base leading-7 text-gray-500"
              htmlFor="login-email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gradient-to-r from-blue-100  to-pink-100 border focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-inset-2"
              id="login-email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className=" mt-4">
            <label
              className="text-base leading-7 text-gray-500"
              htmlFor="login-password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gradient-to-r from-blue-100  to-pink-100 border focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-inset-2"
              id="login-password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            className="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
