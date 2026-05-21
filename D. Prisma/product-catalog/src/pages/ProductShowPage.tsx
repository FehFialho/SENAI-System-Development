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
      <section className='bg-cyan-600 w-screen min-h-screen p-6 flex items-center justify-center align-center flex-col'>

        <div className="bg-gray-50 w-2/3 max-h-[500px] overflow-y-auto rounded-sm shadow-lg">

            <table className="w-full text-sm text-center text-gray-600">
                                
              <thead className="bg-cyan-700 text-xs text-white uppercase">
                  <tr>
                      <th className="px-6 py-4">Nome</th>
                      <th className="px-6 py-4">Qtd</th>
                      <th className="px-6 py-4">Preço</th>
                      <th className="px-6 py-4">Ações</th>
                  </tr>
              </thead>

              <tbody>
                  {products.map((product) => (
                      <tr 
                          key={product._id} 
                          className="border-b last:border-none hover:bg-gray-100 transition"
                      >
                          <td className="px-6 py-4 font-medium text-gray-800">
                              {product.name}
                          </td>

                          <td className="px-6 py-4">
                              <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                  {product.stock}
                              </span>
                          </td>

                          <td className="px-6 py-4 font-medium text-gray-700">
                              {product.price.toLocaleString('pt-BR', { 
                                  style: 'currency', 
                                  currency: 'BRL' 
                              })}
                          </td>
                          <td className="px-6 py-4 font-medium">
                              <button className="rounded-sm p-2 bg-cyan-600 text-white mx-4" onClick={() => updateProduct(product._id)}>Atualizar</button>
                              <button className="rounded-sm p-2 bg-red-800 text-white mx-4" onClick={() => handleDelete(product._id)}>Deletar</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
            <button 
                onClick={() => navigate(`/product/new`)}
                className="bg-cyan-700 text-white px-6 py-3 rounded-sm font-medium shadow-md hover:bg-cyan-800 hover:scale-105 transition"
            >
                Novo Produto
            </button>
        </div>
      </section>
  )
}