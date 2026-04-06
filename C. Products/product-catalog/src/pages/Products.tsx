import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Products() {

  const [products, setProducts] = useState<any[]>([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products")
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

    return (
    <section className='bg-cyan-600 flex flex-col w-screen min-h-screen justify-center items-center p-4'>

      <section className='flex justify-center items-center p-4'>

        {/* Map */}
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

      <button
        type="button"
        className=" w-1/2 bg-cyan-700 hover:bg-cyan-800 text-white p-3 rounded font-semibold transition"
        onClick={() => navigate('/product/new')}
      >
        Novo Produto
      </button>
    </section>
  )
}