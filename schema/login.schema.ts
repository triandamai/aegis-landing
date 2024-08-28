import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})


export const registerHasBusinessSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    businessName: z.string(),
    phoneNumber:z.string(),
    businessSize:z.string(),
})

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    fullName: z.string()
})
