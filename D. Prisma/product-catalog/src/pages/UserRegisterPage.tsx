import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function UserRegisterPage() {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleRegister = async () => {
    try{
      handleSubmit
      await axios.post('https://localhost:8080/api/auth/register', {name, email, password})
        Swal.fire({
            title: 'Sucesso!',
            text: 'Logado!',
            icon: 'success'
        })
        navigate('/login')
    }
    catch{
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou Senha Incorreta',
            icon: 'error'
        })
    }
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!")
      return
    }

    const user = {
      name,
      email,
      password
    }

    alert("Usuário Cadastrado com Sucesso!")
    console.log(user)
  }

  return (
    <section className="bg-cyan-600 min-h-screen flex justify-center items-center p-6">

      <div className="bg-white/20 backdrop-blur-sm w-full max-w-xl p-8 rounded-lg shadow-lg flex flex-col gap-6">

        {/* Título */}
        <h1 className="text-white text-3xl font-bold text-center">
          Criar Conta
        </h1>

        {/* Formulário */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          {/* Nome */}
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

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

          {/* Confirmar Senha */}
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 rounded bg-white/90 text-gray-700 outline-none"
          />

          {/* Botão */}
          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-800 text-white p-3 rounded font-semibold transition"
          >
            Cadastrar
          </button>

        </form>

      </div>

    </section>
  )
}