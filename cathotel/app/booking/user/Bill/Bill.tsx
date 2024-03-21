"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

const BillPage = () => {
  const router = useRouter();
  const [selectedRooms, setSelectedRooms] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const storedRooms = localStorage.getItem("selectedRooms");
    const storedPrice = localStorage.getItem("price");
    if (storedRooms && storedPrice) {
      setSelectedRooms(parseInt(storedRooms, 10));
      setPrice(parseInt(storedPrice, 10));
    }
  }, []);

  const searchParams = useSearchParams();
  const bookingId = searchParams.get("id");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/booking/bill/${bookingId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setName(data.name);
        setPhone(data.phone);
        setStartDate(data.start_date);
        setEndDate(data.end_date);
        setStatus(data.status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveAsImage = () => {
    const divToSave = document.getElementById("myDiv");

    if (divToSave) {
      html2canvas(divToSave).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = imgData;
        downloadLink.download = "CatHotelBill.png";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    }
  };

  return (
    <div
      className="border-purple-600 rounded-2xl border  divide-y divide-gray-200 max-w-sm mx-auto mt-16"
      id="myDiv"
    >
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-600">Booker</h2>
        </div>
        <p className="mt-0.5 text-xl text-gray-500">{name}</p>

        <p className="mt-3">
          <span className="text-base font-medium text-gray-500">
            Booking Id: {bookingId}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-base font-medium text-gray-500">
            Number of cats/room: {selectedRooms}{" "}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-base font-medium text-gray-500">
            {" "}
            Phone Number: {phone}{" "}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-base font-medium text-gray-500">
            {" "}
            Start Date: {start_date}{" "}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-base font-medium text-gray-500">
            {" "}
            End Date: {end_date}{" "}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-base font-medium text-gray-500">
            {" "}
            Status: {status}{" "}
          </span>
        </p>
        <p className="mt-4 ml-52">
          <span className="text-base font-medium text-gray-500"> Price </span>
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {price}
          </span>
          <span className="text-base font-medium text-gray-500"> ฿</span>
        </p>

        <p
          onClick={() => {
            handleSaveAsImage();
            router.push(`/`);
          }}
          className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-purple-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring "
        >
          Confirmed
        </p>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">Details</h3>
        <ul role="list" className="mt-6 space-y-4">
          <li className="flex space-x-3">
            <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
              <img
                className="justify-center rounded-3xl"
                src="https://img2.pic.in.th/pic/433760034_957539885319810_2308387867896240103_n.png"
                alt="map.png"
              />
            </div>
            <span className="text-sm text-gray-500">
              Cat Hotel Mueang District, Khon Kaen City{" "}
            </span>
          </li>

          <li className="flex space-x-3">
            <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
              <img
                className="justify-center rounded-3xl"
                src="https://img5.pic.in.th/file/secure-sv1/430996133_721305823533205_2959729954015069823_n.png"
                alt="call.png"
              />
            </div>
            <span className="text-sm text-gray-500">0444-4444</span>
          </li>
          <li className="flex space-x-3">
            <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
              <img
                className="justify-center rounded-3xl"
                src="https://img5.pic.in.th/file/secure-sv1/433239127_1418684012075865_1573427250027505052_n.png"
                alt=".png"
              />
            </div>
            <span className="text-sm text-gray-500">cathotel@kkumail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BillPage;
