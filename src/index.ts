/**
 * qibla-direction
 * Calculate Qibla direction and distance to the Kaaba from any location on Earth.
 *
 * Part of Adwatak (https://adwatak.cloud)
 */

import { CITIES, COUNTRIES } from './cities';
import type { Coordinates, Direction } from './cities';
export { CITIES, COUNTRIES } from './cities';
export type { Coordinates, Direction, City } from './cities';

// ─── Constants ──────────────────────────────────────────────────────────────

/** Coordinates of the Kaaba in Mecca */
export const KAABA_COORDS: Coordinates = {
  lat: 21.4225,
  lng: 39.8262,
};

// ─── Qibla Bearing ──────────────────────────────────────────────────────────

/**
 * Calculate the Qibla bearing (azimuth) from a given location to the Kaaba.
 * Uses the great-circle bearing formula on a sphere.
 *
 * @param lat - Latitude in decimal degrees
 * @param lng - Longitude in decimal degrees
 * @returns Bearing in degrees from true North (0–360)
 */
export function calcQiblaBearing(lat: number, lng: number): number {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;
  const kaabaLatRad = (KAABA_COORDS.lat * Math.PI) / 180;
  const kaabaLngRad = (KAABA_COORDS.lng * Math.PI) / 180;

  const dLng = kaabaLngRad - lngRad;

  const y = Math.sin(dLng) * Math.cos(kaabaLatRad);
  const x =
    Math.cos(latRad) * Math.sin(kaabaLatRad) -
    Math.sin(latRad) * Math.cos(kaabaLatRad) * Math.cos(dLng);

  let bearing = Math.atan2(y, x) * (180 / Math.PI);
  bearing = (bearing + 360) % 360;

  return bearing;
}

// ─── Distance ───────────────────────────────────────────────────────────────

/**
 * Calculate the great-circle distance from a given location to the Kaaba.
 * Uses the Haversine formula.
 *
 * @param lat - Latitude in decimal degrees
 * @param lng - Longitude in decimal degrees
 * @returns Distance in kilometers (rounded to nearest integer)
 */
export function calcDistance(lat: number, lng: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((KAABA_COORDS.lat - lat) * Math.PI) / 180;
  const dLng = ((KAABA_COORDS.lng - lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat * Math.PI) / 180) *
      Math.cos((KAABA_COORDS.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

// ─── Direction Name ─────────────────────────────────────────────────────────

/**
 * Convert a bearing to a cardinal or intercardinal direction name.
 *
 * @param bearing - Degrees from true North (0–360)
 * @returns Object with Arabic (`ar`) and English (`en`) direction names
 */
export function bearingToDirection(bearing: number): Direction {
  if (bearing >= 337.5 || bearing < 22.5) return { ar: 'شمال', en: 'North' };
  if (bearing >= 22.5 && bearing < 67.5) return { ar: 'شمال شرق', en: 'Northeast' };
  if (bearing >= 67.5 && bearing < 112.5) return { ar: 'شرق', en: 'East' };
  if (bearing >= 112.5 && bearing < 157.5) return { ar: 'جنوب شرق', en: 'Southeast' };
  if (bearing >= 157.5 && bearing < 202.5) return { ar: 'جنوب', en: 'South' };
  if (bearing >= 202.5 && bearing < 247.5) return { ar: 'جنوب غرب', en: 'Southwest' };
  if (bearing >= 247.5 && bearing < 292.5) return { ar: 'غرب', en: 'West' };
  return { ar: 'شمال غرب', en: 'Northwest' };
}
