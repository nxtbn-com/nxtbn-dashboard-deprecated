import {
    Dialog,
    DialogBackdrop,
    DialogPanel
  } from "@headlessui/react";
  
  interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
  }
  
  function CustomModal({ isOpen, onClose, children }: CustomModalProps) {
    return (
      <Dialog className="relative z-[110]" open={isOpen} onClose={onClose}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[60%] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  }
  
  
  export default CustomModal