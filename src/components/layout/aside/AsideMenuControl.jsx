import {  useEffect, useState } from "react";
import { SearchIcon } from "@/icons/SearchIcon";
import { CloseIcon } from "@/icons/CloseIcon";
import { AsideMenuCardsWrapper } from "./AsideMenuCardsWrapper";
import { navigate } from "astro:transitions/client"
import { usePlayerStore } from "@/store/playerStore";
import { AsideSkeleton } from "@/components/skeletons/AsideItemsSkeletons";
import { RecentMenu } from "./RecentMenu";
import { AsideWithoutPlaylist } from "./AsideWithoutPlaylist ";
import { getMyPlaylist, createPlaylist } from "@/services/playlist";
import { usePlaylistsFilters} from "@/hooks/usePlaylistFilters"
import { useAsideView } from "@/hooks/useAsideView";
import { useFilterPlaylists } from "@/hooks/useFilterPlaylists";
import { FilterPlaylistsButtons } from "./FilterPlaylistButtons";


export function AsideMenuControl(){
    const [myPlaylists, setMyPlaylist] = useState([])
    const [searchPlaylist,setSearchPlaylist] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const myPlaylistsLocalState = usePlayerStore(state => state.myPlaylists)
    const loadMyPlaylist = usePlayerStore(state => state.loadMyPlaylist)
    const { filterPlaylistsBtn, changeFilter } = usePlaylistsFilters()
    const { gridColsNumber, setGridColsNumber, listContainerStyle, setListContainerSlyle } = useAsideView()
    const { filteredPlaylists } = useFilterPlaylists(myPlaylists, searchPlaylist, filterPlaylistsBtn)

    useEffect(() => {   
        getMyPlaylist().then((myListOfPlaylists) => {
            setMyPlaylist(myListOfPlaylists)
            loadMyPlaylist(myListOfPlaylists)
            setIsLoading(false)
        })
    }, [myPlaylistsLocalState])


    const handleAddPlaylist = async () => {
        const {data} = await createPlaylist(myPlaylists.length + 1)

        getMyPlaylist().then((myListOfPlaylists) => {
            setMyPlaylist(myListOfPlaylists)
            loadMyPlaylist(myListOfPlaylists)
            setIsLoading(false)
        })
        navigate(`/playlist/${data.id}`)
    }

    const handleInputSearch = (e) =>{
        e.preventDefault()
        const value = e.target.value
        setSearchPlaylist(value)
    }

    return (
        <>
            {myPlaylists.length > 0 && <FilterPlaylistsButtons filterPlaylistsBtn={filterPlaylistsBtn} changeFilter={changeFilter} myPlaylists={myPlaylists}/>}  
            <div className="flex justify-between items-center">
                <div className={`search-aside-playlist inline-block items-center p-[5px] gap-1 text-zinc-400 rounded-md text-sm focus-within:bg-[#282828] ${searchPlaylist?.length > 0 ? 'bg-[#282828]' : 'bg-transparent'} mx-2 my-2`}>
                    {myPlaylists.length > 0 && <label htmlFor="searchPlaylist" className="flex items-center justify-center gap-1 group cursor-pointer focus-within:hover:cursor-text hover:text-white hover:rounded-full hover:bg-[#282828] p-[5px] relative">
                        <SearchIcon className={'w-4 h-4'}/>
                        <input type="text" 
                            className={`outline-0 w-0 focus:w-[158px] ${searchPlaylist?.length > 0 ? 'w-[158px]' : ''} transition-all duration-300 focus:pr-3`} 
                            placeholder="Buscar en Tu biblioteca" id="searchPlaylist" 
                            value={searchPlaylist} 
                            onChange={handleInputSearch}
                        />
                        {searchPlaylist && <button className="absolute right-0" onClick={() => setSearchPlaylist('')}><CloseIcon className={'w-4 h-4'} /></button>}
                    </label>}
                </div>
                {myPlaylists.length > 0 && <RecentMenu containerListStyle={listContainerStyle} setContainerStyle={setListContainerSlyle} setGridColsNumber={setGridColsNumber} />}
            </div>
            {isLoading ? (<AsideSkeleton/>) 
            : myPlaylists.length > 0 ?  <AsideMenuCardsWrapper playlists={filteredPlaylists} search={searchPlaylist} style={listContainerStyle} gridColsNumber={gridColsNumber} /> 
            : <AsideWithoutPlaylist addPlaylist={handleAddPlaylist} client:load />}
        </>
    )
}