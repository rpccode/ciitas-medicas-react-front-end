import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminLayout from "@/layouts/AdminLayout"
import Login from "@/modules/auth/views/Login"
import Register from "@/modules/auth/views/Register"
import AuthLayout from "@/layouts/AuthLayout"
import Dashboard from "@/modules/admin/views/Dashboard"
import SplashScreen from "@/views/SplashScreen"
import { MedicosPage } from "@/modules/user/views/MedicosPage"
import { PersonalPage } from "@/modules/user/views/PersonalPage"
import  UsuariosPage  from "@/modules/user/views/UsuariosPage"


const routerApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="forgot-password" element={<div>Forgot Password</div>} />
                    <Route path="reset-password" element={<div>Reset Password</div>} />
                    <Route path="404" element={<div>404</div>} />
                    <Route path="*" element={<Login/>} />
                </Route>
                <Route path="/admin" element={<AdminLayout/>}>
                    <Route index path="dashboard" element={<Dashboard/>} />
                    <Route path="usuarios" element={<UsuariosPage/>} />
                    <Route path="roles" element={<div>Roles</div>} />
                    <Route path="permissions" element={<div>Permissions</div>} />
                    <Route path="settings" element={<div>Settings</div>} />
                    <Route path="medicos" element={<MedicosPage/>} />
                    <Route path="personal" element={<PersonalPage/>} />

                </Route>
                <Route path="/" element={<SplashScreen/>} />
                <Route path="*" element={<SplashScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routerApp