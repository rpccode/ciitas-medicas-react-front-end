import { z } from "zod";

// Auths

export const LoginSchema = z.object({


    correo: z.string(),

    clave: z.string(),
})

export type Login = z.infer<typeof LoginSchema>
export type LoginFormData = Pick<Login, 'correo' |  'clave'>