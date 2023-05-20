import { useEffect, useState } from "react";
import TableRowCategory from "../components/TableRowCategory";
import { fetchCategory } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TableHeadset() {
  const { category } = useSelector((state) => {
    return state.categoryReducer;
  });
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <Link to="/categoryform" href="">
    <button className="bg-blue-500 border border-blue-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-4 shadow-md">
      <h1>Add New Category</h1>
    </button>
  </Link>
  <div className="bg-white rounded-md shadow-md w-full max-w-2xl overflow-x-auto">
    <table className="min-w-full text-left text-sm font-light">
      <thead className="bg-gray-50 dark:bg-neutral-900">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider flex items-center justify-center">
  Action
</th>

        </tr>
      </thead>
      <tbody>
        {category.map((el, index) => (
          <TableRowCategory key={index} props={el} />
        ))}
      </tbody>
    </table>
  </div>
</div>


    </>
  );
}
