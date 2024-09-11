import type {Database} from "~/types/database.types";

export const useAdminServices = defineStore("book", {
    state: () => ({
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<DataDetailReservation>
    }),
    actions: {
        async onPageChange(page:number){
            if((page -1) > this.page){
                this.nextPage()
            }else if((page -1) < this.page){
                this.prevPage()
            }else if((page -1) === this.page){
                this.getReservationServices()
            }
        },
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
                .select("*,business:business!business_id(*),service:services!service_id(*),package:packages!package_id(*)()")
                .limit(this.size)
                .range(this.page, (this.page + this.size))
                .order('created_at',{ascending:false})


            if (!data.error) {
                this.items = data.data as any
                return
            }
        }
    }
})