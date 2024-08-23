import React from 'react'
import SinValidator from "./components/SinValidator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="font-semibold text-xl">SIN Validator</div>
      <SinValidator />
    </main>
  );
}
0