import FormBottom from "@/components/FormBottom";
import HomeLoader from "@/components/HomeLoader";
import { Suspense } from "react";

export default function Home() {
 
  return ( 
    <Suspense fallback={<HomeLoader></HomeLoader>}>
    <FormBottom/>
    </Suspense>
  )
}
