"use client"

import Button from '@/components/Button'
import Input from '@/components/Input'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

export default function Home() {
   const router = useRouter()   
   const [loading, setLoading] = useState(false)

   const usernameRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);

   const signin = async () => {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (!username || !password) {
         alert(`Please enter both username and password!`)
         return;
      }

      setLoading(true)
      try {
          await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signin`, {
            username: username,
            password: password
         }, { withCredentials: true })
         alert(`You have Sign in!`)
         router.push("/dashboard")
      } catch (e: unknown) {
         if(e instanceof Error) {
            alert(`signin failed ${e.message}`)
         } else alert("Sign in failed")
      } finally {
         setLoading(false)
      }
   }


   return (
      <div className='h-screen w-screen bg-black-200 flex justify-center items-center'>
         <div className='bg-gray-200 rounded-2xl min-w-48 p-4  '>
            <div className='pb-2 text-center text-3xl text-white underline'>
               Sign in!
            </div>
            <Input reference={usernameRef} placeholder='Username' />
            <Input reference={passwordRef} placeholder='Password' />
            <div className='text-center mr-3'>
               Create Account
               <Link
                  className='underline'
                  href={"/signup"}
               > sign up
               </Link>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center pt-2'>

               <Button
                  onClick={signin}
                  text='Signin'
                  fullWidth={true}
                  loading={loading}
                  variant='secondary'
               />

            </div>
         </div>
      </div>
   )
}


