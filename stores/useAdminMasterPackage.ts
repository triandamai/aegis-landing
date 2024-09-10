import type {Database} from "~/types/database.types";

export const useAdminMasterPackage = defineStore("master-package", {
    state: () => ({
        //form
        packageId: 0 as number | null,
        packageTitle: "",
        packageSubTitle: "",
        packageDescription: "",
        packageBenefitTitle: "",
        packageBenefitDescription: "",
        packageImage: null as File | null,
        packageImageUrl: "" as string | ArrayBuffer | null,
        packageIcon: null as File | null,
        packageIconUrl: "" as string | ArrayBuffer | null,
        packagePrice: 0 as number | null,
        isEdit: false,
        showForm: false,

        // data
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<DataPackage>,
        loading: false as boolean,

        //  delete
        showDelete: false,
        selectedPackage: null as DataPackage | null,

        showDeleteLoading: false as boolean,
    }),
    getters: {
        getImagePreview(): string {
            if (this.packageImage == null) return "https://placehold.co/600x400"
            return URL.createObjectURL(this.packageImage)
        },
        getImageIconPreview(): string {
            if (this.packageIcon == null) return "https://placehold.co/600x400"
            return URL.createObjectURL(this.packageIcon)
        }
    },
    actions: {
        async onPageChange(page: number) {
            if ((page - 1) > this.page) {
                this.nextPage()
            } else if ((page - 1) < this.page) {
                this.prevPage()
            } else if ((page - 1) === this.page) {
                this.getPackages()
            }
        },
        async nextPage() {
            this.page = this.page + 1
            this.getPackages()
        },
        async prevPage() {
            this.page = this.page - 1
            this.getPackages()
        },
        async getPackages() {
            this.loading = true
            const client = useSupabaseClient<Database>()
            const count = await client.from("packages")
                .select("id")

            if (count.error) {
                this.loading = false
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('packages')
                .select("*")
                .limit(this.size)
                .range(this.page, (this.page + this.size))


            this.loading = false
            if (!data.error) {
                this.items = data.data
                return
            }
        },
        async createPackages() {
            const client = useSupabaseClient<Database>()
            const {getExt} = useFile()
            if (this.packageImage === null) return false
            if (this.packageIcon === null) return false
            const currentDate = new Date().getTime()

            const getFileExtension = getExt(this.packageImage)
            if (getFileExtension === "") return false

            const upload = await client
                .storage
                .from("package")
                .upload(`${currentDate}.${getFileExtension}`, this.packageImage)

            if (upload.error) {
                return false
            }

            const getExtIcon = getExt(this.packageIcon)
            if (getExtIcon == "") return false

            const uploadIcon = await client
                .storage
                .from("package")
                .upload(`icon-${currentDate}.${getFileExtension}`, this.packageIcon)

            if (uploadIcon.error) {
                return false
            }

            const {slugify} = useSlug()

            const savedService = await client.from("packages")
                .insert({
                    title: this.packageTitle,
                    subtitle: this.packageSubTitle,
                    description: this.packageDescription,
                    feature_title: this.packageBenefitTitle,
                    feature_sub_title: this.packageBenefitDescription,
                    price: this.packagePrice,
                    image: upload.data.fullPath,
                    icon: uploadIcon.data.fullPath,
                    slug: slugify(this.packageTitle)
                })

            if (savedService.error) {
                return false
            }
            this.showForm = false
            this.packageId = null
            this.packageTitle = ""
            this.packageSubTitle = ""
            this.packageDescription = ""
            this.packageBenefitTitle = ""
            this.packageBenefitDescription = ""
            this.packageImage = null
            this.packageImageUrl = null
            this.packageIcon = null
            this.packageIconUrl = null
            this.packagePrice = null
            this.getPackages()
            return true
        },
        async deletePackage() {
            this.showDeleteLoading = true
            if (this.selectedPackage === null) {
                this.showDeleteLoading = false
                return false
            }

            const client = useSupabaseClient<Database>()
            const getData = await client
                .from('packages')
                .select("*")
                .eq('id', this.selectedPackage.id)
                .limit(1)


            if (getData.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteImage = await client.storage.from('package')
                .remove([getData.data[0].image ?? '', getData.data[0].icon ?? ''])

            if (deleteImage.error) {
                this.showDeleteLoading = false
                return false
            }

            const deleteData = await client.from('packages')
                .delete()
                .eq('id', this.selectedPackage.id)

            this.showDeleteLoading = false

            if (deleteData.error) return false

            this.selectedPackage = null
            this.showDelete = false
            this.getPackages()
            return true
        }
    }
})