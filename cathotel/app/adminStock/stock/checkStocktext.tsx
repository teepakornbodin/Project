import React, { useEffect, useState } from "react";
import { kanit, inter } from "@/utils/font";
const CheckStock1 = () => {



    
  return (
    <div className="bg-purple-200 min-h-screen grid-flow-row justify-center">
      <div className="bg-blue-300 rounded-b-3xl h-32 w-screen flex justify-center items-center">
        <div className="justify-center ">
          <p
            className={`${inter.className} text-slate-400 text-lg font-bold w-20 text-center `}
          >
            Stock
          </p>
        </div>
      </div>
      {/* ก้อน1 */}
      <div className="w-full justify-center grid grid-flow-row -mt-7">
        {/* Deluxe */}
        <div className="flex flex-col justify-center items-center ">
          <div className="place-items-center bg-gray-300 h-44 w-full rounded-2xl grid grid-flow-row ml-14 mr-14">
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                Deluxe
              </p>
            </div>
            <div className=" bg-black h-1 w-44 "></div>
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                1/10
              </p>
            </div>
          </div>
          <div className="inline-flex mt-2">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              -
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              +
            </button>
          </div>
        </div>
        {/* Standard */}
        <div className="flex flex-col justify-center items-center mt-6 ">
          <div className="place-items-center bg-gray-300 h-44 w-full rounded-2xl grid grid-flow-row ml-14 mr-14">
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                Standard
              </p>
            </div>
            <div className=" bg-black h-1 w-44 "></div>
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                1/10
              </p>
            </div>
          </div>
          <div className="inline-flex mt-2">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              -
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              +
            </button>
          </div>
        </div>

        {/* Superior */}
        <div className="flex flex-col justify-center items-center ">
          <div className="place-items-center bg-gray-300 h-44 w-full rounded-2xl grid grid-flow-row ml-14 mr-14 mt-5">
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                Superior
              </p>
            </div>
            <div className=" bg-black h-1 w-44 "></div>
            <div>
              <p
                className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}
              >
                1/10
              </p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckStock1;
