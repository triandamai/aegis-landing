import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})


export const businessScale = ["MICRO","SMALL","MEDIUM"]
export const registerHasBusinessSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(4),
    businessName: z.string(),
    phoneNumber: z.string().refine((value) => value.startsWith("+62") || value.startsWith("08"),"Nomor telphone harus diawali +62 atau 08"),
    businessSize: z.string(),

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

export const serviceTypeEnum = ["MICRO","SMALL","MEDIUM"]
export const reservationSchema = z.object({
    phoneNumber:z.string(),
    email:z.string().email(),
    businessName:z.string().min(2),
    serviceType:z.string().min(2),
    location:z.string(),
})