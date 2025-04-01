import { SearchIcon } from "@/icons/SearchIcon"
import { VinylIcon } from "@/icons/Vinyl"
import { CloseIcon } from "@/icons/CloseIcon"
import { useEffect, useState } from "react"
import debounce from 'just-debounce-it'
import { navigate } from "astro:transitions/client"

export function Search(){
    const [search, setSearch] = useState('')
    const [debounceSearch, setDebounceSearch] = useState('')


    const handleChange = debounce((e) => {
        const value = e.target.value
        setDebounceSearch(value)
    }, 1000)

    useEffect(() => {
        if (debounceSearch.trim() !== ''){
            navigate(`/search/${debounceSearch}`)
        }

        if (window.location.pathname.includes('/search') && debounceSearch == ''){
            navigate('/search')
        }
    }, [debounceSearch])


    return (
        <div className="text-zinc-400 relative group">
            <SearchIcon className={'absolute z-10 top-3 left-2'}/>
            <input type="text"
                placeholder="¿Que quieres reproducir?"
                value={search}
                onChange={(e) => {
                    handleChange(e)
                    setSearch(e.target.value)
                }}
                className="relative lg:w-sm  md:w-[300px] bg-zinc-900 h-[48px] rounded-full border-[1px] border-[transparent] hover:border-[#555] hover:bg-zinc-800 transition-all pl-10 pr-16  text-white focus:outline-2 outline-transparent focus:outline-white"
            />
            <button onClick={() => {
                setSearch('')
                setDebounceSearch('')
                }}>
                <CloseIcon className={`absolute w-7 h-7 right-9 top-[10px] cursor-pointer ${search.length > 0 ? 'opacity-100' : 'opacity-0'}`}/>
            </button>
            <a href={`/search`}>
                <VinylIcon className={'absolute right-2 top-[13px] w-5 h-5 hover:scale-105 cursor-pointer'}/>
            </a>
        </div>
    )
}