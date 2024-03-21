"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
interface IBooking {
  name: string;
  mobile: string | null;
  start_date: string | null;
  end_date: string | null;
  guest: string | null;
  room_type: string;
  status: string;
}

const ReservationPageSuit = () => {
  const [formData, setFormData] = useState<IBooking>({
    name: "",
    mobile: null,
    start_date: null,
    end_date: null,
    guest: null,
    room_type: "SUIT",
    status: "ACTIVE",
  });
  const [isError, setIsError] = useState<string | null>(null);
  const router = useRouter();

  const SaveBooking = async (formData: IBooking) => {
    try {
      if (
        !formData.name ||
        !formData.mobile ||
        !formData.start_date ||
        !formData.end_date ||
        !formData.guest
      ) {
        console.error(formData);
        setIsError("Please fill all required fields!");
        return;
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
        const data = await response.json();
        router.push(`/booking/user/Bill?id=${data._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [selectedRooms, setSelectedRooms] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const storedRooms = localStorage.getItem("selectedRooms");
    const storedPrice = localStorage.getItem("price");
    if (storedRooms && storedPrice) {
      setSelectedRooms(parseInt(storedRooms, 10));
      setPrice(parseInt(storedPrice, 10));

      setFormData({
        ...formData,
        guest: storedRooms,
      });
    }
  }, []);

  const setLocalStorageData = () => {
    localStorage.setItem("name", formData.name);
    localStorage.setItem("mobile", formData.mobile || "");
    localStorage.setItem("start_date", formData.start_date || "");
    localStorage.setItem("end_date", formData.end_date || "");
    localStorage.setItem("status", formData.status);
    localStorage.setItem("selectedRooms", selectedRooms.toString());
    localStorage.setItem("guest", selectedRooms.toString());
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

    SaveBooking(formData);
    setLocalStorageData();
  };

  return (
    <div className="bg-pink-200 min-h-screen flex flex-row justify-center items-start">
      <div className=" grid grid-flow-row mt-20 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl justify-center items-center container mx-auto px-7">
        <div className=""></div>
        <div className="rounded-lg ">
          <div className="mt-14 max-w-md mx-auto bg-purple-300 rounded-3xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="bg-violet-5000 text-gray-100 font-bold py-2 px-4 rounded-lg shadow-sm flex items-center mx-auto">
              <div className=" max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden md:max-w-2xl text-black font-bold py-2 px-4">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/pink.png"
                  alt="pink.jpeg"
                />
                <p className="text-2xl text-gray-800 font-bold focus:outline-none ml-6">
                  {selectedRooms}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="ml-11 font-bold text-xl">Room Type</p>
                <p className="ml-8 text-3xl text-gray-800 font-bold ">
                  Standard
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* fullName */}
          <div className="mb-5 mt-8">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* PhoneNumber */}
          <div className="mb-5">
            <label
              htmlFor="mobile"
              className="mb-3 block text-base font-medium text-[#3a074d]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter your phone number"
              value={formData.mobile || ""}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Date */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="start_date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  name="start_date"
                  id="start_date"
                  value={formData.start_date || ""}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="end_date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  End Date
                </label>
                <input
                  id="end_date"
                  type="date"
                  name="end_date"
                  value={formData.end_date || ""}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          {isError && <p className="text-red-600 text-sm"> {isError}</p>}

          <button
            type="submit"
            className="mt-2 mb-6 submit_btn bg-black text-white rounded-full px-5 py-3 text-xl font-bold shadow-lg w-full  hover:bg-purple-300  focus:outline-none"
          >
            Book now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPageSuit;