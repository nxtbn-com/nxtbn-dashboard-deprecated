import { NXHelp, NXSetting } from "../../icons";
import MenuItem from "./MenuItem";

function FixedMenu({className}: {className?: string}) {
    const menus = [
      {
        name: "Settings",
        url: "/settings",
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
        <MenuItem menuItem={item} key={item.name} />
      ))}
    </div>
  );
}

export default FixedMenu