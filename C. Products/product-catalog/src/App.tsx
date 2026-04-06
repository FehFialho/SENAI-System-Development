import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"

import Home from "./pages/Home"
import ProductFormPage from "./pages/ProductFormPage"
import UserRegisterPage from "./pages/UserRegisterPage"
import UserLoginPage from "./pages/Login"
import ProductShowPage from "./pages/ProductShowPage"
import ProductUpdatePage from "./pages/ProductUpdatePage"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductShowPage />} />
        <Route path="/product/new" element={<ProductFormPage />} />
        <Route path="/product/update/:id" element={<ProductUpdatePage />} />

        <Route path="/user/register" element={<UserRegisterPage />} />
        <Route path="/user/login" element={<UserLoginPage />} />
      </Routes>
    </>
  )
}

export default App