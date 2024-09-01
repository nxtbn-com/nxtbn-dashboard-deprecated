import { FC } from 'react';
import { NXDownArrow, NXLeftArrow, NXRightArrow } from '../../icons';

interface PaginatorProps {
  data: any;
  onPageChange?: (page: number | any) => void;
}

const Paginator: FC<PaginatorProps> = ({ data, onPageChange }) => {
  return (
    <div className="px-10 py-6 flex flex-col justify-center gap-4 ml:flex ml:flex-row ml:items-center ml:justify-between">
      <div className="flex justify-center items-center ml:flex ml:items-center gap-5">
        {/* <span className="text-sm text-base-300">Show result: </span> */}
      </div>
      <div className=" flex items-center gap-2 text-base-300">
        <button onClick={() =>  onPageChange?.(data?.previous_page_number)} >
          <NXLeftArrow className="w-5" />
        </button>

        {data?.current_pagination_step?.page_links?.map((page: any, index: number) => (
          <button 
            onClick={() => onPageChange?.(page[1])} 
            key={index} 
            className={`w-10 ${page[2] ? "text-[#0CAF60] bg-[#E7F7EF] w-10 rounded-md aspect-square font-bold" : ''}`}
          >
            {page[1]}
          </button>
        ))}
        
        <button onClick={() => onPageChange?.(data?.next_page_number)}>
          <NXRightArrow className="w-5" />
        </button>
      </div>
    </div>
  );
}

export default Paginator;
