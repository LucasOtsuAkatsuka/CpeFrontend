import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="cadastro" element={<Cadastro></Cadastro>}></Route>
        </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}></RouterProvider>
}