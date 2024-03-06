"use client"
import React from "react";
import BookingUser from "./Standard"
// import ReservationPage from "./Reservation";
import BookingUserSuit from "./Suit";
import BookingUserFamily from "./Family";
import BookingUserSuperior from "./Superior";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import BookingUser2 from "./text2"
const bookingPage = () => {

  // return (
 
  //   <Router>
  //     <Routes>
  //       <Route path="/booking" element={<BookingUser />} />
  //       <Route path="/reservation" element={<ReservationPage />} />
  //     </Routes>
  //   </Router>
  // );


  return (
        <>
        <BookingUser/>
        {/* <BookingUserSuit/>
        <BookingUserSuperior/>
        <BookingUserFamily/>
        <ReservationPage/> */}
        </>
    );
};

export default bookingPage;
