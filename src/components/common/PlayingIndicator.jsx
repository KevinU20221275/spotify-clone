import { usePlayerStore } from "@/store/playerStore";

export const PlayingIndicator = ({currentPlaylistId, songId}) => {
    const isPlaying = usePlayerStore(state => state.isPlaying)
    const currentPlaylist = usePlayerStore(state => state.currentMusic?.playlist)

    return (
        <div className="flex gap-[2px] h-4 w-5 items-end group-hover:hidden">
            {[...Array(4)].map((_, i) => (
            <span
                key={i}
                className={`w-[2px] bg-green-500 rounded-sm ${
                isPlaying && currentPlaylistId === currentPlaylist?.id || isPlaying && songId ? `animate-equalizer block` : " hidden"
                }`}
            ></span>
            ))}
        </div>
    );
};