import React, { useState } from "react";
import Sidebar from "../components/settings/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/settings/Header";

const SettingsLayout = () => {
  const [settingsSidebar, setSettingsSidebar] = useState<boolean>(false);

  const handleClose = () => {
    setSettingsSidebar(false);
  };

  return (
    <div className="m-5 sm:m-10 bg-white rounded-lg h-[1400px] z-20 sm:h-full box-border">
      <div className="flex gap-8 relative">
        <div
          className={`transition-all ease-linear absolute ${
            settingsSidebar ? "w-[300px] " : "w-0 overflow-hidden"
          } mh:static mh:block mh:w-[30%] z-20 mh:p-6`}
        >
          <Sidebar handleClose={handleClose} />
        </div>
        <div className="w-full mh:w-[70%] z-10 p-6 absolute mh:static h-full bg-white">
          <Header
            settingsSidebar={settingsSidebar}
            setSettingsSidebar={setSettingsSidebar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
