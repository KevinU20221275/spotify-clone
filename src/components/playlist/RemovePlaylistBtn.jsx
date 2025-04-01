// import services
import { removePlaylist } from "@/services/playlist"

// import zustand state
import { usePlayerStore } from "@/store/playerStore"

// import astro navigate
import { navigate } from "astro:transitions/client"

// import icon
import { RemoveIcon } from "@/icons/RemoveIcon"

export function RemovePlaylistBtn({id}){
    const removeMyPlaylist = usePlayerStore(state => state.removeMyPlaylist)

    const handleRemovePlaylist = async() => {
        const res  = await removePlaylist(id)
        removeMyPlaylist(id)
        navigate("/")
    }

    return (
        <button onClick={handleRemovePlaylist} className="cursor-pointer" title="Eliminar de tus playlist">
            <RemoveIcon className="w-10 h-10 text-zinc-500"/>
        </button>
    )
}