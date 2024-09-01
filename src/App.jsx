import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<OneBox/>}/>
    </Routes>
    </BrowserRouter>
      
      {/* <OneBox/> */}
    </>
  )
}

export default App
