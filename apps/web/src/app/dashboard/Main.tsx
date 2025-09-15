"use client"

import React from 'react'
import Card from '../../components/Card'
import useContent from '@/hooks/addContent'

export default function Main() {

   const contents = useContent()
   return (
      <div>
         <div className="flex gap-6 pt-10 justify-center ">
            {contents.map(({ type, link, title, id }) => {
               return <Card key={id} type={type} link={link} title={title} />
            })}

         </div>
      </div>
   )
}
