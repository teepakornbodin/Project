"use client";
import { kanit, inter } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Animate from "@/components/animate"
import HomePage from "./adminCreate";
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

  const PetAdimn = ({ params }:{ params: { id: string }, }) => {
    const router = useRouter();

    const [petData, setPetData] = useState<IPet | null>(null);
    const [petCode, setPetCode] = useState(params.id);
 
    useEffect(() => { // เช็คว่าข้อมูลมีจริงมั้ย
        const fetchData = async () => {
          const response = await fetch(`/api/pet?id=${petCode}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          if (response.status == 200) {
             setPetData(data.data);
          }
    
          console.log("response", response);
        };
    
        if (petCode && petCode.length >= 4) {
          fetchData();
        }
        fetchData();

      }, [petCode]);


  return (
    <>
      <HomePage/>
    </>
    

);
};
export default PetAdimn;