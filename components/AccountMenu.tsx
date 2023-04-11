import { FC } from "react";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible: boolean;
  name: string;
}

const AccountMenu: FC<AccountMenuProps> = ({ visible, name }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-12 -right-4 rounded-md shadow-lg py-5 flex-col  border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            src="/images/default-blue.png"
            alt="default"
            className="w-8 rounded-full "
          />
          <p className="text-white text-sm group-hover/item:underline">
            {name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          className="text-white px-3 text-center hover:underline"
          onClick={() => signOut()}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
