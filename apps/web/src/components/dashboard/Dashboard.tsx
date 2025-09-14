"use client"
import React from 'react'

import CreateContentModal from "@/components/CreateContentModal";
import Main from "@/components/dashboard/Main";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Dashboard() {
   const [modalOpen, setModalOpen] = useState(false)

   return (
      <div>
         <Sidebar />
         <div>
            <CreateContentModal open={modalOpen} onClose={() => {
               setModalOpen(false)
            }} />
            <div className="h-screen bg-black-200 p-5  ">
               <Navbar onClick={() => {
                  setModalOpen(true)
               }} />
               <Main />
            </div>
         </div>

      </div>
   )
}
