import { z } from "zod";

// Auths

export const AuthSchema = z.object({

    id: z.string(),
    nombreEmpresa: z.string(),

    direccion: z.string(),

    telefono: z.string(),

    correoElectronico: z.string(),

    nombre: z.string(),

    correo: z.string(),

    clave: z.string(),
})

export type Auth = z.infer<typeof AuthSchema>
export type AuthFormData = Pick<Auth, 'nombreEmpresa' | 'direccion' | 'telefono' | 'correo' | 'nombre' | 'clave'>