import Login from "./Components/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./Components/Register"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App
