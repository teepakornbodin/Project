"use client";

import React, { useState } from "react";
import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
import { DatePicker, DatePickerProps } from "antd";
import { Control, Controller, useForm } from "react-hook-form";
import dayjs from 'dayjs'
import { Trash } from 'some-library'; // Replace 'some-library' with the actual library or module


import { error } from "console";


interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const RHFDatePickerfield = (props: RHFDatePickerFieldProps) => {
  return(
    <Controller    
              control={props.control}
              name={props.name}
              rules={{
                required: "This field is required"
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
                  onChange={(date) =>{
                    field.onChange(date ? date.valueOf() : null);
                  }}
                />
                <br/>
                {fieldState.error ? (
                  <span style={{color: "red"}}>
                    {fieldState.error.message}
                  </span>
                ) : null }
                </>
              )}
            />
  )
}


function ReservationPage() {
  const { handleSubmit , control , watch} = useForm<{
    startDate: string;
    endDate: string;
  }>();

  const [open , setOpen] = useState(false)


  return (
    <div className="bg-pink-200 min-h-screen flex flex-row justify-start items-start">
      <div className="mt-10 flex flex-col">
        <div className=""></div>
        <div className="rounded-lg">
          <button className="bg-blue-200  rounded-lg shadow-sm hover:bg-gray-200">
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-purple-700 flex items-center mx-auto">
              <button className=" bg-white text-black font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/pink.png"
                  alt="pink.jpeg"
                />
              </button>
              <p>Room type</p>
            </button>
          </button>
        </div>
        <label className="px-2">ชื่อ-นามสกุล</label>
        <input className="px-2 rounded-lg" name="name" type="text" />
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
              <br/>
            <RHFDatePickerfield 
              placeholder="End Date"
              control={control} 
              name="endDate"/>
          </div>

          <br />
          <button 
            className=" bg-white text-black font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200"
            onClick={()=> setOpen(true)}
            >
      
            <Trash/> Book now
          </button>

          <Modal 
            open={open}
            onClose={() => setOpen(false)}
          >
            <Trash size={56} className={"mx-auto text-green-500"}/>

          </Modal>
        </form>
      </div>
    </div>
  );
}

export default ReservationPage;


