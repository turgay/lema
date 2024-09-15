import React from 'react';
import Image from "next/image";


export default function RubePage() {
  return (
    <main className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="bg-gray-100 w-full p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">112. İhlas suresi</h2>
        <p className="text-sm text-gray-600">Özgüleme</p>
      </div>
      
      <div className="bg-white w-full p-4 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Image
            src="/author-icon.png"
            alt="Author"
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span className="text-sm">Suat Yıldırım / Kuran-ı Kerim ve Meali</span>
          <div className="ml-auto flex space-x-2">
            <button className="p-1">
              <Image src="/print-icon.png" alt="Print" width={20} height={20} />
            </button>
            <button className="p-1">
              <Image src="/audio-icon.png" alt="Audio" width={20} height={20} />
            </button>
            <button className="p-1">
              <Image src="/settings-icon.png" alt="Settings" width={20} height={20} />
            </button>
            <button className="p-1">
              <Image src="/share-icon.png" alt="Share" width={20} height={20} />
            </button>
          </div>
        </div>
        
        <p className="mb-4">Rahman ve rahim olan Allah'ın adıyla</p>
        
        <div className="text-right mb-2">
          <p className="text-2xl mb-1">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="text-sm text-green-600">Bismillahir rahmanir rahim.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">1.</h3>
          <p className="mb-2">De ki: O, Allah'tır, gerçek İlahtır ve Birdir.</p>
          <div className="text-right">
            <p className="text-2xl mb-1">قُلْ هُوَ اللَّهُ أَحَدٌ</p>
            <p className="text-sm text-green-600">Kul huvallahu ehad.</p>
          </div>
        </div>
      </div>
    </main>
  );
}