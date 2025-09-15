import React from 'react'
import Card from '../../components/Card'

export default function Main() {
   return (
      <div>
         <div className="flex gap-6 pt-10 justify-center ">
            <Card type="twitter" link="https://x.com/F1JayyUK/status/1966747308495622283" title="ind vs pak" />
            <Card type="youtube" link="https://www.youtube.com/watch/gc5b5BixkHs?si=EwvxdrOs9qXPs8Z4" title="max" />
         </div>
      </div>
   )
}
