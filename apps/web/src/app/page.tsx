import HeartButtonSvg from "@/components/heartButtonSvg";
import SearchButtonSvg from "@/components/searchButtonSvg";
import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <>
         <div className="h-screen bg-black-200">
            <Button className="bg-gray-200 cursor-pointer text-white-200 hover:text-black-200 rounded-2xl  px-10 py-5 ">
               click
            </Button>
            <Button className="bg-gray-200 text-white-200 cursor-pointer  hover:text-black-200 rounded-2xl  px-10 py-5 ">
               click
            </Button>
            <SearchButtonSvg />
            <HeartButtonSvg />

         </div>
      </>
   );
}