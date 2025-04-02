import { useEffect, useState, useCallback } from "react";
import { MusicTable } from "../common/MusicTable";
import { getPlaylistsSongs, addSongToPlaylist, removeSongFromPlaylist } from "@/services/song";
import { SearchSongs } from "../common/SearchSongs";
import { songs as allSongs } from "@/data/songs";
import { usePlayerStore } from "@/store/playerStore";
import { TableSkeleton } from "../skeletons/TableSkeleton";

export const SongsManager = ({id, playlist}) => {
    const [playlistSongs, setPlaylistSongs] = useState([])
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic);
    const currentMusic = usePlayerStore(state => state.currentMusic);
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getPlaylistsSongs(id).then((listOfSongs) => {
            setPlaylistSongs(listOfSongs)
        }).finally(() => setIsLoading(true))
    }, [])


    useEffect(() => {
        if (currentMusic.playlist?.id === id){
            setCurrentMusic({...currentMusic, songs: playlistSongs})
        }
    }, [playlistSongs])



    const handleAddSongToPlayList = useCallback(async (songId) => {
        if (playlistSongs.find(s => s.id === songId)) return

        await addSongToPlaylist(id, songId)

        const newSong = allSongs.find(s => s.id === songId)
        
        setPlaylistSongs(prev => [...prev, newSong])
    }, [playlistSongs, id])


    const handleRemoveSongFromPlaylist = useCallback(async (songId) => {
        await removeSongFromPlaylist(id, songId)

        const newPlaylistSongs = playlistSongs.filter((s => s.id !== songId))
        setPlaylistSongs(newPlaylistSongs)

        let song;
        let currentPlaylist;

        if (typeof window !== "undefined"){
            song = usePlayerStore.getState().currentMusic.song;
            currentPlaylist = usePlayerStore.getState().currentMusic.playlist;
        }

        if (song?.id === songId && currentPlaylist?.id === playlist.id){
            if (newPlaylistSongs.length === 0){
                setIsPlaying(false)
                setCurrentMusic({...currentMusic, songs: [], song: null });
            } else {
                setCurrentMusic({playlist: currentPlaylist, songs: newPlaylistSongs, song: newPlaylistSongs[0] });
            }
        }
    }, [playlistSongs, id])

    return (
        <>
            <section className="p-6">
                {
                    playlistSongs.length > 0 &&
                    isLoading && <MusicTable songs={playlistSongs} playlistInfo={playlist} removeSong={handleRemoveSongFromPlaylist} client:visible ></MusicTable>
                }
                {
                    !isLoading && playlist.songs.length > 0  && <TableSkeleton/>
                }
            </section>
            
            <SearchSongs client:load playlistSongs={playlistSongs} addNewSong={handleAddSongToPlayList} />
        </>
    )
}



