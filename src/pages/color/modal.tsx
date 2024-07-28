import React, { useEffect, useState } from 'react';
import NxtbnModal from '../../components/Modal';
import useApi from "../../api";
import { NXForm, InputField, InputColor } from "../../components/common";


interface ColorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  edit?: number;
}

function ColorModal({ isOpen, onClose, onSubmit, edit }: ColorModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [errorData, setErrorData] = useState<any>({});

  const api = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (edit) {
        api.updateColor(edit, formData).then((response: any) => {
            onSubmit();
          onClose();
          }, (error) => {
      
          });
      
    } else {
        api.createColor(formData).then((response: any) => {
            onSubmit();
          onClose();
          }, (error) => {
            setErrorData(error.response.data);
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
        api.getColorById(edit).then((response:any) => {
            setFormData(response);
        }, (error) => {
            //
        })
    }
   
  }, [edit]);



  return (
    <NxtbnModal isOpen={isOpen} onClose={onClose}>
      <NXForm
        onSubmit={handleSubmit}
        className="p-6"
        title={edit ? `Edit Color: ${formData.name || formData.id}` : 'Add Color'}
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
          <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <div className="flex items-center space-x-4">
            <InputColor
              id="color"
              name='code'
              value={formData.code}
              errorData={errorData}
              onChange={handleChange}
            />
          </div>
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
            Add
          </button>
        </div>
      </NXForm>
    </NxtbnModal>
  );
}

export default ColorModal;
