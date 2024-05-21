import MenuItems from "./MenuItems";
import logo from '../../assets/nxtbn_logo_black.svg'
import FixedMenu from "./FixedMenu";

function Sidebar() {
  return (
    <aside className="w-[18%] h-screen sticky top-0 overflow-hidden border-r border-[#EEEFF2]">
      <img
        src={logo}
        alt="NXTBN logo"
        className="w-[124px] h-[49px] my-7 mx-5"
      />
      <p className="px-5 pb-2 text-base-200 text-[12px]">MENU</p>
      <MenuItems />
      <FixedMenu className="absolute w-full bottom-10" />
    </aside>
  );
}

export default Sidebar