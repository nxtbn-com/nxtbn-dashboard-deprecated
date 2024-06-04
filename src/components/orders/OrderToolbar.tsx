import { NXCalenderStar, NXDownload, NXFilter, NXSearch } from "../../icons";

function OrderToolbar() {
  return (
    <div className="flex flex-col px-2 md:px-10 md:flex md:items-center md:justify-between md:gap-5 md:py-5 border-b border-[#EEEFF2]">
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
          <span className="hidden md:block">Filters</span>
        </button>
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXCalenderStar />
          <span className="hidden md:block">April 11 - April 14</span>
        </button>
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXDownload />
          <span className="hidden md:block">Download</span>
        </button>
      </div>
    </div>
  );
}

export default OrderToolbar;
