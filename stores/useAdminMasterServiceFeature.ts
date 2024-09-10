import type {Database} from "~/types/database.types";
import type {DataFeatureService} from "~/schema/type.data";

export const useAdminMasterServiceFeature = defineStore("master-services-feature", {
    state: () => ({
        //form
        featureId: 0 as number | null,
        featureName: "",
        featureDescription: "",
        featureImage: null as File | null,
        featureImageUrl: "" as string | ArrayBuffer | null,
        isEdit: false,
        showForm: false,

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
            if (this.featureImage == null) return "https://placehold.co/600x400"
            return URL.createObjectURL(this.featureImage)
        }
    },
    actions: {
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
            const {getExt} = useFile()
            if (this.featureImage === null) return false
            const currentDate = new Date().getTime()

            const getFileExtension = getExt(this.featureImage)

            if (getFileExtension === "") return false
            const upload = await client.storage.from("service-feature")
                .upload(`${currentDate}.${getFileExtension}`, this.featureImage)

            if (upload.error) {
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

            if (savedService.error) {
                return false
            }
            this.showForm = false
            this.featureId = null
            this.featureName = ""
            this.featureDescription = ""
            this.featureImage = null
            this.featureImageUrl = null
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
                .remove([getData.data[0].image ?? ''])

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