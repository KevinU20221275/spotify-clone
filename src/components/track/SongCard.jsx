export const SongCard = ({song, addToPlayList}) => {
    return (
        <div style={{"gridTemplateColumns" : "1fr 1fr 80px"}} className="grid hover:bg-zinc-800 p-2 rounded-md items-center">
            <header className="flex justify-start items-center gap-2">
                <picture className="w-11 h-11 overflow-hidden rounded-md">
                    <img src={song.image} alt={`imagen de la cancion ${song.title}`} className="object-cover" />
                </picture>
                <div>
                    <h6 className="text-zinc-100 text-base">{song.title}</h6>
                    <span className="text-sm text-zinc-400">{song.artists.join(", ")}</span>
                </div>
            </header>
            
            <p className="text-sm text-zinc-400">{song.album}</p>
            
            <button onClick={() =>  addToPlayList(song.id)} className="bg-transparent px-3 py-1 text-white font-bold border-[1px] rounded-full cursor-pointer border-zinc-500 hover:scale-105 hover:border-white">Añadir</button>
        </div>
    )
}