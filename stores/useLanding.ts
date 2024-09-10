import type {Database} from "~/types/database.types";


export const useLanding = defineStore("landing", {
    state: () => ({
        locations: [] as Array<string>,
        services: [] as Array<DataDetailService>,
        package: [] as Array<DataDetailPackage>,
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

        businessId: null as number | null,
        serviceId: null as number | null,
        packageId: null as number | null,

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
        async getServices() {
            const client = useSupabaseClient<Database>()
            const data = await client
                .from("services")
                .select("*,features:service_feature(*)")
                .order('id', {
                    ascending: true
                })

            console.log(data)
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
                this.package = data.data as any
            }
        },
        async getDetailPackage() {
            const route = useRoute('packages-slug')
            if (route.params.slug.length > 1) {
                this.loadingDetailPackage = true
                const client = useSupabaseClient<Database>()
                const data = await client
                    .from("packages")
                    .select("*,features:package_feature(*,feature:service_feature(*))")
                    .eq('slug', route.params.slug)
                    .limit(1)

                this.loadingDetailPackage = false
                if (data.data) {
                    if (data.data.length > 0) {
                        this.detailPackage = data.data[0] as any
                    }
                }
            }
        },
        async getDetailServices() {
            const route = useRoute('services-slug')
            if (route.params.slug.length > 1) {
                this.loadingDetailPackage = true
                const client = useSupabaseClient<Database>()
                const data = await client
                    .from("services")
                    .select("*,features:service_feature(*)")
                    .eq('slug', route.params.slug)

                this.loadingDetailPackage = false
                if (data.data) {
                    if (data.data.length > 0) {
                        this.detailService = data.data[0] as any
                    }
                }
            }
        },
        async sendReservation() {
            const {showLoading, hideLoading} = useLoading()
            const alert = useAlert()
            const client = useSupabaseClient<Database>()
            const user = await client.auth.getUser()
            if(user.error){
                alert.failed("Belum login")
                return false
            }

            showLoading()
            const shouldCreateBusiness = this.business.length < 1
            if (shouldCreateBusiness) {
                const validate = reservationCreateBusinessSchema.safeParse({
                    businessName:this.businessName,
                    businessEmail:this.businessEmail,
                    businessScale:this.businessScale,
                    businessPhoneNumber:this.businessPhoneNumber,
                })
                if(validate.error){
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

            if(this.isPackageReservation){
                const validate = reservationPackageSchema.safeParse({
                    businessId:this.businessId,
                    packageId:this.packageId,
                    location: this.location,
                })
                if(validate.error){
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return false
                }
            }

            if(!this.isPackageReservation){
                const validate = reservationServiceSchema.safeParse({
                    businessId:this.businessId,
                    serviceId:this.serviceId,
                    location: this.location,
                })
                if(validate.error){
                    hideLoading()
                    alert.failed(validate.error.errors.map(v => v.message).join(","))
                    return false
                }
            }

            const save = await client
                .from('reservation')
                .insert({
                    business_id: this.businessId,
                    service_id: this.serviceId,
                    package_id: this.packageId,
                    book_at:this.bookAt.toDateString(),
                    location: this.location,
                })

            if (save.error) {
                hideLoading()
                alert.failed(save.error.message)
                return false
            }
            return true
        }
    }
})