import type { Song } from "@/data/songs"

export function playlistTime(songs : Song[]){
    if (songs?.length === 0 || songs === undefined) return `00:00`
    const times = songs.map((song) => song["duration"])
      
    let minutes = 0
    let seconds = 0
      
    times.forEach((time) => {
        const t = time.split(":")
        minutes+=Number(t[0])
        seconds+=Number(t[1])
    })

    let secondsToMinutes = Math.floor(seconds / 60)
    seconds = Math.floor(seconds % 60)
    minutes+=secondsToMinutes

    return `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} s`
}


export const formatTime = (time:number) => {
    if (time == null) return '0:00'
    let minutes = Math.floor(time / 60)
    let seconds : number | string = Math.floor(time % 60)

    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}
