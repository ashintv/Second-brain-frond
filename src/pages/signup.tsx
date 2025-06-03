import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";


export function Signup() {

        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate()
        async function signup() {
                const username = usernameRef.current?.value
                const password = passwordRef.current?.value
                console.log(username, password)
                console.log(BACKEND_URL)

                await axios.post(BACKEND_URL+'api/v1/signup', {

                        username,
                        password

                })
                alert('u have signe up!')
                navigate('/signin')
        }




        return <div className="h-screen w-screen bg-slate-400 flex justify-center items-center ">
                <div className="bg-white max-w-fit rounded-xl  py-6 px-5 backdrop-opacity-85 ">
                        <Input placeholder="username" ref={usernameRef} />
                        <Input placeholder="password" ref={passwordRef} />
                        <div className="flex justify-center">
                                <Button text="Submit" variant="primary" full={true} size="lg" onClick={signup} />
                        </div>


                </div>

        </div>
}