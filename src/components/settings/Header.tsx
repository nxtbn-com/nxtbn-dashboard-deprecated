import { useLocation } from "react-router-dom";
import { NXMenu } from "../../icons";

interface HeaderProps {
  settingsSidebar: boolean;
  setSettingsSidebar: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ settingsSidebar, setSettingsSidebar }) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  const name = segments[segments.length - 1];
  const headerName = name.split('-').map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ');

  const handleMenuClick = () => {
    setSettingsSidebar(!settingsSidebar);
    console.log("opem")
  };

  return (
    <div className="flex items-center gap-3 pb-2 mh:hidden">
      <NXMenu className="h-6 w-6 cursor-pointer" onClick={handleMenuClick} />
      <strong className="text-xl">{headerName.length !== 0 ? headerName : "General"}</strong>
    </div>
  );
}

export default Header;
