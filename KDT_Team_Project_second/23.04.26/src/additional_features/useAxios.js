import axios from "axios"
import { useEffect, useState } from "react"

function useAxios(url, count){
    const[contentsData, setContentData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(res=>res.data)
        .then(data=>setContentData(data))
   }, [count])


    return(contentsData)
}
export default useAxios;