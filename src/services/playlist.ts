import type { Album } from "@/data/albums";
import { colors } from "@/lib/colors";
import { type ArtistPlaylist, type Playlist } from "@/data/playlist";


export async function createPlaylist(playlistNumber:number){
    const id = crypto.randomUUID()
    const title = `Mi playlist n.° ${playlistNumber}`
    const artists = ["Jhon Doe"]
    const type = "Playlist"
    const color = colors.green
    const cover = "https://cdn-icons-png.flaticon.com/512/557/557098.png"
    const songs : number[] = []

    try {

        const res = await fetch('/api/playlist.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id, title, artists, color, cover, type, songs
            })
        })
        
        const data = await res.json()
        
        return { data : data.newPlaylist}

    } catch {
        throw new Error('Error creando la playlist')
    }
}


export async function addPlaylist(playlist: Playlist | Album | ArtistPlaylist){
    
    try {
        const res = await fetch('/api/playlist.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playlist) 
            
        })
        
        const data = await res.json()
        
        return {data: data.newPlaylist}

    } catch {
        throw new Error('Error añadiendo la playlist')
    }
}

export async function removePlaylist(id: string | number){
    try {

        const res = await fetch(`/api/playlist.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playlistId: id
            }) 
        })
        
        const data = await res.json()

    } catch {
        throw new Error('Error eliminando la playlist')
    }
}


export async function getMyPlaylist(id = null) {
    if (id){
        try {
            const res = await fetch(`/api/playlist.json?id=${id}`)
            
            if (res.ok){
                const data = await res.json()
                return data;
            }
        } catch {
            throw new Error('Error al obtener la playlist')
        }
    } else {
        try {

            const res = await fetch('/api/playlist.json', {
                method: 'GET',
            })
            if (res.ok){
                const data = await res.json()
                
                return  data.myPlaylists
            }
        } catch {
            throw new Error('Error al obtener las playlist')
        }
    }
}
