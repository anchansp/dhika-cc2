"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import cookie_icon from "../../public/cookie_icon.png";
import "animate.css";

export default function NotFound() {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        // router.push("/dashboard");
        router.back();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime, router]);

  return (
    <div className="h-vh bg-orange-200 flex items-center justify-center">
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div>
          <h1 className="ml-5 font-bold text-black text-7xl text-center">
            <b>404 Not Found</b>
          </h1>
          <h2 className="ml-5 font-bold text-black text-5xl text-center">
            Going back in {remainingTime} seconds...
          </h2>
        </div>
        <div className="flex justify-center items-center py-4 animate__animated animate__wobble animate__delay-1s">
          <Image
            alt="our maskot, a man with a cookie head"
            src={cookie_icon}
            width={120}
            height={120}
            className="w-full h-full max-w-64 max-h-64"
          />
        </div>
      </div>
    </div>
  );
}
