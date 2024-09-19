import React from 'react';
import Link from "next/link";
import PageNavigation from './PageNavigation';

interface HeaderProps {
    isBookPage: boolean;
}

export default function Header({ isBookPage }: HeaderProps) {
    return (
        <header className="p-2 sm:p-4 border-b">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link href="/" className="text-xl sm:text-2xl font-bold text-emerald-600 hover:text-emerald-700">
                        Lema
                    </Link>
                    <nav className="flex items-center space-x-2 sm:space-x-4">
                    {isBookPage && (
                        <>
                            <Link href="/" className="p-1 sm:p-2">←</Link>
                            <Link href="/rube/1" className="text-sm sm:text-md font-semibold hover:underline">
                                Ruhu&apos;l Beyan
                            </Link>
                        </>
                    )}
                    </nav>
                </div>
                {isBookPage && <PageNavigation />}
            </div>
        </header>
    );
}