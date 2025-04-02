# Music Playlist App

This project is a music playlist management application built with **Astro** and **React**. It features a simulated API, global state management with Zustand, and various performance optimizations using React hooks. The project is styled using **Tailwind CSS**.

## Features

- **Simulated API**: The application mimics API calls with local data.
- **Global State Management**: Zustand is used to manage the `currentMusic` state.
- **Efficient Searching**: Implemented a debounce function to optimize the main search feature.
- **Custom Hooks**:
  - `usePlaylistsFilters`: Manages filtering of playlists based on different criteria.
  - `useFilterPlaylists`: Filters playlists based on user-selected options.
  - `useAsideView`: Controls the display mode of playlists (list, compact list, or grid view).
- **Performance Optimizations**:
  - Utilizes `useMemo` for filtering playlists and recommended songs.
  - Uses `useCallback` to optimize add/remove functions in the playlist.

## Key Project Structure

```
📁 spotify-clone/
 ├── 📁 public/
 |    ├── 📁 categories/
 |    |    ├── 📁 posdcats/ # some images of podcast categories
 |    |
 |    ├── 📁 fonts/          
 │    ├── 📁 music/  # Contains audio files
 │
 ├── 📁 src/
 │    ├── 📁 components/  # React components
 │    ├── 📁 services/    # API request functions
 │    ├── 📁 data/        # Local data for playlists, songs, etc.
 |    ├── 📁 hooks/       # usePlaylistsFilters, useFilterPlaylists, useAsideView
 |    ├── 📁 pages/
 |    |    ├── 📁 api/    # small api to get data from playlists and songs
 |    ├── 📁 services/    # API request functions
 |    ├── 📁 store/       # zustand state
 │
 ├── 📁 styles/
 │    ├── global.css   # Styling configuration
 │
 ├── astro.config.mjs    # Astro configuration
 ├── tsconfig.json       # TypeScript configuration
 ├── package.json        # Dependencies
```

## Global State Management

The application uses Zustand to store and manage the currently playing music state:

```js
const currentMusic = {
  playlist: {},
  songs: [],
  song: {},
};
```

## Custom Hooks

### `usePlaylistsFilters`
Manages filter state for playlists:
```js
const { filterPlaylistsBtn, changeFilter } = usePlaylistsFilters();
```

### `useFilterPlaylists`
Filters playlists based on search input and filter buttons:
```js
const { filteredPlaylists } = useFilterPlaylists(myPlaylists, searchPlaylist, filterPlaylistsBtn);
```

### `useAsideView`
Handles the layout style of the playlist display:
```js
const { gridColsNumber, listContainerStyle } = useAsideView();
```

## Searching & Filtering

- **Debounced Search**: The main search input applies a debounce mechanism to optimize performance.
- **Filtering**: Playlists can be filtered by:
  - All
  - Created by User
  - Created by Spotify
  - Playlists
  - Albums

## Playlist & Song Management

- **Adding Songs**:
```js
const handleAddSongToPlayList = useCallback(async (songId) => {
    if (playlistSongs.find(s => s.id === songId)) return;
    await addSongToPlaylist(id, songId);
    setPlaylistSongs(prev => [...prev, allSongs.find(s => s.id === songId)]);
}, [playlistSongs, id]);
```

- **Removing Songs**:
```js
const handleRemoveSongFromPlaylist = useCallback(async (songId) => {
    await removeSongFromPlaylist(id, songId);
    setPlaylistSongs(prev => prev.filter(s => s.id !== songId));
}, [playlistSongs, id]);
```

## Technologies Used

- **Astro** (for building the project)
- **React** (for interactive components)
- **Zustand** (for global state management)
- **Tailwind CSS** (for styling)
- **TypeScript & JavaScript** (mix of `.tsx` and `.jsx` components)

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/KevinU20221275/spotify-clone.git
   cd spotify-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Conclusion

This project provides an optimized and structured approach to managing playlists and music playback using modern front-end technologies. Contributions and suggestions are welcome!

## Disclaimer  

This project is a Spotify clone created solely for educational purposes to improve my development skills.  
The songs and artists displayed in the application may not be real, as some titles were invented and others mixed.  

I do not own any rights to the music content, and this project has no commercial purpose.

You can see the project live at: https://spotify-clone-2562.vercel.app/


