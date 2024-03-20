'use client'
import React, { useState } from 'react';
import { addData } from '@/app/api/pet/action';
import { kanit, inter } from '@/utils/font';
import Link from "@/node_modules/next/link";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = Object.fromEntries(new FormData(e.target));
    setFormData(formDataObject);
    await addData(new FormData(e.target));
    setShowModal(true);
  };

  return (
    <body className='bg-blue-300 h-screen'>
      <form onSubmit={handleSubmit}>
        <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2 bg-blue-300 text-2xl w-full h-screen`}>

          <div className="bg-purple-500 rounded-full py-5 w-full grid grid-cols-6 shadow-lg ">
            <Link href="/admin/service" className='justify-self-center'>
              <button className='bg-slate-300 rounded-full px-3 hover:bg-slate-700'>{"<"}</button>
            </Link>
            <h1 className="text-3xl font-bold col-start-2 col-span-4 justify-self-center">สร้างข้อมูลลูกค้าใหม่</h1>
          </div>


          <div className="grid grid-cols-2 gap-5 py-10 w-full px-3.5">

            <div className="flex flex-col py-2">
              <label className="px-2">ชื่อน้องแมว</label>
              <input
                className="px-2 rounded-lg py-1"
                name='name'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">รหัสประจำตัว (4 ตัว)</label>
              <input
                className="px-2 rounded-lg py-1"
                name='code'
                type="number"
              />

            </div>

            <div className="flex flex-col col-span-2 py-2">
              <label className="px-2">สายพันธุ์ หรือ ตำหนิ</label>
              <input
                className="px-2 rounded-lg py-1"
                name='breed'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">เพศ</label>

              <select name="gender" type='text' className="px-2 rounded-lg py-0.5">
                <option value="MALE" className="text-lg">ชาย</option>
                <option value="FE" className="text-lg">หญิง</option>
              </select>
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">สี</label>
              <input
                className="px-2 rounded-lg py-1"
                name='color'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">อายุ (วันเกิด)</label>
              <input
                className="px-2 rounded-lg py-1 text-xl"
                name='age'
                type="date"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">วันที่จะออก</label>
              <input
                className="px-2 rounded-lg py-1 text-xl"
                name='check_out'
                type="date"
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
    </body>
  )
}

export default HomePage