import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {adminLogin} from "../store/action/actionCreator"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChange(e) {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  }


  function handleLogin(e) {
    try {
      e.preventDefault();

        dispatch(adminLogin(login));
        setIsSubmitting(true);
        setTimeout(() => {
          if (localStorage.access_token) {
            navigate("/webcam");
          }
        }, 1000);
          Swal.fire("Welcome!", "", "success");
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something is wrong",
        html: `${err}`,
      });
    }
  } 
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={login.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  value={login.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
