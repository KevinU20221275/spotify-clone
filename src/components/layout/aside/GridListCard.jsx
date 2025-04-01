import { CardPlayButton } from "../../common/CardPlayButton"
import { VolumeFull } from "@/icons/VolumeIcons"

export function GridListCard({playlist, height, currentItem, currentPlaylist, isPlaying, setCurrentItem}){
    const { id, cover, title, artists, color } = playlist

        const stylesByHeight = height == "3" ? "absolute flex z-40 bottom-2 rounded-md hidden group-hover/grid:block w-48 bg-zinc-800 p-2" : "py-2"
    
        return (
            <a href={`/playlist/${id}`}
                key={playlist.id}
                onClick={() => setCurrentItem(id)}
                className={`playlist-item ${height == "1" || height == "2" ? 'overflow-hidden' : ''} relative p-2 items-center gap-5 group/grid rounded-md ${currentItem === id ? 'bg-zinc-700 hover:bg-zinc-600' : 'hover:bg-zinc-800'} `}
            >
                <picture className="h-8 w-8 flex-none relative">
                    <img src={cover} alt={`cover of ${title} by ${artists.join(", ")}`} className="object-cover rounded-md" />
                    {height !== "3" && 
                        <div className="absolute bottom-2 right-2">
                            <CardPlayButton id={id}/>
                        </div>
                     }
                </picture>
                <div className={`flex flex-auto justify-between items-center flex-row ${stylesByHeight}`}>
                    <div className="flex flex-col max-w-fit truncate">
                        <h4 className={`text-sm ${currentPlaylist?.id === id ? 'text-green-500' : 'text-white'}`}>{title}</h4>
                        <span className="text-xs text-gray-400">{height == "3" ? "Playlist ": ""} {artists.join(", ")}</span>
                    </div>
                    <div className={`text-green-500 inline-block ${height === "3" && " absolute right-2 top-4" }`}>
                        {isPlaying && currentPlaylist?.id === id && <VolumeFull/>}
                    </div>
                </div>
            </a>
        )
}