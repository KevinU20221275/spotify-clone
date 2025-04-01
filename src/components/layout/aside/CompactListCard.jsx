export function CompactListCard({playlist, currentPlaylist, currentItem, setCurrentItem, isPlaying}){
    const {id, title} = playlist

    return (
        <a href={`/playlist/${id}`}
            key={id}
            onClick={() => setCurrentItem(id)}
            className={`playlist-item flex relative p-2 overflow-hidden items-center gap-5 group/link rounded-md ${currentItem === id ? 'bg-zinc-700 hover:bg-zinc-600' : 'hover:bg-zinc-800'} `}
        >

            <div className="flex flex-auto items-center justify-between">
                <div className="flex flex-auto truncate items-center gap-1">
                    <h4 className={`text-sm ${currentPlaylist?.id === id ? 'text-green-500' : 'text-white'}`}>{title}</h4>
                    <span className="text-xs text-gray-400">• Playlist</span>
                </div>
                <div className="text-green-500">
                    {isPlaying && currentPlaylist?.id === id && <VolumeFull/>}
                </div>
            </div>
        </a>
    )
}