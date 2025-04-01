import { getAllPlaylists, myPlaylists } from "@/data/playlist";
import { songs as allSongs } from "@/data/songs";

export async function POST({ request }){
    const data = await request.json()
    const playlist = getAllPlaylists().find((p) => p.id === data.playlistId)
    playlist.songs.push(data.songId)
    return new Response(JSON.stringify({playlist}), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function GET({ request }){
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = getAllPlaylists().find((playlist) => playlist.id === id)

    if (!playlist) {
        return new Response(JSON.stringify({ playlist }), { status: 404 }); // Retorna 404 si no se encuentra
    }

    const songs = playlist.songs.map((id) => allSongs.find((s) => s.id === id))

    return new Response(JSON.stringify(songs), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}


export async function DELETE({ request }){
    const data = await request.json()
    const playlist = getAllPlaylists().find((p) => p.id === data.playlistId)
    playlist.songs = playlist.songs.filter((s) => s !== data.songId)
    return new Response(JSON.stringify({playlist}), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}