import React, { useEffect, useState } from 'react';
import NxtbnModal from '../../components/Modal';
import useApi from "../../api";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory: (name: string, description: string) => void;
  isEdit?: boolean;
  parentData?: any
}

function CategoryModal({ isOpen, onClose, onAddCategory, isEdit, parentData }: CategoryModalProps) {
  const [formData, setFormData] = useState({})

  const api = useApi();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.createCategory(formData).then((response: any) => {

    }, (error) => {

    });

    onClose();
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  useEffect(() => {

    if (parentData.id) {
      setFormData({parent: parentData.id})
    }
    
  }, [parentData]);

  return (
    <NxtbnModal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-lg font-medium text-gray-900"> {parentData.id ? `Add Subcategory for ${parentData.name}` : `Add Category`}</h2>
        <div className="mt-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name='description'
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
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

export default CategoryModal;
