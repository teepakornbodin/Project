// Popup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => (
   
        <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
            <div className="relative container m-auto px-6">
                <div className="m-auto md:w-7/12">
                    <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
                        <div className=" mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white">
                        <img 
                        className='mt-14'
                        src="https://img2.pic.in.th/pic/431036960_253183594532026_4415475482363021783_n-1.png"></img>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                <h2 className="mt-4 mb-3 text-2xl text-cyan-900 dark:text-white font-bold flex justify-center">
                                    Confirmed 
                                </h2>
                            </div>
                            <div className="mt-1">
                        <p className="text-sm text-gray-500">
                        The reservation is complete.
                        </p>
                    </div>

                    
                    <div className="mt-5 sm:mt-6">
                <button
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-gray-400  sm:text-sm"
                 >OK
                 
                </button>
            </div>
            
      
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

);

export default Popup;