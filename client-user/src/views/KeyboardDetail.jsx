import { useEffect, useState } from "react";
import KeyboardCard from "../components/KeyboardCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeyboardDetail } from "../store/action/actionCreator";
export default function KeyboardDetail() {
  const { id } = useParams();
  const {keyboardsDetail} = useSelector((state)=> {
    return state.reducerKeyboards
  })

  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch (fetchKeyboardDetail(id))
  },[])
  return (
    <>
      <div className="relative min-h-screen bg-gray-900">
       
        <div className="absolute inset-0 bg-gray-900 opacity-75 z-10"></div>
        <div className="relative z-20 px-8 py-4 lg:py-8 max-w-4xl mx-auto flex">
          <div className="w-full lg:w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {keyboardsDetail.name}
            </h1>
            <p className="text-white mb-4">{keyboardsDetail.description}</p>
            <p className="text-white mb-4">{keyboardsDetail?.Category?.name}</p>
            <p className="text-white mb-4">Rp.{keyboardsDetail?.price}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-80">
              <KeyboardCard props={keyboardsDetail} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
