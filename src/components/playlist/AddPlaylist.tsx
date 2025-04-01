import { navigate } from "astro:transitions/client"
import { PlusIcon } from "@/icons/Plus"
import { usePlayerStore } from "@/store/playerStore"
import { PlusCircleIcon } from "@/icons/PlusCircleIcon"
import { CheckCircleIcon } from "@/icons/CheckIconCircle"
import { useState } from "react"
import { createPlaylist, addPlaylist, removePlaylist } from "@/services/playlist"
import type { Playlist } from "@/data/playlist"
import type { Album } from "@/data/albums"

interface Props{
    playlist?: Playlist | Album
    isPlaylistInMyPlaylist?: boolean
    className?: string
    plusIconClassName?: string
}

export function AddPlayList({playlist, isPlaylistInMyPlaylist, className, plusIconClassName}:Props){
    const myPlaylistsLocalState = usePlayerStore(state => state.myPlaylists)
    const addMyPlaylist = usePlayerStore(state => state.addMyPlaylist)
    const removeMyPlaylist = usePlayerStore(state => state.removeMyPlaylist)
    const [isCkeck, setIsCheck] = useState(isPlaylistInMyPlaylist)

    const handleCreatePlaylist = async() => {
        if (playlist){
            const { data } = await addPlaylist(playlist)
            addMyPlaylist(data)
            setIsCheck(true)
        } else {
            const { data } = await createPlaylist(myPlaylistsLocalState.length + 1)
            addMyPlaylist(data)
            navigate(`/playlist/${data.id}`)
        }
    }

    const handleRemovePlaylist = async() => {
        if (playlist) {
            const res  = await removePlaylist(playlist.id)
            removeMyPlaylist(playlist.id)
            setIsCheck(false)
        }
    }

    const title = playlist && isCkeck ? "Eliminar de tu Biblioteca" :
    playlist ? "Guarda en tu biblioteca" : "Crear una Playlist"

    const action  = playlist && isCkeck ? handleRemovePlaylist : handleCreatePlaylist

    return (
        <button 
        className={`${className}`}
        onClick={action}
        title={title}
        >
            <span className="w-[50px]">
                {isCkeck && playlist ? 
                    <CheckCircleIcon className={'w-8 h-8 text-green-500 hover:scale-105 hover:text-green-400'} /> 
                : !isCkeck && playlist ?
                    <PlusCircleIcon className={'w-8 h-8 text-zinc-400 hover:scale-105 hover:text-zinc-300 cursor-pointer'} /> 
                :   <PlusIcon className={plusIconClassName}/>}
            </span>
            {
                playlist ? "" : <span className="hidden xl:inline-block">Crear</span>
            }
            
        </button>
    )
}