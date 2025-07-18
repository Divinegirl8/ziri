import './App.css'
import {useRoutes} from "react-router-dom";
import { Routes } from './Routes.tsx';


function App() {

  return (
    useRoutes(Routes)
  )
}

export default App
