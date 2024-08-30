import type {Database} from "~/types/database.types";

export const useForgotPassword = defineStore("forgot-password", {
    state: () => ({
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false
    }),
    actions: {
        async sendForgotPassword() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()
            const runtime = useRuntimeConfig()

            showLoading()
            const validate = forgotPasswordSchema.safeParse({
                email: this.email,
            })

            if (validate.error) {
                hideLoading()
                return alert.failed(validate.error.errors.map(v => v.message).join(","))
            }

            const savedData = await client.auth.resetPasswordForEmail(this.email, {
                redirectTo: `${runtime.public.BASE_URL}confirmation-forgot-password`,
            })
            if (savedData.error) {
                hideLoading()
                return alert.failed(savedData.error.message)
            }

            hideLoading()
            return router.push({path: "/otp-sent"})
        },
        async setPassword() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()

            showLoading()

            if(this.password !== this.confirmPassword) {
                return alert.failed("Password tidak sama")
            }

            const validate = changePassword.safeParse({
                password: this.password,
                confirmPassword: this.confirmPassword
            })

            if (validate.error) {
                hideLoading()
                return alert.failed(validate.error.errors.map(v => v.message).join(","))
            }

             await client.auth.updateUser({
                password: this.password,
            })

            hideLoading()
            alert.success("Password dirubah,silahkan login")
            return router.push({path: "/login"})
        }
    }
})