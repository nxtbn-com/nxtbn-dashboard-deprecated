import React from "react";

const LinkAccount = () => {
  return (
    <div>
       <div className="flex flex-col gap-2">
        <strong className="text-lg">Link Account</strong>
        <span className="text-base-300 text-sm">These social profiles will appear on your website</span>
      </div>
      <form className="pt-4">
        <div className="flex flex-col sm:flex sm:flex-row justify-between gap-4">
          <div className="flex flex-col w-full pt-4">
            <label htmlFor="twitter" className="text-sm text-base-300">
              Twitter
            </label>
            <input
              id="twitter"
              type="text"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
          </div>
          <div className="flex flex-col w-full pt-4">
            <label htmlFor="facebook" className="text-sm text-base-300">
              Facebook
            </label>
            <input
              id="facebook"
              type="text"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex sm:flex-row justify-between gap-4 pt-4">
          <div className="flex flex-col w-full pt-4">
            <label htmlFor="instagram" className="text-sm text-base-300">
              Instagram
            </label>
            <input
              id="instagram"
              type="text"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
          </div>
          <div className="flex flex-col w-full pt-4">
            <label htmlFor="youtube" className="text-sm text-base-300">
              Youtube
            </label>
            <input
              id="youtube"
              type="text"
              className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <button
            className="bg-primary-500 py-2 px-5 w-full md:w-[200px] text-white rounded-md"
            disabled
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkAccount;
