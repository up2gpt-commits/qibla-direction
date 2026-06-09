export interface Coordinates {
    lat: number;
    lng: number;
}
export interface Direction {
    ar: string;
    en: string;
    tr: string;
    id: string;
}
export interface City {
    lat: number;
    lng: number;
    nameEn: string;
    nameAr: string;
    nameTr?: string;
    nameId?: string;
    country: string;
}
export declare const CITIES: City[];
export declare const COUNTRIES: Record<string, City[]>;
//# sourceMappingURL=cities.d.ts.map