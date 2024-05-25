import BasePage from '@/components/BasePage'
import { BaseTable } from '@/components/BaseTable'
import React from 'react'
import { MedicosForm } from '../components/medicos/MedicosForm'

export const MedicosPage = () => {
  return (
    <BasePage title='Medico' ModalForm={MedicosForm}>
    
    <BaseTable/>
    </BasePage>
  )
}
