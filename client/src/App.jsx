import Login from "./Components/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./Components/Register"
import Home from "./Components/Home"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App
