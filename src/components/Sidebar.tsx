import {  LottusIcon, TwitterIcon, YouTubeIcon } from "./icos"
import { SidebarItem } from "./SidebarItem"


const md = 'text-2xl flex gap-2 text-purple-800 pt-2 font-bold font-serif'

export const Sidebar = () => {
        return <div className="min-h-screen min-w-72  pl-6 fixed">
                <div className='text-2xl flex gap-2 text-purple-800 pt-2 font-bold font-serif'>
                        <LottusIcon />
                        Lottu's List
                </div>
                <div className="text-slate-600 md:pt-8 ">

                        <SidebarItem text="Twitter" icon={<TwitterIcon height="25" width="25" />} />
                        <SidebarItem text="Youtube" icon={<YouTubeIcon height="25" width="25" />} />
                </div>



        </div>
}