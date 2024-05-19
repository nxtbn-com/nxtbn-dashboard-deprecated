import { Link, useLocation } from "react-router-dom";
import { MenuItemType } from "./useMenuItems";

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
  let location = useLocation();

  const active = location.pathname === menuItem.url;
  return (
    <Link
      to={menuItem.url}
      className={`flex items-center gap-3 border-b px-5 py-2 text-[16px] font-nunito tracking-wide ${
        active && "text-primary-500 font-nunito-h1 relative"
      }`}
    >
      <span>{menuItem.icon}</span>
      <span>{menuItem.name}</span>

      {menuItem?.count && (
        <div
          className={`aspect-square rounded-full absolute right-5 w-6 text-center leading-6 text-white font-normal ${
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
