import { useEffect, useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState<any>([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products")

    const products = response.data.products

    setProducts(products)
    console.log(products)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <section className='bg-cyan-500 flex w-screen h-screen justify-around items-center p-4'>
        {/* Products */}
        <section className='bg-amber-100/10 w-14/20 h-auto p-6 flex flex-row flex-wrap justify-around items-center gap-8 rounded-lg'>
        {
          products.map((product: any) => (
            <div key={product._id} className='bg-gray-100/90 w-100 h-70 p-5 rounded-lg flex flex-col'>
              
              <span className='font-bold text-gray-700 text-2xl'>
                {product.name}
              </span>

              <span className='text-gray-600'>
                {product.description}
              </span>

              <span className='text-gray-700'>
                Categoria: {product.category}
              </span>

              <span className='text-gray-700 font-semibold'>
                R$ {product.price}
              </span>

              <span className='text-gray-500'>
                Estoque: {product.stock}
              </span>

            </div>
          ))
        }
        </section>
      </section>
    </>
  )
}

export default App
