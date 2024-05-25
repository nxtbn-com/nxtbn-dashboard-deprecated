import {
  NXAlertCircle,
  NXCheck,
  NXDoubleSelect,
  NXDownArrow,
  NXPlus,
} from "../../icons";
import "./select-hide.css";

function AddNewProductMain() {
  return (
    <section className="bg-secondary-100 px-10 py-5">
      {/* top action button */}
      <div className="flex justify-end gap-5 mb-5">
        <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
          Discard
        </button>
        <button
          className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
          disabled
        >
          Save
        </button>
      </div>
      {/* body */}
      <div className="flex gap-5">
        <div className="w-[60%]">
          <div className="bg-white p-5 rounded-md">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product Information
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="my-5">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                id="product_name"
                placeholder="Type your product name"
                className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60]"
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <label htmlFor="product_description">Description</label>
                <span className="text-base-300 text-sm">53/2000</span>
              </div>
              <textarea
                placeholder="Type your product description here"
                name=""
                id="product_description"
                className="w-full px-5 py-3 h-[224px] bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60]"
              ></textarea>
            </div>
          </div>
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <label htmlFor="media">Media</label>
              <label htmlFor="media">
                <div className="mt-2 cursor-pointer border-[2px] border-dashed border-base-100 text-black font-light p-5 flex justify-center items-center flex-col rounded-xl">
                  <div className="mb-2">
                    <button className="px-5 py-2 rounded-full bg-secondary-100 text-black mr-2">
                      Upload new
                    </button>
                    <button>Select existing</button>
                  </div>
                  <div>Accept images, videos, or 3D models</div>

                  <input id="media" type="file" className="hidden" />
                </div>
              </label>
            </div>
          </div>
          {/* pricing */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">Pricing</h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="compare-price">Price</label>
                <input
                  id="compare-price"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 my-5">
              <NXCheck className="text-white bg-[#0CAF60] rounded-full" />
              <p className="font-nunito">Charge tax on this product</p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="cost_per_item">Cost per item</label>
                <input
                  id="cost_per_item"
                  type="text"
                  placeholder="$0.00"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="profit">Profit</label>
                <input
                  id="profit"
                  type="text"
                  placeholder="--"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-full">
                <label htmlFor="margin">Margin</label>
                <input
                  id="margin"
                  type="text"
                  placeholder="--"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Shipping</h1>
            </div>
            <div className="flex items-center gap-3 my-7">
              <NXCheck className="text-white bg-[#0CAF60] rounded-full" />
              <p className="font-nunito">This is a physical product</p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="weight">Weight</label>
                <input
                  id="weight"
                  type="text"
                  placeholder="0.0"
                  className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-black"
                />
              </div>
              <div className="w-[15%] relative">
                <select
                  name="unit"
                  className="w-full mt-10 px-2 py-3 bg-secondary-100 rounded-xl font-nunito outline-[#0CAF60] text-base-500 icon-hidden"
                >
                  <option value="kg">kg</option>
                  <option value="inch">inch</option>
                </select>
                <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none">
                  <NXDoubleSelect />
                </div>
              </div>
            </div>
            <hr className="border w-full my-5 border-[#C8C8C8]" />

            <button className="font-nunito font-[800] flex items-center gap-1 mt-3">
              + Add customs information
            </button>
          </div>
          {/* variant */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Variants</h1>
            </div>
            <button className="font-nunito font-[800] flex items-center gap-1 mt-3">
              + Add options like size or color
            </button>
          </div>
        </div>
        <div className="w-[40%]">
          <div className=" bg-white p-5 rounded-md">
            <div>
              <h1 className="font-nunito font-[900] text-2xl">Status</h1>
            </div>
            <div className="w-full relative">
              <select
                name="unit"
                className="w-full mt-10 px-2 py-3 bg-secondary-100 rounded-xl font-nunito outline-[#0CAF60] text-base-500 icon-hidden"
              >
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
              </select>
              <div className="absolute inset-y-0 right-0 top-10 flex items-center px-2 pointer-events-none">
                <NXDownArrow className="text-base-300 w-6 font-extrabold" />
              </div>
            </div>
          </div>
          {/* publishing */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">Publishing</h1>
              <NXAlertCircle className="text-base-300" />
            </div>
            <p className="font-bold mt-7">Sales channels</p>

            <div className="flex gap-2 items-center mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">Sales channels</label>
            </div>
            <div className="flex gap-2 items-start mt-3">
              <input type="checkbox" name="" id="sales-channel" />
              <label htmlFor="sales-channel">
                Point of Sale <br />
                <span className="text-sm">
                  Point of Sale has not been set up.
                </span>
                <br />
                <span className="text-sm">
                  Finish the remaining steps to start selling in person.
                </span>
              </label>
            </div>
            <p className="font-bold mt-7">Markets</p>

            <div className="flex gap-2 items-center mt-3">
              <input type="checkbox" name="" id="bangladesh" />
              <label htmlFor="bangladesh">Bangladesh and International</label>
            </div>
          </div>
          {/* product organization */}
          <div className=" bg-white p-5 rounded-md mt-5">
            <div className="flex items-center gap-3">
              <h1 className="font-nunito font-[900] text-2xl">
                Product organization
              </h1>
              <NXAlertCircle className="text-base-300" />
            </div>

            <div className="w-full relative mt-10">
              <label htmlFor="category">Category</label>
              <select
                name="unit"
                id="category"
                className="w-full mt-2 px-2 py-3 bg-secondary-100 rounded-md font-nunito outline-[#0CAF60] text-base-500 icon-hidden"
              >
                <option value=""></option>
                <option value="inch">inch</option>
              </select>
            </div>
            <div className="my-5">
              <label htmlFor="product_type">Product type</label>
              <input
                id="product_type"
                type="text"
                className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-md font-nunito outline-[#0CAF60]"
              />
            </div>
            <div className="my-5">
              <label htmlFor="vemdor">Vendor</label>
              <input
                id="vemdor"
                type="text"
                className="w-full px-5 py-3 bg-secondary-100 mt-3 rounded-md font-nunito outline-[#0CAF60]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNewProductMain;
