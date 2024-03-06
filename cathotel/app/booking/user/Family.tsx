"use client"

import React, { useState } from 'react';
import { kanit, inter } from "@/utils/font";

const BookingUserFamily = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const getPriceForSelectedRooms = () => {
    const prices = [200, 240, 370, 420];
    const selectedRooms = selectedIndices.length;
    return selectedRooms > 0 ? prices[selectedRooms - 1] : 0;
  };

  const handleButtonClick = (index: number) => {
    let updatedSelectedIndices: number[] = [];

    for (let i = 0; i <= index; i++) {
      updatedSelectedIndices.push(i);
    }

    setSelectedIndices(updatedSelectedIndices);
  };

  const handleBooking = () => {
    console.log('Room booked!', selectedIndices);
  };

  return (
    <div className="bg-white w-full flex flex-row justify-start items-start">
      <div className="mt-8 ml-7 mr-7 rounded-3xl bg-neutral-300 grid grid-flow-col justify-center items-start">
        <div className="flex justify-items-center">
          <img
            className="justify-center rounded-3xl"
            src="https://img2.pic.in.th/pic/cat1.jpeg"
            alt="cat1.jpeg"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className={`${kanit.className} font-bold text-4xl mt-5`}>Family</p>
          <img className="" src="https://img5.pic.in.th/file/secure-sv1/star.png" alt="star.png" />
          <p className="sm:text-3xl font-bold">จำนวนน้องแมว/ห้อง: {selectedIndices.length}</p>
          <div className="grid grid-flow-col mr-4 ml-4">
            {[0, 1, 2, 3].map((index) => (
              <img
                key={index}
                src={selectedIndices.includes(index) ? 'https://img2.pic.in.th/pic/pink.png' : 'https://img2.pic.in.th/pic/buttonnull.png'}
                alt={selectedIndices.includes(index) ? 'pink.png' : 'buttonnull.png'}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
          <button
            className="bg-sky-400 rounded-3xl py-2 p-1 drop-shadow-lg"
            onClick={() => handleBooking()}
          >
            <p className="text-white font-bold text-xl">{getPriceForSelectedRooms()}</p>
          </button>

          <button
            className="bg-sky-400 rounded-3xl py-2 p-1 drop-shadow-lg"
            onClick={() => handleBooking()}
          >
            <p className="text-white font-bold text-xl">คลิกเพื่อจอง</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingUserFamily;
