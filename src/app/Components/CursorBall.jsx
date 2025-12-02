"use client";
import { useEffect } from "react";
import ballimage from "../../../public/images/ball.webp";
import Image from "next/image";
export default function CursorBall() {
  useEffect(() => {
    const ball = document.getElementById("cursor-ball");

    const moveBall = (e) => {
      ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveBall);

    return () => window.removeEventListener("mousemove", moveBall);
  }, []);

  return (
    <div
      id="cursor-ball"
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]"
      style={{
        transition: "transform 0.30s ease-out",
      }}
    >
      <Image
        src={ballimage}
        alt="ball"
        width={1000}
        height={500}
        className="w-full h-full rounded-[35px]"
      />
    </div>
  );
}
