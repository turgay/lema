'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { surahList } from '../lib/surah_index';


import Link from "next/link";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [pageNum, setPageNum] = useState('');
    const [selectedSurah, setSelectedSurah] = useState('');
    const isBookPage = pathname?.startsWith('/rube'); // TODO Update this when more books are added


    useEffect(() => {
        const page = searchParams?.get('page');
        if (page) {
            setPageNum(page);
            updateSelectedSurah(page);
        }
    }, [searchParams]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                decreasePage();
            } else if (event.key === 'ArrowRight') {
                increasePage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [pageNum]);

    const updateSelectedSurah = (page: string) => {
        const pageNumber = parseInt(page, 10);
        const surah = surahList.find(s => s.startPage <= pageNumber && s.endPage >= pageNumber);
        setSelectedSurah(surah ? surah.startPage.toString() : '');
    };

    const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPage = event.target.value;
        setPageNum(newPage);
        updateSelectedSurah(newPage);
        if (newPage && parseInt(newPage, 10) > 0) {
            router.push(`/rube?page=${newPage}`);
        }
    };

    const decreasePage = () => {
        const currentPage = parseInt(pageNum, 10);
        if (currentPage > 1) {
            const newPage = (currentPage - 1).toString();
            setPageNum(newPage);
            updateSelectedSurah(newPage);
            router.push(`/rube?page=${newPage}`);
        }
    };

    const increasePage = () => {
        const currentPage = parseInt(pageNum, 10) || 1;
        const newPage = (currentPage + 1).toString();
        setPageNum(newPage);
        updateSelectedSurah(newPage);
        router.push(`/rube?page=${newPage}`);
    };

    const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPage = event.target.value;
        setPageNum(newPage);
        setSelectedSurah(newPage);
        router.push(`/rube?page=${newPage}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="p-4 border-b">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700">
                            Lema
                        </Link>
                        <nav className="flex items-center space-x-4">
                        {isBookPage && (
                            <>
                                <Link href="/" className="p-2">←</Link>
                                <Link href="/rube" className="text-md font-semibold hover:underline">
                                    Ruhu&apos;l Beyan
                                </Link>
                            </>
                        )}
                        </nav>
                    </div>
                    {isBookPage && (
                    <div className="flex items-center space-x-4">
                        <button className="p-2">🔍</button>
                        <div className="flex items-center border rounded">
                            <button className="p-2 hover:bg-gray-100" onClick={decreasePage}>&lt;</button>
                            <input
                                type="number"
                                className="w-20 p-2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="Sayfa"
                                min="1"
                                value={pageNum}
                                onChange={handlePageChange}
                            />
                            <button className="p-2 hover:bg-gray-100" onClick={increasePage}>&gt;</button>
                        </div>
                        <select
                            className="p-2 border rounded w-48"
                            onChange={handleSurahChange}
                            value={selectedSurah}
                        >
                            {surahList.map((surah) => (
                                <option key={surah.index} value={surah.startPage}>
                                    {surah.index}. {surah.name} ({surah.startPage})
                                </option>
                            ))}
                        </select>
                    </div>
                      )}
                </div>
            </header>
            <main className="flex-grow">
                <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    {children}
                    <footer className="flex items-center justify-between w-full max-w-3xl mx-auto text-sm text-gray-500">
                        <div>2024 🍃 Lema</div>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}