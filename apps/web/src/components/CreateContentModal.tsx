import React, { useRef, useState } from 'react'
import CrossIcon from './icons/CrossIcon'
import Input from './Input'
import Button from './Button'
import SendIcon from './icons/SendIcon'
import axios from 'axios'

interface Props {
   open: any;
   onClose: any;
}

enum ContentType {
   Youtube = "youtube",
   Twitter = "twitter"
}

export default function CreateContentModal({ open, onClose }: Props) {


   const titleRef = useRef<HTMLInputElement>(null)
   const linkRef = useRef<HTMLInputElement>(null)
   const descRef = useRef<HTMLInputElement>(null)
   const tagsRef = useRef<HTMLInputElement>(null)

   const [type, setType] = useState(ContentType.Youtube)

   const addContent = async () => {
      const title = titleRef.current?.value;
      const link = linkRef.current?.value;
      const description = descRef.current?.value;
      const tagsInput = tagsRef.current?.value;

      const tags = tagsInput || ["new"]

      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contents`, {
         title: title,
         link: link,
         type: type,
         description: description || title,
         tags: tags
      }, {
         withCredentials: true
      })
   }

   return (
      <div className=''>
         {open &&
            <div
               onClick={onClose}
               className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center'
            >
               <div className='absolute inset-0 bg-gray-200 opacity-70'></div>
               <div
                  onClick={(e) => e.stopPropagation()}
                  className='relative z-10'
               >
                  <span className='bg-gray-200  flex flex-col p-4 text-white-200 rounded-2xl shadow-[#333333] outline-2  outline-[#333333]'>
                     <div className='flex items-end justify-between px-3'>
                        <div className='font-bold'>Add Content</div>
                        <div
                           className='cursor-pointer'
                           onClick={onClose}
                        >
                           <CrossIcon />
                        </div>
                     </div>
                     <div className='pt-3'>
                        <Input placeholder='Title' reference={titleRef} />
                        <Input placeholder='Link' reference={linkRef} />
                        <Input placeholder='Description' reference={descRef} />
                        <Input placeholder='tags' reference={tagsRef} />
                        <div className='flex justify-center items-center '>
                           <div className='flex'>
                              <Button text='Youtube' variant={type === ContentType.Youtube ? "secondary" : "primary"} onClick={() => {
                                 setType(ContentType.Youtube)
                              }} />
                              <Button text='Twitter' variant={type === ContentType.Twitter ? "secondary" : "primary"} onClick={() => {
                                 setType(ContentType.Twitter)
                              }} />
                           </div>
                        </div>
                        <div className='flex justify-center pt-3'>
                           <Button onClick={addContent} text='Submit' variant='secondary' iconPosition={"after"} startIcon={<SendIcon />} />
                        </div>
                     </div>
                  </span>
               </div>
            </div>
         }
      </div>
   )
}
