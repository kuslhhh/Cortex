import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useContent() {
   const [contents, setContents] = useState([]);

   useEffect(() => {
      if (typeof window === 'undefined') return; // Skip during SSR/build time

      const fetchData = () => {
         axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contents`, {
            headers: { 'Cache-Control': 'no-cache' },
            withCredentials: true,
         })
         .then((response) => {
            setContents(response.data.items);
         })
         .catch((error) => {
            console.error('Failed to fetch contents:', error);
         });
      };

      console.log('Fetching contents...');
      fetchData();
      const intervalId = setInterval(fetchData, 5000);

      return () => clearInterval(intervalId);
   }, []);

   return contents;
}
