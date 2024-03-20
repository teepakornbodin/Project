"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { kanit, inter } from "@/utils/font";

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

    <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2  text-2xl w-full h-screen bg-blue-300`}>
      <div className="bg-purple-500 rounded-full py-5 w-full flex flex-col items-center shadow-lg ">
        <h1 className="text-3xl font-bold">อัพเดตข้อมูลแมว</h1>
      </div>
      <div>
        {pets.map(pet => (
          <li key={pet._id}>
            {pet.name} - {pet.breed} - {pet.age}
          </li>
        ))}
      </div>
    </div>
  );
};

export default PetsPage;

