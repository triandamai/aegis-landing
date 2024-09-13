import type {Database} from "~/types/database.types";
import type {DataFeatureService} from "~/schema/type.data";

export const useAdminMasterServiceFeature = defineStore("master-services-feature", {
    state: () => ({
        //form
        featureId: null as number | null,
        featureName: "",
        featureDescription: "",
        featureImage: null as File | null,
        featureImageUrl: "" as string | ArrayBuffer | null,
        isEdit: false,
        showForm: false,
        loadingSubmit:false,

        // data
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<DataFeatureService>,
        loading: false as boolean,

        //delete
        showDelete: false as boolean,
        selectedService: null as DataFeatureService | null,
        showDeleteLoading: false as boolean,
    }),
    getters: {
        getImagePreview(): string {
            if(this.isEdit){
                const {publicServiceUrl} = useFile()
                if (this.featureImage == null) return publicServiceUrl(this.featureImageUrl)
                return URL.createObjectURL(this.featureImage)
            }else {
                if (this.featureImage == null) return "https://placehold.co/600x400"
                return URL.createObjectURL(this.featureImage)
            }
        }
    },
    actions: {
        resetForm(){
            this.isEdit=false
            this.showForm = false
            this.featureId = null
            this.featureName = ""
            this.featureDescription = ""
            this.featureImage = null
            this.featureImageUrl = null
        },
        async onPageChange(page: number) {
            if ((page - 1) > this.page) {
                this.nextPage()
            } else if ((page - 1) < this.page) {
                this.prevPage()
            } else if ((page - 1) === this.page) {
                this.getFeature()
            }
        },
        async nextPage() {
            this.page = this.page + 1
            this.getFeature()
        },
        async prevPage() {
            this.page = this.page - 1
            this.getFeature()
        },
        async getFeature() {
            this.loading = true
            const route = useRoute('admin-master-services-feature-id')
            const client = useSupabaseClient<Database>()
            const count = await client.from("service_feature")
                .select("id")
                .eq("service_id", route.params.id)

            if (count.error) {
                this.loading = false
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('service_feature')
                .select("*")
                .eq("service_id", route.params.id)
                .limit(this.size)
                .range(this.page, (this.page + this.size))


            this.loading = false
            if (!data.error) {
                this.items = data.data
                return
            }
        },
        async createFeature() {
            const client = useSupabaseClient<Database>()
            this.loadingSubmit = true
            const {getExt} = useFile()
            if (this.featureImage === null) {
                this.loadingSubmit = false
                return false
            }
            const currentDate = new Date().getTime()

            const getFileExtension = getExt(this.featureImage)

            if (getFileExtension === "") {
                this.loadingSubmit = false
                return false
            }
            const upload = await client.storage.from("service-feature")
                .upload(`${currentDate}.${getFileExtension}`, this.featureImage)

            if (upload.error) {
                this.loadingSubmit = false
                return false
            }
            const route = useRoute('admin-master-services-feature-id')

            const savedService = await client.from("service_feature")
                .insert({
                    name: this.featureName,
                    description: this.featureDescription,
                    image: upload.data.fullPath,
                    service_id: parseInt(route.params.id)
                })
            this.loadingSubmit = false
            if (savedService.error) {
                return false
            }
            this.resetForm()
            this.getFeature()
            return true
        },
        async updateFeature() {
            const client = useSupabaseClient<Database>()
            this.loadingSubmit = true

            const data =await client.from('service_feature')
                .select("*")
                .eq('id',this.featureId)
                .limit(1)

            if(data.error){
                this.loadingSubmit = false
                return false
            }
            if(data.data.length<=0){
                this.loadingSubmit = false
                return false
            }

            let imageUrl:string = data.data[0].image
            if(this.featureImage !== null){
                const upload = await client.storage.from("service-feature")
                    .update(imageUrl.split("service-feature/")[1], this.featureImage)

                if (upload.error) {
                    this.loadingSubmit = false
                    return false
                }
                imageUrl = upload.data.fullPath
            }


            const route = useRoute('admin-master-services-feature-id')

            const savedService = await client.from("service_feature")
                .update({
                    name: this.featureName,
                    description: this.featureDescription,
                    image: imageUrl,
                    service_id: parseInt(route.params.id)
                })
                .eq('id',this.featureId)

            this.loadingSubmit = false
            if (savedService.error) {
                return false
            }
            this.resetForm()
            this.getFeature()
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
                .from('service_feature')
                .select("*")
                .eq('id', this.selectedService.id)
                .limit(1)


            if (getData.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteImage = await client.storage.from('service-feature')
                .remove([getData.data[0].image.split("service-feature/")[1] ?? ''])

            if (deleteImage.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteData = await client.from('service_feature')
                .delete()
                .eq('id', this.selectedService.id)

            this.showDeleteLoading = false

            if (deleteData.error) return false

            this.selectedService = null
            this.showDelete = false
            this.getFeature()
            return true
        }
    }
})