import type {Database} from "~/types/database.types";

export const useLoginAdmin = defineStore("login-admin",{
    state:()=>({
        showPassword:false,
        email:"",
        password:""
    }),
    actions:{
        async signIn(){
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
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
                return alert.failed(response.error.message)
            }

            const isAdmin = await client.from("admin")
                .select("*")
                .eq("email",this.email)
            if (isAdmin.error) {
                console.log("ga nyampe",isAdmin)
                hideLoading()
                await client.auth.signOut()
                return alert.failed("Login gagal")
            }

            if(isAdmin.data.length < 1) {
                console.log("ga nyampe < 1",isAdmin)
                hideLoading()
                await client.auth.signOut()
                return alert.failed("Login gagal")
            }

            console.log("nyampe",isAdmin)


            hideLoading()
            alert.success("Login Berhasil")
            return router.push({path: "/admin", replace: true})
        }
    }
})