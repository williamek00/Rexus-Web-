import { useEffect, useState } from "react";
import HeadsetCard from "../components/HeadsetCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadsetDetail } from "../store/action/actionCreator";
import { useParams } from "react-router-dom";

export default function HeadsetDetail() {
  const { id } = useParams();
  const{ headsetDetail } = useSelector((state)=>{
    return state.reducerHeadsets
  })

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHeadsetDetail(id))
  },[])



  return (
    <>
     <div className="relative min-h-screen bg-gray-900" >
  
  
          
  <div className="absolute inset-0 bg-gray-900 opacity-75 z-10"></div>
  <div className="relative z-20 px-8 py-4 lg:py-8 max-w-4xl mx-auto flex">
    <div className="w-full lg:w-1/2 pr-8">
      <h1 className="text-4xl font-bold text-white mb-4">{headsetDetail.name}</h1>
      <p className="text-white mb-4">
      {headsetDetail.description}
      </p>
      <p className="text-white mb-4">
      {headsetDetail?.Category?.name}
      </p>
      <p className="text-white mb-4">
      Rp.{headsetDetail?.price}
      </p>
    
    </div>
    <div className="w-full lg:w-1/2">
      <div className="w-full lg:w-80">
        <HeadsetCard props={headsetDetail} />
      </div>
    </div>
  </div>
</div>
    </>
  );
}
