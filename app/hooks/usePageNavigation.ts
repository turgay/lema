import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { surahList } from '../../lib/surah_index';

export function usePageNavigation() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [pageNum, setPageNum] = useState('');
    const [selectedSurah, setSelectedSurah] = useState('');

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
                changePage(-1);
            } else if (event.key === 'ArrowRight') {
                changePage(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pageNum]);

    useEffect(() => {
        let touchStartX: number;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;

            console.log("diff=" +diff)

            if (Math.abs(diff) > 50) { // 50px threshold, adjust as needed
                changePage(diff > 0 ? 1 : -1);
            }
        };

        // Add event listeners for both keyboard and touch
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [pageNum]);

    const updateSelectedSurah = (page: string) => {
        const pageNumber = parseInt(page, 10);
        const surah = surahList.find(s => s.startPage <= pageNumber && s.endPage >= pageNumber);
        setSelectedSurah(surah ? surah.startPage.toString() : '');
    };

    const changePage = (delta: number) => {
        const currentPage = parseInt(pageNum, 10) || 1;
        const newPage = Math.max(1, currentPage + delta).toString();
        setPageNum(newPage);
        updateSelectedSurah(newPage);
        router.push(`/rube?page=${newPage}`);
    };

    const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPage = event.target.value;
        setPageNum(newPage);
        updateSelectedSurah(newPage);
        if (newPage && parseInt(newPage, 10) > 0) {
            router.push(`/rube?page=${newPage}`);
        }
    };

    const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPage = event.target.value;
        setPageNum(newPage);
        setSelectedSurah(newPage);
        router.push(`/rube?page=${newPage}`);
    };

    return {
        pageNum,
        selectedSurah,
        handlePageChange,
        changePage,
        handleSurahChange,
        surahList
    };
}