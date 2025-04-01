import { CloseIcon } from "@/icons/CloseIcon";
import { PLAYLISTS_FILTERS } from "@/constants/constants";

export function FilterPlaylistsButtons({filterPlaylistsBtn, changeFilter, myPlaylists}){
    
    const someAlbumInMyPlaylists = myPlaylists?.some((playlist) => playlist.type === "Album")

    const someSpotifyPlaylistInMyPlaylists = myPlaylists?.some((playlist) => playlist.createdBy === "Spotify")

    return (
        <div className="btn-filters px-2 pt-2 flex justify-start items-center gap-1 relative z-10">
                {filterPlaylistsBtn.PLAYLISTS && <button onClick={() => changeFilter(PLAYLISTS_FILTERS.ALL)} className="px-2 py-[6px] rounded-full bg-zinc-800 text-white text-sm hover:bg-zinc-700 cursor-pointer"><CloseIcon className={'w-4 h-4 text-zinc-400'}/></button>}
                {!filterPlaylistsBtn.ALBUMS && <button onClick={() => changeFilter(PLAYLISTS_FILTERS.PLAYLISTS)} className={`px-3 py-[6px] rounded-full text-sm cursor-pointer z-20 ${filterPlaylistsBtn.PLAYLISTS ? 'bg-zinc-100 text-black hover:bg-zinc-200':'bg-zinc-800 text-white hover:bg-zinc-700'}`}>Playlists</button>}
                {someAlbumInMyPlaylists && !filterPlaylistsBtn.PLAYLISTS  && <button onClick={() => changeFilter(PLAYLISTS_FILTERS.ALBUMS)} className={`px-3 py-[6px] rounded-full text-sm cursor-pointer z-20 ${filterPlaylistsBtn.ALBUMS ? 'bg-zinc-100 text-black hover:bg-zinc-200':'bg-zinc-800 text-white hover:bg-zinc-700'}`}>Albumes</button>}

                {filterPlaylistsBtn.PLAYLISTS && !filterPlaylistsBtn.CREATED_BY_ME && someSpotifyPlaylistInMyPlaylists &&
                    <button 
                    onClick={() => changeFilter(PLAYLISTS_FILTERS.CREATED_BY_SPOTIFY)} 
                    className={`px-3 py-[6px] rounded-full text-sm z-10 ${filterPlaylistsBtn.CREATED_BY_SPOTIFY ? 'bg-zinc-200 text-black hover:bg-zinc-300 absolute left-20 w-32 text-end' : 'bg-zinc-800 text-white hover:bg-zinc-700'} cursor-pointer`}
                    >
                        Por Spotify
                    </button>
                }
                {filterPlaylistsBtn.PLAYLISTS && !filterPlaylistsBtn.CREATED_BY_SPOTIFY &&
                    <button 
                    onClick={() => changeFilter(PLAYLISTS_FILTERS.CREATED_BY_ME)} 
                    className={`px-3 py-[6px] rounded-full text-sm ${filterPlaylistsBtn.CREATED_BY_ME ? 'bg-zinc-200 text-black hover:bg-zinc-300 absolute left-20 w-24 text-end':'bg-zinc-800 text-white hover:bg-zinc-700'} cursor-pointer`}
                    >
                        Por ti
                    </button>
                }
        </div>
    )
}