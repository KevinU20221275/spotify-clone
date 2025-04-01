import { useState } from "react";
import { CloseIcon } from "@/icons/CloseIcon";


export function News(){
    const [currentFeed, setCurrentFedd] = useState({
        music : false,
        podcast : false,
    })

    return (
        <article className="py-4 flex flex-col gap-20">
            <div className="flex justify-start items-center gap-2">
                { (currentFeed.music || currentFeed.podcast) && 
                    <button 
                    onClick={() => setCurrentFedd({music:false, podcast:false})} 
                    className="p-2 bg-zinc-800 w-8 rounded-full text-zinc-400 hover:bg-zinc-700 transition-all cursor-pointer"
                    >
                        <CloseIcon/>
                    </button> 
                }
                <button 
                className={`${currentFeed.podcast && 'hidden'} ${currentFeed.music ? 'bg-zinc-100 text-black hover:bg-zinc-200' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'} px-3 py-[6px] rounded-full text-sm  transition-all cursor-pointer`} 
                onClick={() => setCurrentFedd({
                    ...currentFeed,
                    music:!currentFeed.music,                
                })}
                >
                    Música
                </button>
                <button 
                className={`${currentFeed.music && 'hidden'} ${currentFeed.podcast ? 'bg-zinc-100 text-black hover:bg-zinc-200' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'} px-3 py-[6px] rounded-full text-sm  transition-all cursor-pointer`} 
                onClick={() => setCurrentFedd({
                    ...currentFeed,
                    podcast:!currentFeed.podcast,
                })}
                >
                   Podcasts y programas
                </button>
                
            </div>

            {
                !currentFeed.music && !currentFeed.podcast && (
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl text-white font-bold text-center">Aún no tenemos actualizaciones disponibles para ti</h4>
                        <p className="text-zinc-200">
                            Cuando haya novedades, las publicaremos aquí. Sigue a tus artistas y podcasts favoritos para saber todas las novedades sobre ellos.
                        </p>
                    </div>
                )
            }

            {
                currentFeed.music && (
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl text-white font-bold text-center">No hay nada nuevo en música para mostrar</h4>
                        <p className="text-zinc-200 text-center">
                            Sigue a tus artistas favoritos para saber todas las novedades sobre ellos.
                        </p>
                    </div>
                )
            }

            {
                currentFeed.podcast && (
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl text-white font-bold text-center">No hay nada nuevo en podcasts para mostrar</h4>
                        <p className="text-zinc-200 text-center">
                            Sigue a tus podcasts favoritos para saber todas las novedades sobre ellos.
                        </p>
                    </div>
                )
            }
        </article>
    )
}