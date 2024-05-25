import { useLocation } from "react-router-dom";
import {
  NXIconNotificationActive,
  NXMessageActive,
  NXSearch,
} from "../../icons";

function Header() {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <header className="w-full h-[100px] sticky top-0 z-50 bg-white backdrop:blur px-10 flex items-center justify-between">
      {pathname === "/dashboard" ? (
        <div>
          <h1 className="font-nunito font-nunito-h1 text-2xl">Hi, Admin</h1>
          <p className="font-lato font-lato-body text-base-400">
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

      <div className="flex items-center gap-5">
        <div className="relative ">
          <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="p-[12px] text-[14px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-[482px]"
          />
        </div>
        <div className="flex">
          <NXIconNotificationActive />
          <NXMessageActive />
        </div>
        <hr className="h-[40px] w-[1px] bg-secondary-100" />
        <div className="flex gap-5">
          <div className="h-[48px] w-[48px] rounded-full bg-secondary-500"></div>
          <div>
            <h3 className="font-nunito font-nunito-h1">Mac Gibson</h3>
            <span className="font-lato font-lato-body text-base-400">
              Marketing Head
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
