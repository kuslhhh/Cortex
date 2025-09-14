import React, { ReactElement } from 'react'

interface ButtonProps{
   variant: "primary" | "secondary";
   text: string;
   startIcon?: ReactElement;
   onClick?: () => void;
}

const variantStyles = {
   "primary" : "bg-gray-200 text-white-200",
   "secondary" : "bg-green-200 text-black-200"
}

export default function Button({variant, text, startIcon, onClick}: ButtonProps) {
  return (
    <div>
      <button 
         onClick={onClick}
         className={`${variantStyles[variant]} cursor-pointer flex gap-1 items-center justify-center  px-6 py-2 rounded-2xl text-center font-semibold `}
      >
         {startIcon}
         {text}
      </button>
    </div>
  )
}
