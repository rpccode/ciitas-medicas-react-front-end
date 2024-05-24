import AdminNavbar from "@/modules/admin/components/AdminNavbar"
import FooterAdmin from "@/modules/admin/components/Footers/FooterAdmin"
import HeaderStats from "@/modules/admin/components/Headers/HeaderStats"
import Sidebar from "@/modules/admin/components/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import routes from '../modules/admin/routes/routes';


const AdminLayout = () => {
  return (
    <>
    <Sidebar routes={routes} />
    <div className="relative md:ml-64 bg-blueGray-100 animate__animated  animate__fadeIn animate__delay-1s">
      <AdminNavbar />
      <HeaderStats />
      {/* Header */}
      <div className="px-4 md:px-10 mx-auto w-full -m-24 animate__animated  animate__fadeIn ">
       <Outlet/>
        <FooterAdmin />
      </div>
    </div>
  </>
  )
}

export default AdminLayout