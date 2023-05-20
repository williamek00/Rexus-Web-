import { Link } from "react-router-dom";

export default function WebcamCard ({props}) {
    return(
        <>
            <Link to={`${props.id}`}
            className="p-4 w-1/5 bg-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            <div className="h-full border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6  transition duration-300 ease-in">
                <img
                  className="h-72 w-full object-cover object-center"
                  src={props.mainImg}
                  alt="blog"
                />

                <h1 className="text-2xl font-semibold text-black mb-3 flex items-center justify-center">
                  {props.name}
                </h1>
                <p className="leading-relaxed mb-3"></p>
              </div>
            </div>
          </Link>
        </>
    )
}