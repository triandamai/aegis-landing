import {registerSchema} from "~/schema/login.schema";

export const useRegister = defineStore("register", {
    state: () => ({
        fullName: "",
        email: "",
        password: "",
        hasBusiness: false,
        businessName: "",
        phone: "",
        businessSize: ""
    }),
    actions: {
        async signUpEmail() {
            const alert = useAlert()
            const client = useSupabaseClient()

            if (this.hasBusiness) {
                const validate = registerHasBusinessSchema.safeParse({
                    email: this.email,
                    password: this.password,
                    fullName: this.fullName,
                    phone: this.phone,
                    businessSize: this.businessSize,
                    businessName: this.businessName,
                })
                if (validate.error) {
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return
                }
            }

            const validate = registerSchema.safeParse({
                email: this.email,
                password: this.password,
                fullName: this.fullName,
            })
            if (validate.error) {
                alert.failed(validate.error.errors.map(v => v.message).join(","))
                return
            }

            const signUp = await client.auth.signUp({
                email: this.email,
                password: this.password,
            })

            if(signUp.error){
                alert.failed(signUp.error.message)
                return
            }

            //save data user
            const savedData = await  client.from("")
                .insert({
                    email: this.email,
                    password: this.password,
                    fullName: this.fullName,
                    phone: this.phone,
                    businessSize: this.businessSize,
                    businessName: this.businessName,
                })
        }
    }
})