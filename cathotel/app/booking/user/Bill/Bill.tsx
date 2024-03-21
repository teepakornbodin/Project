"use client"
import React from "react";



const BillPage = () => {
  return (
    <div className="border-purple-600 rounded-2xl border  divide-y divide-gray-200 max-w-sm mx-auto mt-20">
    <div className="p-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-gray-600">Booker</h2>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">ชื่อของผู้ใช้</p>
        <p className="mt-8"><span className="text-4xl font-bold tracking-tight text-gray-900">49</span>
            <span className="text-base font-medium text-gray-500">  Bath</span>
        </p>
        <a href="#" target="_blank"
            className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-purple-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring">Confirmed</a>
    </div>
    <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">Details</h3>
        <ul role="list" className="mt-6 space-y-4">
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img2.pic.in.th/pic/433760034_957539885319810_2308387867896240103_n.png" 
                  alt="map.png"
                />
                </div>
                <span className="text-sm text-gray-500">Cat Hotel Mueang District, Khon Kaen City </span>
            </li>

            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"> 
                <img
                  className="justify-center rounded-3xl"
                  src="https://img5.pic.in.th/file/secure-sv1/430996133_721305823533205_2959729954015069823_n.png"
                  alt="call.png"
                />
                </div>
                <span className="text-sm text-gray-500">0444-4444</span>
            </li>
            <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                <img
                  className="justify-center rounded-3xl"
                  src="https://img5.pic.in.th/file/secure-sv1/433239127_1418684012075865_1573427250027505052_n.png" 
                  alt=".png"
                />
                </div>
                <span className="text-sm text-gray-500">cathotel@kkumail.com</span>
            </li>

        </ul>
    </div>
</div>
    );
};

export default BillPage;