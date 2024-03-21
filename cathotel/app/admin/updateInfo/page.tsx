
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

  const handleDelete = async (petCode) => {
    try {
      const response = await fetch(`/api/pet?id=${petCode}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        // Optionally, you can update the pets state by filtering out the deleted pet
        setPets(pets.filter(pet => pet.code !== petCode));
      } else {
        console.error('Error deleting pet:', response.status);
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <html className='bg-blue-300'>
      <body className='bg-blue-300'>
        <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2 text-2xl sm:text-3xl w-full h-full bg-blue-300`}>

          <div className="bg-purple-500 rounded-full py-5 w-full grid grid-cols-6 shadow-lg lg:grid-cols-12 ">
            <Link href="/admin/service" className='justify-self-center'>
              <button className='rounded-full px-3 hover:bg-slate-500 text-white'>{"<"}</button>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold col-start-2 col-span-4 lg:col-span-10 justify-self-center">Update cat data</h1>
          </div>

          <div className='w-96 md:w-full'>
            {pets.map(pet => (
              <div key={pet._id} className="bg-white rounded-3xl py-5 w-full my-2 shadow-lg justify-self-center">
                <div className="bg-purple-200 mx-5 text-center rounded-lg">
                  {pet.name} - {pet.code}
                </div>

                <div className="flex">
                  <div className="w-full px-2 grid grid-cols-2 grid-row-4 text-center">

                    <div className="">{"Update time: "}</div>

                    <div>{
                      (() => {
                        if (pet.update_time === "MORNING") {
                          return "Morning";
                        } else if (pet.update_time === "AFTERNOON") {
                          return "Afternoon";
                        } else if (pet.update_time === "EVENING") {
                          return "Evening";
                        }
                      })()

                      /*pet.check_out ? format(parse(pet.check_out, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'dd/MM/yyyy') : 'N/A'*/
                    }</div>

                    <div>{"Health: "}</div>

                    <div>{(() => {
                      if (pet.health === "GOOD") {
                        return "Good";
                      } else if (pet.health === "BAD") {
                        return "Bad";
                      }
                    })()}
                    </div>


                    <div>{"Food: "}</div>

                    <div>
                      {(() => {
                        if (pet.food === "EATEN") {
                          return "Eaten";
                        } else if (pet.food === "NOT EATEN") {
                          return "Not eaten";
                        }
                      })()}
                    </div>

                    <div>{"Excretion: "}</div>

                    <div>
                      {(() => {
                        if (pet.excretion === "EXCRETED") {
                          return "Excreted";
                        } else if (pet.excretion === "NOT EXCRETED") {
                          return "Not excreted";
                        }
                      })()}
                    </div>
                  </div>

                  <div className='flex flex-col items-center'>
                    <Link href={`/admin/updateInfo/pet/${pet.code}`}>
                      <button className="bg-green-200 rounded-full text-xl w-20 px-2 mr-2 mt-16 hover:bg-lime-700">Update</button>
                    </Link>

                    <button
                      className="bg-red-200 rounded-full text-xl w-20 px-2 mr-2 hover:bg-red-900"
                      onClick={() => handleDelete(pet.code)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
};

export default PetsPage;

