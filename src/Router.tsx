import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./CustomComponents/Layout/Layout";
import { TooltipProvider } from "@radix-ui/react-tooltip";
 

export default function Router() {
  return (
    <BrowserRouter>
    <TooltipProvider delayDuration={1} >
    <Routes>
        <Route element={<Layout/>}> 

        <Route index element={<Home/>}/>

        </Route>
    </Routes>
    </TooltipProvider>
    </BrowserRouter>
  )
}
