import React, { useState } from "react";
import { NXPen } from "../../icons";

const Account = () => {
  const [image, setImage] = useState<any | null>("");

  const onChangeImage = (e: any) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <div className="flex flex-col gap-2 z-40">
        <strong className="text-lg">Account Setting</strong>
        <span className="text-base-300 text-sm"> View and update your account details, profile, and more.</span>
      </div>
      <form className="pt-8">
        <div>
          <div className="h-[200px] w-[200px] rounded-full relative">
            <img
              src={`${
                image
                  ? URL.createObjectURL(image)
                  : "https://i.ibb.co/LdBPmkr/Avatar.png"
              }`}
              alt=""
              className="h-[200px] w-[200px] rounded-full border border-base-200 object-cover"
            />
            <label
              htmlFor="change_image"
              className="absolute bottom-6 right-1 w-8 h-8 rounded-full bg-primary-500 flex justify-center items-center p-2 cursor-pointer"
            >
              <NXPen className="h-6 w-6 z-50 " />
            </label>
            <input
              id="change_image"
              type="file"
              className="hidden"
              onChange={(e) => onChangeImage(e)}
            />
          </div>
          <div className="flex flex-col sm:flex sm:flex-row justify-between gap-4 pt-6">
            <div className="flex flex-col w-full">
              <label htmlFor="first_name" className="text-sm text-base-300">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="last_name" className="text-sm text-base-300">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row gap-4 py-6">
            <div className="flex flex-col w-full">
              <label htmlFor="company_name" className="text-sm text-base-300">
                Company / Store Name
              </label>
              <input
                id="company_name"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="designation" className="text-sm text-base-300">
                Designation
              </label>
              <input
                id="designation"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row  justify-between gap-2 pb-4">
            <div className="flex flex-col gap-3 w-full">
              <label
                htmlFor="email"
                className="text-sm text-base-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-5 py-3 bg-secondary-50 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="text-sm text-base-300">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-md font-nunito outline-[#0CAF60] border-[2px] border-dashed"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-primary-500 py-2 px-5 w-full md:w-[200px] text-white rounded-md"
            
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
