import { useRouter } from "next/router";
import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/watch/${movieId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center justify-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={25} />
      Play
    </button>
  );
};

export default PlayButton;
