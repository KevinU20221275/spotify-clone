import { usePlayerStore } from "@/store/playerStore"
import { AsideMenuCard } from "./AsideMenuCard"
import { useState } from "react"
import { PlaylistNotFound } from "../../playlist/PlaylistNotFound"
import { CompactListCard } from "./CompactListCard"
import { GridListCard } from "./GridListCard"
import { getMyPlaylist } from "@/services/playlist"

export function AsideMenuCardsWrapper({playlists, search, style, gridColsNumber}){
    const [currentItem, setCurrentItem] = useState("")
    const currentPlaylist = usePlayerStore(state => state.currentMusic.playlist)
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)

    const handlePause = async (id) => {
        if (!id) return

        if (currentPlaylist?.id === id){
            setIsPlaying(!isPlaying)
        }  else {
            const data = await getMyPlaylist(id)
            const {songs, playlist} = data;

            if (playlist){
                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[0]})
            }
        }
    }

    const gridStyle = style === 'grid' ? `repeat(${gridColsNumber}, 1fr)` : '1fr'

    return (
        <article className="overflow-y-auto max-h-[400px] overflow-hidden">
            <div style={{display:"grid", gridTemplateColumns: `${gridStyle}`}}>
                { playlists.length > 0 ? 
                style === 'list' ? playlists.map((playlist)=> <AsideMenuCard client:load key={playlist.id} playlist={playlist}  currentPlaylist={currentPlaylist} isPlaying={isPlaying} currentItem={currentItem} setCurrentItem={setCurrentItem} handlePause={handlePause} />) :
                style === 'compact-list' ? playlists.map((playlist)=> <CompactListCard key={playlist.id} playlist={playlist} currentPlaylist={currentPlaylist} currentItem={currentItem} setCurrentItem={setCurrentItem} isPlaying={isPlaying} />) :
                playlists.map((playlist)=> <GridListCard playlist={playlist} height={gridColsNumber} key={playlist.id} currentPlaylist={currentPlaylist} isPlaying={isPlaying} currentItem={currentItem} setCurrentItem={setCurrentItem} handlePause={handlePause} />)
                : <PlaylistNotFound search={search} cols={gridColsNumber} />
            }
            </div>
        </article>
    )
}

