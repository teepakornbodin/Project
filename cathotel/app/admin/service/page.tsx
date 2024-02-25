import React from "react";
import { kanit, inter } from "@/utils/font";
const ServicePage = () => {
  return (
    <>
      <div className=" bg-zinc-100 min-h-screen grid-flow-col justify-center">
        <div className="bg-zinc-100 rounded-b-3xl h-14 w-screen flex justify-start items-start  md:justify-center md:items-center mb-14">
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
        <div className="flex flex-col-2 md:flex-row ml-3">
          <div className="bg-white h-32 w-auto">dfs</div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
