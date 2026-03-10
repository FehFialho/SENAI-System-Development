import { useState } from "react"

export default function ProductFormPage() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const product = {
      name,
      description,
      category,
      price,
      stock
    }

    console.log(product)
  }

  return (
    <section className="bg-cyan-600 min-h-screen flex justify-center items-center p-6">

    <div className="bg-white/20 backdrop-blur-sm w-full max-w-xl p-8 rounded-lg shadow-lg flex flex-col gap-6">

        {/* Título */}
        <h1 className="text-white text-3xl font-bold text-center">
          Cadastrar Produto
        </h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nome */}
          <input
            type="text"
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Descrição */}
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none resize-none"
          />

          {/* Categoria */}
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Preço */}
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Estoque */}
          <input
            type="number"
            placeholder="Quantidade em estoque"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Botão */}
          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-800 text-white p-3 rounded font-semibold transition"
          >
            Salvar Produto
          </button>

        </form>

      </div>

    </section>
  )
}