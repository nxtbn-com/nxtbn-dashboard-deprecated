import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  handleInstall: (e:any, release_api:any) => void;
  release_api: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, handleInstall, release_api }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center border-b p-4">

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-between border-t p-4">
          <button
            className="text-[#FD6A6A] bg-[#FFF0F0] h-[32px] w-[150px] rounded-md text-[14px]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-primary-400 bg-[#E7F7EF] h-[32px] w-[150px] rounded-md text-[14px]"
            onClick={(e)=>handleInstall(e, release_api)}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
