import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
        const [contents, setContent] = useState([])
        function setRefresh() {
                axios.get(BACKEND_URL + 'api/v1/content', {
                        headers: {
                                'authorization': localStorage.getItem('token')
                        }
                }).then((response) => {

                        setContent(response.data)

                })
        }




        useEffect(() => {
                setRefresh()
                let intervel = setInterval(()=>{
                        setRefresh()
                } , 10*1000)

                return ()=>{
                        clearInterval(intervel)
                }
        }, [])



        return { contents, setRefresh };
}