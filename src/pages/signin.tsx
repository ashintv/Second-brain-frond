import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
export function Signin() {

        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate()
        async function signin() {
                const username = usernameRef.current?.value
                const password = passwordRef.current?.value

                const response = await axios.post(BACKEND_URL+`api/v1/signin`, {

                        username,
                        password

                })
                const jwt = response.data.token
                console.log(jwt)
                localStorage.setItem("token", jwt)
                navigate('/dashboard')
        }
        return <div className="h-screen w-screen bg-slate-400 flex justify-center items-center ">
                <div className="bg-white max-w-fit rounded-xl  py-6 px-5 backdrop-opacity-85 ">
                        <Input placeholder="name" ref={usernameRef} />
                        <Input placeholder="pass" ref={passwordRef} />
                        <div className="flex justify-center">
                                <Button text="Submit" variant="primary" full={true} size="lg" onClick={signin} />
                        </div>


                </div>

        </div>
}