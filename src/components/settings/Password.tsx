import React from "react";

const Password = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <strong className="text-lg">Password</strong>
        <span className="text-base-300 text-sm">Change or view your password.</span>
      </div>
      <form className="pt-4">
        <div className="flex flex-col w-full pt-4">
          <label htmlFor="old_password" className="text-sm text-base-300">
            Old Password
          </label>
          <input
            id="old_password"
            type="text"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
          />
        </div>
        <div className="flex flex-col w-full pt-6">
          <label htmlFor="new_password" className="text-sm text-base-300">
            New Password
          </label>
          <input
            id="new_password"
            type="text"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
          />
        </div>
        <div className="flex flex-col w-full pt-6">
          <label htmlFor="confirm_password" className="text-sm text-base-300">
            Confirm Password
          </label>
          <input
            id="confirm_password"
            type="text"
            className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
          />
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

export default Password;
