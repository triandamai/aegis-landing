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


export const reservationSchema = z.object({
    businessId:z.number().min(1),
    serviceId:z.number().min(1),
    packageId:z.number().min(1),
    location:z.string().min(4),
})

export const reservationCreateBusinessSchema = z.object({
    businessPhoneNumber:z.string().refine((value) => value.startsWith("+62") || value.startsWith("08"),"Nomor telphone harus diawali +62 atau 08"),
    businessEmail:z.string().email(),
    businessName:z.string().min(2),
    businessScale:z.string().min(2),
})


export const reservationPackageSchema = z.object({
    businessId:z.number().min(1),
    packageId:z.number().min(1),
    location:z.string().min(4),
})

export const reservationServiceSchema = z.object({
    businessId:z.number().min(1),
    serviceId:z.number().min(1),
    location:z.string().min(4),
})