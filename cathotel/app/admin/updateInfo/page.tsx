"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

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
    <div>
      <h1>All Pets</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet._id}>
            {pet.name} - {pet.breed} - {pet.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsPage;

