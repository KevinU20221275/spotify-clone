export interface Song {
  id: number;
  albumId: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  streams?: string;
  type?: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": "alb_01",
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Purple Cat"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:57",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 2,
    "albumId": "alb_01",
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["NoSpirit", "Casiio"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:40",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 3,
    "albumId": "alb_01",
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["NoSpirit", "Casiio"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:29",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 4,
    "albumId": "alb_01",
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["NoSpirit"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 5,
    "albumId": "alb_01",
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["NoSpirit"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 6,
    "albumId": "alb_02",
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Blue Fox"],
    "album": "Midnight Tales",
    "duration": "2:38",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 7,
    "albumId": "alb_02",
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Blue Fox"],
    "album": "Midnight Tales",
    "duration": "2:40",
    "streams" : "15,467",
    "type" : "Single"
  },
  {
    "id": 8,
    "albumId": "alb_02",
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne", "Kupla"],
    "album": "Midnight Tales",
    "duration": "2:53",
    "streams" : "1,467",
    "type" : "Single"
  },
  {
    "id": 9,
    "albumId": "alb_02",
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne", "Blue Fox"],
    "album": "Midnight Tales",
    "duration": "3:11",
    "streams" : "19,000",
    "type" : "Single"
  },
  {
    "id": 10,
    "albumId": "alb_02",
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "2:58",
    "streams" : "10,467",
    "type" : "Single"
  },
  {
    "id": 11,
    "albumId": "alb_03",
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno", "Team Astro", "Purple Cat"],
    "album": "Study Session",
    "duration": "3:06",
    "streams" : "120,467",
    "type" : "Single"
  },
  {
    "id": 12,
    "albumId": "alb_03",
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno", "Team Astro"],
    "album": "Study Session",
    "duration": "1:30",
    "streams" : "16,467",
    "type" : "Single"
  },
  {
    "id": 13,
    "albumId": "alb_03",
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno", "xander"],
    "album": "Study Session",
    "duration": "1:59",
    "streams" : "18,467",
    "type" : "Single"
  },
  {
    "id": 14,
    "albumId": "alb_03",
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno", "Team Astro"],
    "album": "Study Session",
    "duration": "3:56",
    "streams" : "12,467",
    "type" : "Single"
  },
  {
    "id": 15,
    "albumId": "alb_03",
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Team Astro"],
    "album": "Study Session",
    "duration": "2:30",
    "streams" : "11,467",
    "type" : "Single"
  },
  {
    "id": 16,
    "albumId": "alb_04",
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Team Astro"],
    "album": "Study Session",
    "duration": "2:59",
    "streams" : "4,467",
    "type" : "Single"
  },
  {
    "id": 17,
    "albumId": "alb_04",
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno", "Team Astro"],
    "album": "Study Session",
    "duration": "2:12",
    "streams" : "8,467",
    "type" : "Single"
  },
  {
    "id": 18,
    "albumId": "alb_04",
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Team Astro"],
    "album": "Study Session",
    "duration": "3:02",
    "streams" : "1,067",
    "type" : "Single"
  },
  {
    "id": 19,
    "albumId": "alb_04",
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Team Astro"],
    "album": "Study Session",
    "duration": "2:29",
    "streams" : "3,467",
    "type" : "Single"
  },
  {
    "id": 20,
    "albumId": "alb_04",
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Team Astro"],
    "album": "Study Session",
    "duration": "2:29",
    "streams" : "12,000",
    "type" : "Single"
  },
  {
    "id": 21,
    "albumId": "alb_05",
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer", "kyu", "NoSpirit"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:49",
    "streams" : "22,567",
    "type" : "Single"
  },
  {
    "id": 22,
    "albumId": "alb_05",
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Chau Saura"],
    "album": "Chill Lo-Fi Music",
    "duration": "1:52",
    "streams" : "12,707",
    "type" : "Single"
  },
  {
    "id": 23,
    "albumId": "alb_05",
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Purple Cat", "Tenno"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:15",
    "streams" : "7,467",
    "type" : "Single"
  },
  {
    "id": 24,
    "albumId": "alb_05",
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["NoSpirit", "Nadav Cohen"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06",
    "streams" : "6,067",
    "type" : "Single"
  },
  {
    "id": 25,
    "albumId": "alb_05",
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Team Astro", "WFS"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:54",
    "streams" : "9,467",
    "type" : "Single"
  },
  {
    "id": 26,
    "albumId": "alb_06",
    "title": "Wild like you",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["Team Astro", "Blue Fox"],
    "album": "Like a Necessity",
    "duration": "1:57",
    "streams" : "10,467",
    "type" : "Single"
  },
  {
    "id": 27,
    "albumId": "alb_06",
    "title": "Go for you",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Blue Fox"],
    "album": "Like a Necessity",
    "duration": "1:49",
    "streams" : "17,467",
    "type" : "Single"
  },
  {
    "id": 28,
    "albumId": "alb_06",
    "title": "Need you",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "2:35",
    "streams" : "15,467",
    "type" : "Single"
  },
  {
    "id": 29,
    "albumId": "alb_06",
    "title": "Carry you",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["Nadav Cohen", "NoSpirit"],
    "album": "Like a Necessity",
    "duration": "2:49",
    "streams" : "10,209",
    "type" : "Single"
  },
  {
    "id": 30,
    "albumId": "alb_06",
    "title": "Child of the night",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["Team Astro", "WFS"],
    "album": "Like a Necessity",
    "duration": "2:29",
    "streams" : "11,250",
    "type" : "Single"
  }
]