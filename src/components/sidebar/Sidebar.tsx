import logo from "../../assets/nxtbn_logo_black.svg";
import { NXCross } from "../../icons";
import FixedMenu from "./FixedMenu";
import MenuItems from "./MenuItems";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <aside
      className={`${
        sidebarOpen
          ? "hidden"
          : "absolute w-[70%] md:w-[18%] md:sticky h-screen top-0 left-0 bg-white z-[30] border-r border-[#EEEFF2]"
      }  `}
    >
    {/* <aside className="w-[18%] h-screen sticky top-0 overflow-hidden border-r border-[#EEEFF2]"> */}
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="NXTBN logo"
          className="w-[100px] md:w-[124px] h-[50px] my-7 mx-5"
        />
        <button
          className="md:hidden mr-5 text-black w-5"
          onClick={toggleSideBar}
        >
          <NXCross />
        </button>
      </div>
      <p className="px-5 pb-2 text-base-200 text-[12px]">MENU</p>
      <MenuItems />
      <FixedMenu className="md:absolute w-full bottom-10" />
    </aside>
  );
}

export default Sidebar;
