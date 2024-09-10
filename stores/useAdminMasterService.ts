import type {Database} from "~/types/database.types";

export const useAdminMasterService = defineStore("master-service", {
    state: () => ({
        //form
        serviceId: 0 as number | null,
        serviceName: "",
        serviceDescription: "",
        serviceImage: null as File | null,
        serviceImageUrl: "" as string | ArrayBuffer | null,
        serviceIcon: null as File | null,
        serviceIconUrl: "" as string | ArrayBuffer | null,
        servicePrice:0 as number,
        isEdit: false,
        showForm: false,

        // data
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<DataService>,
        loading: false as boolean,

        //delete
        showDelete: false as boolean,
        selectedService: null as DataService | null,
        showDeleteLoading: false as boolean,
    }),
    getters: {
        getImagePreview(): string {
            if (this.serviceImage == null) return "https://placehold.co/600x400"
            return URL.createObjectURL(this.serviceImage)
        },
        getIconPreview(): string {
            if (this.serviceIcon == null) return "https://placehold.co/600x400"
            return URL.createObjectURL(this.serviceIcon)
        }
    },
    actions: {
        async onPageChange(page: number) {
            if ((page - 1) > this.page) {
                this.nextPage()
            } else if ((page - 1) < this.page) {
                this.prevPage()
            } else if ((page - 1) === this.page) {
                this.getServices()
            }
        },
        async nextPage() {
            this.page = this.page + 1
            this.getServices()
        },
        async prevPage() {
            this.page = this.page - 1
            this.getServices()
        },
        async getServices() {
            this.loading = true
            const client = useSupabaseClient<Database>()
            const count = await client.from("services")
                .select("id")

            if (count.error) {
                this.loading = false
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('services')
                .select("*")
                .limit(this.size)
                .range(this.page, (this.page + this.size))


            this.loading = false
            if (!data.error) {
                this.items = data.data
                return
            }
        },
        async createServices() {
            const client = useSupabaseClient<Database>()
            const {getExt} = useFile()
            if (this.serviceImage === null) return false
            const currentDate = new Date().getTime()

            const getFileExtension = getExt(this.serviceImage)

            if (getFileExtension === "") return false
            const upload = await client.storage.from("services")
                .upload(`${currentDate}.${getFileExtension}`, this.serviceImage)

            if (upload.error) {
                return false
            }

            //icon
            if (this.serviceIcon === null) return false

            const getFileIconExtension = getExt(this.serviceImage)

            if (getFileExtension === "") return false
            const uploadIcon = await client.storage.from("services")
                .upload(`icon-${currentDate}.${getFileIconExtension}`, this.serviceImage)

            if (uploadIcon.error) {
                return false
            }
            const {slugify} = useSlug()

            const savedService = await client.from("services")
                .insert({
                    name: this.serviceName,
                    description: this.serviceDescription,
                    image: upload.data.fullPath,
                    icon:uploadIcon.data.fullPath,
                    price:this.servicePrice,
                    slug: slugify(this.serviceName),
                })

            if (savedService.error) {
                return false
            }
            this.showForm = false
            this.serviceId = null
            this.serviceName = ""
            this.serviceDescription = ""
            this.serviceImage = null
            this.serviceImageUrl = null
            this.serviceIcon = null
            this.serviceIconUrl = null
            this.getServices()
            return true
        },
        async deleteServices() {
            this.showDeleteLoading = true
            if (this.selectedService === null) {
                this.showDeleteLoading = false
                return false
            }

            const client = useSupabaseClient<Database>()
            const getData = await client
                .from('services')
                .select("*")
                .eq('id', this.selectedService.id)
                .limit(1)


            if (getData.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteImage = await client.storage.from('services')
                .remove([getData.data[0].image ?? '',getData.data[0].icon ?? ''])

            if (deleteImage.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteData = await client.from('services')
                .delete()
                .eq('id', this.selectedService.id)

            this.showDeleteLoading = false

            if (deleteData.error) return false

            this.selectedService = null
            this.showDelete = false
            this.getServices()
            return true
        }
    }
})