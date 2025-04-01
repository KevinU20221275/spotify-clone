import { Play, Pause, Next, Prev } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef } from "react";
import { SongControl } from "./SongControl";
import { VolumeControl } from "./VolumeControl";
import { CurrentSong } from "./CurrentSong";


export function Player () {
    const currentMusic = usePlayerStore(state => state.currentMusic)
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
    const volume = usePlayerStore(state => state.volume)

    const audioRef = useRef(null);

    useEffect(() => {
        isPlaying ? audioRef.current.play()
        : audioRef.current.pause();
    },[isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume;
    },[volume])

    useEffect(() => {
        const { song } = currentMusic
 
        if (song){
            const src = `/music/0${song.id}.mp3`
            audioRef.current.src = src;
            audioRef.current.volume = volume
            audioRef.current.load()
            if (isPlaying){
                audioRef.current.play()
            }
        }
    },[currentMusic.song])

    const handleClick = () => {
        const {song} = currentMusic;
        if (!song) return
        setIsPlaying(!isPlaying)
    }

    const handlePrev = () =>{
        const currentSong = currentMusic.song

        const {songs} = currentMusic

        const index = songs.findIndex(song => song.id === currentSong.id)
        
        if (index === -1) return  // Song is not found in playlist

        if (index === 0) {
            setCurrentMusic({...currentMusic, song: songs[songs.length - 1]})
        } else {
            setCurrentMusic({...currentMusic, song: currentMusic.songs[index - 1]})
        }
    }

    const handleNext = () => {
        const currentSong = currentMusic.song

        const index = currentMusic.songs.findIndex(song => song.id === currentSong.id)

        if (index === -1) return  // Song is not found in playlist

        if (index === currentMusic.songs.length - 1) {
            setCurrentMusic({...currentMusic, song: currentMusic.songs[0]})
        } else {
            setCurrentMusic({...currentMusic, song: currentMusic.songs[index + 1]})
        }
    }

    return (
        <div className="relative z-50 flex flex-row justify-between w-full px-2 text-white bg-black">
            <div className="w-[220px]">
                <CurrentSong {...currentMusic?.song} />
            </div>
            <div className="grid place-items-center gap-4 flex-1">
                <div className="flex justify-center flex-col items-center">
                    <div className="flex justify-center items-center gap-3">
                        <button className="cursor-pointer" onClick={handlePrev}>
                            <Prev/>
                        </button>
                        <button className="bg-white rounded-full p-2 cursor-pointer" onClick={handleClick}>
                            {isPlaying ? <Pause className="text-black"/> : <Play className="text-black"/>}
                        </button>
                        <button className="cursor-pointer" onClick={handleNext}>
                            <Next/>
                        </button>
                    </div>
                    <SongControl audio={audioRef} />
                </div>
            </div>
            <div className="grid place-content-center">
                <VolumeControl />
            </div>
            <audio src={null} ref={audioRef}></audio>
        </div>
    )
}