import { Play, Pause } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({id , size='small', className}) {
    if (!id) return
    
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

    const isPlayingPlayList = isPlaying && currentMusic?.playlist?.id === id;

    const handleClick = (event) => {
        event.preventDefault();
        if (isPlayingPlayList){
            setIsPlaying(false)
            return;
        }

        if (id === currentMusic?.playlist?.id){
            setIsPlaying(!isPlaying)
            return;
        }

        if (id){
            fetch(`/api/playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const {songs, playlist} = data;
                if (playlist){
                    setIsPlaying(true)
                    setCurrentMusic({playlist: playlist, songs: songs, song: songs[0]})
                } 
            })
        }
    }

    const iconClassName = size === 'extra-small' || size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <button onClick={handleClick} className={`card-play-button rounded-full bg-green-500 ${size === 'extra-small' ? 'p-2' : 'p-4'} cursor-pointer hover:scale-105 transition hover:bg-green-400 ${className}`}>
            {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    );

}