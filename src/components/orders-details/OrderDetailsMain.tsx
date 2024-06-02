import { Link } from "react-router-dom";
import {
  NXDollarCircle,
  NXDownArrow,
  NXLeftArrow,
  NXLocation,
  NXMail,
  NXPhone,
  NXPrint,
  NXShare,
  NXUnfulfilled,
} from "../../icons";

function OrderDetailsMain() {
  return (
    <section className="bg-secondary-100 p-10">
      {/* top icon group */}
      <div className="flex items-center justify-between">
        <Link
          to={"/orders"}
          className="bg-white flex items-center gap-2 px-5 py-3 rounded-md text-base-300 text-sm"
        >
          <NXLeftArrow className="w-5" />
          <span>Order Details</span>
        </Link>
        <div className="flex items-center gap-5">
          <button className="bg-white flex items-center gap-2 p-3 rounded-md text-base-300 text-sm">
            <NXPrint />
            <span>Print order</span>
          </button>
          <button className="bg-white flex items-center gap-2 p-3 rounded-md text-base-300 text-sm">
            <NXShare />
            Refund items
          </button>
          <button className="bg-white flex items-center gap-2 p-3 rounded-md text-base-300 text-sm">
            More actions
            <NXDownArrow className="w-5" />
          </button>
        </div>
      </div>
      {/* body */}
      <div className="flex gap-5 mt-10">
        <div className="w-[60%]">
          <div className="bg-white p-5 rounded-lg">
            <h3 className="flex items-center border-b border-[#EEEFF2] pb-5 text-[#FE964A]">
              <NXUnfulfilled className="bg-[#FFF0E6] rounded-full mr-2" />
              Unfulfilled
            </h3>
            <div className="flex gap-5 bg-secondary-100 my-7 p-5 rounded-md">
              <div className="h-12 aspect-square bg-base-200 rounded-md"></div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-bold mb-2">Pattern top with knot</h3>
                  <p className="text-base-300 text-sm">ID: 088134NT</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">$210.98</h3>
                  <p className="text-base-300 text-sm">QTY: 1</p>
                </div>
              </div>
            </div>
            <hr className="border-[#EEEFF2]" />
            <div className="flex justify-end my-7">
              <div>
                <button className="px-6 py-3 border border-[#0CAF60] text-[#0CAF60] rounded-xl font-bold text-sm mr-5">
                  Mark as fulfilled
                </button>
                <button className="px-6 py-3 border border-[#0CAF60] bg-[#0CAF60] text-white rounded-xl font-bold text-sm">
                  Create shopping label
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white p-5 rounded-lg">
            <h3 className="flex items-center border-b border-[#EEEFF2] pb-5 text-[#0CAF60]">
              <NXDollarCircle className="bg-[#E7F7EF] rounded-full mr-2" />
              Paid
            </h3>
            <table className="w-full my-5 text-base-300">
              <tbody>
                <tr>
                  <td className="py-3">Subtotal</td>
                  <td>1 Item</td>
                  <td className="text-end">$210.98</td>
                </tr>
                <tr>
                  <td className="py-3">Shipping</td>
                  <td>AU Standar Delivery (1.00 kg)</td>
                  <td className="text-end">$10.15</td>
                </tr>
                <tr>
                  <td className="py-3">Tax</td>
                  <td>GST (AU) 10%</td>
                  <td className="text-end">$2.75</td>
                </tr>
                <tr className="font-bold text-black">
                  <td className="py-5">Total</td>
                  <td></td>
                  <td className="text-end">$2.75</td>
                </tr>
                <tr className="border-t border-[#EEEFF2]">
                  <td className="pt-5">Paid by customer</td>
                  <td></td>
                  <td className="font-bold text-black text-end">$223.88</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="bg-white py-5 px-8 rounded-lg">
            <h2 className="font-nunito font-extrabold text-2xl">Customer</h2>
            <div className="flex items-center justify-between border-b border-[#EEEFF2] py-5">
              <div className="flex items-center gap-5">
                <div className="w-10 aspect-square bg-base-300 rounded-full"></div>
                <div>
                  <h2 className="font-nunito font-bold">Darcel Ballentine</h2>
                  <span className="text-sm text-base-300">10 orders</span>
                </div>
              </div>
              <NXMail className="text-[#0CAF60]" />
            </div>
            <div className="my-5">
              <div className="flex justify-between">
                <h2 className="font-nunito font-extrabold text-lg">
                  Contact Information
                </h2>
                <button className="text-[#0CAF60]">Edit</button>
              </div>
              <p className="flex gap-3 text-base-300 text-sm my-3">
                <NXMail />
                darcelballentine@mail.com
              </p>
              <p className="flex gap-3 text-base-300 text-sm mb-5">
                <NXPhone />
                (671) 555-0110
              </p>
              <hr className="border-[#EEEFF2]" />
            </div>
            <div className="my-5">
              <div className="flex justify-between">
                <h2 className="font-nunito font-extrabold text-lg">
                  Shipping Address
                </h2>
                <button className="text-[#0CAF60]">Edit</button>
              </div>
              <p className="flex gap-3 text-base-300 text-sm mb-5 mt-3">
                <NXLocation />
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
              <hr className="border-[#EEEFF2]" />
            </div>
            <div className="my-5">
              <div className="flex justify-between">
                <h2 className="font-nunito font-extrabold text-lg">
                  Billing Address
                </h2>
                <button className="text-[#0CAF60]">Edit</button>
              </div>
              <p className="flex gap-3 text-base-300 text-sm mb-5 mt-3">
                <NXLocation />
                Same as shipping address
              </p>
            </div>
          </div>

          <div className="bg-white my-5 py-5 px-8 rounded-lg">
            <div className="my-5">
              <div className="flex justify-between">
                <h2 className="font-nunito font-extrabold text-lg">
                  Note
                </h2>
                <button className="text-[#0CAF60]">Edit</button>
              </div>
              <p className="text-base-300 text-sm mb-5 mt-3">
                No notes from customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetailsMain;
