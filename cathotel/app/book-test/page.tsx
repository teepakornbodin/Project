"use client";
import React from "react";
import { useState, useEffect } from "react";

interface IBooking {
  name: string;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
}

const Booking = () => {
  const [formData, setFormData] = useState<IBooking>({
    name: "",
    start_date: null,
    end_date: null,
    guest: null,
  });
  const [isError, setIsError] = useState<string | null>(null);

  const SaveBooking = async (formData: IBooking) => {
    try {
      if (
        !formData.name &&
        !formData.start_date &&
        !formData.end_date &&
        !formData.guest
      ) {
        setIsError("Please fill all input!");
      }

      const response = await fetch(`/api/booking`, {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    SaveBooking(formData);
  };

  return (
    <div className="bg-gradient-to-b  from-white via-transparent to-purple-200 h-screen flex flex-col justify-center  items-center">
      <div className={` flex justify-center flex-col w-96 p-6`}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                ชื่อนามสกุล
              </label>
              <input
                type="text"
                placeholder="ระบุชื่อ"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                วันที่เข้าพัก
              </label>
              <input
                type="datetime-local"
                placeholder=""
                value={formData.start_date || ""}
                name="start_date"
                onChange={handleChange}
                className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                วันที่ออก
              </label>
              <input
                type="datetime-local"
                placeholder=""
                value={formData.end_date || ""}
                name="end_date"
                onChange={handleChange}
                className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guests
              </label>
              <input
                type="number"
                placeholder=""
                value={formData.guest || ""}
                name="guest"
                onChange={handleChange}
                className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            {isError && <p className="text-red-600 text-sm"> {isError}</p>}

            <div className="flex flex-col mt-12">
              <button className="mb-2 appearance-none block w-full bg-blue-500 text-white border border-gray-200 rounded py-3 px-4 leading-tight">
                จองห้องพัก
              </button>
            </div>
            <div className="flex flex-col">
              <button className="mb-2 appearance-none block w-full border-blue-500 text-blue-500 border  rounded py-3 px-4 leading-tight">
                ยกเลิก
              </button>
            </div>
            {JSON.stringify(formData)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
