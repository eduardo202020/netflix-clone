import { FC } from "react";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-11 left-0  flex-col border-2 border-gray-800 flex pb-2 rounded-md shadow-lg">
      <div className="flex flex-col gap-4">
        <div className=" px-3 text-center text-white hover:underline     pt-2">
          Home
        </div>
        <div className=" px-3 text-center text-white hover:underline">
          Series
        </div>
        <div className=" px-3 text-center text-white hover:underline">
          Films
        </div>
        <div className=" px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className=" px-3 text-center text-white hover:underline">
          My list
        </div>
        <div className=" px-3 text-center text-white hover:underline pb-2">
          Browse by languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
