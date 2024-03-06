"use client";
import { kanit, inter } from "@/utils/font";
import React, { useEffect, useState } from "react";
import Link from "@/node_modules/next/link";
import PetDataPage from "./PetData";

interface IPet {
  code: string;
  name: string;
  user: string;
  breed: string;
  gender: string;
  color: string;
  age: Date;
  created_at: string;
}

const getPetsPage = () => {
  const [pets, setPets] = useState<IPet[]>([]);

  const fetchPetsData = async () => {
    try {
      const response = await fetch(`/api/pet/petData/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch pet data");
      } else {
        const data = await response.json();
        setPets(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  return (

      <div className={`${kanit.className} flex flex-col items-center px-1.5 py-2  text-2xl w-full h-screen bg-blue-300`}>
        <div className="bg-purple-500 rounded-full py-5 w-full flex flex-col items-center shadow-lg ">
          <h1 className="text-3xl font-bold">อัพเดตข้อมูลแมว</h1>
        </div>

        <div className="py-2">
          <button className="    bg-blue-500 
                  rounded-full 
                  px-5 py-3 text-xl 
                  shadow-lg
                  hover:bg-blue-700"> <Link href="/admin/hotel">สร้างข้อมูลแมวตัวใหม่</Link></button>
        </div>
        <div>
          <PetDataPage/>
        </div>
      </div>
  );
};

export default getPetsPage;