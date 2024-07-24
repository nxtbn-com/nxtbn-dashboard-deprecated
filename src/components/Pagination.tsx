import { NXLeftArrow, NXRightArrow } from "../icons";

interface PaginationProps {
  totalItems: number|any;
  totalPages?: number|any
  itemsPerPage: number|any;
  currentPage: number|any;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, totalPages, itemsPerPage, currentPage, onPageChange } : PaginationProps) => {

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between md:hidden">
        <button
          onClick={()=>onPageChange(currentPage-1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={()=>onPageChange(currentPage+1)}
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div className='sm:hidden xl:block'>
          <p className="text-sm text-gray-700">
       
            <span className="font-medium">{itemsPerPage}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={()=>onPageChange(currentPage-1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous </span>
              <NXLeftArrow aria-hidden="true" className="h-5 w-5" />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => onPageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === index + 1 ? 'bg-primary-400 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                } focus:z-20 focus:outline-offset-0`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={()=>onPageChange(currentPage+1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <NXRightArrow aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
