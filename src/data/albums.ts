import { colors } from "@/lib/colors";

export interface Album {
    id: string;
    title: string;
    createdBy: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
    type: "Album",
    songs: number[];
  }
  
  export const albums : Album[] = [
    {
      id: 'alb_01',
      title: "Chill Lo-Fi Music",
      createdBy:"Spotify",
      color: colors.yellow,
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
      artists: ["NoSpirit", "Casiio", "Purple Cat"],
      type: "Album",
      songs: [1, 2, 3, 4, 5]
    },
    {
      id: 'alb_02',
      title: "Lo-Fi Chill Session",
      createdBy:"Spotify",
      color: colors.green,
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
      artists: ["Kupla", "Blue Fox"],
      type: "Album",
      songs: [6,7,8,9,10]
    },
    {
      id: 'alb_03',
      title: "Study Session",
      createdBy:"Spotify",
      color: colors.rose,
      cover:
        "https://f4.bcbits.com/img/a1435058381_65.jpg",
      artists: ["Tenno", "xander", "Team Astro", "Purple Cat"],
      type: "Album",
      songs: [11,12,13,14,15]
    },
    {
      id: 'alb_04',
      title: "Blue Note Study Time",
      createdBy:"Spotify",
      color: colors.blue,
      cover:
        "https://f4.bcbits.com/img/a1962013209_16.jpg",
      artists: ["Raimu", "Yasumu", "Team Astro", "Tenno"],
      type: "Album",
      songs: [16,17,18,19,20]
    },
    {
      id:  'alb_05',
      title: "Chau Saura Session",
      createdBy:"Spotify",
      color: colors.purple,
      cover:
        "https://f4.bcbits.com/img/a2793859494_16.jpg",
      artists: ["Chau Saura", "amies", "kyu", "NoSpirit"],
      type: "Album",
      songs: [21,22,23,24,25]
    },
    {
      id: 'alb_06',
      title: "Like a Necessity",
      createdBy:"Spotify",
      color: colors.orange,
      cover:
        "https://f4.bcbits.com/img/a0363730459_16.jpg",
      artists: ["WFS", "Nadav Cohen", "Blue Fox", "Team Astro", "NoSpirit"],
      type: "Album",
      songs: [26,27,28,29,30]
    },
  ]