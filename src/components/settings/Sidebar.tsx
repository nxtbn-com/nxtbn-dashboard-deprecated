import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  NXSettings,
  NXUserAdmin,
  NXDollarCircle2,
  NXTablerLink,
  NXLock,
  NXbell,
  NXCross,
} from "../../icons"; // Import your icons here

interface SidebarProps {
  handleClose: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({handleClose}) => {
  const { pathname } = useLocation();
  return (
    <div className="bg-white mh:bg-transparent border-r-2 mh:border-none mh:shadow-none h-screen">
      <div className="flex justify-end p-2 cursor-pointer mh:hidden" onClick={handleClose}><NXCross className="h-5"/></div>
      <ul className="mh:block">
        <li>
          <NavLink
            to="/dashboard/settings/"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/" ? "bg-secondary-100" : ""
            } bg-slate-20`}
          >
            <NXSettings />
            General
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/settings/account"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/account"
                ? "bg-secondary-100"
                : ""
            } bg-slate-20`}
          >
            <NXUserAdmin />
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/settings/payment-and-billing"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/payment-and-billing"
                ? "bg-secondary-100"
                : ""
            } bg-slate-20`}
          >
            <NXDollarCircle2 />
            Payment and billing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/settings/link-account"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/link-account"
                ? "bg-secondary-100"
                : ""
            } bg-slate-20`}
          >
            <NXTablerLink />
            Link Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/settings/password"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/password"
                ? "bg-secondary-100"
                : ""
            } bg-slate-20`}
          >
            <NXLock />
            Password
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/settings/push-notification"
            onClick={handleClose}
            className={`font-bold text-sm flex items-center gap-4 py-4 px-2 mb-1 rounded-md  hover:bg-secondary-100 ${
              pathname === "/dashboard/settings/push-notification"
                ? "bg-secondary-100"
                : ""
            } bg-slate-20`}
          >
            <NXbell />
            Push notification
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
