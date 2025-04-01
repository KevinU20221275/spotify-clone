
import { TableItemSkeleton } from "./TableItemSkeleton"

export function TableSkeleton(){
    return (
        <table className="table-auto text-left min-w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2 transparent"><span className="w-10 h-5 block bg-zinc-700"></span></th>
                    <th className="px-4 py-2 transparent"><span className="w-10 h-5 block bg-zinc-700"></span></th>
                    <th className="px-4 py-2 transparent"><span className="w-10 h-5 block bg-zinc-700"></span></th>
                    <th className="px-4 py-2 transparent"><span className="w-10 h-5 block bg-zinc-700"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-14"></tr>
                <TableItemSkeleton/>
                <TableItemSkeleton/>
                <TableItemSkeleton/>
                <TableItemSkeleton/>
                <TableItemSkeleton/>
            </tbody>
        </table>
    )
}

