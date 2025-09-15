"use client"

import React from 'react'

interface InputProps {
   placeholder: string;
   reference: any
}

export default function Input(
   { placeholder, reference }: InputProps
) {
   return (
      <div>
         <input
            type={"text"}
            placeholder={placeholder}
            className='px-4 py-2 outline-0 placeholder:text-[#CBCBCB] border-2 border-black-200 w-96 rounded-2xl m-2'
            ref={reference}
         />
      </div>
   )
}
