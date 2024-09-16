'use client';

import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isBookPage = pathname?.startsWith('/rube'); // TODO Update this when more books are added

    return (
        <div className="flex flex-col min-h-screen">
            <Header isBookPage={isBookPage} />
            <main className="flex-grow overflow-x-hidden w-full">
                <div className="flex flex-col justify-between min-h-full w-full font-[family-name:var(--font-geist-sans)]">
                    <div className={`flex-grow w-full ${isBookPage ? 'mt-6 sm:mt-8' : ''}`}>
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientLayoutContent>
                {children}
            </ClientLayoutContent>
        </Suspense>
    );
}