export function AsideSkeleton (){
    return (
        <div className="flex flex-col gap-2">
            <div className={`playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md bg-zinc-800`}>
                <picture className="h-12 w-13 flex-none relative bg-zinc-700"></picture>
                <div className="flex flex-auto items-center">
                    <div className="flex flex-auto flex-col gap-2">
                        <h4 className={`bg-zinc-700 px-4 py-2`}></h4>
                        <span className=" bg-zinc-700 px-4 py-2 w-20"></span>
                    </div>
                </div>
            </div>
            <div className={`playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md bg-zinc-800`}>
                <picture className="h-12 w-13 flex-none relative bg-zinc-700"></picture>
                <div className="flex flex-auto items-center">
                    <div className="flex flex-auto flex-col gap-2">
                        <h4 className={`bg-zinc-700 px-4 py-2`}></h4>
                        <span className=" bg-zinc-700 px-4 py-2 w-20"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}