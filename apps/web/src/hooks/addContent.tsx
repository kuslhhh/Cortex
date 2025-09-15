import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useContent() {

   const [contents, setContents] = useState([])

   useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contents`, {
         withCredentials: true
      })
         .then((response) => {
            setContents(response.data.items)
         })
   }, [])

   return contents;
}
