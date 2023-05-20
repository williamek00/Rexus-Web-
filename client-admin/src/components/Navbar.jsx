import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Navbar() {
  const navigate = useNavigate()
  const handleLogout  = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to logout, are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/login')
        Swal.fire("Logged out!", "You are now logged out.", "success");
      }
    });
  }
    return (
        <nav className="bg-black shadow-lg">
        <div className="container px-4 py-3 mx-auto md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-start md:justify-center">
            <h1 href="#" className="text-lg font-bold text-white">Admin </h1>
           
          </div>
          <div className="hidden md:flex md:items-center md:justify-end">
            <ul className="md:flex md:items-center md:space-x-4">
              <li>
                <Link to={'/add-product'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Add New Product</Link>
              </li>
              <li>
                <Link to={'/register'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Register Admin</Link>
              </li>
              <li>
                <Link  to={'/webcam'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Webcam</Link>
              </li>
              <li>
                <Link  to={'/headset'} href="#"  className="block text-white hover:text-gray-700 px-2 py-1">Headset</Link>
              </li>
              <li>
                <Link  to={'/keyboard'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Keyboard</Link>
              </li>
              <li>
                <Link  to={'/category'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Category</Link>
              </li>
              <li>
                <a  onClick={handleLogout} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}