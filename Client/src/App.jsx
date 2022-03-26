import React, {useEffect, useState} from 'react'
import axios from 'axios'


const App = () => {
  const [message , setMessage] = useState("")
  const [msg , setMsg] = useState("")


  const fetchData = async () => {
    const {data} = await axios.get("/api/home");
    console.log("Parsed Data : ", data);
    setMessage(data.message)

    const parsedData = await axios.get("/api")
    console.log("Data : ", parsedData.data);
    if(parsedData.data.success){
      setMsg(parsedData.data.message)
    }else{
      setMsg(parsedData.data.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
      <h1>Hi Everyone!</h1>
      <p>{message}</p>
      <h2>{msg}</h2>
    </>
  )
}

export default App