import { Link, useLocation } from "react-router-dom";
import { MenuItemType } from "./useMenuItems";

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
  let location = useLocation();

  const active =
    location.pathname === menuItem.url ||
    (location.pathname.startsWith(menuItem.url) &&
      location.pathname.split("/").length === menuItem.url.split("/").length);

  return (
    <Link
      to={menuItem.url}
      className={`flex justify-between items-center border-b border-[#EEEFF2] px-5 py-3.5 lg:text-base font-nunito tracking-wide ${
        active && "text-primary-500 font-nunito-h1 relative"
      }`}
    >
      <div className="flex justify-center items-center gap-4 md:gap-3 lg:gap-4">
        <span className="">{menuItem.icon}</span>
        <span>{menuItem.name}</span>
      </div>
      {menuItem?.count && (
        <div
          className={`aspect-square rounded-full w-6 text-center leading-6 text-white font-normal ${
            active ? "bg-primary-500" : "bg-black "
          }`}
        >
          {menuItem.count}
        </div>
      )}
    </Link>
  );
}

export default MenuItem;
