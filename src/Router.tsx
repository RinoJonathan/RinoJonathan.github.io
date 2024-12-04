import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./CustomComponents/Layout/Layout";
 

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}> 

        <Route index element={<Home/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}
