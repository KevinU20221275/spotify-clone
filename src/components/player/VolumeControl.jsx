import { usePlayerStore } from "@/store/playerStore";
import { useRef } from "react";
import { Slider } from "@/components/common/Slider";
import { VolumeSilenced, VolumeLow, VolumeMedium, VolumeFull } from "@/icons/VolumeIcons";

export function VolumeControl() {
    const volume = usePlayerStore(state => state.volume);
    const setVolume = usePlayerStore(state => state.setVolume);
    const previusVolumeRef = useRef(volume);

    const isVolumeSilenced = volume < 0.1
    
    const handleClickVolume = () => {
        if (isVolumeSilenced) {
            setVolume(previusVolumeRef.current)
            return
        } else {
            previusVolumeRef.current = volume
            setVolume(0)
        }
    }

    return (
        <div className="flex justify-center gap-x-2">
            <button className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolume}>
                {volume < 0.1 ? <VolumeSilenced /> : volume < 0.4 ? <VolumeLow/> : volume < 0.8 ? <VolumeMedium/> : <VolumeFull />}
            </button>
            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                className="w-[95px]"
                rangeClassName="bg-white group-hover:bg-green-400"
                trackClassName="bg-gray-800"
                thumbClassName="hidden group-hover:block"
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
            />
        </div>
    )
}