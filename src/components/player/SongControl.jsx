import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useState } from "react"
import { Slider } from "../common/Slider"
import { formatTime } from "@/lib/utils"

export function SongControl ({audio}) {
    const [currentTime, setCurrentTime] = useState(0)
    const { currentMusic, setCurrentMusic } = usePlayerStore(state => state)
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying)


    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    },[])

    useEffect(()=> {
        if (formatTime(currentTime) === currentMusic?.song?.duration){
            audio.current.pause()
            setCurrentTime(0)
            if (currentMusic.songs.length === 1){
                setCurrentMusic({...currentMusic, song: currentMusic.songs[0]})
                audio.current.currentTime = 0
                setIsPlaying(false)
                return
            } 

            const index = currentMusic.songs.indexOf(currentMusic.song)

            const nextSong = (index === currentMusic.songs.length - 1)
            ? currentMusic.songs[0]
            : currentMusic.songs[index + 1]
            
            setCurrentMusic({...currentMusic, song: nextSong})
        }
    },[currentMusic.song, currentTime])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime)
    }

    const duration = audio?.current?.duration ?? 0

    return (
        <div className="flex gap-2 text-xs pt-2">
            <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>
            <Slider
                defaultValue={[0]}
                value={[currentTime]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className="w-[400px]"
                rangeClassName="bg-white group-hover:bg-green-400"
                thumbClassName="hidden group-hover:block"
                trackClassName="bg-gray-800"
                onValueChange={(value) => {
                    audio.current.currentTime = value
                }}
            />
           <span className="opacity-50 w-12">
                {duration ? formatTime(duration) : null}
            </span>
        </div>
    )
}