import logo from "../../assets/nxtbn_black.png";
import nxtbn_sm from "../../assets/nxtbn.png";
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
    <div
      className={` mh:sticky transition-all ease-linear  h-screen top-0 left-0 bg-white z-50 border-r border-[#EEEFF2] ${
        sidebarOpen ? "w-0 overflow-hidden mh:fixed mh:w-[100px]" : "fixed w-[70%] mh:w-[18%] mh:sticky "
      }  `}
    >
      {/* <aside className="w-[18%] h-screen sticky top-0 overflow-hidden border-r border-[#EEEFF2]"> */}
      <div className="flex items-center justify-between">
        { !sidebarOpen ? (
          <img
            src={logo}
            alt="NXTBN logo"
            className="w-[80px] mh:w-[100px] my-7 mx-5"
          />
        ) : (
          <img
            src={nxtbn_sm}
            alt="NXTBN logo"
            className="h-[50px] my-7 mx-5"
          />
        )}
        <button
          className="mh:hidden mr-5 text-black w-5"
          onClick={toggleSideBar}
        >
          <NXCross />
        </button>
      </div>
      <p className="px-5 pb-2 text-base-200 text-[12px]">MENU</p>
      <MenuItems sidebarOpen={sidebarOpen} />
      <FixedMenu
        className="mh:absolute w-full bottom-10"
        sidebarOpen={sidebarOpen}
      />
    </div>
  );
}

export default Sidebar;
