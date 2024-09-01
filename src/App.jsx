import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"



function App() {
  
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<OneBox/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
