export const PLAYLISTS_FILTERS = {
    ALL: 'ALL',
    CREATED_BY_ME: 'CREATED_BY_ME',
    CREATED_BY_SPOTIFY: 'CREATED_BY_SPOTIFY',
    PLAYLISTS : 'PLAYLISTS',
    ALBUMS: 'ALBUMS',
}

import { useState } from "react"

export function usePlaylistsFilters(){
    const [filterPlaylistsBtn, setFilterPlaylistsBtn] = useState({
        ALL: false,
        CREATED_BY_ME: false,
        CREATED_BY_SPOTIFY: false,
        PLAYLISTS: false,
        ALBUMS: false,
    })

    const changeFilter = (filter) => {
        if (filter === PLAYLISTS_FILTERS.ALL){
            setFilterPlaylistsBtn({
                ALL: false,
                CREATED_BY_ME: false,
                CREATED_BY_SPOTIFY: false,
                PLAYLISTS: false,
                ALBUMS: false,
            })
            return
        }

        if (filter === PLAYLISTS_FILTERS.PLAYLISTS){
            setFilterPlaylistsBtn({
                ...filterPlaylistsBtn,
                PLAYLISTS: !filterPlaylistsBtn.PLAYLISTS,
                CREATED_BY_ME: false,
                CREATED_BY_SPOTIFY: false,
                ALL:false
            })
            return
        }

        if (filter === PLAYLISTS_FILTERS.CREATED_BY_ME){
            setFilterPlaylistsBtn({
                ...filterPlaylistsBtn,
                CREATED_BY_ME: !filterPlaylistsBtn.CREATED_BY_ME,
                CREATED_BY_SPOTIFY: false,
            })
            return
        }

        if (filter === PLAYLISTS_FILTERS.CREATED_BY_SPOTIFY){
            setFilterPlaylistsBtn({
                ...filterPlaylistsBtn,
                CREATED_BY_SPOTIFY: !filterPlaylistsBtn.CREATED_BY_SPOTIFY,
                CREATED_BY_ME: false,
            })
            return
        }

        if (filter === PLAYLISTS_FILTERS.ALBUMS){
            setFilterPlaylistsBtn({
                ...filterPlaylistsBtn,
                ALBUMS: !filterPlaylistsBtn.ALBUMS,
                CREATED_BY_ME: false,
                CREATED_BY_SPOTIFY: false,
                PLAYLISTS: false,
            })
            return
        }
        
    }


    return {filterPlaylistsBtn, changeFilter}
}

// en la x {() => setFilterPlalistsBtn({showAll: false, createdByMe: false, createdBySpotify: false})
// playlist setFilterPlalistsBtn({showAll: !filterPlalistsBtn.showAll, createdByMe: false, createdBySpotify:false})}
// spoty setFilterPlalistsBtn({...filterPlalistsBtn, createdBySpotify: !filterPlalistsBtn.createdBySpotify, createdByMe : false})}
// por ti setFilterPlalistsBtn(({...filterPlalistsBtn, createdByMe: !filterPlalistsBtn.createdByMe, createdBySpotify: false})
// albums setFilterPlalistsBtn({showAll: false, createdByMe: false, createdBySpotify:false, albums: !filterPlalistsBtn.albums})} 