import React, { useEffect, useState } from 'react';
import NxtbnModal from '../../components/Modal';
import useApi from "../../api";
import { use } from 'echarts';

interface ColorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  edit?: number;
}

function ColorModal({ isOpen, onClose, onSubmit, edit }: ColorModalProps) {
  const [formData, setFormData] = useState<any>({});

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
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-lg font-medium text-gray-900">
            {edit ? `Edit Color: ${formData.name || formData.id}` : 'Add Color'}
        </h2>
        <div className="mt-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <input
            type="color"
            id="color"
            name='code'
            value={formData.code}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
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
            Add
          </button>
        </div>
      </form>
    </NxtbnModal>
  );
}

export default ColorModal;
