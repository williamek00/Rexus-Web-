import { useEffect, useState } from "react";
import TableRowHeadset from "../components/TableRowHeadset";
import { fetchHeadset } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function TableHeadset() {
  const { headset } = useSelector((state) => {
    return state.headsetReducer;
  });
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeadset());
  }, []);
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 dark:border-neutral-500 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-500">
          <thead className="bg-gray-50 dark:bg-neutral-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-500">
            {headset.map((el, index) => (
              <TableRowHeadset key={index} props={el} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}
