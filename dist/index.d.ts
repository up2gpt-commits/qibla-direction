/**
 * qibla-direction
 * Calculate Qibla direction and distance to the Kaaba from any location on Earth.
 *
 * Part of Adwatak (https://adwatak.cloud)
 */
import type { Coordinates, Direction } from './cities';
export { CITIES, COUNTRIES } from './cities';
export type { Coordinates, Direction, City } from './cities';
/** Coordinates of the Kaaba in Mecca */
export declare const KAABA_COORDS: Coordinates;
/**
 * Calculate the Qibla bearing (azimuth) from a given location to the Kaaba.
 * Uses the great-circle bearing formula on a sphere.
 *
 * @param lat - Latitude in decimal degrees
 * @param lng - Longitude in decimal degrees
 * @returns Bearing in degrees from true North (0–360)
 */
export declare function calcQiblaBearing(lat: number, lng: number): number;
/**
 * Calculate the great-circle distance from a given location to the Kaaba.
 * Uses the Haversine formula.
 *
 * @param lat - Latitude in decimal degrees
 * @param lng - Longitude in decimal degrees
 * @returns Distance in kilometers (rounded to nearest integer)
 */
export declare function calcDistance(lat: number, lng: number): number;
/**
 * Convert a bearing to a cardinal or intercardinal direction name.
 *
 * @param bearing - Degrees from true North (0–360)
 * @returns Object with Arabic (`ar`), English (`en`), Turkish (`tr`), and Indonesian (`id`) direction names
 */
export declare function bearingToDirection(bearing: number): Direction;
//# sourceMappingURL=index.d.ts.map