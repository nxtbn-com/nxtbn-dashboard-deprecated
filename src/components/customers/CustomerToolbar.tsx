import { NXFilter, NXSearch } from "../../icons";

function CustomerToolbar({
  setFilterOpen,
  filterOpen,
}: {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="px-10 flex items-center justify-between gap-5 py-5 border-b border-[#EEEFF2]">
      <div className="relative w-[90%]">
        <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by ID, product, or others..."
          className="p-[12px] bg-secondary-100 rounded-lg border-none outline-none ps-[3.1rem] w-full"
        />
      </div>
      <button
        className={`flex items-center gap-3 bg-secondary-100 px-4 py-3 rounded-md border border-[#EEEFF2] ${
          filterOpen ? "text-[#0CAF60]" : "text-base-300"
        }`}
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <NXFilter className="rotate-90" />
        Filters
      </button>
    </div>
  );
}

export default CustomerToolbar;
