
"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { kanit, inter } from "@/utils/font";
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
  age: number;
  created_at: string;
  check_out: Date;
  health: string;
  food: string;
  excretion: string;
}

const PetsPage = () => {
  const [pets, setPets] = useState<IPet[]>([]);


  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('/api/pet');
        setPets(response.data.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (

    <body className='bg-blue-300'>
      <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2  text-2xl w-full h-full bg-blue-300`}>

        <div className="bg-purple-500 rounded-full py-5 w-full grid grid-cols-6 shadow-lg ">
          <Link href="/admin/service" className='justify-self-center'>
            <button className=' rounded-full  hover:bg-white text-white'>{"<"}</button>
          </Link>
          <h1 className="text-3xl font-bold col-start-2 col-span-4 justify-self-center">อัพเดตข้อมูลแมว</h1>
        </div>

        <div>
          {pets.map(pet => (
            <div key={pet._id} className="bg-white rounded-3xl py-5 px-16 w-full my-2 shadow-lg justify-self-center">
              {pet.name} - {pet.code}
              <br /> {"วันที่ออก:"} {pet.check_out ? format(parse(pet.check_out, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'dd/MM/yyyy') : 'N/A'}

              <br /> {"สุขภาพ: "}
              {(() => {
                if (pet.health === "GOOD") {
                  return "ดี";
                } else if (pet.health === "BAD") {
                  return "ไม่ดี";
                }
              })()}

              <br /> {"อาหาร: "}
              {(() => {
                if (pet.food === "EATEN") {
                  return "กิน";
                } else if (pet.food === "NOT EATEN") {
                  return "ยังไม่กิน";
                }
              })()}

              <br /> {"การขับถ่าย: "}
              {(() => {
                if (pet.excretion === "EXCRETED") {
                  return "ขับถ่ายแล้ว";
                } else if (pet.excretion === "NOT EXCRETED") {
                  return "ยังไม่ขับถ่าย";
                }
              })()}

            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default PetsPage;

