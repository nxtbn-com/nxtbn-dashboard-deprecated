import MenuItem from "./MenuItem";
import useMenuItems from "./useMenuItems";

function MenuItems() {
  const menuItems = useMenuItems();
  return (
    <div className="border-t">
      {menuItems.map((item) => (
        <MenuItem menuItem={item} key={item.name} />
      ))}
    </div>
  );
}

export default MenuItems;
