import React from 'react';

type PropsTypes = { // Use PascalCase for type names
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<PropsTypes> = ({ open, onClose, children }) => {
  // Use the props here to render the modal content
  return (
    <div className={`fixes inset-0 flex justify-center items-center transition-colors ${open ? "" : "invisible"}`}
        onClick={onClose}
    > 
      <div className={` object-cover  bg-white rounded-lg shadow p-24 transition-all max-w-md ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
      onClick={(e) => e.stopPropagation()}
      >
    
        {children}
      </div>
    </div>
  );
};

export default Modal; // Make the component reusable
