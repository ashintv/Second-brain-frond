import type { ReactElement } from "react";

export function SidebarItem({
        text,
        icon
}:{
        text:string,
        icon:ReactElement
}){
        return <div className="flex gap-2 cursor-pointer hover:text-violet-950 hover:bg-violet-100 duration-150 p-2">
               {icon}{text}
        </div>
}