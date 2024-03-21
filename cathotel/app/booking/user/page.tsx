"use client"
import React from "react";
import BookingUser from "./Standard"
import BookingUserSuit from "./Suit";
import BookingUserFamily from "./Family";
import BookingUserSuperior from "./Superior";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const bookingPage = () => {
  return (  
      <>
          <BookingUser/>
          <BookingUserSuit/>
          <BookingUserSuperior/>
          <BookingUserFamily/>
          </>
      );
  };

export default bookingPage;

