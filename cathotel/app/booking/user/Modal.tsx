

import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void; // Assuming onClose is a function that takes no arguments and returns void
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center item-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {children}
    </div>
  );
}
