import { useState } from "react";

function CustomerFilter() {
    const [inputType, setInputType] = useState("text");
  return (
    <>
      <div className="flex items-center gap-5 px-10 py-5 border-b">
        <div className="w-full">
          <label
            htmlFor="location"
            className="font-nunito font-extrabold text-xl"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md"
            placeholder="State or province"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="amount_spent"
            className="font-nunito font-extrabold text-xl"
          >
            Amount Spent
          </label>
          <input
            type="text"
            id="amount_spent"
            className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md"
            placeholder="> $1,000"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="order_date"
            className="font-nunito font-extrabold text-xl"
          >
            Order date
          </label>
          <input
            type={inputType}
            id="order_date"
            placeholder="Select date"
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
            className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md text-base-300"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="product_type"
            className="font-nunito font-extrabold text-xl"
          >
            Type of Products
          </label>
          <input
            type="select"
            id="product_type"
            className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md"
            placeholder="All Products"
          />
        </div>
      </div>
    </>
  );
}

export default CustomerFilter