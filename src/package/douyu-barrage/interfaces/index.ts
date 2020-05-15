export interface Barrage {
    rid: string,
    uid: string,
    id: string,
    level: number,
    barrage: string,
    timestamp: number,
}

export interface Barrages {
    data: Barrage[],
}

export interface LineData {
    x: string[],
    y: number[],
}