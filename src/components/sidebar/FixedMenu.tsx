import { NXHelp, NXSetting } from "../../icons";
import MenuItem from "./MenuItem";

function FixedMenu({className, sidebarOpen}: {className?: string, sidebarOpen: boolean}) {
    const menus = [
      {
        name: "Settings",
        url: "/dashboard/settings/",
        icon: <NXSetting />,
      },
      {
        name: "Get Help",
        url: "/get-help",
        icon: <NXHelp />
      },
    ];
  return (
    <div className={`border-t border-[#EEEFF2] mh:text-sm ${className}`}>
      {menus.map((item) => (
        <MenuItem menuItem={item} key={item.name} sidebarOpen={sidebarOpen}/>
      ))}
    </div>
  );
}

export default FixedMenu