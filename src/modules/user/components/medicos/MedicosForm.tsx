import useModal from "@/hooks/useModal"
import { TextInput, Select, SelectItem, DatePicker, Divider } from "@tremor/react"

export const MedicosForm = () => {
  const {handleHideModal} = useModal()
  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Registra Tus Medicos
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Tomate un momento para registrar los Medicos de tu clinica
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="Nombres"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Nombres
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="Nombres"
                name="Nombres"
                autoComplete="Nombres"
                placeholder="Nombres"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Apellidos
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="Apellidos"
                name="Apellidos"
                autoComplete="Apellidos"
                placeholder="Apellidos"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="sexo"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Tipo DNI 
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="dni"
                name="dni"
                defaultValue="1"
                placeholder="DNI"
                className="mt-2"
                required
              >
                <SelectItem value="1">Cedula</SelectItem>
                <SelectItem value="2">Licencia</SelectItem>
                <SelectItem value="3">Pasaporte</SelectItem>
              </Select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Numero DNI
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
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="sexo"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Sexo
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="sexo"
                name="sexo"
                defaultValue="1"
                placeholder="sexo"
                className="mt-2"
                required
              >
                <SelectItem value="1">Masculino</SelectItem>
                <SelectItem value="2">Femenino</SelectItem>
                <SelectItem value="3">Otros</SelectItem>
              </Select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Fecha de Nacimiento
                <span className="text-red-500">*</span>
              </label>
              <DatePicker
                id="fechaNacimiento"
                placeholder="Fecha de Nacimiento"
                className="mx-auto max-w-sm mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
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
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="Telefono"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Numero de Telefono
              </label>
              <TextInput
                id="telefono"
                name="telefono"
                autoComplete="mobile tel"
                placeholder="(000)-000-0000"
                className="mt-2"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="sexo"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Especialidad
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="especialidad"
                name="especialidad"
                defaultValue="1"
                placeholder="Especialidad"
                className="mt-2"
                required
              >
                <SelectItem value="1">Pediatra</SelectItem>
                <SelectItem value="2">Internista</SelectItem>
                <SelectItem value="3">Otros</SelectItem>
              </Select>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="Direccion"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Direccion
              </label>
              <TextInput
                type="text"
                id="Direccion"
                name="Direccion"
                autoComplete="address-line1"
                placeholder="Direccion"
                className="mt-2"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="ciudad"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Ciudad
              </label>
              <TextInput
                type="text"
                id="ciudad"
                name="ciudad"
                autoComplete="address-level2"
                placeholder="Ciudad"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="provincia"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Provincia
              </label>
              <TextInput
                type="text"
                id="provincia"
                name="provincia"
                autoComplete="address-level1"
                placeholder="Provincia"
                className="mt-2"
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 bg-red text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              onClick={() => handleHideModal("Medico")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
