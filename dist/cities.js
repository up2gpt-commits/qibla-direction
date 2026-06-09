"use strict";
// Cities database — 80+ cities worldwide with coordinates and names
Object.defineProperty(exports, "__esModule", { value: true });
exports.COUNTRIES = exports.CITIES = void 0;
// ─── Cities (85 entries) ────────────────────────────────────────────────────
exports.CITIES = [
    // Saudi Arabia
    { lat: 21.4225, lng: 39.8262, nameEn: 'Mecca', nameAr: 'مكة المكرمة', country: 'Saudi Arabia' },
    { lat: 24.4672, lng: 39.6112, nameEn: 'Medina', nameAr: 'المدينة المنورة', country: 'Saudi Arabia' },
    { lat: 24.7136, lng: 46.6753, nameEn: 'Riyadh', nameAr: 'الرياض', country: 'Saudi Arabia' },
    { lat: 21.5433, lng: 39.1728, nameEn: 'Jeddah', nameAr: 'جدة', country: 'Saudi Arabia' },
    { lat: 26.3927, lng: 50.0888, nameEn: 'Dammam', nameAr: 'الدمام', country: 'Saudi Arabia' },
    // Egypt
    { lat: 30.0444, lng: 31.2357, nameEn: 'Cairo', nameAr: 'القاهرة', country: 'Egypt' },
    { lat: 31.2001, lng: 29.9187, nameEn: 'Alexandria', nameAr: 'الإسكندرية', country: 'Egypt' },
    { lat: 25.6872, lng: 32.6396, nameEn: 'Luxor', nameAr: 'الأقصر', country: 'Egypt' },
    { lat: 27.1783, lng: 31.1859, nameEn: 'Asyut', nameAr: 'أسيوط', country: 'Egypt' },
    { lat: 31.0409, lng: 31.3785, nameEn: 'Mansoura', nameAr: 'المنصورة', country: 'Egypt' },
    // UAE
    { lat: 25.2048, lng: 55.2708, nameEn: 'Dubai', nameAr: 'دبي', country: 'UAE' },
    { lat: 24.4539, lng: 54.3773, nameEn: 'Abu Dhabi', nameAr: 'أبوظبي', country: 'UAE' },
    { lat: 25.3573, lng: 55.4033, nameEn: 'Sharjah', nameAr: 'الشارقة', country: 'UAE' },
    // Iraq
    { lat: 33.3152, lng: 44.3661, nameEn: 'Baghdad', nameAr: 'بغداد', country: 'Iraq' },
    { lat: 30.5085, lng: 47.7804, nameEn: 'Basra', nameAr: 'البصرة', country: 'Iraq' },
    { lat: 36.1901, lng: 43.9930, nameEn: 'Mosul', nameAr: 'الموصل', country: 'Iraq' },
    // Jordan
    { lat: 31.9454, lng: 35.9284, nameEn: 'Amman', nameAr: 'عمّان', country: 'Jordan' },
    // Palestine
    { lat: 31.7683, lng: 35.2137, nameEn: 'Jerusalem', nameAr: 'القدس', country: 'Palestine' },
    { lat: 31.5239, lng: 34.4524, nameEn: 'Gaza', nameAr: 'غزة', country: 'Palestine' },
    // Syria
    { lat: 33.5138, lng: 36.2765, nameEn: 'Damascus', nameAr: 'دمشق', country: 'Syria' },
    // Lebanon
    { lat: 33.8938, lng: 35.5018, nameEn: 'Beirut', nameAr: 'بيروت', country: 'Lebanon' },
    // Yemen
    { lat: 15.3694, lng: 44.1910, nameEn: "Sana'a", nameAr: 'صنعاء', country: 'Yemen' },
    { lat: 12.7854, lng: 45.0187, nameEn: 'Aden', nameAr: 'عدن', country: 'Yemen' },
    // Oman
    { lat: 23.5880, lng: 58.3829, nameEn: 'Muscat', nameAr: 'مسقط', country: 'Oman' },
    // Qatar
    { lat: 25.2854, lng: 51.5310, nameEn: 'Doha', nameAr: 'الدوحة', country: 'Qatar' },
    // Kuwait
    { lat: 29.3759, lng: 47.9774, nameEn: 'Kuwait City', nameAr: 'مدينة الكويت', country: 'Kuwait' },
    // Bahrain
    { lat: 26.2285, lng: 50.5860, nameEn: 'Manama', nameAr: 'المنامة', country: 'Bahrain' },
    // Morocco
    { lat: 34.0209, lng: -6.8416, nameEn: 'Rabat', nameAr: 'الرباط', country: 'Morocco' },
    { lat: 33.5731, lng: -7.5898, nameEn: 'Casablanca', nameAr: 'الدار البيضاء', country: 'Morocco' },
    { lat: 31.6295, lng: -7.9811, nameEn: 'Marrakech', nameAr: 'مراكش', country: 'Morocco' },
    { lat: 34.0333, lng: -5.0000, nameEn: 'Fez', nameAr: 'فاس', country: 'Morocco' },
    // Algeria
    { lat: 36.7538, lng: 3.0588, nameEn: 'Algiers', nameAr: 'الجزائر', country: 'Algeria' },
    // Tunisia
    { lat: 36.8065, lng: 10.1815, nameEn: 'Tunis', nameAr: 'تونس', country: 'Tunisia' },
    // Libya
    { lat: 32.8872, lng: 13.1913, nameEn: 'Tripoli', nameAr: 'طرابلس', country: 'Libya' },
    // Sudan
    { lat: 15.5007, lng: 32.5599, nameEn: 'Khartoum', nameAr: 'الخرطوم', country: 'Sudan' },
    // Turkey
    { lat: 41.0082, lng: 28.9784, nameEn: 'Istanbul', nameAr: 'إسطنبول', nameTr: 'İstanbul', country: 'Turkey' },
    { lat: 39.9334, lng: 32.8597, nameEn: 'Ankara', nameAr: 'أنقرة', nameTr: 'Ankara', country: 'Turkey' },
    { lat: 38.4237, lng: 27.1428, nameEn: 'Izmir', nameAr: 'إزمير', nameTr: 'İzmir', country: 'Turkey' },
    { lat: 36.8969, lng: 30.7133, nameEn: 'Antalya', nameAr: 'أنطاليا', nameTr: 'Antalya', country: 'Turkey' },
    { lat: 37.8714, lng: 32.4846, nameEn: 'Konya', nameAr: 'قونية', nameTr: 'Konya', country: 'Turkey' },
    { lat: 37.0034, lng: 35.3264, nameEn: 'Adana', nameAr: 'أضنة', nameTr: 'Adana', country: 'Turkey' },
    { lat: 41.0216, lng: 39.5707, nameEn: 'Trabzon', nameAr: 'طرابزون', nameTr: 'Trabzon', country: 'Turkey' },
    { lat: 38.7223, lng: 35.4875, nameEn: 'Kayseri', nameAr: 'قيصرية', nameTr: 'Kayseri', country: 'Turkey' },
    { lat: 40.1828, lng: 29.0671, nameEn: 'Bursa', nameAr: 'بورصة', nameTr: 'Bursa', country: 'Turkey' },
    // Iran
    { lat: 35.6892, lng: 51.3890, nameEn: 'Tehran', nameAr: 'طهران', country: 'Iran' },
    { lat: 32.6546, lng: 51.6680, nameEn: 'Isfahan', nameAr: 'أصفهان', country: 'Iran' },
    { lat: 29.5918, lng: 52.5837, nameEn: 'Shiraz', nameAr: 'شيراز', country: 'Iran' },
    // Pakistan
    { lat: 33.6844, lng: 73.0479, nameEn: 'Islamabad', nameAr: 'إسلام آباد', country: 'Pakistan' },
    { lat: 31.5204, lng: 74.3587, nameEn: 'Lahore', nameAr: 'لاهور', country: 'Pakistan' },
    { lat: 24.8607, lng: 67.0011, nameEn: 'Karachi', nameAr: 'كراتشي', country: 'Pakistan' },
    { lat: 34.0151, lng: 71.5249, nameEn: 'Peshawar', nameAr: 'پشاور', country: 'Pakistan' },
    // India
    { lat: 28.6139, lng: 77.2090, nameEn: 'New Delhi', nameAr: 'نيودلهي', country: 'India' },
    { lat: 19.0760, lng: 72.8777, nameEn: 'Mumbai', nameAr: 'مومباي', country: 'India' },
    { lat: 12.9716, lng: 77.5946, nameEn: 'Bangalore', nameAr: 'بنغالور', country: 'India' },
    { lat: 22.5726, lng: 88.3639, nameEn: 'Kolkata', nameAr: 'كلكتا', country: 'India' },
    { lat: 13.0827, lng: 80.2707, nameEn: 'Chennai', nameAr: 'تشيناي', country: 'India' },
    // Bangladesh
    { lat: 23.8103, lng: 90.4125, nameEn: 'Dhaka', nameAr: 'دكا', country: 'Bangladesh' },
    // Malaysia
    { lat: 3.1390, lng: 101.6869, nameEn: 'Kuala Lumpur', nameAr: 'كوالالمبور', nameId: 'Kuala Lumpur', country: 'Malaysia' },
    { lat: 3.0738, lng: 101.5183, nameEn: 'Putrajaya', nameAr: 'بوتراجاي', nameId: 'Putrajaya', country: 'Malaysia' },
    // Indonesia
    { lat: -6.2088, lng: 106.8456, nameEn: 'Jakarta', nameAr: 'جاكرتا', nameId: 'Jakarta', country: 'Indonesia' },
    { lat: -7.7956, lng: 110.3695, nameEn: 'Yogyakarta', nameAr: 'يوجياكارتا', nameId: 'Yogyakarta', country: 'Indonesia' },
    { lat: -8.3405, lng: 115.0920, nameEn: 'Bali (Denpasar)', nameAr: 'دنباسار (بالي)', nameId: 'Denpasar, Bali', country: 'Indonesia' },
    { lat: -7.2575, lng: 112.7521, nameEn: 'Surabaya', nameAr: 'سورابايا', nameId: 'Surabaya', country: 'Indonesia' },
    { lat: -6.9147, lng: 107.6098, nameEn: 'Bandung', nameAr: 'باندونغ', nameId: 'Bandung', country: 'Indonesia' },
    { lat: 3.5952, lng: 98.6722, nameEn: 'Medan', nameAr: 'ميدان', nameId: 'Medan', country: 'Indonesia' },
    { lat: -5.1477, lng: 119.4327, nameEn: 'Makassar', nameAr: 'ماكاسار', nameId: 'Makassar', country: 'Indonesia' },
    { lat: -6.1180, lng: 106.1546, nameEn: 'Serang', nameAr: 'سيرانغ', nameId: 'Serang', country: 'Indonesia' },
    { lat: -0.5022, lng: 117.1526, nameEn: 'Samarinda', nameAr: 'ساماريندا', nameId: 'Samarinda', country: 'Indonesia' },
    // Nigeria
    { lat: 9.0765, lng: 7.3986, nameEn: 'Abuja', nameAr: 'أبوجا', country: 'Nigeria' },
    { lat: 6.5244, lng: 3.3792, nameEn: 'Lagos', nameAr: 'لاغوس', country: 'Nigeria' },
    { lat: 11.9964, lng: 8.5167, nameEn: 'Kano', nameAr: 'كانو', country: 'Nigeria' },
    // South Africa
    { lat: -26.2041, lng: 28.0473, nameEn: 'Johannesburg', nameAr: 'جوهانسبرغ', country: 'South Africa' },
    { lat: -33.9249, lng: 18.4241, nameEn: 'Cape Town', nameAr: 'كيب تاون', country: 'South Africa' },
    // United Kingdom
    { lat: 51.5074, lng: -0.1278, nameEn: 'London', nameAr: 'لندن', country: 'United Kingdom' },
    { lat: 53.4808, lng: -2.2426, nameEn: 'Manchester', nameAr: 'مانشستر', country: 'United Kingdom' },
    { lat: 55.9533, lng: -3.1883, nameEn: 'Edinburgh', nameAr: 'إدinburgh', country: 'United Kingdom' },
    // France
    { lat: 48.8566, lng: 2.3522, nameEn: 'Paris', nameAr: 'باريس', country: 'France' },
    // Germany
    { lat: 52.5200, lng: 13.4050, nameEn: 'Berlin', nameAr: 'برلين', country: 'Germany' },
    // Russia
    { lat: 55.7558, lng: 37.6173, nameEn: 'Moscow', nameAr: 'موسكو', country: 'Russia' },
    // China
    { lat: 39.9042, lng: 116.4074, nameEn: 'Beijing', nameAr: 'بكين', country: 'China' },
    { lat: 31.2304, lng: 121.4737, nameEn: 'Shanghai', nameAr: 'شانغهاي', country: 'China' },
    // Japan
    { lat: 35.6762, lng: 139.6503, nameEn: 'Tokyo', nameAr: 'طوكيو', country: 'Japan' },
    // South Korea
    { lat: 37.5665, lng: 126.9780, nameEn: 'Seoul', nameAr: 'سيول', country: 'South Korea' },
    // United States
    { lat: 40.7128, lng: -74.0060, nameEn: 'New York', nameAr: 'نيويورك', country: 'United States' },
    { lat: 34.0522, lng: -118.2437, nameEn: 'Los Angeles', nameAr: 'لوس أنجلوس', country: 'United States' },
    { lat: 41.8781, lng: -87.6298, nameEn: 'Chicago', nameAr: 'شيكاغو', country: 'United States' },
    { lat: 29.7604, lng: -95.3698, nameEn: 'Houston', nameAr: 'هيوستن', country: 'United States' },
    // Canada
    { lat: 43.6532, lng: -79.3832, nameEn: 'Toronto', nameAr: 'تورونتو', country: 'Canada' },
    { lat: 45.5017, lng: -73.5673, nameEn: 'Montreal', nameAr: 'مونتريال', country: 'Canada' },
    // Australia
    { lat: -33.8688, lng: 151.2093, nameEn: 'Sydney', nameAr: 'سيدني', country: 'Australia' },
    { lat: -37.8136, lng: 144.9631, nameEn: 'Melbourne', nameAr: 'ملبورن', country: 'Australia' },
    // Brazil
    { lat: -23.5505, lng: -46.6333, nameEn: 'São Paulo', nameAr: 'ساو باولو', country: 'Brazil' },
    // Kenya
    { lat: -1.2921, lng: 36.8219, nameEn: 'Nairobi', nameAr: 'نيروبي', country: 'Kenya' },
    // Ethiopia
    { lat: 9.0250, lng: 38.7469, nameEn: 'Addis Ababa', nameAr: 'أديس أبابا', country: 'Ethiopia' },
    // Ghana
    { lat: 5.6037, lng: -0.1870, nameEn: 'Accra', nameAr: 'أكرا', country: 'Ghana' },
    // Senegal
    { lat: 14.7167, lng: -17.4677, nameEn: 'Dakar', nameAr: 'داكار', country: 'Senegal' },
    // Mali
    { lat: 12.6392, lng: -8.0029, nameEn: 'Bamako', nameAr: 'باماكو', country: 'Mali' },
    // Afghanistan
    { lat: 34.5281, lng: 69.1723, nameEn: 'Kabul', nameAr: 'كابل', country: 'Afghanistan' },
    // Uzbekistan
    { lat: 41.2995, lng: 69.2401, nameEn: 'Tashkent', nameAr: 'طشقند', country: 'Uzbekistan' },
    // Kazakhstan
    { lat: 51.1694, lng: 71.4491, nameEn: 'Astana', nameAr: 'أستانة', country: 'Kazakhstan' },
    // Kyrgyzstan
    { lat: 42.8746, lng: 74.5698, nameEn: 'Bishkek', nameAr: 'بيشكيك', country: 'Kyrgyzstan' },
    // Tajikistan
    { lat: 38.5598, lng: 68.7738, nameEn: 'Dushanbe', nameAr: 'دوشنبه', country: 'Tajikistan' },
    // Azerbaijan
    { lat: 40.4093, lng: 49.8671, nameEn: 'Baku', nameAr: 'باكو', country: 'Azerbaijan' },
    // United Arab Emirates (extra)
    { lat: 25.3143, lng: 55.4250, nameEn: 'Ajman', nameAr: 'عجمان', country: 'UAE' },
    // Kuwait extra
    { lat: 29.3375, lng: 47.9692, nameEn: 'Hawalli', nameAr: 'حولي', country: 'Kuwait' },
    // Brunei
    { lat: 4.9031, lng: 114.9398, nameEn: 'Bandar Seri Begawan', nameAr: 'بندر سري بكاوان', country: 'Brunei' },
    // Maldives
    { lat: 4.1755, lng: 73.5093, nameEn: 'Malé', nameAr: 'ماليه', country: 'Maldives' },
    // Sri Lanka
    { lat: 6.9271, lng: 79.8612, nameEn: 'Colombo', nameAr: 'كولومبو', country: 'Sri Lanka' },
    // Singapore
    { lat: 1.3521, lng: 103.8198, nameEn: 'Singapore', nameAr: 'سنغافورة', country: 'Singapore' },
    // Philippines
    { lat: 14.5995, lng: 120.9842, nameEn: 'Manila', nameAr: 'مانيلا', country: 'Philippines' },
    // Thailand
    { lat: 13.7563, lng: 100.5018, nameEn: 'Bangkok', nameAr: 'بانكوك', country: 'Thailand' },
    // Vatican City
    { lat: 41.9029, lng: 12.4534, nameEn: 'Vatican City', nameAr: 'مدينة الفاتيكان', country: 'Vatican City' },
];
// ─── Grouped by country ─────────────────────────────────────────────────────
exports.COUNTRIES = exports.CITIES.reduce((acc, city) => {
    if (!acc[city.country]) {
        acc[city.country] = [];
    }
    acc[city.country].push(city);
    return acc;
}, {});
//# sourceMappingURL=cities.js.map