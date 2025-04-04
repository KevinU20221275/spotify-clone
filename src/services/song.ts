

export async function getPlaylistsSongs(id: string | number) {
    try {
        const res = await fetch(`/api/songs.json?id=${id}`)  
        
        if (res.ok){
            const data = await res.json()
            return  data
        }
    } catch {
        throw new Error("Error al obtener las canciones")
    }
}

export async function addSongToPlaylist(id : string | number, songId : string | number){
    try {
        const res = await fetch('/api/songs.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playlistId: id, songId
            })
        })
        
        if (res.ok) {
            return await res.json()
        } else {
            throw new Error('Error al añadir la canción a la playlist')
        }
    } catch {
        throw new Error('Error al añadir la canción a la playlist')
    }
}


export async function removeSongFromPlaylist(id: string | number, songId: string | number){
    try {
        const res = await fetch('/api/songs.json', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playlistId: id, songId
            })
        })
        
        if (res.ok) {
            return await res.json()
        } else {
            throw new Error('Error al eliminar la canción de la playlist')
        }
    } catch {
        throw new Error('Error al eliminar la canción de la playlist')
    }
}

