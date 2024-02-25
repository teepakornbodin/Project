"use client";

import React, { useEffect, useState } from "react";

interface IBooking {
  name: string;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
}
const RoomType = ({ params }: { params: { slug: string } }) => {
  const [roomData, setRoomData] = useState<IBooking[]>([
    {
      name: "",
      start_date: null,
      end_date: null,
      guest: null,
    },
  ]);

  const fetchRoomData = async () => {
    try {
      const response = await fetch(`/api/booking/room-type/${params.slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (!response.ok) {
      } else {
        const data = await response.json();
        setRoomData(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    if (params.slug) {
      fetchRoomData();
    }
  }, [params.slug]);

  return (
    <div className="flex flex-col w-full h-full justify-center text-center center-center">
      <h2>
        {params.slug} Total: {roomData.length} ห้อง
      </h2>
      {roomData.map((item, index) => (
        <div
          className="w-full h-full bg-green-400 flex flex-col   border-black border-2 mb-4"
          key={index}
        >
          <p className="font-semibold">{item?.name || "N/A"}</p>
          <p>
            {new Date(item?.start_date || "").toLocaleDateString() || "N/A"}
          </p>
          <p>{new Date(item?.end_date || "").toLocaleDateString() || "N/A"}</p>
          <p>{item?.guest || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomType;
