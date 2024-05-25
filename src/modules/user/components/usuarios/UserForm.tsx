import useModal from '@/hooks/useModal'
import { RiSignalTowerLine } from '@remixicon/react'
import { TextInput, Divider, Select, SelectItem, SearchSelect, SearchSelectItem, Switch, Badge, Button } from '@tremor/react'
import React from 'react'

const UserForm = () => {
  const { handleHideModal } = useModal()
  const [isSwitchOn, setIsSwitchOn] = React.useState<boolean>(false);
  const handleSwitchChange = (value: boolean) => { setIsSwitchOn(value); };
  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Registro de Usuario
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Tomate un momento para registrar el Usuario de tu clinica
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">

            <div className="col-span-full">
              <label
                htmlFor="last-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Nombre de Usuario
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="last-name"
                placeholder="Last name"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="sexo"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Rol
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="rol"
                name="rol"
                defaultValue="1"
                placeholder="Rol del usuario"
                className="mt-2"
                required
              >
                <SelectItem value="1">Administrado</SelectItem>
                <SelectItem value="2">Medico</SelectItem>
                <SelectItem value="3">Asistente</SelectItem>
                <SelectItem value="3">Secretaria</SelectItem>

              </Select>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="sexo"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Persona
                <span className="text-red-500">*</span>
              </label>
              <SearchSelect
                id="persona"
                name="persona"
                defaultValue="1"
                placeholder="Persona Asignada"
                className="mt-2"
                required
              >
                <SearchSelectItem value="1">Juan Rodriges</SearchSelectItem>
                <SearchSelectItem value="2">jose Rodriges</SearchSelectItem>
                <SearchSelectItem value="3">Rudy Rodriges</SearchSelectItem>
                <SearchSelectItem value="3">Alex Rodriges</SearchSelectItem>

              </SearchSelect>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Password
              </label>
              <TextInput
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Digite su Password"
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="city"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Estado
              </label>
              <div className="flex items-center space-x-3">
                <Switch
                  id="switch"
                  name="switch"
                  checked={isSwitchOn}
                  onChange={handleSwitchChange} />
                {(isSwitchOn) ? <Badge icon={RiSignalTowerLine} color='green'>Activo</Badge> : <Badge icon={RiSignalTowerLine} color='red'>Inactivo</Badge> }
              </div>
            </div>

          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
             color='red'
              className="whitespace-nowrap  rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              onClick={() => handleHideModal('Usuario')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>

  )

}

export default UserForm