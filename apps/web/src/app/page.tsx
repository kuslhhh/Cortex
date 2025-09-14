"use client"

import Button from "@/components/Button";
import Card from "@/components/Card";
import CreateContentModal from "@/components/CreateContentModal";
import Main from "@/components/dashboard/Main";
import Navbar from "@/components/dashboard/Navbar";
import PlusIcon from "@/components/icons/PlusIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import { useState } from "react";

export default function Home() {

   const [modalOpen, setModalOpen] = useState(false)
   return (
      <>
         <CreateContentModal open={modalOpen} onClose={() => {
            setModalOpen(false)
         }} />
         <div className="h-screen bg-black-200 p-5  ">
            <Navbar onClick={() => {
               setModalOpen(true)
            }} />
            <Main />
         </div>
      </>
   );
}