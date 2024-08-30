'use client'
import { Spotlight } from "@/app/components/ui/Spotlight";
import { useParams } from "next/navigation";

const CoinDetail = () => {
  const { coinId } = useParams();

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vw] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vw] w-[50vw]" fill="white" />
      </div>
      <div className="text-white">
        Aqui ponemos la informacion
      </div>
    </div>
  );
};

export default CoinDetail;
