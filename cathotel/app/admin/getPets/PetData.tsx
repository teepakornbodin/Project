import { useEffect, useState } from 'react';
import axios from 'axios';
import { kanit, inter } from "@/utils/font";

interface IPet {
  _id: string; // Add the _id property to the interface
  code: string;
  name: string;
  user: string;
  breed: string;
  gender: string;
  color: string;
  age: number;
  created_at: Date;
}

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('/api/pet/petData');
        setPets(response.data.cats);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map((pet: IPet) => ( // Add type to the pet argument
          <div key={pet._id}>
            <div className={`${kanit.className} text-slate-700 text-2xl font-bold w-20 text-center `}>
              {pet.name} {/* Render the pet's name */}
            </div>
            <div>
              <p>Code: {pet.code}</p>
              <p>User: {pet.user}</p>
              <p>Breed: {pet.breed}</p>
              <p>Gender: {pet.gender}</p>
              <p>Color: {pet.color}</p>
              <p>Age: {pet.age}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pets;