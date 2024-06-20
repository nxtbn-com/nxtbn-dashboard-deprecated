import axios from "axios";
import { NXPlugin } from "../../icons";
import { useEffect, useState } from "react";

const pluginData = [
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
  {
    pluginName: "PlugIn Name",
    description: "Which description in this section",
  },
];



function PluginCard() {

  interface PluginTypes {
    title: string;
    description: string;
    logo: string;
  }

  const [plugins, setPlugins] = useState<PluginTypes[]>([])
  useEffect(()=>{
    getPlugins()
  }, [])
  
  async function getPlugins() {
    await axios.get('https://raw.githubusercontent.com/nxtbn-com/plugin-static/main/plugins.json')
    .then((response)=>setPlugins(response.data))
    .catch((error)=>console.log(error))
  
  }

  return (
    <div className="grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {plugins.map((plugin) => (
        <div className="border border-[#EDF2F7] rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 text-center p-8">
            <div className="bg-[#fff5e2] h-12 w-12 rounded-lg flex justify-center items-center">
              {plugin?.logo?.length > 0 ? <img src={`${plugin.logo}`} alt=""/> : <NXPlugin/>}
            </div>

            <div className="font-poppins text-[14px]">{plugin.title}</div>
            <div className="text-base-300 font-poppins text-[12px]">
              <p>Plugins Details</p>
              <p className="text-wrap h-[80px]">{plugin.description}</p>
            </div>
            <div className="text-base-100">
              <button className="text-primary-400 bg-[#E7F7EF] h-[32px] w-[72px] rounded-md text-[14px]">
                Install
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PluginCard;
