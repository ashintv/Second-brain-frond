import { Button } from "../components/Button";
import "../App.css";
import { AddIcon, ShareIcon } from "../components/icos";
import { Card } from "../components/Card";
import { ControlledAddContent } from "../components/CreateContent";
import {  useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/usecontent";



export function Dashbord() {
        const [open, setOpen] = useState(false)
        const {contents , setRefresh }  = useContent()
        useEffect(()=>{
                setRefresh()
        } ,[open])
        function SetModalClose() {
                setOpen(false)
                
        }
        function SetModalOpen() {
                setOpen(true)
        }
        return (
                <>
                        <ControlledAddContent open={open} Hide={SetModalClose} />
                        <div className="hidden md:block ">
                                <Sidebar />
                        </div>
                        
                        <div className="md:ml-60 bg-slate-100 min-h-screen p-2">

                              <div className="flex justify-end ">
                                  <div className="flex gap-2 relative">

                                        <Button text="Add Content" variant="primary" size="md" onClick={SetModalOpen} startIcon={<AddIcon size="md" />} />
                                        <Button text="Component" variant="secondary" size="md" onClick={() => { }} endIcon={<ShareIcon size="md" />} />
                                </div>
                              </div>

                                <div className="pt-5 justify-center md:grid grid-cols-3 md:justify-start md:gap-5 md:ml-3 md:pt-10 ">
                                       {contents.map(({title , link , Type})=><Card title={title} link={link} type={Type}/>)}
                                       

                                </div>
                        </div>

                </>
        );
}


