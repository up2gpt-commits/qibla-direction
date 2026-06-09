# qibla-direction

Calculate the Qibla direction (bearing) and distance to the Kaaba from any location on Earth.

**Part of [Adwatak](https://adwatak.cloud) — Islamic tools and utilities.**

🔗 **Live demo:** [adwatak.cloud/tools/qibla-direction](https://adwatak.cloud/tools/qibla-direction)

## Installation

```bash
npm install qibla-calc
```

## Quick Start

```ts
import { calcQiblaBearing, calcDistance, bearingToDirection } from 'qibla-direction';

// Qibla bearing from Cairo
const bearing = calcQiblaBearing(30.0444, 31.2357);
console.log(bearing); // 136.37 (degrees from North)

// Distance to Kaaba from Cairo
const distance = calcDistance(30.0444, 31.2357);
console.log(distance); // 1237 (km)

// Human-readable direction
const dir = bearingToDirection(bearing);
console.log(dir.en);  // "Southeast"
console.log(dir.ar);  // "جنوب شرق"
```

## API

### `calcQiblaBearing(lat, lng)`

Calculate the Qibla bearing (azimuth) from a given location.

- `lat` — latitude in decimal degrees
- `lng` — longitude in decimal degrees
- Returns bearing in degrees from true North (0–360)

### `calcDistance(lat, lng)`

Calculate the great-circle distance from a given location to the Kaaba.

- `lat` — latitude in decimal degrees
- `lng` — longitude in decimal degrees
- Returns distance in kilometers (rounded)

### `bearingToDirection(bearing)`

Convert a bearing to a cardinal/intercardinal direction.

- `bearing` — degrees from true North (0–360)
- Returns `{ ar: string, en: string, tr: string, id: string }` with Arabic, English, Turkish, and Indonesian direction names

### `KAABA_COORDS`

```ts
{ lat: 21.4225, lng: 39.8262 }
```

Coordinates of the Kaaba in Mecca.

### `CITIES`

Array of 80+ world cities with coordinates and names in Arabic and English:

```ts
import { CITIES } from 'qibla-direction';
CITIES[0]; // { lat: 30.0444, lng: 31.2357, nameEn: 'Cairo', nameAr: 'القاهرة', country: 'Egypt' }
```

### `COUNTRIES`

Cities grouped by country:

```ts
import { COUNTRIES } from 'qibla-direction';
COUNTRIES['Egypt']; // City[]
```

### Types

```ts
interface Coordinates {
  lat: number;
  lng: number;
}

interface Direction {
  ar: string;
  en: string;
}

interface City {
  lat: number;
  lng: number;
  nameEn: string;
  nameAr: string;
  country: string;
}
```

## Algorithm

Uses the spherical law of cosines (Haversine formula) for distance and the great-circle bearing formula for direction. Based on the standard Qibla calculation using the coordinates of the Kaaba (21.4225°N, 39.8262°E).

## License

MIT © [Adwatak](https://adwatak.cloud)
