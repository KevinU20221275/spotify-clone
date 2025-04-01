import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: {playlist: null, song: null, songs: []},
    volume: 1,
    myPlaylists: [],
    loadMyPlaylist: (playlist) => set((state) => ([playlist])),
    addMyPlaylist: (playlist) => set((state) => ({myPlaylists: [...state.myPlaylists, playlist]})),
    removeMyPlaylist: (playlistId) => set((state) => ({myPlaylists: state.myPlaylists.filter((p) => p.id!== playlistId)})),
    setVolume: (volume) => set({volume}),
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic}),
}))