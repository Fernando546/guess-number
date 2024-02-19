import "./globals.css";
import Link from "next/link";
import { Lexend_Deca } from "next/font/google";

const lexendDeca700 = Lexend_Deca({ 
  weight: "700",
  subsets: ["latin"] 
});

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex w-2/5 flex-col items-center">
        <p className={`${lexendDeca700.className} bg-gradient-to-r from-purple-500 to-pink-500 text-6xl bg-clip-text text-transparent text-center`}>Guess the number between 1-100</p>
          <Link
            href="/game"
            className="flex w-min items-center justify-center mt-10"
          >
            <p className="text-white bg-zinc-900 py-3 px-7 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500">Play</p>
          </Link>  
      </div>
    </main>
  );
}
