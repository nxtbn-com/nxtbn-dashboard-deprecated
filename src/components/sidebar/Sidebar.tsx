import MenuItems from "./MenuItems";
import logo from '../../assets/nxtbn_logo_black.svg'

function Sidebar() {
  return (
    <aside className="w-[18%] h-screen sticky top-0 border-r">
      <img src={logo} alt="NXTBN logo" className="w-[124px] h-[49px] my-7 mx-5" />
      <p className="px-5 pb-2 text-base-200 text-[12px]">MENU</p>
      <MenuItems />
    </aside>
  );
}

export default Sidebar