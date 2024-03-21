import React from "react";
import { kanit, inter, mitr } from "@/utils/font";

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
              Admin
            </p>
            <p
              className={`${inter.className} text-slate-700 text-3xl font-bold w-50 text-center ml-2`}
            >
              All Menu Service
            </p>
          </div>
        </div>

        {/* เนื้อหา */}
        <div className="flex flex-col justify-center">

          <a href="/admin/hotel" className="mt-5 text-slate-700 bg-white hover:border-4 border-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center drop-shadow-lg flex-row justify-center ml-12 mr-12 md:ml-44 md:mr-44">
            <button className="items-center grid grid-cols-11 ">
              <div className={`${mitr.className} col-start-2 col-end-11 h-32 w-auto flex items-center text-3xl `}>Create new  <br className="sm:hidden" />cat data</div>
              <div className="justify-end items-end col-start-11 col-end-11">
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
            </button>
          </a>

          <a href="/admin/updateInfo" className="mt-5 text-slate-700 bg-white hover:border-4 border-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center drop-shadow-lg flex-row justify-center ml-12 mr-12 md:ml-44 md:mr-44 ">
            <button className=" items-center grid grid-cols-11 ">
              <div className={`${mitr.className} col-start-2 col-end-11 h-32 w-auto flex items-center text-3xl `}>Update cat <br className="sm:hidden" />data</div>
              <div className=" justify-end items-end col-start-11 col-end-11">
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 justify-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
            </button>
          </a>

          <a href="/adminStock/stock" className="mt-5 text-slate-700 bg-white hover:border-4 border-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center drop-shadow-lg flex-row justify-center ml-12 mr-12 md:ml-44 md:mr-44 ">
            <button className=" items-center grid grid-cols-11 ">
              <div className={`${mitr.className} col-start-2 col-end-11 h-32 w-auto flex items-center text-3xl `}>Room stock</div>
              <div className=" justify-end items-end col-start-11 col-end-11">
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 justify-end " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </div>
            </button>
          </a>
        </div>

      </div>
    </>
  );
};

export default ServicePage;