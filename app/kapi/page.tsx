"use client"
import Link from "next/link";
import { Lexend_Deca } from "next/font/google";
import Image from "next/image";

const lexendDeca700 = Lexend_Deca({ 
  weight: "700",
  subsets: ["latin"] 
});

export default function Home() {
  
  const playAudio = () => {
    const audio = new Audio("/kapi.mp3");
    audio.play();
  };
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex w-2/5 flex-col items-center">
        <Image
          src="/kapi.jpg"
          alt="kapi"
          width={200}
          height={200}
          onClick={playAudio}
        >
        </Image>
          <Link
            href="/"
            className="flex w-min items-center justify-center mt-10"
          >
            <p className="text-white bg-zinc-900 py-3 px-7 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500">Home</p>
          </Link>  
      </div>
    </main>
  );
}
