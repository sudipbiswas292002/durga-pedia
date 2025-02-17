"use client"
import FormBottom from "@/components/FormBottom";
import TopMap from "@/components/TopMap";
import { useState } from "react";
import { RootState, AppDispatch } from './store';
import { Providers } from './Provider'
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../slices/GlobalStore";

export default function Home() {
  const [passCords,setCords]=useState('')//changes by sam
const getData=(data: string)=>{//changes by sam
  console.log("i am in page.tsx my data"+data);
  setCords(data);
}
  return (
    <>
      <Providers >

      <TopMap name={passCords}/> 
      <FormBottom onSubmit={getData}/>
      </Providers>
    </>
  )
}
