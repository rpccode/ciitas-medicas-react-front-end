
import { LoginFormData } from "@/modules/types/LoginTypes"
import { TextInput } from "@tremor/react"
import { useForm } from "react-hook-form"

import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const initialState: LoginFormData = {
    correo: "ejemplo@gmail.com",
    clave: "5120",
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialState })

  const handleFormSumite = async (data: LoginFormData) => {
    // const info= await CreateProject(data)
    //  toast.success('Projecto creado correctamente')
    navigate('/admin/dashboard')
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-slate-50 border-0">

              <div className="flex-auto px-4 lg:px-10 py-10 pt-6">
                <div className="text-blueGray-600 text-center mb-3 font-bold">
                  <strong>Inicia Seccion y administra tus <span className="text-blue-500">pacientes</span></strong>

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
                      Email
                    </label>
                    <TextInput
                      title="Email"
                      placeholder="Email"
                      error={errors.correo && true}
                      errorMessage={errors?.correo?.message}
                      {...register("correo", {
                        required: "El Correo es obligatorio",
                      })}
                    />

                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <TextInput
                    
                      title="Password"
                      placeholder="Password"
                      type="password"
                      error={errors.clave && true}
                      errorMessage={errors?.clave?.message}
                      {...register("clave", {
                        required: "El Password es obligatorio",
                      })}
                    />

                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-800 text-white active:bg-blue-300 text-sm font-bold uppercase px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blue-500"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blue-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login


