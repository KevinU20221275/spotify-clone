import { useRef, useEffect, useState } from "react";
import { ListIcon } from "@/icons/List";
import { CompactListIcon } from "@/icons/CompactList";
import { GridIcon } from "@/icons/GridIcon";
import { Slider } from "@/components/common/Slider";
import { Check } from "@/icons/CheckReact";

import { CONTAINER_STYLE } from "@/constants/constants";

export function RecentMenu ({containerListStyle, setContainerStyle, setGridColsNumber}){
    const [isOpen, setIsOpen] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSliderChange = (value) => {
        const currentValue = value[0];
        setSliderValue(currentValue);
    
        if (currentValue <= 20) {
            setGridColsNumber("3");
        } else if (currentValue > 20 && currentValue <= 40) {
            setGridColsNumber("2");
        } else {
            setGridColsNumber("1");
        }
    };

    const isListStyle = containerListStyle === CONTAINER_STYLE.LIST
    const isCompactListStyle = containerListStyle === CONTAINER_STYLE.COMPACT_LIST
    const isGridStyle = containerListStyle === CONTAINER_STYLE.GRID

    return (
        <div className="relative recentMenu" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex gap-1 justify-between items-center text-zinc-400 text-sm cursor-pointer"
            >
                Recientes {isListStyle ?  <ListIcon className="w-6 h-6" /> : isCompactListStyle ? <CompactListIcon className={'w-4 h-4'}/> : <GridIcon className={'w-4 h-4'}/>}
            </button>

            {isOpen && (
                <ul className="text-zinc-200 text-sm absolute bg-zinc-800 shadow-md rounded-md mt-2 p-1 w-48 z-40 right-0">
                    <li className="text-xs p-2">Ver como</li>
                    <li>
                        <button 
                        onClick={() => setContainerStyle('compact-list')}
                        className={`flex gap-2 items-center justify-between p-2 py-3 rounded-md w-full hover:bg-zinc-700 ${isCompactListStyle && 'text-green-600'}`}>
                            <span className="flex gap-2 items-center pl-[2px]">
                                <CompactListIcon className={'w-5 h-5'}/> Compacta
                            </span>
                            {isCompactListStyle && <Check className={'w-5 h-5 text-green-500'}/>}
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => setContainerStyle('list')}
                        className={`flex gap-2 items-center justify-between p-2 py-2.5 rounded-md w-full hover:bg-zinc-700 ${isListStyle && 'text-green-600'}`}>
                            <span className="flex gap-2 items-center">
                                <ListIcon className={'w-6 h-6'}/> Lista
                            </span>
                            {isListStyle && <Check className={'w-5 h-5 text-green-500'} />}
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => setContainerStyle('grid')}
                        className={`flex gap-2 items-center justify-between p-2 py-2.5 rounded-md w-full hover:bg-zinc-700 ${isGridStyle && 'text-green-600'}`}>
                            <span className="flex gap-2 items-center pl-1">
                                <GridIcon className={'w-4 h-4'}/> Cuadricula
                            </span>
                            {isGridStyle && <Check className={'w-5 h-5 text-green-500'} />}
                        </button>
                    </li>
                    {isGridStyle && 
                    <li className="py-4 px-3">
                        <Slider
                            defaultValue={[100]}
                            max={100}
                            min={0}
                            value={[sliderValue]}
                            className="w-full"
                            rangeClassName="bg-green-400"
                            thumbClassName="block"
                            trackClassName="bg-zinc-500"
                            onValueChange={handleSliderChange}
                        />
                    </li>
                    }
                </ul>
            )}
        </div>
    )
}