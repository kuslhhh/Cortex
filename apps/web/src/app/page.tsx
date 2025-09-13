import Button from "@/components/Button";
import Card from "@/components/Card";
import PlusIcon from "@/components/icons/PlusIcon";
import ShareIcon from "@/components/icons/ShareIcon";

export default function Home() {
   return (
      <>
         <div className="h-screen bg-black-200">
            <Button variant="primary" text="Add new" startIcon={<PlusIcon />} />
            <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
            <div className="flex">

               <Card type="twitter" link="https://x.com/F1JayyUK/status/1966747308495622283" title="ind vs pak" />
               <Card type="youtube" link="https://www.youtube.com/watch/gc5b5BixkHs?si=EwvxdrOs9qXPs8Z4" title="max" />
            </div>
         </div>
      </>
   );
}