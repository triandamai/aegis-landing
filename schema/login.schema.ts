import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})


const businessScale = ["SERVICE","CRITIC","ADVICE"]
export const registerHasBusinessSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(4),
    businessName: z.string(),
    phoneNumber: z.string().refine((value) => value.startsWith("+62") || value.startsWith("08")),
    businessSize: z.any().refine((val) => val in contactUsEnum),

})

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    fullName: z.string()
})

export const contactUsEnum = ["SERVICE","CRITIC","ADVICE"]
export const contactUseSchema = z.object({
    email: z.string().email(),
    subject:  z.string(),
    full_name: z.string(),
    message: z.string()
})

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
})

export const changePassword = z.object({
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
})
