import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(false)
    let fetchData = async()=>{
    try{
        isLoading(true)
      let fetchRequest = await fetch(url)
      let fetchResponse = await fetchRequest.json()
      setData(fetchResponse)
    }catch(error){
            console.log(error);
    }finally{
         isLoading(false)
    }
    }
    useEffect(()=>{
        fetchData()
    }, [url]);
  return { data, loading};
}

export default useFetch