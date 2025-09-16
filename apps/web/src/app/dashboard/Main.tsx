"use client"

import React from 'react'
import Card from '../../components/Card'
import useContent from '@/hooks/useContent'

export default function Main() {

   const contents = useContent()
   console.log(contents);
   return (
      <div>
         <div className="flex flex-wrap ml-80 gap-6 pt-10 justify-center ">
            {/* {JSON.stringify(contents)} */}
            {contents.map(({ type, link, title, id }) => {
               return <Card key={id} type={type} link={link} title={title} />
            })}

         </div>
      </div>
   )
}
