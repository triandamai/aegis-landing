import type {Database} from "~/types/database.types";

export const useContact = defineStore("contact", {
    state: () => ({
        fullName: "",
        email: "",
        message: "",
        subject: "NONE"
    }),
    actions: {
        async sendContactUs() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()

            showLoading()
            const validate = contactUseSchema.safeParse({
                fullName: this.fullName,
                email: this.email,
                subject: this.subject,
                message: this.message
            })

            console.log(validate.error)
            if (validate.error) {
                hideLoading()
                return alert.failed(validate.error.errors.map(v => v.message).join(","))
            }

            const savedData = await client.from("inbox")
                .insert({
                    fullName: this.fullName,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                })

            if (savedData.error) {
                hideLoading()
                return alert.failed(savedData.error.message)
            }
            //todo:: send smtp email

            hideLoading()
            return router.push({path: "/contact-sent"})
        }
    }
})