import React, { ReactElement } from 'react'

interface ButtonProps {
   variant: "primary" | "secondary";
   text: string;
   startIcon?: ReactElement;
   iconPosition?: "before" | "after"
   onClick?: () => void;
   fullWidth?: boolean;
   loading?: boolean
}

const variantStyles = {
   "primary": "bg-gray-200 text-white-200",
   "secondary": "bg-green-200 text-black-200"
}

const CommonStyles = "flex gap-1 items-center justify-center  px-6 py-2 rounded-2xl text-center font-semibold"


export default function Button({ loading, variant, text, startIcon, onClick, fullWidth, iconPosition = "before" }: ButtonProps) {
   return (
      <div>
         <button
            onClick={onClick}
            className={`${loading ? "opacity-50" : "cursor-pointer"} ${variantStyles[variant]} ${CommonStyles} ${fullWidth ? " w-96" : ""}`}
            disabled={loading}
         >
            {iconPosition === "before" && startIcon}
            {text}
            {iconPosition === "after" && startIcon}

         </button>
      </div>
   )
}
