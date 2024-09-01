import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTable from "./OrderTable";
import OrderPagination from "./OrderPagination";
import OrderToolbar from "./OrderToolbar";
import PageBodyWrapper from "../../components/PageBodyWrapper";
import useApi from "../../api";

const pageChoice = [
  {
    title: "All Orders",
    value: "all-orders",
  },
  {
    title: "Shipping",
    value: "shipping",
  },
  {
    title: "Completed",
    value: "completed",
  },
  {
    title: "Canceled",
    value: "canceled",
  },
];

function OrdersMain() {
  const [orders, setOrders] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('page')); // Output should be 'all-orders'

  const api = useApi();


  const changeStatus = (status: string) => {
    setSearchParams(new URLSearchParams({ status: status }));
  };

  // useEffect(() => {
  //   if (searchParams.get("page") === null) {
  //     setSearchParams(new URLSearchParams({ page: "all-orders" }));
  //   }
  // }, [setSearchParams, searchParams]);

  const currentPage = searchParams.get("page");

  const fetchOrders = () => {
    api.getOrderList().then((response: any) => {
      // console.log(response);
      setOrders(response.results);
      }, (error) => {
        console.error(error);
      }
      );
    };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <PageBodyWrapper>
        <div className="text-base-300 flex gap-5 border-b border-[#EEEFF2] py-5 px-10 pb-3 w-[100%] overflow-x-auto">
          {pageChoice.map((page) => (
            <button
              key={page.value}
              onClick={() => changeStatus(page.value)}
              className={`relative text-sm md:text-[16px] ${
                currentPage === page.value && "text-[#0CAF60] font-bold"
              }`}
            >
              {page.title}
              {currentPage === page.value && (
                <span className="after:content-[''] absolute bottom-[-0.75rem] left-[-10px] w-[120%] border-b-2 border-[#0CAF60]"></span>
              )}
            </button>
          ))}
        </div>

        <OrderToolbar />
        <div className="px-1">
          <OrderTable orders={orders} />
        </div>
        
        <OrderPagination />
      </PageBodyWrapper>
  );
}

export default OrdersMain;
