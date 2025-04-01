export function TableItemSkeleton(){
    return (
        <tr className="bg-zinc-800">
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg"><span className="w-8 h-5 block bg-zinc-700"></span></td>
            <td className="px-4 py-2 flex gap-2">
                <picture className="w-11 h-11 bg-zinc-700"></picture>
                <div className="flex flex-col gap-2">
                    <h3 className=""><span className="w-8 h-4 block bg-zinc-700"></span></h3>
                    <span className=""><span className="w-20 h-4 block bg-zinc-700"></span></span>
                </div>
            </td>
            <td className="px-4 py-2"><span className="w-12 h-5 block bg-zinc-700"></span></td>
            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg"><span className="w-10 h-5 block bg-zinc-700"></span></td>
        </tr>
    )
}