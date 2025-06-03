import { useRef, useState } from "react"
import { Button } from "./Button"
import { CrossIcon, TwitterIcon, YouTubeIcon } from "./icos"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface ControlledAddContentProps {
        open: boolean,
        Hide: () => void
}

//@ts-ignore
enum ContentType {
        Youtube = 'youtube',
        Twitter = 'twitter'
}


export const ControlledAddContent = (props: ControlledAddContentProps) => {
        const [Type, setType] = useState(ContentType.Twitter)
        const titleRef = useRef<HTMLInputElement>(null)
        const linkRef = useRef<HTMLInputElement>(null)
        async function addcontent(){
                const title = titleRef.current?.value
                const link = linkRef.current?.value
                await axios.post(BACKEND_URL+'api/v1/content',{
                        title,
                        link,
                        Type
                },{
                        headers:{
                                'authorization':localStorage.getItem('token')
                        }
                })
                alert('data added succesfully')
                props.Hide()

                
        }

        return (
                <>
                        {props.open &&<div>
                                <div className="w-screen h-screen top-0 fixed xleft-0 bg-black opacity-30 flex justify-center">
                        </div> 
                                <div className="w-screen h-screen top-0 fixed xleft-0 flex justify-center">
                                <div className="self-center bg-white p-3 rounded-xl  ">
                                        <div className="flex items-center">
                                                <div className="text-sm flex-1 text-center justify-self-center">Add Content</div>
                                                <span className=" flex justify-self-end" onClick={props.Hide}>
                                                        <CrossIcon size={'md'} />
                                                </span>
                                        </div>

                                        <Input placeholder={'Title'} ref={titleRef}></Input>
                                        <Input placeholder={'Link'} ref={linkRef}></Input>
                                        <div className="flex justify-center gap-2">
                                                <Button size='md' full onClick={() => {
                                                        setType(ContentType.Youtube)
                                                }} variant={Type===ContentType.Youtube?'primary':'secondary'} endIcon={<YouTubeIcon  height="15" width="15" />} />
                                                <Button size='md' full onClick={() => {
                                                        setType(ContentType.Twitter)
                                                }} variant={Type===ContentType.Twitter?'primary':'secondary'} endIcon={<TwitterIcon  height="15" width="15"  custom="text-black"/>} />
                                        </div>
                                        
                                                <Button text="Submit" variant="primary" size="sm" full onClick={addcontent} />
                                        

                                </div>
                                </div>


                        </div>}
                </>
        )
}

