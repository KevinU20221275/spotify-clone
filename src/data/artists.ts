import { colors } from "@/lib/colors";

export interface Artist {
  id: string;
  name: string;
  about?: string;
  followers?: string;
  monthlyListeners?: string;
  isVerified: boolean;
  cover: string;
  banner?: string;
  color: (typeof colors)[keyof typeof colors],
  type: "Artist",
  albums: string[],
  playlists?: string[]
}

export const artists : Artist[] = [
  {
    id: "art_01",
    name: "NoSpirit",
    about: "playing keys and making beats",
    followers: "19,196",
    monthlyListeners: "1,166,075",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174fc1279efe2524dd77279951f",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab6761860000019435bc967b0645d2e91c3745de",
    color: colors.darkBlue,
    type: "Artist",
    albums: ['alb_01'],
    playlists: ['art_playlist_01']
  },
  {
    id: "art_02",
    name: "Cassio",
    followers: "17,270",
    monthlyListeners: "1,607,396",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174c26df793375e8255d93351c0",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab676186000001942887e66568d16acc9f4f0fe7",
    color: colors.indigo,
    type: "Artist",
    albums: ['alb_01'],
    playlists: ['art_playlist_02']
  },
  {
    id: "art_03",
    name: "Kupla",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab6761610000517493f7e683ef76643012351b7c",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194fa2a58d1595897e163be9bf5",
    color: colors.gray,
    type: "Artist",
    albums: ['alb_02']
  },
  {
    id: "art_04",
    name: "Blue Fox",
    about: "The Blue Fox is a mystical character that lives in unity with the trinity of nature, spirituality and culture. He is always on a journey, travelling to the roots of its inner self–feeling home in both metropolis and wilderness, he is floating through space and time. As a witness of different epochs, he is going through constant reincarnation, carrying and fusing the different cultures he is witnessing and resonating them constantly, recognizable to beings with open eyes and ears",
    followers: "2,619",
    monthlyListeners:"357,432",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab6761610000517434e5dfcb70b79ad456f05ef5",
    color: colors.blue,
    type: "Artist",
    albums: ['alb_02'],
    playlists: ['art_playlist_04']
  },
  {
    id: "art_05",
    name: "Tenno",
    about: "Hi, I’m Tenno and I make chill music ✌️",
    followers: "30,162",
    monthlyListeners: "603,137",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab676161000051746bf321661518620836508948",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194d466680c21257a2ac2c49663",
    color: colors.yellow,
    type: "Artist",
    albums: ['alb_03']
  },
  {
    id: "art_06",
    name: "xander",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174266e76bb9afa276d08aece6c",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194bfdf3981b81934f63baa38ea",
    color: colors.purple,
    type: "Artist",
    albums: ['alb_03']
  },
  {
    id: "art_07",
    name: "Team Astro",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616d00001e0279835ce40cb9a5ba75eec102",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab6761860000019413a91099904a92bcd6c6d7bd",
    color: colors.orange,
    type: "Artist",
    albums: ['alb_03'],
    playlists: ['art_playlist_03']
  },
  {
    id: "art_08",
    name: "Raimu",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174789a98b9b23117b951e65d7e",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab676186000001943f57bc2ec2a8a776ca18c856",
    color: colors.rose,
    type: "Artist",
    albums: ['alb_04']
  },
  {
    id: "art_09",
    name: "Yasumu",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab676161000051742b9dabdc1b6db11af940df01",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab6761860000019437fbe5b4f4d7989a927d3016",
    color: colors.teal,
    type: "Artist",
    albums: ['alb_04']
  },
  {
    id: "art_10",
    name: "Chau Saura",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174abf293c808131afea5261cff",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194c4cea2c6b35695c854c77ec7",
    color: colors.red,
    type: "Artist",
    albums: ['alb_05']
  },
  {
    id: "art_11",
    name: "amies",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab67616100005174e5797921684d6aadc56bd84e",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194232ae9695029e392f59ed0f6",
    color: colors.emerald,
    type: "Artist",
    albums: ['alb_05']
  },
  {
    id: "art_12",
    name: "kyu",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab6761610000517412d1202d848c19339a854327",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab676186000001946b261e9c040676440a81b41c",
    color: colors.indigo,
    type: "Artist",
    albums: ['alb_05']
  },
  {
    id: "art_13",
    name: "WFS",
    isVerified: false,
    cover: "https://i.scdn.co/image/ab67616d000011eb3677b06649b922f42c17126e",
    color: colors.gray,
    type: "Artist",
    albums: ['alb_06']
  },
  {
    id: "art_14",
    name: "Nadav Cohen",
    isVerified: true,
    cover: "https://i.scdn.co/image/ab676161000051740d544048d2e82a2ce9695a49",
    banner: "https://image-cdn-ak.spotifycdn.com/image/ab67618600000194d5de820d4263469a5e5f40d1",
    color: colors.green,
    type: "Artist",
    albums: ['alb_06']
  },
  {
    id: "art_15",
    name: "Purple Cat",
    isVerified: true,
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c951345e3ffe75c5970c59655",
    banner: "https://image-cdn-fa.spotifycdn.com/image/ab676186000001946cb94f53c4a07558d27ab9f1",
    color: colors.purple,
    type: "Artist",
    albums: ['alb_01'],
    playlists: ['art_playlist_05']
  }
]