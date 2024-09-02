import type {Database} from "~/types/database.types";

export const useAdminContact = defineStore("admin-contact", {
    state: () => ({
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<{ id:number,created_at: string, full_name: string, email: string, subject: string, message: string|null }>,
        showDialog:false,
    }),
    actions: {
        async nextPage(){
            this.page = this.page + 1
            this.getMessages()
        },
        async prevPage(){
            this.page = this.page - 1
            this.getMessages()
        },
        async getMessages() {
            const client = useSupabaseClient<Database>()
            const count = await client.from("inbox")
                .select("id")

            if (count.error) {
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('inbox')
                .select("*")
                .limit(this.size)
                .range(this.page, (this.page + this.size))


            if (!data.error) {
                this.items = data.data
                console.log(data)
                return
            }
        }
    }
})