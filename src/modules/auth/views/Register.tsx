import { AuthFormData } from "@/modules/types/AuthTypes"
import ErrorMessage from "@/components/ErrorMessage"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const Register = () => {
  const navigete = useNavigate()
  const initialValues: AuthFormData = {
    nombreEmpresa: '',
    direccion: '',
    telefono: '',
    correo: '',
    nombre: '',
    clave: '',

  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleFormSumite = async (data: AuthFormData) => {
    // const info= await CreateProject(data)
    //  toast.success('Projecto creado correctamente')
    navigete('/')
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-Gray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
                <div className="text-blue-400 text-center mb-3 font-bold">
                  <strong>Registra tu <span className="bg-blue-500">clinica</span> y administra tus <span className="bg-blue-500">pacientes</span></strong>
                </div>
                <form
                  onSubmit={handleSubmit(handleFormSumite)}
                  noValidate
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre de la clinica
                    </label>
                    <input
                      id="nombreEmpresa"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-Gray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Introduzca el nombre de su clinica"
                      {...register("nombreEmpresa", {
                        required: "El Nombre de la Clinica es obligatorio",
                      })}
                    />
                     {errors.nombreEmpresa && (
                    <ErrorMessage>{errors.nombreEmpresa.message}</ErrorMessage>
                )}
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Direccion
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-Gray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Introduzca la direccion de la clinica"
                      {...register("direccion", {
                        required: "La direccion de la clinica es obligatorio",
                      })}
                    />
                     {errors.direccion && (
                    <ErrorMessage>{errors.direccion.message}</ErrorMessage>
                )}
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Telefono
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-Gray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="000-000-0000"
                      {...register("telefono", {
                        required: "El telefono de la clinica es obligatorio",
                      })}
                    />
                     {errors.telefono && (
                    <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                )}
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre de usuario
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-Gray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nombre de usuario para la clinica"
                      {...register("nombre", {
                        required: "El Nombre de Usuario es obligatorio",
                      })}
                    />
                     {errors.nombre && (
                    <ErrorMessage>{errors.nombre.message}</ErrorMessage>
                     )}

                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-Gray-300 text-blueGray-600 bg-slate-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register("correo", {
                        required: "El Correo de la Clinica es obligatorio",
                      })}
                    />
                     {errors.correo && (
                    <ErrorMessage>{errors.correo.message}</ErrorMessage>)}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-Gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register("nombreEmpresa", {
                        required: "El Password  es obligatorio",
                      })}
                    />
                     {errors.nombreEmpresa && (
                    <ErrorMessage>{errors.nombreEmpresa.message}</ErrorMessage>)}
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register