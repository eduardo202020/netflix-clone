import useBillboard from "@/hooks/useBillboard";
import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const { data, error, isLoading } = useBillboard();

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-50"
        src={data?.videoUrl}
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="text-white bg-white/30 rounded-md px-2 md:px-4 py-1 md:py-2 w-autot text-xs lg:text-lg font-semibold hover:bg-white/20 transition flex flex-row items-center">
            <AiOutlineInfoCircle className="mr-1" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
