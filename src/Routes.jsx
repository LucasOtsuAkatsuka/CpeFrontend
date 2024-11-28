import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements, Outlet, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro"
import Perfil from "./Pages/Perfil"
import Usuarios from "./Pages/Usuarios"
import useAuthStore from "./stores/auth"
import { AppLayout } from "./Layouts/"


function RotasPrivadas (){
    const token = useAuthStore((state) => state.token);
    if (token) return <Outlet />;

    return <Navigate to="/login" replace />
}

function RotasAdm (){
    const usuario = useAuthStore((state) => state.usuario);
    if (usuario.nivel === "administrador"){
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />
    }
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout/>}>
                <Route element={<RotasPrivadas/>}>
                    <Route path="perfil" element={<Perfil></Perfil>}></Route>
                    <Route index element={<Home></Home>}></Route>
                    <Route element={<RotasAdm></RotasAdm>}>
                        <Route path="usuarios" element={<Usuarios></Usuarios>}></Route>
                    </Route>
                </Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="cadastro" element={<Cadastro></Cadastro>}></Route>
            </Route>
        </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}></RouterProvider>
}