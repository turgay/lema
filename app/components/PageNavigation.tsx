import React from 'react';
import { usePageNavigation } from '../hooks/usePageNavigation';

export default function PageNavigation() {
    const { pageNum, selectedSurah, handlePageChange, changePage, handleSurahChange, surahList } = usePageNavigation();

    return (
        <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-1 sm:p-2">🔍</button>
            <div className="flex items-center border rounded">
                <button className="p-1 sm:p-2 hover:bg-gray-100" onClick={() => changePage(-1)}>&lt;</button>
                <input
                    type="number"
                    className="w-16 sm:w-20 p-1 sm:p-2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Sayfa"
                    min="1"
                    value={pageNum}
                    onChange={handlePageChange}
                />
                <button className="p-1 sm:p-2 hover:bg-gray-100" onClick={() => changePage(1)}>&gt;</button>
            </div>
            <select
                className="p-1 sm:p-2 border rounded w-40 sm:w-48"
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
    );
}