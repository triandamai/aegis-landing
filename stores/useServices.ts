import type {Database} from "~/types/database.types";

export const useServices = defineStore("service",{
    state:()=>({
        phoneNumber:"",
        email:"",
        businessName:"",
        serviceType:"",
        bookAt: new Date(),
        location:""
    }),
    actions:{
        async bookServices(){
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const router = useRouter()
            const runtime = useRuntimeConfig()

            showLoading()

            const save = await client.from('book_services')
                .insert({
                    business_scale:"",
                    business_name:"",
                    phone_number:"",
                    services_type:"",
                    book_at:"",
                    location:"",
                    email:""
                })
            if(save.error){


            }
            hideLoading()
        }
    }
})