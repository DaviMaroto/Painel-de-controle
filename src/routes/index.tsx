import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAppGlobalThemeContext } from "../shared/contexts"


export const AppRoutes = () => {
  const {toggleTheme} = useAppGlobalThemeContext()
  return (
    <Routes>
       <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleTheme} >Teste</Button>}/>         
       <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )  
}