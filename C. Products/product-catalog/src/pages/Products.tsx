import { useEffect, useState } from "react"
import axios from "axios"

export default function Products() {

  const [products, setProducts] = useState<any[]>([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products")
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='bg-cyan-600 flex w-screen min-h-screen justify-center items-center p-4'>
      
      <section className='bg-white/20 max-w-6xl h-9/10 p-6 flex flex-row flex-wrap justify-around items-center gap-8 rounded-lg'>
        {
          products.map((product: any) => (
            <div key={product._id} className='bg-gray-100/90 w-80 h-64 p-5 rounded-lg flex flex-col'>
              
              <span className='font-bold text-gray-700 text-2xl'>
                {product.name}
              </span>

              <span className='text-gray-600'>
                {product.description}
              </span>

              <span>
                Categoria: {product.category}
              </span>

              <span className='font-semibold'>
                R$ {product.price}
              </span>

              <span>
                Estoque: {product.stock}
              </span>

            </div>
          ))
        }
      </section>

    </section>
  )
}