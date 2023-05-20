import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className="bg-black shadow-lg">
        <div className="container px-4 py-3 mx-auto md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-start md:justify-center">
            <a href="#" className="text-lg font-bold text-white">REXUS</a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-gray ml-auto">
              <svg className="h-6 w-6 fill-current text-gray-800" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="block"
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end">
            <ul className="md:flex md:items-center md:space-x-4">
              <li>
                <Link to={'/'} href="#" className="block text-white hover:text-gray-700 px-2 py-1">Home</Link>
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
            </ul>
          </div>
        </div>
      </nav>
    )
}