"use client"

import CreateContentModal from "@/components/CreateContentModal";
import Main from "@/app/dashboard/Main";
import Navbar from "@/app/dashboard/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
   const router = useRouter();
   const [modalOpen, setModalOpen] = useState(false);
   const [checkingAuth, setCheckingAuth] = useState(true);

   useEffect(() => {
      const checkAuth = async () => {
         try {
            await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/protected`, {
               withCredentials: true
            });
         } catch (e: any) {
            router.replace("/signin");
         } finally {
            setCheckingAuth(false);
         }
      }

      checkAuth();
   }, [router]);

   if (checkingAuth) {
      return <div className="h-screen flex justify-center items-center text-white">Checking authentication...</div>;
   }

   return (
      <div>
         <Sidebar />
         <div>
            <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
            <div className="h-screen bg-black-200 p-5">
               <Navbar onClick={() => setModalOpen(true)} />
               <Main />
            </div>
         </div>
      </div>
   )
}
