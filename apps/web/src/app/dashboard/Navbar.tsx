import React from 'react'
import Button from '../../components/Button'
import PlusIcon from '../../components/icons/PlusIcon'
import ShareIcon from '../../components/icons/ShareIcon'

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
