export interface CategoryItem {
    id: string;
    name: string;
    cover?: string;
    color: string;
  }
  
  export const podcastsCategories: CategoryItem[] = [
    {
      id: "1",
      name: "Ranking de podcasts",
      cover: "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
      color: "#0D73EC",
    },
    {
      id : "2",
      name: "Education",
      cover: "https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7",
      color: "#477D95"
    },
    {
      id : "3",
      name: "Documentales",
      cover: "https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4",
      color: "#503750"
    },
    {
      id : "4",
      name: "Comedia",
      cover: "https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1",
      color: "#AF2896"
    },
    {
      id: "5",
      name: "Cultura pop",
      cover: "https://i.scdn.co/image/ab6765630000ba8a4dea4f05ebdb302fadd2c857",
      color: "#DC148C"
    },
    {
      id : "6",
      name :"Fitness y nutricion",
      cover: "https://cdn.pixabay.com/photo/2019/05/18/09/28/blueberries-4211525_960_720.jpg",
      color: "#27856A"
    },
    {
      id : "7",
      name :"Celebridades",
      color: "#777777"
    },
    {
      id : "8",
      name :"Podcasts sobre programas de TV",
      color: "#8D67AB"
    },
    {
      id : "9",
      name :"Belleza",
      cover : "https://cdn.pixabay.com/photo/2022/10/10/18/00/cosmetics-7512332_1280.jpg",
      color: "#A56752"
    },
    {
      id : "10",
      name :"Videojuegos",
      cover: "https://cdn.pixabay.com/photo/2019/04/15/11/42/fortnite-4129124_1280.jpg",
      color: "#0D73EC"
    },
    {
      id : "11",
      name :"Cine",
      cover: "https://cdn.pixabay.com/photo/2019/05/23/13/11/headphones-4223911_1280.jpg",
      color: "#1E3264"
    },
    {
      id : "12",
      name :"Libros",
      color: "#503750"
    }
  ]