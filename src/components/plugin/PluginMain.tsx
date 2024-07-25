import { NXPlus, NXSearch } from "../../icons";
import PluginCard from "./PluginCard";
import PageBodyWrapper from "../../components/PageBodyWrapper";


function PluginMain() {


  return (
      <PageBodyWrapper>
        <section className="flex flex-row justify-between items-center p-6">
          <div className="relative w-full md:w-[60%]">
            <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ..."
              className="p-[12px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-full"
            />
          </div>
          <div>
            <button className="bg-primary-500 text-white flex flex-row gap-2 px-6 py-4 rounded-lg font-poppins">
              <NXPlus />
              <span className="hidden sm:block">Add Plugins</span>
            </button>
          </div>
        </section>
        <section>
            <PluginCard />
        </section>
     
    </PageBodyWrapper>
  );
}

export default PluginMain;
