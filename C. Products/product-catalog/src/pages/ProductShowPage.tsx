import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function ProductShowPage() {

  const [products, setProducts] = useState<any[]>([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products")
    setProducts(response.data.products)
  }

  const updateProduct = async (_id: string) => {
    return navigate(`/product/update/${_id}`)
  }

  const handleDelete = async (_id: string) => {
    
    try{
      await axios.delete(`http://localhost:8080/api/products/${_id}`)
      Swal.fire({
        title: "Sucesso!",
        text: "Produto Deletado.",
        icon: "success"
      })
      fetchData()
    }
    catch{
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao deletar o produto.",
        icon: "error"
      })
    }
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
                
                <button 
                  type="button"
                  onClick={() => handleDelete(product._id)}
                  className="self-end text-red-900 font-bold text-2xl">
                x</button>

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

                <button onClick={() => updateProduct(product._id)} type="button" className="bg-cyan-600 text-white p-1.5 mt-5 rounded-xs w-[90%] self-center">Atualizar</button>

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