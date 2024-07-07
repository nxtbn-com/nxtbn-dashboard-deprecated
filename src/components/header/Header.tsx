import { useLocation } from "react-router-dom";
import {
  NXIconNotificationActive,
  NXMenu,
  NXMessageActive,
  NXSearch,
} from "../../icons";
import logo from "../../assets/nxtbn_black.png";

function Header({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
}) {
  let location = useLocation();
  const pathname = location.pathname;

  const toggleSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <header className="w-full overflow-hidden sticky top-0 z-40">
      {/* Desktop Nav */}
      <div className="hidden z-50 md:flex w-full h-[100px] bg-white backdrop:blur md:px-5 lg:px-10 items-center justify-between border-b border-[#EEEFF2]">
        <div className="flex gap-5">
          {sidebarOpen && (
            <button className="block mh:hidden text-black w-10" onClick={toggleSideBar}>
              <NXMenu />
            </button>
          )}

          {pathname === "/dashboard" ? (
            <div>
              <h1 className="font-nunito font-[900] md:text-lg lg:text-2xl">
                Hi, Admin
              </h1>
              <p className="font-lato font-lato-body text-base-400 md:text-sm lg:text-md">
                Let's check your store today
              </p>
            </div>
          ) : (
            <div>
              <h1 className="font-nunito font-nunito-h1 text-2xl">
                {pathname.slice(1).split("/")[0].charAt(0).toUpperCase() +
                  pathname.slice(1).split("/")[0].slice(1)}
              </h1>
            </div>
          )}
        </div>

        <div className="flex items-center gap-5">
          <div className="relative ">
            <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="p-[12px] text-[14px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-[100%]"
            />
          </div>
          <div className="flex">
            <NXIconNotificationActive />
            <NXMessageActive />
          </div>
          <hr className="h-[40px] w-[1px] bg-secondary-100" />
          <div className="flex gap-5">
            <div className="md:h-[35px] lg:h-[48px] aspect-square rounded-full bg-secondary-500"></div>
            <div className="flex flex-col justify-center">
              <h3 className="font-nunito font-[900] md:text-sm lg:text-xl">
                Mac Gibson
              </h3>
              <span className="font-lato font-[400] md:text-sm text-base-400 hidden md:block">
                Marketing Head
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="block md:hidden px-7 sticky top-0 left-0 bg-white z-40 pb-3">
        <div className="py-3 flex items-center justify-between gap-3">
          <div className="flex gap-2 items-center">
            <button className="text-black w-7" onClick={toggleSideBar}>
              <NXMenu />
            </button>
            <img src={logo} alt="NXTBN logo" className="w-[3.5rem]" />
          </div>
          <div className="flex gap-3 items-center">
            <h3 className="font-nunito font-nunito-h1">Mac Gibson</h3>
            <div className="h-[30px] aspect-square rounded-full bg-secondary-500"></div>
          </div>
        </div>
        <div className="relative">
          <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="px-[12px] py-2 text-[14px] bg-secondary-100 rounded-lg border-none outline-none ps-[3.1rem] w-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
