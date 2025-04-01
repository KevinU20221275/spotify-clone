export function AsideWithoutPlaylist ({addPlaylist}) {
    return (
        <section className="flex flex-col gap-5 createPlaylist min-w-[300px]">
            <article className="flex flex-col justify-start items-start gap-2 p-4 bg-zinc-800 rounded-md">
                <h4 className="text-zinc-50 font-medium">Crea tu primera playlist</h4>
                <p className="text-zinc-200 text-sm">¡Es muy fácil! Te vamos a ayudar</p>
                
                <button className="px-3 py-2 text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 rounded-full mt-2 cursor-pointer hover:scale-105"
                onClick={addPlaylist}
                >
                    Crear playlist
                </button>
            </article>

            <article className="flex flex-col justify-start items-start gap-2 p-4 bg-zinc-800 rounded-md">
                <h4 className="text-zinc-50 font-medium">Busquemos algunos podcasts para seguir</h4>
                <p className="text-zinc-200 text-sm">Te mantendremos al tanto de los nuevos episodios.</p>

                <a href="/genre/podcasts-web">
                    <button className="px-3 py-2 text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 rounded-full mt-2 cursor-pointer hover:scale-105">Explorar podcasts</button>
                </a>
            </article>
        </section>
    )
}