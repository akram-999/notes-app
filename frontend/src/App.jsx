import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SingUp from "./pages/SingUp/SingUp"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<SingUp/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
