'use client'
import React, { useState } from 'react';
import { addData } from '@/app/api/pet/action';
import { kanit, inter } from '@/utils/font';
import Link from "@/node_modules/next/link";
import { parse, format } from 'date-fns';

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = Object.fromEntries(new FormData(e.target));
    setFormData(formDataObject);

    try {
      await addData(new FormData(e.target));
      setShowModal(true);
      setIsSuccess(true);
    } catch (error) {
      setShowModal(true);
      setIsSuccess(false);
    }
  };

  return (
    <body className='bg-blue-300 h-screen'>
      <form onSubmit={handleSubmit}>
        <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2 bg-blue-300 text-2xl sm:text-2xl w-full h-screen`}>

          <div className="bg-purple-500 rounded-full py-5 w-full grid grid-cols-6 shadow-lg lg:grid-cols-12">
            <Link href="/admin/service" className='justify-self-center'>
              <button className='rounded-full px-3 hover:bg-slate-500 text-white '>{"<"}</button>
            </Link>
            <h1 className=" text-2xl sm:text-3xl font-bold col-start-2 col-span-4 lg:col-span-10 justify-self-center">Create new cat data</h1>
          </div>


          <div className="grid grid-cols-2 gap-5 py-10 w-full px-3.5">

            <div className="flex flex-col py-2">
              <label className="px-2">Cat's name</label>
              <input
                className="px-2 rounded-lg py-1"
                name='name'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">Code (4-digit)</label>
              <input
                className="px-2 rounded-lg py-1"
                name='code'
                type="number"
              />

            </div>

            <div className="flex flex-col col-span-2 py-2">
              <label className="px-2">Breed or trait</label>
              <input
                className="px-2 rounded-lg py-1"
                name='breed'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">Gender</label>

              <select name="gender" type='text' className="px-2 rounded-lg py-0.5">
                <option value="MALE" className="text-lg">Male</option>
                <option value="FE" className="text-lg">Female</option>
              </select>
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">Color</label>
              <input
                className="px-2 rounded-lg py-1"
                name='color'
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">Date of birth</label>
              <input
                className="px-2 rounded-lg py-1 text-xl"
                name='age'
                type="date"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="px-2">Check-out</label>
              <input
                className="px-2 rounded-lg py-1 text-xl"
                name='check_out'
                type="date"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {showModal && (
            isSuccess ? (
              <SuccessModal onClose={() => setShowModal(false)} />
            ) : (
              <FailureModal onClose={() => setShowModal(false)} />
            )
          ) }

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
            >Create</button>
          </div>

          

        </div>
      </form>
    </body>
  )
}

const SuccessModal = ({ onClose }) => (
  <div className=" mb-5 bg-green-300 mt-1 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
    <h2 className="text-base mt-2 mx-4 text-gray-700 font-semibold text-center">
      Successfully created cat data.
    </h2>
    <button
      className="my-5 w-auto px-8 h-10 bg-blue-400 text-white rounded-md shadow hover:shadow-lg font-semibold"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);

const FailureModal = ({ onClose }) => (
  <div className=" mb-5 bg-red-300 mt-1 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
    <h2 className="text-base mt-2 mx-4 text-gray-700 font-semibold text-center">
      Incorrect information entered. Please try again.
    </h2>
    <button
      className="my-5 w-auto px-8 h-10 bg-blue-400 text-white rounded-md shadow hover:shadow-lg font-semibold"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);

export default HomePage