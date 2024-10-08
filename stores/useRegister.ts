import type {Database} from "~/types/database.types";
import {businessScale} from "~/schema/type.schema";

export const useRegister = defineStore("register", {
    state: () => ({
        fullName: "",
        email: "",
        password: "",
        hasBusiness: false,
        businessName: "",
        businessPhone: "",
        businessSize: "NONE",
        showPassword: false
    }),
    actions: {
        async signUpEmail() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()
            const runtime = useRuntimeConfig()

            showLoading()
            if (this.hasBusiness) {
                const validate = registerHasBusinessSchema.safeParse({
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password,
                    businessName: this.businessName,
                    phoneNumber: this.businessPhone,
                    businessSize: this.businessSize,

                })

                if (validate.error) {
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return
                }

                if (!businessScale.includes(this.businessSize)) {
                    hideLoading()
                    alert.failed("Silahkan pilih ukuran bisnis.")
                    return
                }
            }

            if (!this.hasBusiness) {
                const validate = registerSchema.safeParse({
                    email: this.email,
                    password: this.password,
                    fullName: this.fullName,
                })
                if (validate.error) {
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return
                }
            }

            const signUp = await client.auth.signUp({
                email: this.email,
                password: this.password,
                options: {
                    emailRedirectTo: `${runtime.public.BASE_URL}register-success`,
                    data: {
                        full_name: this.fullName,
                        display_name: this.fullName
                    }
                }
            })


            if (signUp.error) {
                hideLoading()
                alert.failed(signUp.error.message)
                return
            }
            const user = signUp.data.user
            if (this.hasBusiness) {
                const savedBusiness = await client.from("business")
                    .insert({
                        business_phone: this.businessPhone,
                        business_name: this.businessName,
                        business_scale: this.businessSize,
                        business_email: this.email,
                        user_id: user?.id
                    })

                if (savedBusiness.error) {
                    hideLoading()
                    alert.failed(savedBusiness.error?.message ?? "Gagal mendaftarkan akun")
                    return
                }
            }
            hideLoading()
            this.fullName = ""
            this.email = ""
            this.password = ""
            this.businessName = ""
            this.businessPhone = ""
            this.businessSize = "NONE"
            return router.push({path: "/otp-sent", replace: true})
        },
        async signInGoogle() {
            const client = useSupabaseClient<Database>()
            const runtime = useRuntimeConfig()

            await client.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${runtime.public.BASE_URL}sign-in-confirmation`,
                },
            })
        },
        async signInFacebook() {
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const runtime = useRuntimeConfig()

            await client.auth.signInWithOAuth({
                provider: 'facebook',
                options: {
                    redirectTo: `${runtime.public.BASE_URL}sign-in-confirmation`,
                },
            })
        }
    }
})