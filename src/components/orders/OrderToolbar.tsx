import { NXCalenderStar, NXDownload, NXFilter, NXSearch } from "../../icons";

function OrderToolbar() {
  return (
    <div className="px-10 flex items-center justify-between gap-5 py-5 border-b border-[#EEEFF2]">
      <div className="relative w-[60%]">
        <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by ID, product, or others..."
          className="p-[12px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-full"
        />
      </div>
      <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
        <NXFilter />
        Filters
      </button>
      <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
        <NXCalenderStar />
        April 11 - April 14
      </button>
      <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
        <NXDownload />
        Download
      </button>
    </div>
  );
}

export default OrderToolbar