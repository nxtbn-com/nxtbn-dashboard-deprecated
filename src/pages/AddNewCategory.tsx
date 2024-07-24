import React from "react";
import { NXAlertCircle, NXPlus } from "../icons";
import SelectStyled from "../components/Select";

function AddNewCategory() {
  const onChangeHandler = () => {};
  const style = {
    control: (provided:any, state:any) => ({
      ...provided,
      padding: '6px',
      borderRadius: '10px',

    }),
  
  }
  
  return (
    <div className="w-full flex flex-col p-[5%] md:p-10">
      <div className="bg-white rounded-lg p-4">
        <h1 className="font-nunito font-[900] text-2xl flex items-center gap-4">
          Add New Category <NXAlertCircle className="text-base-300" />
        </h1>
        <div>
          <form>
            <div className="flex flex-col sm:flex sm:flex-row gap-5">
              <div className="w-full mt-5">
                <label htmlFor="category-name">Category Name</label>
                <input
                  onChange={onChangeHandler}
                  id="category-name"
                  name="category-name"
                  type="text"
                  placeholder="Type your product name"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-gray-400 border-[2px] border-dashed"
                />
              </div>
              <div className="w-full mt-5">
                <label htmlFor="parent">Parent</label>
                <input
                  onChange={onChangeHandler}
                  id="parent"
                  name="parent"
                  type="text"
                  placeholder="Type your product name"
                  className="w-full px-5 py-3 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] placeholder:text-gray-400 border-[2px] border-dashed"
                />
              </div>
              <div className="w-full mt-5">
                <label htmlFor="Status">Status</label>
                <div className="mt-3">
                  <SelectStyled customStyles={style} />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3">
                <button
                  onClick={AddNewCategory}
                  className="flex items-center font-nunito font-[800] gap-2 px-5 py-3 bg-primary-500 text-white rounded-xl"
                >
                  <NXPlus className="mr-1" /> Add 
                </button>
              </div>
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-end gap-5 mb-5 mt-5">
              <button className="text-[#0CAF60] border border-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900]">
                Discard
              </button>
              <button
                className="text-white bg-[#0CAF60] px-10 py-3 rounded-xl font-nunito font-[900] disabled:bg-[#0caf609a]"
                // onClick={}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCategory;
