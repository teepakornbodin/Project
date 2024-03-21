"use client";

import React, { useEffect, useState } from "react";
import { kanit, inter } from "@/utils/font";
import { useRouter } from "next/navigation";
interface IBooking {
  name: string;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
}
const StockRoomtype = ({ typeRoom }: { typeRoom: string | null }) => {
  const router = useRouter();
  const [roomData, setRoomData] = useState<IBooking[]>([]);

  const fetchRoomData = async () => {
    if (!typeRoom) {
      console.error('Type room is missing');
      return;
    }
    try {
      const response = await fetch(`/api/booking/room-type/${typeRoom}`, {
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

  return (
    <div>
    {roomData.map((room, index) => (
      <div key={index}>
        <p>{room.name}</p>
        {/* แสดงข้อมูลอื่น ๆ ของห้องพักที่ต้องการ */}
      </div>
    ))}
  </div>
);
};
export default StockRoomtype;
