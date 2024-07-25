import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "./useMenuItems";

function MenuItem({ menuItem, sidebarOpen }: { menuItem: MenuItemType, sidebarOpen: boolean }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url);
  };

  const isMainActive = isActive(menuItem.url || '') && location.pathname.split("/").length === (menuItem.url || '').split("/").length;
  const isSubActive = menuItem.subMenu && menuItem.subMenu.some(sub => isActive(sub.url));

  const active = isMainActive || isSubActive;

  const handleClick = () => {
    if (menuItem.subMenu) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {menuItem.subMenu ? (
        <div
          onClick={handleClick}
          className={`flex justify-between items-center gap-1 border-b border-[#EEEFF2] px-5 py-3.5 lg:text-base font-nunito tracking-wide cursor-pointer ${
            active ? "text-primary-500 font-nunito-h1 relative" : ""
          }`}
        >
          <div className="flex justify-center items-center gap-4 md:gap-3 lg:gap-4">
            <span>{menuItem.icon}</span>
            {!sidebarOpen ? <span>{menuItem.name}</span> : null}
          </div>
          {menuItem.count && (
            <div
              className={`aspect-square rounded-full w-6 text-center leading-6 text-white font-normal ${
                active ? "bg-primary-500" : "bg-black"
              }`}
            >
              {menuItem.count}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={menuItem.url || '#'}
          className={`flex justify-between items-center gap-1 border-b border-[#EEEFF2] px-5 py-3.5 lg:text-base font-nunito tracking-wide ${
            active ? "text-primary-500 font-nunito-h1 relative" : ""
          }`}
        >
          <div className="flex justify-center items-center gap-4 md:gap-3 lg:gap-4">
            <span>{menuItem.icon}</span>
            {!sidebarOpen ? <span>{menuItem.name}</span> : null}
          </div>
          {menuItem.count && (
            <div
              className={`aspect-square rounded-full w-6 text-center leading-6 text-white font-normal ${
                active ? "bg-primary-500" : "bg-black"
              }`}
            >
              {menuItem.count}
            </div>
          )}
        </Link>
      )}

      {menuItem.subMenu && (
        <div className={`flex flex-col gap-4 ${isOpen || isSubActive ? "block" : "hidden"}`}>
          {menuItem.subMenu.map((sub, index) => (
            <NavLink
              key={index}
              to={sub.url}
              className={`pl-[60px] text-base font-nunito ${isActive(sub.url) ? "text-primary-500" : ""}`}
            >
              {sub.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default MenuItem;
