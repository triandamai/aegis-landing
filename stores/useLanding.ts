import type {Database} from "~/types/database.types";


export const useLanding = defineStore("landing", {
    state: () => ({
        locations: [] as Array<{id:string,text:string}>,
        services: [] as Array<DataDetailService>,
        packages: [] as Array<DataDetailPackage>,
        detailPackage: null as DataDetailPackage | null,
        detailService: null as DataDetailService | null,
        loadingDetailPackage: false as boolean,
        loadingDetailService: false as boolean,
        showDialogCreateReservation: false,

        //     order

        business: [] as Array<Business>,
        businessPhoneNumber: "",
        businessEmail: "",
        businessName: "",
        businessScale: "NONE",

        businessId: 0 as number,
        serviceId: 0 as number,
        packageId: 0 as number,

        bookAt: new Date(),
        location: "NONE",
        isPackageReservation: false,
    }),
    actions: {
        async getLocations() {
            const data = await fetch('https://alamat.thecloudalert.com/api/provinsi/get').then(res => res.json())

            if (data.result) {
                this.locations = data.result
            }

        },
        async getBusiness() {
            const client = useSupabaseClient<Database>()
            const user = await client.auth.getUser()
            if (user.error) {
                return false
            }
            const data = await client
                .from("business")
                .select("*")
                .eq("user_id", user.data.user.id)

            if (!data.error) {

                this.business = data.data
            }
        },
        async getServices() {
            const client = useSupabaseClient<Database>()
            const route = useRoute('packages-slug')
            const {showLoading,hideLoading} = useLoading()
            if (!route.params.slug) {
               showLoading()
            }
            const data = await client
                .from("services")
                .select("*,features:service_feature(*)")
                .order('id', {
                    ascending: true
                })
            if (!route.params.slug) {
                hideLoading()
            }
            if (data.data) {
                this.services = data.data as any
            }
        },
        async getPackage() {
            const client = useSupabaseClient<Database>()
            const data = await client
                .from("packages")
                .select("*,features:package_feature(*,feature:service_feature(*))")
                .order('id', {
                    ascending: true
                })

            if (data.data) {
                this.packages = data.data as any
            }
        },
        async getDetailPackage() {
            const route = useRoute('packages-slug')
            if (route.params.slug) {
                if (route.params.slug.length > 1) {
                    const {showLoading,hideLoading} = useLoading()
                    this.loadingDetailPackage = true
                    showLoading()
                    const client = useSupabaseClient<Database>()
                    const data = await client
                        .from("packages")
                        .select("*,features:package_feature(*,feature:service_feature(*))")
                        .eq('slug', route.params.slug)
                        .limit(1)

                    this.loadingDetailPackage = false
                    hideLoading()
                    if (!data.error) {
                        if (data.data.length > 0) {
                            this.detailPackage = data.data[0] as any
                        }
                    }
                }
            }
        },
        async getDetailServices() {
            const route = useRoute('services-slug')
            if (route.params.slug) {
                if (route.params.slug.length > 1) {

                    const {showLoading,hideLoading} = useLoading()
                    this.loadingDetailPackage = true
                    const client = useSupabaseClient<Database>()
                    showLoading()
                    const data = await client
                        .from("services")
                        .select("*,features:service_feature(*)")
                        .eq('slug', route.params.slug)

                    this.loadingDetailPackage = false
                    hideLoading()
                    if (data.data) {
                        if (data.data.length > 0) {
                            this.detailService = data.data[0] as any
                        }
                    }
                }
            }
        },
        async sendReservation() {

            const router = useRouter()
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()

            showLoading()
            const user = await client.auth.getUser()
            if (user.error) {
                hideLoading()
                alert.failed("Belum login")
                return false
            }

            const shouldCreateBusiness = this.business.length == 0
            if (shouldCreateBusiness) {
                const validate = reservationCreateBusinessSchema.safeParse({
                    businessName: this.businessName,
                    businessEmail: this.businessEmail,
                    businessScale: this.businessScale,
                    businessPhoneNumber: this.businessPhoneNumber,
                })
                if (validate.error) {
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return false
                }
                const createBusiness = await client
                    .from('business')
                    .insert({
                        business_scale: this.businessScale,
                        business_name: this.businessName,
                        business_phone: this.businessPhoneNumber,
                        business_email: this.businessEmail,
                        user_id: user.data.user?.id ?? ''
                    }).select().limit(1)
                if (createBusiness.error) {
                    hideLoading()
                    alert.failed(createBusiness.error.message)
                    return false
                }

                if (createBusiness.data.length > 0) {
                    this.businessId = createBusiness.data[0].id
                }
            }

            if (this.isPackageReservation) {
                const validate = reservationPackageSchema.safeParse({
                    businessId: this.businessId,
                    packageId: this.packageId,
                    location: this.location,
                })
                if (validate.error) {
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return false
                }
            }

            if (!this.isPackageReservation) {
                const validate = reservationServiceSchema.safeParse({
                    businessId: this.businessId,
                    serviceId: this.serviceId,
                    location: this.location,
                })
                if (validate.error) {
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return false
                }
            }

            if(this.location === "NONE"){
                hideLoading()
                alert.failed("Mohon pilih lokasi terlebih dahulu")
                return false
            }
            const save = await client
                .from('reservation')
                .insert({
                    business_id: this.businessId === 0 ? null : this.businessId,
                    service_id: this.serviceId === 0 ? null : this.serviceId,
                    package_id: this.packageId === 0 ? null : this.packageId,
                    book_at: this.bookAt.toDateString(),
                    location: this.location,
                })
            hideLoading()
            if (save.error) {
                alert.failed(save.error.message)
                return false
            }

            alert.success("Berhasil mengirim")
            this.showDialogCreateReservation = false
            router.push({path:'/reservation-sent'})
            return true
        }
    }
})