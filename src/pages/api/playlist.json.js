import { getAllPlaylists, myPlaylists } from "@/data/playlist";
import { songs as allSongs } from "@/data/songs";


export async function GET({params, request}){
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    if (!id){
        return new Response(JSON.stringify({myPlaylists}), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    const playlist = getAllPlaylists().find((playlist) => playlist.id === id)

    if (!playlist) {
        return new Response(JSON.stringify({playlist}), { status: 404 }); // Retorna 404 si no se encuentra
    }
    const songs = playlist?.songs.map((id) => allSongs.find((s) => s.id === id))

    return new Response(JSON.stringify({playlist, songs}), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function POST({ request }){
    const data = await request.json()
    const newPlaylist = data
    myPlaylists.push(newPlaylist)
    return new Response(JSON.stringify({newPlaylist}), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function DELETE({ request }){
    const data = await request.json()
    const playlistId = data.playlistId
    const playlistIndex = myPlaylists.findIndex((p) => p.id === playlistId)
    if (playlistIndex > -1) {
        myPlaylists.splice(playlistIndex, 1)
    }

    return new Response(JSON.stringify({message: "Playlist deleted"}), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}



