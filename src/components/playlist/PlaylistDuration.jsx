
import { playlistTime } from "@/lib/utils";
import { getPlaylistsSongs } from "@/services/song";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";


export function PlaylistDuration({id}){
    const [songs, setSongs] = useState([])
    const currentSongs = usePlayerStore(state => state.currentMusic.songs)
    
    useEffect(() => {
        if (id){
            getPlaylistsSongs(id).then((listOfSongs) => setSongs(listOfSongs))
        }
    }, [id, currentSongs])
    

    const playListDuration = songs?.length > 0 ? playlistTime(songs) : "00:00"

    return (
        <p className="mt-1">
            <span className="text-white">{songs?.length} canciones</span>, {playListDuration}
        </p>
    )
}