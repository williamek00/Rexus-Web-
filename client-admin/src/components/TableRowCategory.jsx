import { useDispatch } from "react-redux";
import { deleteCategory} from "../store/action/actionCreator";
import { Link } from "react-router-dom";

export default function TableRowCategory({ props }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteCategory(props.id));
  }

  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
        <td className=" border px-4 py-2">{props?.name}</td>

        <td className="border px-4 py-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              
              <button
                onClick={handleDelete}
                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              >
                DELETE
              </button>
              <Link to={`/categoryform/${props.id}`} >
              <button  className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
                EDIT
              </button>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
