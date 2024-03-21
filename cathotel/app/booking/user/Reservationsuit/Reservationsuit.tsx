"use client";

import React, { useState } from "react";
import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
import { DatePicker, DatePickerProps, Dropdown } from "antd";
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { AiOutlineCaretUp,AiOutlineCaretDown } from 'react-icons/ai';
import list from "./list.json";
import { error } from "console";


interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}




const RHFDatePickerfield = (props: RHFDatePickerFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required",
      }}
      render={({ field, fieldState }) => (
        <>
          <DatePicker
            placeholder={props.placeholder}
            status={fieldState.error ? "error" : undefined}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? dayjs(field.value) : null}
            onChange={(date) => {
              field.onChange(date ? date.valueOf() : null);
            }}
          />
          <br />
          {fieldState.error ? (
            <span style={{ color: "red" }}>{fieldState.error.message}</span>
          ) : null}
        </>
      )}
    />
  );
};

function ReservationPageSuit() {
  const { handleSubmit, control, watch } = useForm<{
    startDate: string;
    endDate: string;
  }>();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-pink-200 min-h-screen flex flex-row justify-center items-start">
      <div className=" grid grid-flow-row mt-8 ml-5 mr-5 rounded-3xl bg-white drop-shadow-2xl justify-center items-center container mx-auto px-7">
        <div className=""></div>
        <div className="rounded-lg ">
          <button className="bg-purple-300  rounded-lg shadow-sm ">
            <button className="bg-violet-5000 text-white font-bold py-2 px-4 rounded-lg shadow-sm flex items-center mx-auto">
              <button className=" bg-white text-black font-bold py-2 px-4 rounded-lg shadow-sm ">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/pink.png"
                  alt="pink.jpeg"
                />
              </button>
              <p>Room type</p>
              <p>Suit</p>
            </button>
          </button>
        </div>

        <label className="px-2  ">ชื่อ-นามสกุล</label>
        <input
          className="px-2 rounded-lg border-solid border-gray-600 border-[1px]"
          name="name"
          type="text"
        />
        <label className="px-2">วัน/เดือน/ปี</label>

        <form
          onSubmit={handleSubmit((data) => {
            console.log("data ready to submit", data);
          })}
        >
          <div>
            <span>{JSON.stringify(watch("startDate"))}</span>
            <br />
            <RHFDatePickerfield
              placeholder="Start Date"
              control={control}
              name="startDate"
            />
            <br />
            <RHFDatePickerfield
              placeholder="End Date"
              control={control}
              name="endDate"
            />
          </div>
          <br />  
        </form>
          <button onClick={() => setIsOpen((prev) => !prev )} className="bg-purple-200 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white
          duration-300 active:text-white">
        Status
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8"/>
        ) : (
          <AiOutlineCaretUp className="h-8"/>
        )
      }
        </button>

      {isOpen && (
        <div className="bg-blue-200 top-30 flex flex-col items-start rounded-lg p-2 w-full">
          {list.map(( item: { city: string, emoticon: string }, i: number) => (
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
      <div>
            <button type="submit"
              className="submit_btn
                bg-pink-500 
                  rounded-full 
                  px-5 py-3 text-xl 
                  font-bold
                  shadow-lg"
            >Book now</button>
          </div>

      </div>
    </div>
  );
}

export default ReservationPageSuit;


