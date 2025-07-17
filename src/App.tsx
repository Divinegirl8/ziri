import './App.css'
import {Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn.tsx";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
