import type {Database} from "~/types/database.types";
import {contactUsEnum} from "~/schema/login.schema";

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
                full_name: this.fullName,
                email: this.email,
                subject: this.subject,
                message: this.message
            })

            if (validate.error) {
                hideLoading()
                return alert.failed(validate.error.errors.map(v => v.message).join(","))
            }

            if (!contactUsEnum.includes(this.subject)) {
                hideLoading()
                return alert.failed("Subyek tidak sesuai")
            }

            const savedData = await client.from("inbox")
                .insert({
                    full_name: this.fullName,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                })

            hideLoading()
            if (savedData.error) return alert.failed(savedData.error.message)

            return router.push({path: "/contact-sent"})
        }
    }
})