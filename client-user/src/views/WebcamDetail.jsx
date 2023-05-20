import { useEffect, useState } from "react";
import WebcamCard from "../components/WebcamCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebcamDetail } from "../store/action/actionCreator";
export default function WebcamDetail() {
  const { id } = useParams()
  const {webcamDetail} = useSelector((state)=>{
    return state.reducerWebcams
  })
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchWebcamDetail(id))
  },[])
  return (
    <>
      <div className="relative min-h-screen bg-gray-900">
        {/* <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${image.imgUrl})`,
          }}
        ></div> */}
        <div className="absolute inset-0 bg-gray-900 opacity-75 z-10"></div>
        <div className="relative z-20 px-8 py-4 lg:py-8 max-w-4xl mx-auto flex">
          <div className="w-full lg:w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {webcamDetail.name}
            </h1>
            <p className="text-white mb-4">{webcamDetail.description}</p>
            <p className="text-white mb-4">{webcamDetail?.Category?.name}</p>
            <p className="text-white mb-4">Rp.{webcamDetail?.price}</p>

          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-80">
              <WebcamCard props={webcamDetail} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
