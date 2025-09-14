"use client"

import React from 'react'
import DocumentIcon from './icons/DocumentIcon'
import ShareIcon from './icons/ShareIcon'
import DeleteIcon from './icons/DeleteIcon'
import Link from 'next/link';

interface CardProps {
   title: string;
   link: string;
   type: "twitter" | "youtube"
}

export default function Card({
   title,
   link,
   type
}: CardProps) {
   return (
      <div className='bg-gray-200 max-w-80 min-w-72  p-4 rounded-3xl shadow-sm  shadow-[#333333] outline-2  outline-[#333333]'>
         <div className='flex justify-between pb-3'>
            <div className='flex gap-3 justify-center items-center text-white-200'>
               <DocumentIcon />
               <div className='text-white font-semibold'>
                  {title}
               </div>
            </div>
            <div className='flex gap-3 justify-center items-center text-white-200'>
               <div onClick={() => (
                  <Link href={link} target='_blank' />
               )}>
                  <ShareIcon />
               </div>
               <DeleteIcon />
            </div>
         </div>
         <div className='rounded-2xl overflow-hidden'>
            {type === "youtube"
               &&
               <div>
                  <iframe
                     className='w-full aspect-video'
                     src={link.replace("watch", "embed")}
                     title="YouTube video player"
                     frameBorder="2"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                  />
               </div>
            }
            {type === "twitter" &&
               <div>
                  <blockquote className='twitter-tweet'>
                     <a href={link.replace("x.com", "twitter.com")} />
                  </blockquote>
               </div>
            }
         </div>
      </div>
   )
}
