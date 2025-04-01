export function PlaylistNotFound({search, cols}) {
    return (
        <div style={{gridColumn: `span ${cols}`}} className="flex flex-col h-[220px] flex-auto justify-center items-center text-white text-center px-4">
            <h4 className="font-semibold">No pudimos encontar "{search}"</h4>
            <p className="opacity-70 mt-2">
                Vuelve a probar escribiendolo de otra forma o con una palabra clave diferente.
            </p>
        </div>
    )
}