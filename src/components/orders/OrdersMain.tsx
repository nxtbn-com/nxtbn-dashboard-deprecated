import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTable from "./OrderTable";
import OrderPagination from "./OrderPagination";
import OrderToolbar from "./OrderToolbar";
import PageBodyWrapper from "../../components/PageBodyWrapper";
import useApi from "../../api";
import enumChoice from "../../enum";


function OrdersMain() {
  const [orders, setOrders] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const api = useApi();


  const changeStatus = (status: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("status", status);
    newParams.set("page", "1"); // Reset to the first page when the status changes
    setSearchParams(newParams);
  };
  
  const parseSearchParams = (params: URLSearchParams) => {
    const obj: { [key: string]: any } = {};
    params.forEach((value, key) => {
      // Assuming multiple values are joined by commas
      obj[key] = value.includes(',') ? value.split(',') : value;
    });
    return obj;
  };

  const fetchOrders = () => {
    const queryObject = parseSearchParams(searchParams);
    console.log("queryObject", queryObject);
    api.getOrderList(queryObject).then(
      (response: any) => {
        setOrders(response.results);
      },
      (error) => {
        console.error(error);
      }
    );
  };


  useEffect(() => {
    console.log("searchParams", searchParams);
    fetchOrders();
  }, [searchParams]);


  useEffect(() => {
    if (!searchParams.get("page")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", "1");
      setSearchParams(newParams);
    }
  }, []);

  const currentPage = searchParams.get("page");
  const currentStatus = searchParams.get("status");

  return (
    <PageBodyWrapper>
      <div className="text-base-300 flex gap-5 border-b border-[#EEEFF2] py-5 px-10 pb-3 w-[100%] overflow-x-auto">
        <a
            onClick={() => changeStatus('')}
            className={`relative text-sm md:text-[16px] cursor-pointer ${
              currentStatus === '' ? "text-[#0CAF60] font-bold" : ""
            }`}
          >
            All
            {currentStatus === '' && (
              <span className="after:content-[''] absolute bottom-[-0.75rem] left-[-10px] w-[120%] border-b-2 border-[#0CAF60]"></span>
            )}
          </a>

        {enumChoice.orderStatus.map((status) => (
          <a
            key={status.value}
            onClick={() => changeStatus(status.value)}
            className={`relative text-sm md:text-[16px] cursor-pointer ${
              currentStatus === status.value ? "text-[#0CAF60] font-bold" : ""
            }`}
          >
            {status.label}
            {currentStatus === status.value && (
              <span className="after:content-[''] absolute bottom-[-0.75rem] left-[-10px] w-[120%] border-b-2 border-[#0CAF60]"></span>
            )}
          </a>
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
