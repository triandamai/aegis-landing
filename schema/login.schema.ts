import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})


export const registerHasBusinessSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(4),
    businessName: z.string(),
    phoneNumber: z.string().refine((value) => value.startsWith("+62") || value.startsWith("08")),
    businessSize: z.string(),

})

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    fullName: z.string()
})

export const contactUseSchema = z.object({
    email: z.string().email(),
    subject: z.string().min(4),
    fullName: z.string(),
    message: z.string()
})

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
})

export const changePassword = z.object({
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
})