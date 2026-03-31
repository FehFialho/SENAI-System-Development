import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductFormPage from "./pages/ProductFormPage"
import UserRegisterPage from "./pages/UserRegisterPage"
import UserLoginPage from "./pages/Login"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/new" element={<ProductFormPage />} />
        <Route path="/user/register" element={<UserRegisterPage />} />
        <Route path="/user/login" element={<UserLoginPage />} />
      </Routes>
    </>
  )
}

export default App