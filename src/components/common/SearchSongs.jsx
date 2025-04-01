import { useState, useMemo, useEffect } from "react"
import { SongCard } from "../track/SongCard"
import { CloseIcon } from "@/icons/CloseIcon"
import { songs } from "@/data/songs"
import { SearchIcon } from "@/icons/SearchIcon";

export const SearchSongs = ({addNewSong, playlistSongs}) =>{
    const [searchsong,setSearchSong] = useState('')
    const [showSearch, setShowSearch] = useState(true)

    useEffect(() => {
        setShowSearch(playlistSongs.length <= 10)
    }, [playlistSongs])


    const handleInputSearch = (e) =>{
        e.preventDefault()
        const value = e.target.value
        setSearchSong(value)
    }

    const filteredSongs = useMemo(() => {
        const playlistSongIds = new Set(playlistSongs.map((song) => song.id));

        return songs.filter(
            (song) =>
                song.title.toLowerCase().includes(searchsong?.toLowerCase()) &&
                !playlistSongIds.has(song.id)
        );
    }, [searchsong, playlistSongs]);

    const recommededSongs = useMemo(() => {
        const recommendedSongsIds = new Set(songs.map((song) => song.id));
        const playlistSongsIds = new Set(playlistSongs.map((song) => song.id));

        return songs.filter(
            (song) =>
                recommendedSongsIds.has(song.id) &&
               !playlistSongsIds.has(song.id)
        ).slice(0, 9);
    }, [playlistSongs])
    

    return (
        <section className="p-5 pt-0 relative">
            {showSearch && <hr className="text-zinc-700 mb-5" />}
            <div className={`absolute right-10 ${showSearch ? 'top-12' : 'top-0'}`}>
                {showSearch 
                    ?   <button onClick={() => setShowSearch(false)}>
                            <CloseIcon className={'text-zinc-400 w-8 h-8'}/>
                        </button> 
                    :   <button onClick={() => setShowSearch(true)} className="text-sm text-white font-semibold">Descubre más</button>
                }
            </div>
            {showSearch && (
                <>
                    <h2 className="text-2xl font-bold text-white mb-2">Descubramos contenido para tu playlist</h2>
                    <div className={`inline-block items-center p-[5px] gap-1 text-zinc-200 rounded-md text-sm bg-[#282828] my-2`}>
                        <label htmlFor="searchSongs" className="flex items-center justify-center gap-1 group cursor-pointer focus-within:hover:cursor-text hover:text-white hover:rounded-full hover:bg-[#282828] p-[5px] relative">
                            <SearchIcon className={'w-4 h-4'}/>
                            <input type="text" 
                                className={`outline-0 w-[350px] transition-all duration-300 focus:pr-3`} 
                                placeholder="Buscar canciones o episodios" id="searchSongs" 
                                value={searchsong} 
                                onChange={handleInputSearch}
                                />
                            {searchsong && <button className="absolute right-0" onClick={() => setSearchSong('')}><CloseIcon className={'w-4 h-4'} /></button>}
                        </label>
                    </div>
        
                    <section className="min-h-80">
                        {searchsong && filteredSongs && filteredSongs.map((song) => <SongCard key={song.id} song={song} addToPlayList={addNewSong} />)}
                    </section>
                </>
            )}
            <article className="pt-8">
                <h4 className="text-2xl text-white font-semibold">Recomendaciones</h4>
                <h6 className="text-zinc-400 text-sm mb-6">Basado en el contenido de esta playlist</h6>
                {recommededSongs.map((song) => <SongCard key={song.id} song={song} addToPlayList={addNewSong}></SongCard>)}
            </article>
        </section>
    )
}