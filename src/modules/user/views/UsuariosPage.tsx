import PageBase from "@/components/PageBase"
import { UserTable } from "../components/UserTable"



const UsuariosPage = () => {
  return (
    <PageBase pageName={"Usuarios"} PageTitle={"Listado de Usuario"}>
      <UserTable/>
    </PageBase>
  )
}

export default UsuariosPage