export interface Coordinates {
    lat: number;
    lng: number;
}
export interface Direction {
    ar: string;
    en: string;
}
export interface City {
    lat: number;
    lng: number;
    nameEn: string;
    nameAr: string;
    country: string;
}
export declare const CITIES: City[];
export declare const COUNTRIES: Record<string, City[]>;
//# sourceMappingURL=cities.d.ts.map