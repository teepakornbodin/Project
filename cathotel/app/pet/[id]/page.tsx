"use client";
import { kanit, inter } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PetProfile from "@/components/PetProfile";
import PetProfileImg from "@/components/PetProfileImg";
import Animate from "@/components/animate"
interface IPet {
  code: string;
  name: string;
  user: string;
  breed: string;
  gender: string;
  color: string;
  age: number;
  created_at: string;
  _id: string;
  check_out: Date;
  health: string;
  food: string;
  excretion: string;
  update_time: string;
}

const Pet = ({ params }: { params: { id: string }, }) => {
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
      <div className="bg-purple-200 h-auto flex">
        <button onClick={() => router.push(`/`)} className="ml-5 mt-4 " ><img src="https://img5.pic.in.th/file/secure-sv1/union-1.png" alt="union-1.png" /></button>
      </div>
      <Animate children={undefined} />
      <PetProfile petData={petData} />
      {/* <PetProfileImg /> */}
    </>

  );
};
export default Pet;