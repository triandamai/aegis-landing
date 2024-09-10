import type {Database} from "~/types/database.types";

export const useAdminServices = defineStore("book", {
    state: () => ({
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<{
            book_at: string
            business_name: string
            business_scale: string
            created_at: string
            email: string
            id: number
            location: string
            phone_number: string
            services_type: string
        }>
    }),
    actions: {
        async nextPage(){
            this.page = this.page + 1
            this.getReservationServices()
        },
        async prevPage(){
            this.page = this.page - 1
            this.getReservationServices()
        },
        async getReservationServices() {
            const client = useSupabaseClient<Database>()
            const count = await client.from("reservation")
                .select("id")

            if (count.error) {
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('reservation')
                .select("*")
                .limit(this.size)
                .range(this.page, (this.page + this.size))


            console.log("dt",{page:this.page,size:this.size})
            if (!data.error) {
                this.items = data.data
                return
            }
        }
    }
})