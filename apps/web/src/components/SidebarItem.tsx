import React, { ReactElement } from 'react'

interface Props {
   text: string;
   icon: ReactElement
}

export default function SidebarItem({ text, icon }: Props) {
   return (

      <div className='flex justify-start items-center cursor-pointer hover:bg-black px-10 py-2 mt-1 rounded-2xl w-32 gap-2 '>
         {icon}
         {text}
      </div>
   )
}
