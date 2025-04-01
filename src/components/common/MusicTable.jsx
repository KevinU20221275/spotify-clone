import { TimeIcon } from "@/icons/MusicTableIcon";
import { Play, Pause } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";
import { PlayingIndicator } from "@/components/common/PlayingIndicator";
import { DeleteIcon } from "@/icons/Delete";

export function MusicTable({ songs, playlistInfo, tableType="Playlist", removeSong = null }) {
    const currentSong = usePlayerStore(state => state.currentMusic.song);
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic);
    const currentPlaylist = usePlayerStore(state => state.currentMusic.playlist)
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying);
    const isPlaying = usePlayerStore(state => state.isPlaying);
    const [fadeOut, setFadeOut] = useState(null)
    const [currentRow, setCurrentRow] = useState(null)

    const handleClickCurrentRow = (id) => {
        setCurrentRow(id)
    }

    const handleChangeCurrentMusic = (index) => {
        if (currentPlaylist === null || currentPlaylist?.id !== playlistInfo.id){
            setCurrentMusic({playlist: playlistInfo, songs: songs, song: songs[index]})
            setIsPlaying(true)
        } else {
            if (currentMusic.songs.length === songs.length){
                setCurrentMusic({...currentMusic, song: currentMusic.songs[index]})
                setIsPlaying(true)
            } else {
                setCurrentMusic({...currentMusic, songs: songs, song: songs[index]})
                setIsPlaying(true)
            }
        }
    }

    const handlePause = () =>{
        setIsPlaying(false)
    }

    useEffect(() => {
        if (currentSong){
            setCurrentRow(currentSong?.id)
        }
    },[currentSong])

    

    return (
        <>
            {playlistInfo.type === "Artist_Playlist" && <h2 className="text-xl text-white font-bold my-4 pl-4" >Popular</h2>}
            <table className={`table-auto text-left min-w-full ${playlistInfo.type !== "Artist_Playlist" && 'divide-y'} divide-gray-500/20`}>
                <thead>
                    {playlistInfo.type !== "Artist_Playlist" && (

                        <tr className="text-zinc-400 text-sm font-light">
                            <th className="px-4 py-2 font-light w-8">#</th>
                            <th className="px-4 py-2 font-light">Título</th>
                            <th className="px-4 py-2 font-light hidden md:table-cell">{tableType === "Playlist" ? "Álbum" : ""}</th>
                            <th className="px-4 py-2 font-light"><TimeIcon/></th>
                        </tr>
                    )}  
                </thead>

                <tbody>
                    {playlistInfo.type !== "Artist_Playlist" && <tr className="h-14"></tr>}
                    {songs.map((song,index) => (
                        <tr className={`${fadeOut === song.id && 'fadeOut'}  ${currentRow === song.id ? 'bg-[#5A5A5A]' : 'hover:bg-white/10' } text-gray-300 text-sm font-light rounded-lg overflow-hidden group`} onClick={() => handleClickCurrentRow(song.id)} key={song.id}>
                            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-8">
                                <span className={`${currentSong?.id === song.id && isPlaying ? 'hidden' : 'group-hover:hidden'} ${currentSong?.id === song.id ? 'text-green-400' : ''} min-w-[20px] block`}>
                                    {index + 1}
                                </span>
                                <button className={`${isPlaying && currentSong?.id === song.id ? 'block' : 'hidden'} w-5 justify-center items-center`} onClick={handlePause}>
                                    <PlayingIndicator songId={song.id} />
                                    <Pause className="hidden group-hover:inline-block" />
                                </button>
                                <button 
                                    className={`${currentSong?.id === song.id && isPlaying ? 'block' : 'hidden'} w-5 group/button group-hover:block relative `} 
                                    onClick={() => handleChangeCurrentMusic(index)}
                                    >
                                        {currentSong?.id !== song.id && <Play className="w-4 h-4"/> || !isPlaying && <Play />}
                                        <span className="absolute  w-[250px]  -left-2 bottom-7 opacity-0 z-50 group-hover/button:opacity-100 bg-[#333333] text-white text-left text-xs rounded px-2 py-1 transition">
                                        {`Reproducir ${song.title}, de ${song.artists.join(", ")}`}
                                        </span>
                                </button>
                            </td>
                            <td className="px-4 py-2 flex gap-2">
                                <picture>
                                    <img src={song.image} alt={song.title} className="w-11 h-11" />
                                </picture>
                                <div className="flex flex-col">
                                    <h3 className={`${currentSong?.id === song.id ? 'text-green-400' : 'text-white'} text-base font-normal`}>{song.title}</h3>
                                    <span className="truncate">{song.artists.join(", ")}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2 hidden md:table-cell">
                                <span>
                                    {tableType === "Artist_Playlist" ? song.streams : tableType === "Playlist" ?  song.album : "" }
                                </span>
                            </td>
                            <td className="px-4 py-0 rounded-tr-lg rounded-br-lg">
                                <div className="flex items-center gap-2 relative">
                                    <span>{song.duration}</span>
                                    {tableType === "Playlist" && <button onClick={() => {
                                        setFadeOut(song.id)
                                        setTimeout(() => {
                                            removeSong(song.id)
                                        }, 1000)
                                    }} title="Eliminar de la Playlist" ><DeleteIcon className={'text-zinc-400 w-4 hover:text-zinc-300 cursor-pointer opacity-0 group-hover:opacity-100 -mt-0.5'}/></button>}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

