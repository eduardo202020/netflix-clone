import React from "react";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import { useSession } from "next-auth/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { data: user } = useSession();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  if (!user?.user?.email) {
    return (
      <div className="text-white text-lg w-1/2 mx-auto flex justify-center h-full items-center md:text-4xl sm:text-4xl">
        Your lost
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white text-1xl md:text-3xl font-bold cursor-pointer"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light mr-2">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default Watch;
