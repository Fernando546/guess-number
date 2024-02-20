"use client";
import Link from "next/link";
import { Lexend_Deca } from "next/font/google";
import { useState } from "react"; 

const lexendDeca700 = Lexend_Deca({ 
  weight: "700",
  subsets: ["latin"] 
});

export default function Home() {
  const [guess, setGuess] = useState("");
  const [life, setLife] = useState(5); 
  const [number, setNumber] = useState(getRandomNumber()); 

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const guessNumber = parseInt(guess); 
      console.log(life);
      console.log(number);
      if (life === 0) {
        alert("You lost!");
        setLife(5); 
        setNumber(getRandomNumber());
        console.log(number);
      } else if (guessNumber > number) {
        alert("Too high");
        setLife((prevLife) => prevLife - 1); 
      } else if (guessNumber < number) {
        alert("Too low");
        setLife((prevLife) => prevLife - 1); 
      } else {
        alert("You guessed right!");
        setNumber(getRandomNumber());
        console.log(number);
      }
    }
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <p id="lifecounter" className="text-white absolute top-3 right-3">Life counter: <span className="text-fuchsia-400">{life}</span></p>
      <div className="flex w-1/3 flex-col items-center">
        <p id="textarea" className={`${lexendDeca700.className} bg-gradient-to-r from-purple-500 to-pink-500 text-6xl bg-clip-text text-transparent text-center`}>I guess the number is:</p>
          <input
            type="text"
            id="guess"
            name="guess"
            value={guess}
            onChange={event => setGuess(event.target.value)}
            className="text-center bg-zinc-900 text-white py-3 px-7 rounded-full mt-10 outline-none"
            onKeyDown={handleKeyDown}
          />      
      </div>
    </main>
  );
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}