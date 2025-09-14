import React from 'react'
import Button from '../Button'
import PlusIcon from '../icons/PlusIcon'
import ShareIcon from '../icons/ShareIcon'

interface OnlickProp {
   onClick: () => void;
}

export default function Navbar({ onClick }: OnlickProp) {
   return (
      <div>
         <div className="flex gap-2 justify-end">
            <div onClick={onClick}>
               <Button variant="primary" text="Add new" startIcon={<PlusIcon />} />
            </div>
            <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
         </div>
      </div>
   )
}
