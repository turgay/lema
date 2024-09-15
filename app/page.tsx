import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tefsirler</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
        <Link href="/rube" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Rûḥu’l-Beyân</h2>
          <p className="text-sm text-gray-600">İsmâil Hakkı Bursevî</p>
        </Link>
        
        {/* Add more surah links here */}
      </div>
      
      {/* <div className="mt-8 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
         Butun Kitaplar
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Rastgele
        </button>
      </div> */}
    </main>
  );
}