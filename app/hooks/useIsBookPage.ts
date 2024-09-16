import { usePathname } from 'next/navigation';

export function useIsBookPage() {
    const pathname = usePathname();
    return pathname?.startsWith('/rube'); // TODO Update this when more books are added
}