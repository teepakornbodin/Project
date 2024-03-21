"use client";
import { kanit, inter } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parse, format } from 'date-fns';

import Link from "@/node_modules/next/link";

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

const Pet = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [petData, setPetData] = useState<IPet[]>([
    {
      _id: "",
      code: "",
      name: "",
      user: "",
      breed: "",
      gender: "",
      color: "",
      age: new Date(),
      created_at: "",
      check_out: new Date(),
      health: "",
      food: "",
      excretion: "",
      update_time: "",
    },
  ]);
  const [petCode, setPetCode] = useState(params.id);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/pet?id=${petCode}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setPetData(data.data);
      }
    };

    if (petCode && petCode.length >= 4) {
      fetchData();
    }
    fetchData();
  }, [petCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/pet?id=${petCode}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          update_time: e.target.update_time.value,
          health: e.target.health.value,
          food: e.target.food.value,
          excretion: e.target.excretion.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Pet data updated successfully:', data);
        setShowModal(true);
        setIsSuccess(true);
        // Optionally, you can update the petData state here
      } else {
        console.error('Error updating pet data:', response.status);
        setShowModal(true);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error updating pet data:', error);
      setShowModal(true);
      setIsSuccess(false);
    }
  };

  return (
    <body className="bg-blue-300 h-full">
      <form onSubmit={handleSubmit}>

        <div className={kanit.className + " flex flex-col items-center px-1.5 py-2 text-2xl w-screen h-screen bg-blue-300"}>
          <div
            className={
              "bg-purple-500 rounded-full py-5 w-full grid grid-cols-6 shadow-lg lg:grid-cols-12 "
            }
          >
            <Link href="/admin/updateInfo" className='justify-self-center'>
              <button className='rounded-full px-3 hover:bg-slate-500 text-white '>{"<"}</button>
            </Link>

            <h1 className="text-3xl font-bold col-start-2 col-span-4 lg:col-span-10 justify-self-center">
            Update cat data
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-lg py-2 px-20 md:28 my-3  text-center">
            <div className="text-7xl py-2 ">{petData.code}</div>
            <div className="text-3xl py-2">{petData.name}</div>
          </div>

          <div className="mb-2">
            <select name="update_time" type='text' className="bg-purple-100 hover:bg-purple-300 w-80 sm:w-96 h-16 px-2 rounded-lg py-1 text-2xl">
              <option value="MORNING" className="text-lg">Morning</option>
              <option value="AFTERNOON" className="text-lg">Afternoon</option>
              <option value="EVENING" className="text-lg">Evening</option>
            </select>
          </div>

          <div className="mb-2">
            <select name="health" type='text' className="bg-purple-100 hover:bg-purple-300 w-80 sm:w-96 h-16 px-2 rounded-lg py-1 text-2xl">
              <option value="GOOD" className="text-lg">Good Health</option>
              <option value="BAD" className="text-lg">Bad Health</option>
            </select>
          </div>

          <div className="mb-2">
            <select name="food" type='text' className="bg-purple-100 hover:bg-purple-300 w-80 sm:w-96 h-16 px-2 rounded-lg py-1 text-2xl">
              <option value="EATEN" className="text-lg">Eaten</option>
              <option value="NOT EATEN" className="text-lg">Not Eaten</option>
            </select>
          </div>

          <div className="mb-7">
            <select name="excretion" type='text' className="bg-purple-100 hover:bg-purple-300 w-80 sm:w-96 h-16 px-2 rounded-lg py-1 text-2xl">
              <option value="EXCRETED" className="text-lg">Excreted</option>
              <option value="NOT EXCRETED" className="text-lg">Not Excreted</option>
            </select>
          </div>

          {showModal && (
            isSuccess ? (
              <SuccessModal onClose={() => setShowModal(false)} />
            ) : (
              <FailureModal onClose={() => setShowModal(false)} />
            )
          )}

          <div>
            <button type="submit"
              className="submit_btn
                bg-green-500 
                  rounded-full 
                  px-5 py-3 text-xl 
                  font-bold
                  shadow-lg
                  hover:bg-green-700"
            >Submit</button>
          </div>

        </div>
      </form>
    </body>
  );
};

const SuccessModal = ({ onClose }) => (
  <div className=" bg-green-300 mt-1 mb-5 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
    <h2 className="text-base mt-2 mx-4 text-gray-700 font-semibold text-center">
      Cat data updated successfully.
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
  <div className=" bg-red-300 mt-1 mb-5 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
    <h2 className="text-base mt-2 mx-4 text-gray-700 font-semibold text-center">
      Error updating cat data. Please try again.
    </h2>
    <button
      className="my-5 w-auto px-8 h-10 bg-blue-400 text-white rounded-md shadow hover:shadow-lg font-semibold"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);


export default Pet;