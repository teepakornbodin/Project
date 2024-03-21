"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function ReservationPageSuit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  const [selectedRooms, setSelectedRooms] = useState(0); // กำหนดค่าเริ่มต้นเป็น 1 ห้อง
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const storedRooms = localStorage.getItem("selectedRooms");
    const storedPrice = localStorage.getItem("price");
    if (storedRooms && storedPrice) {
      setSelectedRooms(parseInt(storedRooms, 10));
      setPrice(parseInt(storedPrice, 10));
    }
  }, []);

  const setLocalStorageData = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("status", status);
  };

  return (
    <div className="bg-pink-200 min-h-screen flex flex-row justify-center items-start">
      <div className=" grid grid-flow-row mt-20 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl justify-center items-center container mx-auto px-7">
        <div className="rounded-lg ">
          <div className="mt-14 max-w-md mx-auto bg-purple-300 rounded-3xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="bg-violet-5000 text-gray-100 font-bold py-2 px-4 rounded-lg shadow-sm flex items-center mx-auto">
              <div className=" max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden md:max-w-2xl text-black font-bold py-2 px-4">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/pink.png"
                  alt="pink.jpeg"
                />
                <p className="text-2xl  text-gray-800  font-bold focus:outline-none ml-8">
                  {selectedRooms}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="ml-7 font-bold text-xl">Room Type</p>
                <p className="ml-10 text-3xl  text-gray-800  font-bold ">
                  Suit
                </p>
              </div>
            </div>
          </div>
        </div>

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        {/* PhoneNumber */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-[#3a074d]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        {/* Date */}
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Status"
            className="mb-3 block text-base font-medium text-[#3a074d]"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>

        <Link href={{
           pathname: "/booking/user/Bill",
           query: {
             name: name,
             phone: phone,
             startDate: startDate,
             endDate: endDate,
             status: status,
             selectedRooms: selectedRooms,
             price: price
           }
        }}
        >
          <div className="relative">
            <button
              type="submit"
              className="mt-2 submit_btn bg-black text-white rounded-full px-5 py-3 text-xl font-bold shadow-lg w-full  hover:bg-purple-300  focus:outline-none"
              onClick={() => setLocalStorageData()}
            >
              Book now
            </button>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default ReservationPageSuit;