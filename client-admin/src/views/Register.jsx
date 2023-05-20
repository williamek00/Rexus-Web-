import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {adminRegister} from "../store/action/actionCreator"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Register() {
    const [register, setregister] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
      const dispatch = useDispatch()
      function handleChange(e) {
        const { value, name } = e.target;
        setregister({
          ...register,
          [name]: value,
        });
      }
    
    
      function handleRegister(e) {
        try {
            e.preventDefault();
      
              dispatch(adminRegister(register));
             
            Swal.fire("Success Add New Admin!", "", "success");
            
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">New Admin</h2>
                        <form onSubmit={handleRegister} > 
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username
                            </label>
                            <input  required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={register.username} name="username" id="username" type="text" placeholder="Username"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                            </label>
                            <input  required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}  value={register.email} name="email" id="email" type="email" placeholder="email"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={register.password} name="password" id="password" type="password" placeholder="********"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={register.phoneNumber} name="phoneNumber" id="phoneNumber" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                            Address
                            </label>
                            <input required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={register.address} name="address" id="address" type="text" placeholder="Address"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
        </>
    )
}