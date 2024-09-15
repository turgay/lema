import React, { Suspense } from "react";
import Link from "next/link";

function TefsirlerContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
      <Link href="/rube" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold mb-2">Rûḥu'l-Beyân</h2>
        <p className="text-sm text-gray-600">İsmâil Hakkı Bursevî</p>
      </Link>
      
      {/* Add more books links here */}
    </div>
  );
}

export default function Main() {
  return (
    <main className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tefsirler</h1>
      
      <Suspense fallback={<div>Loading...</div>}>
        <TefsirlerContent />
      </Suspense>
      
      {/* Commented out buttons remain unchanged */}
    </main>
  );
}