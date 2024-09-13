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
        loadingSubmit:false,

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
            if(this.isEdit){
                const {publicServiceUrl} = useFile()
                if (this.serviceImage == null) return publicServiceUrl(this.serviceImageUrl)
                return URL.createObjectURL(this.serviceImage)
            }else {
                if (this.serviceImage == null) return "https://placehold.co/600x400"
                return URL.createObjectURL(this.serviceImage)
            }
        },
        getIconPreview(): string {
            if(this.isEdit){
                const {publicServiceUrl} = useFile()
                if (this.serviceIcon == null) return publicServiceUrl(this.serviceIconUrl)
                return URL.createObjectURL(this.serviceIcon)
            }else {
                if (this.serviceIcon == null) return "https://placehold.co/600x400"
                return URL.createObjectURL(this.serviceIcon)
            }
        }
    },
    actions: {
        resetForm(){
            this.isEdit = false
            this.showForm = false
            this.serviceId = null
            this.serviceName = ""
            this.serviceDescription = ""
            this.serviceImage = null
            this.serviceImageUrl = null
            this.serviceIcon = null
            this.serviceIconUrl = null
            this.servicePrice=null
        },
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

            this.loadingSubmit = true
            const upload = await client.storage.from("services")
                .upload(`${currentDate}.${getFileExtension}`, this.serviceImage)

            if (upload.error) {
                this.loadingSubmit = false
                return false
            }

            //icon
            if (this.serviceIcon === null){
                this.loadingSubmit = false
                return false
            }

            const getFileIconExtension = getExt(this.serviceImage)

            if (getFileExtension === "") {
                this.loadingSubmit = false
                return false
            }
            const uploadIcon = await client.storage.from("services")
                .upload(`icon-${currentDate}.${getFileIconExtension}`, this.serviceIcon)

            if (uploadIcon.error) {
                this.loadingSubmit = false
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

            this.loadingSubmit = false
            if (savedService.error) {
                return false
            }
            this.resetForm()
            this.getServices()
            return true
        },
        async updateServices() {
            const client = useSupabaseClient<Database>()

            this.loadingSubmit = true
            const data = await client.from('services')
                .select("*")
                .eq('id',this.serviceId)
                .limit(1)

            if(data.error){
                //failed
                this.loadingSubmit = false
                return false
            }

            if(data.data.length <= 0){
                //failed
                this.loadingSubmit = false
                return false
            }

            let imageUrl:string=data.data[0].image
            let iconUrl:string=data.data[0].icon

            if (this.serviceImage != null){
                const upload = await client.storage.from("services")
                    .update(`${imageUrl.split('services/')[1]}`, this.serviceImage)

                if (upload.error) {
                    this.loadingSubmit = false
                    return false
                }
                imageUrl = upload.data.fullPath
            }

            if (this.serviceIcon != null){
                const upload = await client.storage.from("services")
                    .update(`${iconUrl.split('services/')[1]}`, this.serviceIcon)

                if (upload.error) {
                    this.loadingSubmit = false
                    return false
                }
                iconUrl = upload.data.fullPath
            }

            const {slugify} = useSlug()

            const savedService = await client.from("services")
                .update({
                    name: this.serviceName,
                    description: this.serviceDescription,
                    price:this.servicePrice,
                    slug: slugify(this.serviceName),
                    image:imageUrl,
                    icon:iconUrl
                }).eq('id',this.serviceId)

            this.loadingSubmit = false
            if (savedService.error) {
                return false
            }
            this.resetForm()
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

            if(getData.data.length <= 0) {
                this.showDeleteLoading = false
                return false
            }

            const deleteImage = await client.storage.from('services')
                .remove([getData.data[0].image.split('services/')[1] ?? '',getData.data[0].icon.split('services/')[1] ?? ''])

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
            this.resetForm()
            this.getServices()
            return true
        }
    }
})