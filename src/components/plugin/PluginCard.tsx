import axios from "axios";
import { Link } from "react-router-dom";
import { NXPlugin } from "../../icons";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import useApi from "../../api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "60%",
  },
};

Modal.setAppElement("#root");

function PluginCard() {
  interface PluginTypes {
    title?: string;
    logo?: string;
    description?: string;
    url_type?: string;
    url?: string;
    home_url?: string;
    documentation_url?: string;
    release_api?: string;
    plugin_type?: string;
    tag?: [];
  }

  const { pluginInstall } = useApi();

  const [plugins, setPlugins] = useState<PluginTypes[]>([]);
  
  useEffect(() => {
    getPlugins();
  }, []);

  async function getPlugins() {
    await axios
      .get(
        "https://raw.githubusercontent.com/nxtbn-com/plugin-static/main/plugins.json"
      )
      .then((response) => setPlugins(response.data))
      .catch((error) => console.log(error));
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  const [selectedPlugin, setSelectedPlugin] = useState<PluginTypes | null>(
    null
  );

  const openModal = (plugin: any) => {
    setIsOpen(true);

    setSelectedPlugin(plugin);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  async function handleInstall(e: any, release_api: any) {
    e.preventDefault();

    try {
      const response = await axios.get(release_api);
      const zipUrl = response.data[0].zipball_url;

      const formData = {
        zip_url: zipUrl,
      };

      const installResponse = await pluginInstall(formData);

      if (installResponse) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {plugins?.map((plugin, index) => (
        <div className="border border-[#EDF2F7] rounded-md" key={index}>
          <div className="flex flex-col justify-center items-center gap-4 text-center p-8">
            <div className="bg-[#fff5e2] h-12 w-12 rounded-lg flex justify-center items-center">
              {plugin?.logo ? (
                <img src={`${plugin.logo}`} alt="" />
              ) : (
                <NXPlugin />
              )}
            </div>
            <div>{}</div>

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
          <div className="flex justify-center items-center relative">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="flex justify-center">
                <div className="flex justify-center items-center bg-[#fff5e2] h-12 w-12 rounded-lg">
                  {plugin?.logo ? (
                    <img src={`${plugin.logo}`} alt="" />
                  ) : (
                    <NXPlugin />
                  )}
                </div>
              </div>
              <div className="flex justify-center pt-3">
                <strong className="text-2xl">{selectedPlugin?.title}</strong>
              </div>
              <div className="pt-8 flex flex-col gap-4 h-[270px] sm:h-[300px]">
                <div className="">
                  {selectedPlugin?.description} <br />
                </div>
                <div>
                  <strong>Plugin Type: </strong> {selectedPlugin?.plugin_type}
                </div>
                {selectedPlugin?.tag}
                <div className="flex flex-row gap-2">
                  <strong>Links:</strong>
                  <Link
                    to={`${selectedPlugin?.home_url}`}
                    className="underline"
                    target="__blank"
                  >
                    Home
                  </Link>
                  <Link
                    to={`${selectedPlugin?.documentation_url}`}
                    className="underline"
                    target="__blank"
                  >
                    Documentation
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col-reverse items-center gap-5 sm:flex sm:flex-row sm:justify-between sm:gap-4 md:flex md:flex-row md:justify-end md:items-center md:gap-6">
                  <button
                    className="text-[#FD6A6A] bg-[#FFF0F0] h-[32px] w-full sm:w-[150px] rounded-md text-[14px]"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-primary-400 bg-[#E7F7EF] h-[32px] w-full sm:w-[150px] rounded-md text-[14px]"
                    onClick={(e) =>
                      handleInstall(e, selectedPlugin?.release_api)
                    }
                  >
                    Install
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PluginCard;
