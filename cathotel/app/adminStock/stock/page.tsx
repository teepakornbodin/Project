"use client";

import React, { useEffect, useState } from "react";
import StockDeluxe from "./StockDeluxe";
import StockStandard from "./StockStandard";
import StockSuperior from "./StockSuperior";
import StockSuit from "./StockSuit";
import { kanit, inter } from "@/utils/font";
import StockPremium from "./StockPremium";
import { useRouter } from "next/navigation";
interface IBooking {
  name: string;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
}

const RoomType = () => {
  const router = useRouter();
  const [roomData, setRoomData] = useState<IBooking[]>([]);

  const fetchRoomData = async () => {
    try {
      const response = await fetch(`/api/booking/room-type/`, {
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
    <>
      <div className="bg-purple-200 min-h-screen grid-flow-row justify-center">

        <div className="bg-blue-300 rounded-b-3xl h-32 w-screen flex justify-center items-center ">
        <button onClick={() => router.push(`/`)} className="" ><img src="https://img5.pic.in.th/file/secure-sv1/union-1.png" alt="union-1.png" /></button>
          <div className="justify-center ">
            <p
              className={`${inter.className} text-slate-400 text-lg font-bold w-20 text-center `}
            >
              Stock
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <StockStandard />
          <StockDeluxe />
          <StockSuperior />
          <StockPremium />
          <StockSuit />
        </div>
      </div>
    </>
  );
};

export default RoomType;
