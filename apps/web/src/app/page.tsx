"use client"

import Button from "@/components/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { redirect } from "next/navigation";

export default function Home() {

   const handleRedirect = () => {
      redirect("/signup")
   }

   return (
      <>
         <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-5xl font-black underline ">
               CORTEX
               <span className="text-2xl text-orange-200 "> A second Brain for you!</span> </div>
            <div className="pt-10"> 
               <Button text="Get Started" variant="primary" iconPosition="after" onClick={handleRedirect} startIcon={<ArrowIcon/>} />
            </div>
         </div>
      </>
   );
}