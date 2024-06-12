import { NXFilter, NXSearch } from "../../icons";

function UserToolbar() {
  return (
    <div className="pt-5 ml:gap-5 ml:py-5 flex flex-row items-center ml:justify-between border-b border-[#EEEFF2]">
      <div className="relative w-full md:w-[60%]">
        <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by ID, product, or others..."
          className="p-[12px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-full"
        />
      </div>
      <div className="flex gap-2 justify-center">
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXFilter />
          <span className="hidden ml:block md:text-sm lg:text-base">
            Filters
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserToolbar;
