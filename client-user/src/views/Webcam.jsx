import { useEffect, useState } from "react";
import WebcamCard from '../components/WebcamCard'
import { useDispatch, useSelector } from "react-redux";
import { fetchWebcam } from "../store/action/actionCreator";
export default function Webcam() {
  const { webcam } = useSelector((state)=>{
    return state.reducerWebcams
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWebcam())
  },[])
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {webcam.map((webcam, index) => (
          <WebcamCard key={index} props={webcam}/>
        ))}
      </div>
    </>
  );
}
