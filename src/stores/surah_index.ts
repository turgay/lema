interface Surah {
    name: string,
    index: number,
    startPage: number,
    endPage: number

}
export const surahList: Array<Surah> = [
    <Surah>{name: "Fatiha", index: 1, startPage: 72, endPage: 103},
    <Surah>{name: "Bakara", index: 2, startPage: 104, endPage: 894},
    <Surah>{name: "Al-i İmran", index: 3, startPage: 895, endPage: 1258},
    <Surah>{name: "Nisa", index: 4, startPage: 1259, endPage: 1637},
    <Surah>{name: "Maide", index: 5, startPage: 1638, endPage: 1922}
]