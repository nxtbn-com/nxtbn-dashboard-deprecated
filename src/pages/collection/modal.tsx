import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import NxtbnModal from '../../components/Modal';
import useApi from "../../api";
import { NXForm, InputField, InputColor } from "../../components/common";
import { handleRetriveError } from "../../utils";


interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  edit?: number;
}

function CollectionModal({ isOpen, onClose, onSubmit, edit }: CollectionModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [errorData, setErrorData] = useState<any>({});

  const api = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (edit) {
        api.updateCollection(edit, formData).then((response: any) => {
            onSubmit();
            onClose();
            toast.success("Color Updated Successfully!");
          }, (error) => {
            toast.error("Color update is failed!")
          });
      
    } else {
        api.createCollection(formData).then((response: any) => {
            onSubmit();
            toast.success("Color Created Successfully!");
            onClose();
        }, (error) => {
            setErrorData(error.response.data);
            toast.error("Color creation is failed!")
        });
    }
    
    
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (edit) {
        api.getCollectionById(edit).then((response:any) => {
          setFormData(response);
        }, handleRetriveError);
    }
   
  }, [edit]);



  return (
    <NxtbnModal isOpen={isOpen} onClose={onClose}>
      <NXForm
        onSubmit={handleSubmit}
        className="p-6"
        title={edit ? `Edit Collection: ${formData.name || formData.id}` : 'Add Collection'}
        nonFieldError={{}}
      >
        <div className="mt-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <InputField
            type="text"
            id="name"
            name='name'
            errorData={errorData}
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-4">
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <strong className="text-[14px]">Active</strong>
                    <span className="text-[12px] text-base-300">If a collection or in-active</span>
                </div>
                <label className="inline-flex items-center me-5 cursor-pointer">
                    <input  onChange={handleChange} name="has_variant" type="checkbox" checked={formData.is_active}  className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
            </div>
        </div>
        <div className="mt-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <InputField
            type="text"
            id="name"
            name='description'
            errorData={errorData}
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-3 inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-primary-600 text-base font-medium text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            {edit ? 'Update' : 'Create'}
          </button>
        </div>
      </NXForm>
    </NxtbnModal>
  );
}

export default CollectionModal;
