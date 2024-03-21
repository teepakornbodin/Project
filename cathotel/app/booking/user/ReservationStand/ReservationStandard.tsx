"use client";

import React, { useState } from "react";
import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
import { DatePicker, DatePickerProps, Dropdown } from "antd";
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "./list.json";
import Modal from "./Modal";

import Link from "@/node_modules/next/link";

interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

interface OtherComponentProps {
  selectedRooms: number;
}




function ReservationPageStandard() {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className="bg-pink-200 min-h-screen flex flex-row justify-center items-start">
      <div className=" grid grid-flow-row mt-20 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl justify-center items-center container mx-auto px-7">
        <div className=""></div>
        <div className="rounded-lg ">
          <div className="mt-14 max-w-md mx-auto bg-purple-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="bg-violet-5000 text-white font-bold py-2 px-4 rounded-lg shadow-sm flex items-center mx-auto">
              <div className=" max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black font-bold py-2 px-4">
                {/* <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/pink.png"
                  alt="pink.jpeg"
                /> */}
              </div>
              <div className="flex flex-col">
                <p className="ml-8 font-bold text-xl">Room Type</p>
                <p className="ml-8 text-2xl  text-gray-800  font-bold ">
                  Standard
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 mt-8">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

        <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#3a074d]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>


            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

      <div className="mb-5">
                <label htmlFor="Status" className="mb-3 block text-base font-medium text-[#3a074d]">
                    Status
                </label>
                <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option value="week">ACTIVE</option>
                  <option value="month">INACTIVE</option>
                  <option value="year">PENDING</option>
        </select>
               
            </div>
       

        {isOpen && (
          <div className="bg-blue-200 top-30 flex flex-col items-start rounded-lg p-2 w-full">
            {list.map((item: { city: string; emoticon: string }, i: number) => (
              <div
                className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                key={i}
              >
                <h3 className="font-bold">{item.city}</h3>
                <h3>{item.emoticon}</h3>
              </div>
            ))}
          </div>
        )}

    <Link href="/booking/user/Bill">
        <div className="relative">
          <button
            type="submit"
            className="mt-3 submit_btn bg-black text-white rounded-full px-5 py-3 text-xl font-bold shadow-lg w-full  hover:bg-purple-300  focus:outline-none"
            onClick={() => setOpen(true)}
          >
            Book now
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ReservationPageStandard;

