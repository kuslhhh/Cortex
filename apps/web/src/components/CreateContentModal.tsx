import React from 'react'
import CrossIcon from './icons/CrossIcon'
import Input from './Input'
import Button from './Button'
import SendIcon from './icons/SendIcon'

export default function CreateContentModal({ open, onClose }) {

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
                        <Input placeholder='Title' onChange={() => { }} />
                        <Input placeholder='Link' onChange={() => { }} />
                        <div className='flex justify-center pt-3'>
                           <Button text='Submit' variant='secondary' startIcon={<SendIcon />} />
                        </div>
                     </div>
                  </span>
               </div>
            </div>
         }
      </div>
   )
}
