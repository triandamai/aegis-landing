export const useLogin = defineStore("login", {
    state: () => ({
        email: "",
        password: "",
        showPassword: false
    }),
    actions: {
        async signInEmail() {

            const alert = useAlert()
            const client = useSupabaseClient()

            const schema = loginSchema.safeParse({
                email:this.email,
                password:this.password
            })

            if(schema.error){
                alert.failed(schema.error.errors.map(v=>v.message).join(","))
                return
            }

            const response = await client.auth.signInWithPassword({
                email: this.email,
                password: this.password
            })
            if (response.error) {
                alert.failed("Failed to login")
                //show error
                return
            }


        }
    }
})