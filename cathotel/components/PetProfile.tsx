"use client";
import { kanit, inter, mitr } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from 'moment';
import children from "@/components/animate"

interface IPet {
  _id: string;
  code: string;
  name: string;
  user: string;
  breed: string;
  gender: string;
  color: string;
  age: Date;
  created_at: string;
  check_out: Date;
  health: string;
  food: string;
  excretion: string;
  update_time: string;
    
  }

  const PetProfile = ({ petData }: { petData: IPet | null }) => {

    const formatAge = (age: Date): string => {
      if (age) {
        if (age instanceof Date) {
          const diff = Date.now() - age.getTime();
          const ageDate = new Date(diff);
          const years = ageDate.getUTCFullYear() - 1970;
          const months = ageDate.getUTCMonth();
          return `${years} Year ${months} Month `;
        } else {
          return "Can't tell age";
        }
      } else {
        return "None";
      }
    };
  
    // Perform null check on petData before accessing its properties
    const age = petData ? new Date(petData.age) : null;
    const formattedAge = age ? formatAge(age) : "ไม่ระบุอายุ";


    const router = useRouter();
 
  return (
    <div className="bg-purple-200 flex space-x-3 flex-col w-full">
  <div className="mt-8 mb-1 flex">
    {/*  ก้อนแรก */}
    <div className="ml-3 w-1/2 justify-center rounded-lg grid-rows-2 justify-items-center">
      <img
        src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
        className="border-8 border-white border-opacity-100 h-60 rounded-3xl max-w-full "
        alt="Cat"
      />

      <div className="relative mt-7 flex items-center justify-center bg-white rounded-3xl h-14">
        <div className="mr-auto bg-cyan-400 rounded-3xl h-14 sm:w-13 flex items-center justify-center max-w-full drop-shadow-lg">
          <span className={`${kanit.className} text-slate-700 text-lg font-bold w-20 flex justify-center`}>Code</span>
        </div>
        <p className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center mr-auto `}>{petData?.code}</p>
      </div>

    </div>

    <div className="flex w-1/2 flex-col ml-2">
      <div className="top-10 right-8 grid grid-cols-1 content-between gap-10 rounded-lg bg-white p-0 mr-3 ">
        <div className="rounded-3xl bg-rose-300 w-full h-10 text-center flex place-content-center mt-[-5px] mb-[-5px] drop-shadow-xl " >
          <span className={`${kanit.className} text-slate-600 font-bold text-left w-20 mr-auto ml-5 mt-2`}>Name</span>
          <p className={`${kanit.className} text-slate-700 text-2xl font-bold w-full mt-1 mr-5`}>{petData?.name || null}</p>
        </div>
        <div className="rounded-3xl bg-rose-300 w-full h-10 text-center flex place-content-center mt-[-5px] mb-[-5px] drop-shadow-xl">
          <span className={`${kanit.className} text-slate-600 font-bold text-left w-20 mr-auto ml-5 mt-2`}>Age</span>
          <p className={`${kanit.className} text-slate-700 sm:text-2xl text-sm font-bold w-full mt-1 mr-5 flex justify-center items-center`}>{formattedAge}</p>
        </div>
      </div>

      <div className="mt-5 flex rounded-2xl bg-white overflow-aut mr-2 items-center justify-center">
        <div className="mr-auto mt-[-5px] mb-[-5px] bg-white rounded-3xl h-14 sm:w-13 flex items-center justify-center max-w-full drop-shadow-lg 
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300">
          <img
            src="https://img2.pic.in.th/pic/timer7ac1ab87f30fd874.png"
            className="h-16 "
            alt="Clock"
          />
        </div>
        <span className={`${kanit.className} text-slate-700 mr-auto flex w-20 flex-grow: 1 justify-center text-lg`}> {petData?.update_time || "ไม่ระบุ"} </span>
      </div>
      <div className="relative mt-9 mr-2 bg-rose-300 rounded-3xl h-14 flex items-center justify-center">
        <span className={`${kanit.className} text-slate-700 font-bold ml-auto flex justify-center`}>Mental health</span>
        <div className="ml-auto bg-white rounded-3xl h-14 sm:w-13 place-items-end max-w-full drop-shadow-lg"> 
          <img
            src="https://img2.pic.in.th/pic/Group-9.png"
            className="h-12 justify-center"
            alt="Brian"
          />
        </div>
      </div>
      <div className=" bg-white rounded-3xl h-28 place-items-end mt-[-21px] mb-[-5px] mr-2 " >
        <div className={`${kanit.className} flex justify-center font-bold items-center text-2xl mt-12 text-slate-600`}>
          {petData?.health || "ไม่ระบุ"}
        </div>
      </div>
    </div>
  </div> 

  <div className="mb-4 grid grid-rows-2">
    <div className="relative flex items-center justify-center w-1/2 bg-white rounded-3xl h-14">
      <div className="mr-auto bg-yellow-100 rounded-3xl h-14 flex items-center justify-center max-w-full drop-shadow-lg">
        <img
          src="https://img5.pic.in.th/file/secure-sv1/food1c0bc3f7ebf2b97ce.png"
          className="h-12 "
          alt="Brian"
        />
      </div>
      <span className={`${kanit.className} text-slate-700 text-2xl font-bold font-weight-800 mr-auto`}>Food </span>
    </div>
    <div className="relative mt-2 items-center justify-center bg-white rounded-3xl h-14 mr-3">
      <div className={`${inter.className} flex justify-center items-end mt-4 text-lg font-bold text-slate-600`}>
      {petData?.food || "ไม่ระบุ"}</div>
      </div>  
  </div>

  <div className="mb-9 grid grid-rows-2">
    <div className="relative flex items-center justify-center w-1/2 bg-white rounded-3xl h-14 mr-3 ml-auto">
      <span className={`${kanit.className} text-slate-700 text-2xl font-bold ml-auto`}>Excretion</span>
      <div className="ml-auto bg-emerald-100 rounded-3xl h-14 flex items-center justify-center max-w-full drop-shadow-lg">
        <img
          src="https://img5.pic.in.th/file/secure-sv1/Excretion.png"
          className="h-12 "
          alt="Brian"
        />
      </div>
    </div>
    <div className="relative mt-2 items-center justify-center bg-white rounded-3xl h-14 mr-3">
      <div className={`${inter.className} flex justify-center items-center mt-4 text-slate-600`}>
        {petData?.excretion || "ไม่ระบุ"}
      </div>
    </div>
  </div>
</div>

  );
};
export default PetProfile;