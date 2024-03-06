"use client";
import { kanit, inter } from "@/utils/font";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from 'moment';
import children from "@/components/animate"
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

  const adminCreate = ({ petData }: { petData: IPet | null }) => {

  };
  export default adminCreate;