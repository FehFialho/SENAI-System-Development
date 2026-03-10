import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState<any>([])

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/api/products")
    setProducts(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <h1 className="bg-sky-600 text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
