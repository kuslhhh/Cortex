import React from 'react'
import SidebarItem from './SidebarItem'
import TwitterIcon from './icons/TwitterIcon'
import YoutubeIcon from './icons/YoutubeIcon'
import Logo from './icons/Logo'

export default function Sidebar() {
   return (
      <div className='h-screen bg-black-200  text-white-200 w-48 fixed'>
         <Logo />
         <div className='flex flex-col mt-10 justify-center items-center'>

            <SidebarItem icon={<TwitterIcon />} text='Twitter' />
            <SidebarItem icon={<YoutubeIcon />} text='YouTube' />
         </div>
      </div>
   )
}
