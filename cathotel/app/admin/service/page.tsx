import React from "react";
import { kanit, inter,mitr } from "@/utils/font";

import Link from "@/node_modules/next/link";

const ServicePage = () => {

  return (
    <>
      <div className=" bg-blue-200 min-h-screen grid-flow-col justify-center">
        <div className="bg-blue-200 rounded-b-3xl h-14 w-screen flex justify-start items-start  md:justify-center md:items-center mb-14">
          <div className=" justify-start mt-7 ml-9">
            <p
              className={`${inter.className} text-slate-600 text-lg font-bold w-20 text-center `}
            >
              Admid
            </p>
            <p
              className={`${inter.className} text-slate-700 text-3xl font-bold w-20 text-center ml-2`}
            >
              Service
            </p>
          </div>
        </div>
        {/* เนื้อหา */}
        <div className="flex flex-col justify-center">
          <a href="/admin/hotel" className="text-slate-700 bg-white hover:border-4 border-rose-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 drop-shadow-xl flex-row justify-centen ml-12 mr-12 md:ml-44 md:mr-44">
          <button className=" items-center flex flex-row  ">
            <div className={`${mitr.className} h-32 w-auto flex items-center text-3xl `}>สร้างข้อมูลลูกค้าใหม่</div>
            <div className=" items-end">
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </div>
          </button>
          </a>

          <a className="mt-5 text-slate-700 bg-white hover:border-4 border-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 drop-shadow-lg flex-row justify-centen ml-12 mr-12 md:ml-44 md:mr-44 ">
        <button  className=" items-center flex flex-row ">
          <div className={`${mitr.className} h-32 w-auto flex items-center text-3xl `}>อัพเดตข้อมูลแมว</div>
          <div className=" justify-end items-end">
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 justify-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </div>
        </button>
        </a>

        <a href="/adminStock/stock" className="mt-5 text-slate-700 bg-white hover:border-4 border-rose-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 drop-shadow-xl flex-row justify-centen ml-12 mr-12 md:ml-44 md:mr-44">
        <button className=" items-center flex flex-row ">
          <div className={`${mitr.className} h-32 w-auto flex items-center text-3xl `}>Stock</div>
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
        </a>
        </div>
        
      </div>
    </>
  );
};

export default ServicePage;
