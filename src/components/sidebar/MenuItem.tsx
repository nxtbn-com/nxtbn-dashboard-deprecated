import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "./useMenuItems";


function MenuItem({ menuItem, sidebarOpen }: { menuItem: MenuItemType, sidebarOpen: boolean }) {
  let location = useLocation();

  const active =
    location.pathname === menuItem.url ||
    (location.pathname.startsWith(menuItem.url) &&
      location.pathname.split("/").length === menuItem.url.split("/").length);

  return (
    <>
      <Link
        to={menuItem.url}
        className={`flex justify-between items-center gap-1 border-b border-[#EEEFF2] px-5 py-3.5 lg:text-base font-nunito tracking-wide ${
          active && "text-primary-500 font-nunito-h1 relative"
        }`}
      >
        <div className="flex justify-center items-center gap-4 md:gap-3 lg:gap-4">
          <span className="">{menuItem.icon}</span>
          {!sidebarOpen ? 
          <span>{menuItem.name}</span>
          :
          <></>
          }
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

      <div className="flex flex-col gap-4">
        {active ? 
        
          menuItem?.subMenu ? 
            menuItem.subMenu.map((menu: any, index: any)=>(
              <NavLink key={index} to={menu.url} className={`pl-[60px] text-base font-nunito`}>
                {menu.name}
              </NavLink> 
            ))
          
            :<></>  
        
          :<></>}
        </div>

    </>
   
    
  );
}

export default MenuItem;
