import { Play, Pause } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

export function SinglePlaySong({song, size='small', className}) {
    const currentMusic = usePlayerStore(state => state.currentMusic);
    const setCurrentMusic = usePlayerStore(state => state.setCurrentMusic)
    const isPlaying = usePlayerStore(state => state.isPlaying);
    const setIsPlaying = usePlayerStore(state => state.setIsPlaying);

    const handleClick = (e) => {
        e.preventDefault()
        if (currentMusic?.song?.id === song.id){
            setIsPlaying(!isPlaying)
        } else {
            setCurrentMusic({song: song, playlist: null, songs: [song]})
            setIsPlaying(true)
        }
    }

    const isPlayingSong = currentMusic?.song?.id === song?.id && isPlaying;

    const iconClassName = size === 'extra-small' || size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button onClick={handleClick} className={`card-play-button  ${size === 'extra-small' ? 'p-2' : 'p-4'} cursor-pointer transition  ${className}`}>
            {isPlayingSong ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    )
}