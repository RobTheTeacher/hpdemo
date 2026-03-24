import {useState, useEffect} from 'react'

 const useFetch = endpoint => {
    const [data, setData] = useState(null)
    console.log("ww", import.meta.env.VITE_API_ENDPOINT)

    const API_ENDPOINT =`${import.meta.env.VITE_API_ENDPOINT}${endpoint}`

    const getData = async () => {
        try {
            let response = await fetch(API_ENDPOINT)
            let data = await response.json()
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
      getData()
    }, [endpoint])

    return data
}

export default useFetch

