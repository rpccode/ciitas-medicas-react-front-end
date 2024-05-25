import BasePage from "@/components/BasePage"
import { BaseTable } from "@/components/BaseTable"
import { ModalBase } from "@/components/Modals/ModalBase"
import UserForm from "../components/usuarios/UserForm"


export const UsuariosPage = () => {
  return (
    <>
      <BasePage title="Usuario" ModalForm={UserForm} >
        <BaseTable/>
      </BasePage>
    </>
  )
}
