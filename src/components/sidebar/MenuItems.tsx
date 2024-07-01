import MenuItem from "./MenuItem";
import useMenuItems from "./useMenuItems";


function MenuItems({sidebarOpen}: { sidebarOpen: boolean}) {
  const menuItems = useMenuItems();
  return (
    <div className="border-t border-[#EEEFF2] h-[65%] overflow-y-auto overflow-x-hidden">
      {menuItems.map((item) => (
        <MenuItem menuItem={item} key={item.name} sidebarOpen={sidebarOpen} />
      ))}
    </div>
  );
}

export default MenuItems;
