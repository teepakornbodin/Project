"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { kanit, inter } from "@/utils/font";
const Home = () => {
  const router = useRouter();

  const [petCode, setPetCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/pet?id=${petCode}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status != 200) {
        setErrorMessage(data.message);
      }else{
        router.push(`/pet/${data.data.code}`);

      }

      console.log("response", response);
    };

    if (petCode && petCode.length >= 4) {
      fetchData();
    }
  }, [petCode]);
  return (
    <div className="bg-gradient-to-b from-white via-transparent to-purple-200 h-screen flex flex-col justify-center  items-center">
      <div>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/fFbb18j/0206-1-unscreen.gif" alt="0206 1 unscreen"  /></a>
      </div>
      <div className={`${kanit.className} flex justify-center flex-col p-6`}>
        <input
          type="text"
          placeholder="รหัสสัตว์เลี้ยงของ ..."
          maxLength={4}
          onChange={(e) => {
            setPetCode(e.target.value);
            setErrorMessage("");
          }}
          className="text-center text-lg border-2 border-sky-500 rounded-lg bg-white drop-shadow-lg mb-4"
        />
        {errorMessage ? (
          <p className="text-red-500 text-sm font-semibold rounded-md bg-blue-900 p-1 text-center mb-3">
            {errorMessage}
          </p>
        ) : (
          ""
        )}
        <button className="bg-sky-400 rounded-3xl py-2 p-1 drop-shadow-lg "> 
          <p className="text-white font-bold text-xl">Service/Promotion</p>
          <p className={`${kanit.className} text-white text-lg`}>บริการ/โปรโมชั่น</p>
        </button>
      </div>
    </div>
  );
};
export default Home;
