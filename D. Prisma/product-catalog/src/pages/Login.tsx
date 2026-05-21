import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function UserLoginPage() {

    const navigate = useNavigate();

//   const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try{
        const response = await axios.post('http://localhost:8080/api/auth/login', {email, password})

        // cache do navegador
        sessionStorage.setItem('token', response.data.token)

        console.log("Logado")
        Swal.fire({
            title: 'Sucesso!',
            text: 'Logado!',
            icon: 'success'
        })
        navigate('/products')
    }
    catch{
        console.log("ERRO")
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou Senha Incorreta',
            icon: 'error'
        })
    }
    
    setEmail('')
    setPassword('')
  }

  return (
    <section className="bg-cyan-600 min-h-screen flex justify-center items-center p-6">

      <div className="bg-white/20 backdrop-blur-sm w-full max-w-xl p-8 rounded-lg shadow-lg flex flex-col gap-6">

        {/* Título */}
        <h1 className="text-white text-3xl font-bold text-center">
          Login
        </h1>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Senha */}
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Botão */}
          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-800 text-white p-3 rounded font-semibold transition"
          >
            Entrar
          </button>

        </form>

      </div>

    </section>
  )
}