'use client';
import { kanit, inter } from '@/utils/font';
import React, { useState } from 'react';


const PetProfileImg: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleButtonClick = () => {
    // ใส่ URL รูปภาพของคุณที่นี่
    const imageUrls = ['https://img5.pic.in.th/file/secure-sv1/0u.jpeg', 'https://img5.pic.in.th/file/secure-sv1/0u.jpeg', 'https://img5.pic.in.th/file/secure-sv1/0u.jpeg', 'https://img5.pic.in.th/file/secure-sv1/0u.jpeg'];

    setImages(imageUrls);
  };

  return (
    <div className="bg-purple-200 items-center">
        <div className="flex flex-col items-center justify-center">
            {/* <button onClick={handleButtonClick} className="rounded-full bg-blue-400 h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> */}
            <button onClick={handleButtonClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                <span className={`${kanit.className} text-slate-700 text-lg font-weight-800 ml-auto`}>แสดงรูปเพิ่มเติม</span>
            </button>


            <div className=" grid grid-cols-2 gap-4 justify-items-center pl-3 pr-3 ">
                    {images.map((imageUrl, index) => (
                        <img key={index} 
                        src={imageUrl} 
                        alt="Image" 
                        className="mt-5 w-auto h-auto object-center max-w-auto rounded-xl " />
                    ))}
            </div>
        </div>
        <div className="relative mb-8 "> </div>
    </div>
    
  );
};

export default PetProfileImg;
