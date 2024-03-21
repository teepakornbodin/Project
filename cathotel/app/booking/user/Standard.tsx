"use client"
import Link from "@/node_modules/next/link";
import React, { useState } from 'react';
import { kanit, inter } from "@/utils/font";
import { useNavigate } from 'react-router-dom';
import ReservationStand from "./ReservationStand/ReservationStandard";
const BookingUser = () => {
  
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const getPriceForSelectedRooms = () => {
    const prices = [170, 210, 350, 400];
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
  
    <div className=" bg-slate-200 w-full flex flex-row justify-start items-start lg:justify-center lg:items-center">
      <div className="mt-8 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl grid grid-flow-col justify-center items-start">
        <div className="flex justify-items-center h-full w-full object-cover">
          <img
            className="justify-center rounded-3xl"
            src="https://img2.pic.in.th/pic/cat1.jpeg"
            alt="cat1.jpeg"
            style={{ maxWidth: '160px', maxHeight: 'auto' }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className={`${kanit.className} font-bold text-4xl mt-5`}>Standard</p>
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
           <Link href="/booking/user/ReservationStand">
            <p className="text-white font-bold text-xl">Click to reserve</p>
            </Link>
          </button>
        </div>
      </div>
      <div></div>
    </div>
    
  

  );
};

export default BookingUser;
