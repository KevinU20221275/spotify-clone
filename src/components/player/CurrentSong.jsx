export function CurrentSong({image, title, artists}){
    return (
        <div className="flex items-center gap-5 relative overflow-hidden">
            <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                <img src={image} alt={title}/>
            </picture>
            <div className="flex flex-col max-w-28">
                <h3 className="current-song-title font-semibold text-sm block truncate">
                    {title}
                </h3>
                <span className="text-xs opacity-20 truncate">
                    {artists?.join(", ")}
                </span>
            </div>
        </div>
    )
}