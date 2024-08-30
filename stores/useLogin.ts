import type {Database} from "~/types/database.types";

export const useLogin = defineStore("login", {
    state: () => ({
        email: "",
        password: "",
        showPassword: false
    }),
    actions: {
        async signInEmail() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient()
            const router = useRouter()

            showLoading()
            const schema = loginSchema.safeParse({
                email: this.email,
                password: this.password
            })

            if (schema.error) {
                hideLoading()
                alert.failed(schema.error.errors.map(v => v.message).join(","))
                return
            }

            const response = await client.auth.signInWithPassword({
                email: this.email,
                password: this.password
            })
            if (response.error) {
                hideLoading()
                alert.failed(response.error.message)
                //show error
                return
            }

            hideLoading()
            alert.success("Login Berhasil")
            return router.push({path: "/", replace: true})
        },
        async signInGoogle() {
            const client = useSupabaseClient<Database>()
            const runtime = useRuntimeConfig()
            await client.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${runtime.public.BASE_URL}login`,
                },
            })
        },
        async signInFacebook() {
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const runtime = useRuntimeConfig()

            return alert.failed("Fitur belum tersedia")

            // await client.auth.signInWithOAuth({
            //     provider:'facebook',
            //     options: {
            //         redirectTo: `${runtime.public.BASE_URL}`,
            //     },
            // })
        }
    }
})