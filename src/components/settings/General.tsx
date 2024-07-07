import SelectStyled from "../Select";


const General = () => {
  return (
    <div className="h-full bg-white">
      <div className="bg-white">
        <div className="bg-white">
          <div className="bg-white">
            <h3 className="font-bold text-[18px]">Store Details</h3>
            <p className="text-base-300 text-sm py-2">
              Salesline and your customers will use this information to contact
              you.
            </p>
            <form className="pt-4">
              <div className="flex flex-col sm:flex sm:flex-row justify-between gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="store_name" className="text-sm text-base-300">
                    Store Name
                  </label>
                  <input
                    id="store_name"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="industry" className="text-sm text-base-300">
                    Industry
                  </label>
                  <input
                    id="industry"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex sm:flex-row justify-between gap-2 py-6">
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="store_currency"
                    className="text-sm text-base-300"
                  >
                    Store Currency
                  </label>
                  <SelectStyled />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label htmlFor="timezone" className="text-sm text-base-300">
                    Timezone
                  </label>
                  <SelectStyled />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="weight_unit"
                    className="text-sm text-base-300"
                  >
                    Weight Unit
                  </label>
                  <SelectStyled />
                </div>
              </div>
            </form>
          </div>
          <div className="pt-4">
            <h3 className="font-bold text-[18px]">Store Address</h3>
            <p className="text-base-300 text-sm py-2">
              This address will appear on your invoices.
            </p>
            <form className="pt-4">
              <div className="flex justify-between">
                <div className="flex flex-col w-full">
                  <label htmlFor="store_name" className="text-sm text-base-300">
                    Store Name
                  </label>
                  <input
                    id="store_name"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex sm:flex-row gap-4 py-6">
                <div className="flex flex-col w-full">
                  <label htmlFor="apartment" className="text-sm text-base-300">
                    Apartment, suite, or etc.
                  </label>
                  <input
                    id="apartment"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="address" className="text-sm text-base-300">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex sm:flex-row justify-between gap-2 pb-4">
                <div className="flex flex-col gap-3 w-full">
                  <label htmlFor="city" className="text-sm text-base-300">
                    City
                  </label>
                  <SelectStyled />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <label
                    htmlFor="country_or_region"
                    className="text-sm text-base-300"
                  >
                    Country or Region
                  </label>
                  <SelectStyled />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="postal_code"
                    className="text-sm text-base-300"
                  >
                    Postal Code
                  </label>
                  <input
                    id="postal_code"
                    type="text"
                    className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button
          className="bg-primary-500 py-2 px-5 w-full md:w-[200px] text-white rounded-md"
          disabled
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default General;
