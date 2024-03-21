"use client";

import ReservationStandard from './ReservationStandard';
import React, { useEffect, useState } from "react";

interface IBooking {
  name: string;
  mobile: string | null;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
  room_type: string;
  status: string;
}

const Page = () => {
  const [formData, setFormData] = useState<IBooking>({
    name: "",
    mobile: null,
    start_date: null,
    end_date: null,
    guest: null,
    room_type: "STANDARD",
    status: "ACTIVE",
  });
  const [isError, setIsError] = useState<string | null>(null);

  const SaveBooking = async (formData: IBooking) => {
    try {
      if (
        !formData.name ||
        !formData.mobile ||
        !formData.start_date ||
        !formData.end_date ||
        !formData.guest
      ) {
        setIsError("Please fill all required fields!");
        return;
      }

      const response = await fetch(`/api/booking/route`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        setIsError(null);

        const data: string = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReservationStandard />
  );
}

export default Page;
