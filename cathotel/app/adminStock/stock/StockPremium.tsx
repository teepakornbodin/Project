"use client";

import React, { useEffect, useState } from "react";
import { kanit, inter } from "@/utils/font";

interface IBooking {
  name: string;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
}

const StockPremium = () => {
  const [roomData, setRoomData] = useState<IBooking[]>([]);

  const fetchRoomData = async () => {
    try {
      const response = await fetch(`/api/booking/room-type/PREMIUM`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch room data");
      } else {
        const data = await response.json();
        setRoomData(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchRoomData();
  }, []);

  return (
    <div className="w-full justify-center grid grid-flow-row mt-7">
        {/* Deluxe */}
        <div className="flex flex-col justify-center items-center ">
          <div className="place-items-center bg-gray-100 h-44 w-full rounded-2xl grid grid-flow-row ml-14 mr-14">
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                Premium
              </p>
            </div>
            <div className=" bg-black h-1 w-44 "></div>
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                {roomData.length} / 10
              </p>
            </div>
          </div>
          {/* <div className="inline-flex mt-2">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              -
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              +
            </button>
          </div> */}
        </div>
      </div>

  );
};

export default StockPremium;
