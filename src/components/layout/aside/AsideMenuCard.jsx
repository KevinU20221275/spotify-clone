import { VolumeFull } from "@/icons/VolumeIcons";
import { Pause } from "@/icons/PlayerIcons";
import { Play } from "@/icons/PlayerIcons";

export function AsideMenuCard({playlist, currentPlaylist, isPlaying, currentItem, setCurrentItem, handlePause}) {
    const { id, cover, title, artists, type, color } = playlist

    const handleClick = () => {
        setCurrentItem(id)
    }
    
    return (
        <a href={`${type === "Album" ? `/intl-es/album/${id}` : `/playlist/${id}`}`}
        onClick={handleClick}
            key={playlist.id}
            className={`playlist-item flex relative p-2 overflow-hidden items-center gap-5 group/link rounded-md ${currentItem === id ? 'bg-zinc-700 hover:bg-zinc-600' : 'hover:bg-zinc-800'} `}
        >
            <picture className="h-12 w-13 flex-none relative ">
                <img src={cover} alt={`cover of ${title} by ${artists.join(", ")}`} className="w-full h-full object-cover rounded-md" />
                <button 
                    className={`side-card-button absolute top-0 bg-[#1117] opacity-0 h-12 w-13 flex justify-center items-center group-hover/link:opacity-100 transition-all duration-150`} 
                    onClick={(e) => {
                        e.preventDefault()
                        handlePause(id)
                    }
                }>
                    {isPlaying && currentPlaylist?.id === id ? <Pause className="text-white" /> : <Play className="text-white"/>}
                </button>
            </picture>
            <div className="flex flex-auto items-center">
                <div className="flex flex-auto flex-col truncate">
                    <h4 className={`text-sm ${currentPlaylist?.id === id ? 'text-green-500' : 'text-white'}`}>{title}</h4>
                    <span className="text-xs text-gray-400">{type} • {artists.join(", ")}</span>
                </div>
                <div className="text-green-500">
                    {isPlaying && currentPlaylist?.id === id && <VolumeFull/>}
                </div>
            </div>
        </a>
    )
}






