import { useMemo } from "react";


export function useFilterPlaylists(myPlaylists, searchPlaylist, filterPlaylistsBtn){
    const filteredPlaylistsByBtn = useMemo(() => {
        if (filterPlaylistsBtn.CREATED_BY_ME){
            return myPlaylists.filter((playlist) => playlist.artists[0] === "Jhon Doe")
        }

        if (filterPlaylistsBtn.CREATED_BY_SPOTIFY){
            return myPlaylists.filter((playlist) => playlist.artists[0] === "Spotify")
        }

        if (filterPlaylistsBtn.ALBUMS){
            return myPlaylists.filter((playlist) => playlist.type === "Album")
        }

        if (filterPlaylistsBtn.PLAYLISTS){
            return myPlaylists.filter((playlist) => playlist.type === "Playlist")
        }

        return myPlaylists
    }, [filterPlaylistsBtn, myPlaylists])

    const filteredPlaylists = searchPlaylist
        ? filteredPlaylistsByBtn?.filter((playlist)=> playlist.title.toLowerCase().includes(searchPlaylist?.toLowerCase())) 
        : filteredPlaylistsByBtn

    return {filteredPlaylists}
}