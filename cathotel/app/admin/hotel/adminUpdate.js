'use client'
import React, { useState } from 'react';
import { addData } from '@/app/api/pet/action';
import { kanit, inter } from '@/utils/font';

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <form
      action={addData}
    >
      <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2 bg-blue-300 h-screen`}>

        <div className="bg-purple-500 rounded-full py-2 w-full flex flex-col items-center shadow-lg ">
          <h1 className="text-2xl">สร้างข้อมูลลูกค้าใหม่</h1>
        </div>

        <div className="grid grid-cols-2 gap-5 py-4 w-full px-3.5">

          <div className="flex flex-col">
            <label className="px-2">ชื่อน้องแมว</label>
            <input
              className="px-2 rounded-lg"
              name='name'
              type="text"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            />
          </div>

          <div className="flex flex-col">
            <label className="px-2">รหัสประจำตัว</label>
            <input
              className="px-2 rounded-lg"
              name='code'
              type="number"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="px-2">สายพันธุ์ หรือ ตำหนิ</label>
            <input
              className="px-2 rounded-lg"
              name='breed'
              type="text"
            // onChange={(e) => setDetail(e.target.value)}
            // value={detail}
            />
          </div>

          <div className="flex flex-col">
            <label className="px-2">เพศ</label>

            <select name="gender" type='text' className="px-2 rounded-lg">
              <option value="MALE">ชาย</option>
              <option value="FE">หญิง</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="px-2">สี</label>
            <input
              className="px-2 rounded-lg"
              name='color'
              type="text"
            // onChange={(e) => setColor(e.target.value)}
            // value={color}
            />
          </div>

          <div className="flex flex-col">
            <label className="px-2">อายุ</label>
            <input
              className="px-2 rounded-lg"
              name='age'
              type="number"
            // onChange={(e) => setAge(e.target.value)}
            // value={age}
            />
          </div>
        </div>

        <div>
          <button type="submit"
            className="submit_btn
                bg-green-500 
                  rounded-full 
                  px-5 py-3 text-xl 
                  font-bold
                  shadow-lg
                  hover:bg-green-700"
            onClick={() => setShowModal(true)}
          >สร้างข้อมูล</button>
        </div>


        {showModal ? (
          <div className=" bg-green-300 mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
            {/* <Image src={Trophy} width={100} height={100} objectFit="contain" /> */}
            <h2 className="text-base mt-2 mx-4 text-gray-700 font-semibold text-center">
              สร้างข้อมูลสำเร็จ
            </h2>
            <button
              className="my-5 w-auto px-8 h-10 bg-blue-400 text-white rounded-md shadow hover:shadow-lg font-semibold"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </form>
  )
}

export default HomePage