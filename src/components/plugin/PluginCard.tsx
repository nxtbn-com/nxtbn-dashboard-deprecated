import axios from "axios";
import { NXPlugin } from "../../icons";
import { useEffect, useState } from "react";
import useApi from "../../api";
import Modal from "./modal/Modal";
import { Link } from "react-router-dom";

function PluginCard() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState<PluginTypes | null>(null);

  const { pluginInstall } = useApi();

  interface PluginTypes {
    title: string;
    logo: string;
    description: string;
    url_type: string;
    home_url: string;
    documentation_url: string;
    release_api: string;
    plugin_type: string;
    tag: any;
  }

  const [plugins, setPlugins] = useState<PluginTypes[]>([]);
  
  function getPlugins() {
    axios
      .get(
        "https://raw.githubusercontent.com/nxtbn-com/plugin-static/main/plugins.json"
      )
      .then((response) => setPlugins(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getPlugins();
  }, []);


  const [zipUrl, setZipUrl] = useState("");
  const [installed,  setInstalled] = useState<any>("")

  function handleInstall(e: any, release_api: any) {
    e.preventDefault();

    axios
      .get(release_api)
      .then((response) => setZipUrl(response.data[0].zipball_url))
      .catch((error) => console.log(error));

    const formData = {
      'zip_url': zipUrl,
    };

    pluginInstall(formData)
      .then((response) => setInstalled(response))
      .catch((error) => console.log(error));

    if (installed){
      setIsModalOpen(false)
    }else{
      setIsModalOpen(true)
    }
  }



  const openModal = (plugin: PluginTypes[] | null | any) => {
    setIsModalOpen(true);
    setSelectedValue(plugin);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {plugins?.map((plugin, index) => (
        <div className="border border-[#EDF2F7] rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 text-center p-8">
            <div className="bg-[#fff5e2] h-12 w-12 rounded-lg flex justify-center items-center">
              {plugin?.logo ? (
                <img src={`${plugin.logo}`} alt="" />
              ) : (
                <NXPlugin />
              )}
            </div>

            <div className="font-poppins text-[14px]">{plugin.title}</div>
            <div className="text-base-300 font-poppins text-[12px]">
              <p>Plugins Details</p>
              <p className="text-wrap h-[80px]">{plugin.description}</p>
            </div>
            <div className="text-base-100">
              <button
                className="text-primary-400 bg-[#E7F7EF] h-[32px] w-[72px] rounded-md text-[14px]"
                onClick={() => openModal(plugin)}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        handleInstall={handleInstall}
        release_api={`${selectedValue?.release_api}`}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-[#fff5e2] h-12 w-12 rounded-lg flex justify-center items-center">
            {selectedValue?.logo ? (
              <img src={`${selectedValue.logo}`} alt="" />
            ) : (
              <NXPlugin />
            )}
          </div>
          <strong className="align-center text-2xl pb-6">
            {selectedValue?.title}
          </strong>
          <strong>Plugin Details</strong>
          <p>{selectedValue?.description}</p>
          <div className="flex flex-row gap-2">
            <strong>Plugin Type:</strong> {selectedValue?.plugin_type}
          </div>

          <div className="flex flex-row gap-2">
            <strong>Links:</strong>
            <Link
              to={`${selectedValue?.home_url}`}
              className="underline"
              target="__blank"
            >
              Home
            </Link>
            <Link
              to={`${selectedValue?.documentation_url}`}
              className="underline"
              target="__blank"
            >
              Documentation
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PluginCard;
