import TableRowKeyboard from "../components/TableRowKeyboard";
import { useEffect, useState } from "react";
import { fetchKeyboard } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function TableKeyboard() {
   const {keyboard} = useSelector((state)=>{
    return state.keyboardReducer
   })

   let dispatch = useDispatch()
   useEffect(()=>{
    dispatch(fetchKeyboard())
   },[])
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-500">
              {keyboard.map((el, index) => (
                <TableRowKeyboard key={index} props={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}