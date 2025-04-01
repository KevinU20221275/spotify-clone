import { colors } from "@/lib/colors";
import { albums } from "./albums";

export interface Playlist {
  id: string;
  title: string;
  artists: string[];
  createdBy?: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  type: "Playlist",
  songs: number[];
}


export let playlists: Playlist[] = [
  {
    id: '1',
    title: "The Days / Nights",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.yellow,
    cover:
      "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad",
    type: "Playlist",
    songs: [11,2,13,26,4,15]
  },
  {
    id: '2',
    title: "Mix diario 1",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.green,
    cover:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5eb88a66d4ae97dea3d6c323772/es-419",
    type: "Playlist",
    songs: [1,7,8,30,12,10,28]
  },
  {
    id: '3',
    title: "Mix diario 2",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.rose,
    cover:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5ebe672b5f553298dcdccb0e676/es-419",
    type: "Playlist",
    songs: [25,20,3,5,16,28]
  },
  {
    id: '4',
    title: "Mix diario 3",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.blue,
    cover:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5ebef9d532cbd16a115da7a6941/es-419",
    type: "Playlist",
    songs: [14,17,22,23,9]
  },
  {
    id: '5',
    title: "Radar de Novedades",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.purple,
    cover:
      "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab67616d0000b27388116e8680ec7987c173bf8a/es-419",
    type: "Playlist",
    songs: [21,19,18,24,6,29]
  },
  {
    id: '6',
    title: "Mix Pop",
    artists:["Spotify"],
    createdBy: "Spotify",
    color: colors.orange,
    cover:
      "https://seed-mix-image.spotifycdn.com/v6/img/pop/3YQKmKGau1PzlVlkL1iodx/es-419/default",
    type: "Playlist",
    songs: [4,9,22,12,8,26]
  },
];

export let myPlaylists : Playlist[] = []

export let morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export let sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))


export interface ArtistPlaylist {
    id: string;
    artistId: string;
    createdBy:string;
    title: string;
    type: "Artist_Playlist";
    songs: number[]
  }
  
  export const artistsPlaylists : ArtistPlaylist[] = [
    {
      id: 'art_playlist_01',
      artistId: "art_01",
      createdBy: "No Spirit",
      title:"NoSpirit",
      type: "Artist_Playlist",
      songs: [2,3,4,5,21,24,29]
    },
    {
      id: 'art_playlist_02',
      artistId: "art_02",
      createdBy : "Cassio",
      title:"Cassio",
      type: "Artist_Playlist",
      songs: [2,3]
    },
    {
      id: 'art_playlist_03',
      artistId : "art_07",
      createdBy: "Team Astro",
      title:"Team Astro",
      type: "Artist_Playlist",
      songs: [11,12,14,15,16,17,18,19,20,25,26,30]
    },
    {
      id: 'art_playlist_04',
      artistId: "art_04",
      createdBy: "Blue Fox",
      title:"Blue Fox",
      type: "Artist_Playlist",
      songs: [6,7,9,26,27]
    },

    {
      id: 'art_playlist_05',
      artistId: "art_05",
      createdBy: "Tenno",
      title:"Tenno",
      type: "Artist_Playlist",
      songs: [11,12,13,14,17,23]
    },
    {
      id: 'art_playlist_06',
      artistId: "art_15",
      createdBy: "Purple Cat",
      title:"Purple Cat",
      type: "Artist_Playlist",
      songs: [1,11,23]
    }
  ]


  export const getAllPlaylists = () => [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
    ...myPlaylists,
    ...albums,
    ...artistsPlaylists
  ];