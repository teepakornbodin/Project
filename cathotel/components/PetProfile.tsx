"use client";
import { kanit, inter } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from 'moment';
import children from "@/components/animate"
interface IPet {
    code: string;
    name: string;
    user: string;
    breed: string;
    gender: string;
    color: string;
    age: number;
    created_at: string;
  }

  const PetProfile = ({ petData }: { petData: IPet | null }) => {
    const createdAt = moment("2024-02-04T21:00:00+07:00").subtract(1, "day");

    const timeRemaining = moment().diff(createdAt, "seconds");
    const days = Math.floor(timeRemaining / 86400);
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60); 
    const seconds = Math.floor(timeRemaining % 60);

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
          <span className={`${kanit.className} text-slate-700 text-lg font-bold w-20 flex justify-center`}>รหัส</span>
        </div>
        <p className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center mr-auto `}>{petData?.code}</p>
      </div>

    </div>

    <div className="flex w-1/2 flex-col ml-2">
      <div className="top-10 right-8 grid grid-cols-1 content-between gap-10 rounded-lg bg-white p-0 mr-3 ">
        <div className="rounded-3xl bg-rose-300 w-full h-10 text-center flex place-content-center mt-[-5px] mb-[-5px] drop-shadow-xl " >
          <span className={`${kanit.className} text-slate-700 font-bold text-left w-20 mr-auto ml-5 mt-2`}>ชื่อ</span>
          <p className={`${kanit.className} text-slate-700 text-2xl font-bold w-full mt-1 mr-5`}>{petData?.name || null}</p>
        </div>
        <div className="rounded-3xl bg-rose-300 w-full h-10 text-center flex place-content-center mt-[-5px] mb-[-5px] drop-shadow-xl">
          <span className={`${kanit.className} text-slate-700 font-bold text-left w-20 mr-auto ml-5 mt-2`}>อายุ</span>
          <p className={`${kanit.className} text-slate-700 text-2xl font-bold w-full mt-1 mr-5`}>{petData?.age || "ไม่ระบุ"}</p>
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
        <span className={`${kanit.className} text-slate-700 mr-auto flex w-20 flex-grow: 1 justify-center`}>
          <span className="mx-1">{days}</span>
          วัน
          <span className="mx-1">{hours}</span>
          ชม.
          <span className="mx-1">{minutes}</span>
          น.
          {/* :
          <span className="mx-1">{seconds}</span> */}
          </span>
      </div>
      <div className="relative mt-9 mr-2 bg-rose-300 rounded-3xl h-14 flex items-center justify-center">
        <span className={`${inter.className} text-slate-700 font-weight-800 ml-auto`}>Mental health </span>
        <div className="ml-auto bg-white rounded-3xl h-14 sm:w-13 place-items-end max-w-full drop-shadow-lg"> 
          <img
            src="https://img2.pic.in.th/pic/Group-9.png"
            className="h-12 justify-center"
            alt="Brian"
          />
        </div>
      </div>
      <div className=" bg-white rounded-3xl h-28 place-items-end mt-[-21px] mb-[-5px] mr-2 " />
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
      <span className={`${inter.className} text-slate-700 text-2xl font-weight-800 mr-auto`}>Food </span>
    </div>
    <div className="relative mt-2 items-center justify-center bg-white rounded-3xl h-14 mr-3"></div>
  </div>

  <div className="mb-9 grid grid-rows-2">
    <div className="relative flex items-center justify-center w-1/2 bg-white rounded-3xl h-14 mr-3 ml-auto">
      <span className={`${inter.className} text-slate-700 text-2xl font-weight-800 ml-auto`}>Excretion</span>
      <div className="ml-auto bg-emerald-100 rounded-3xl h-14 flex items-center justify-center max-w-full drop-shadow-lg">
        <img
          src="https://img5.pic.in.th/file/secure-sv1/Excretion.png"
          className="h-12 "
          alt="Brian"
        />
      </div>
    </div>
    <div className="relative mt-2 items-center justify-center bg-white rounded-3xl h-14 mr-3"></div>
  </div>
</div>

  );
};
export default PetProfile;