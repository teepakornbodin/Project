"use client"

import React, { useState } from 'react';
import { kanit, inter } from "@/utils/font";
import Link from "@/node_modules/next/link";

const BookingUserSuit = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const setLocalStorageData = () => {
    const selectedRooms = selectedIndices.length;
    const price = getPriceForSelectedRooms();
    localStorage.setItem('selectedRooms', selectedRooms.toString());
    localStorage.setItem('price', price.toString());
  };

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
    setLocalStorageData();
  };

  const handleBooking = () => {
    console.log('Room booked!', selectedIndices);
    setLocalStorageData();
  };

  return (
    <div className="bg-slate-200 w-full flex flex-row justify-start items-start lg:justify-center lg:items-center">
      <div className="mt-8 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl grid grid-flow-col justify-center items-start">
        <div className="flex justify-items-center h-full w-full object-cover">
          <img
            className="justify-center rounded-3xl"
            src="https://static.wixstatic.com/media/a794d0_1b4bb9f0fb1549678af7d49855a3a153~mv2.jpeg/v1/crop/x_0,y_355,w_1242,h_1111/fill/w_394,h_353,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5421.jpeg"
            alt="cat1.jpeg"
            style={{ maxWidth: '160px', maxHeight: 'auto' }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className={`${kanit.className} font-bold text-4xl mt-5`}>Suit</p>
          <img className="" src="https://img5.pic.in.th/file/secure-sv1/star.png" alt="star.png" />
          <p className="sm:text-3xl font-bold">Number of cats/room: {selectedIndices.length}</p>
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
            className="border border-slate-500 bg-white rounded-3xl py-1 p-1 drop-shadow-lg w-24 mt-2"
            onClick={() => handleBooking()}
          >
            <p className="text-slate-600 font-bold text-xl">{getPriceForSelectedRooms()}</p>
          </button>

          <button
            className="bg-rose-300 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full mt-3 mb-1"
            onClick={() => handleBooking()}
          >
           <Link href="/booking/user/Reservationsuit">
            <p className="text-white font-bold text-xl">Click to reserve</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingUserSuit;
