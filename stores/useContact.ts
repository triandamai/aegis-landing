import type {Database} from "~/types/database.types";
import {contactUsEnum} from "~/schema/type.schema";

export const useContact = defineStore("contact", {
    state: () => ({
        fullName: "",
        // fullNameState:InputState.None(),
        email: "",
        // emailState:InputState.None(),
        message: "",
        // messageState:InputState.None(),
        subject: "NONE",
        // subjectState:InputState.None()
    }),
    actions: {
        async sendContactUs() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()
            const mail = useMail()

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


            mail.send({
                from: 'John Doe',
                subject: 'Incredible',
                text: 'This is an incredible test message',
                to: "triandamai@gmail.com",
            })
            hideLoading()
            if (savedData.error) return alert.failed(savedData.error.message)
            this.fullName = ""
            this.email = ""
            this.message = ""
            this.subject = "NONE"

            return router.push({path: "/contact-sent"})
        }
    }
})