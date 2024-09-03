import type {Database} from "~/types/database.types";
import {serviceTypeEnum} from "~/schema/type.schema";

export const useServices = defineStore("service", {
    state: () => ({
        phoneNumber: "",
        email: "",
        businessName: "",
        serviceType: "NONE",
        bookAt: new Date(),
        location: "NONE"
    }),
    actions: {
        async bookServices() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()
            const runtime = useRuntimeConfig()

            showLoading()
            const validate = reservationSchema.safeParse({
                phoneNumber: this.phoneNumber,
                email: this.email,
                businessName: this.businessName,
                serviceType: this.serviceType,
                location: this.location,
            })

            if (validate.error) {
                hideLoading()
                alert.failed(validate.error.errors.map(v => v.message).join(","))
                return false
            }

            console.log(this.serviceType)
            console.log(serviceTypeEnum.includes(this.serviceType))
            if (!serviceTypeEnum.includes(this.serviceType)) {
                hideLoading()
                alert.failed("Layanan mohon diisi.")
                return false
            }

            const save = await client.from('reservation')
                .insert({
                    business_scale: "",
                    business_name: this.businessName,
                    phone_number: this.phoneNumber,
                    services_type: this.serviceType,
                    book_at: this.bookAt.toLocaleDateString(),
                    location: this.location,
                    email: this.email
                })
            hideLoading()
            if (save.error) {
                alert.failed(save.error.message)
                return false
            }


            this.businessName=""
            this.phoneNumber=""
            this.serviceType="NONE"
            this.location="NONE"
            this.email=""
            return true
        }
    }
})