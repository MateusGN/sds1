export type RecordsResponse = {
    content: RecordsItem[];
    totalPages: number;
}

export type RecordsItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type Platform = "XBOX" | "PC" | "PLAYSTATION";