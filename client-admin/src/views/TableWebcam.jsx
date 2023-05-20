import TableRowWebcam from "../components/TableRowWebcam";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWebcam } from "../store/action/actionCreator";

export default function TableWebcam() {
  const {webcam } = useSelector((state)=>{
    return state.webcamReducer
  })
  console.log(webcam);
  let dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchWebcam())
  },[])
    return (
        <>
        
       <div className="flex items-center justify-center h-screen">
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 dark:border-neutral-500 sm:rounded-lg">
          <table className="table-auto border-collapse border border-gray-400 mx-auto">
            <thead className="bg-gray-50 dark:bg-neutral-900">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-neutral-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-neutral-500">
              {webcam.map((el, index) => (
                <TableRowWebcam key={index} props={el} />
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