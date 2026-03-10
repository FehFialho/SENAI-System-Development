import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <span className="text-2xl font-bold">
        🛒 Marques Produtos
      </span>

      {/* Links */}
      <div className="flex gap-8 text-lg">

        <Link 
          to="/" 
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <Link 
          to="/products" 
          className="hover:text-cyan-400 transition"
        >
          Produtos
        </Link>

        <Link 
          to="/product/new" 
          className="hover:text-cyan-400 transition"
        >
          Suporte
        </Link>

      </div>

    </nav>
  )
}