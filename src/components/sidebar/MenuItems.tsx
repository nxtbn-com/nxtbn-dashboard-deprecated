import MenuItem from "./MenuItem";
import useMenuItems from "./useMenuItems";

function MenuItems() {
  const menuItems = useMenuItems();
  return (
    <div className="border-t border-[#EEEFF2] h-[65%] overflow-y-auto">
      {menuItems.map((item) => (
        <MenuItem menuItem={item} key={item.name} />
      ))}
    </div>
  );
}

export default MenuItems;
