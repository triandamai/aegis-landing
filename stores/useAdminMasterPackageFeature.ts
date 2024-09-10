import type {Database} from "~/types/database.types";

export const useAdminMasterPackageFeature = defineStore("master-package-feature",{
    state:()=>({
        //form
        featureId:null as number|null,

        features:[] as Array<DataDetailFeatureService>,

        isEdit:false,
        showForm:false,

        // data
        search: "",
        totalPage: 0,
        totalItems: 0,
        page: 0,
        size: 10,
        items: [] as Array<DataDetailFeaturePackage>,
        loading:false as boolean,

        //delete
        showDelete:false as boolean,
        selectedFeature:null as DataDetailFeaturePackage|null,
        showDeleteLoading:false as boolean,
    }),
    actions:{
        async onPageChange(page:number){
            if((page -1) > this.page){
                this.nextPage()
            }else if((page - 1) < this.page){
                this.prevPage()
            }else if((page - 1) === this.page){
                this.getFeature()
            }
        },
        async nextPage(){
            this.page = this.page + 1
            this.getFeature()
        },
        async prevPage(){
            this.page = this.page - 1
            this.getFeature()
        },
        async getServiceFeature(){
            const client = useSupabaseClient<Database>()
            const data = await client
                .from("service_feature")
                .select("*,services(*)")
            if(!data.error){
                this.features = data.data
            }
        },
        async getFeature() {
            this.loading=true
            const route = useRoute('admin-master-services-feature-id')
            const client = useSupabaseClient<Database>()
            const count = await client.from("package_feature")
                .select("created_at")
                .eq("package_id",route.params.id)

            if (count.error) {
                this.loading=false
                return
            }

            this.totalItems = count.data.length

            const data = await client.from('package_feature')
                .select("*,feature:service_feature!feature_id(*,services(*)),package:packages!package_id(*)")
                .eq("package_id",route.params.id)
                .limit(this.size)
                .range(this.page, (this.page + this.size))

            this.loading=false
            if (!data.error) {
                this.items = data.data as any
                return
            }
        },
        async createFeature(){
            const client = useSupabaseClient<Database>()
            const route = useRoute('admin-master-services-feature-id')

            if(this.featureId == null){
                return false
            }

            const savedService = await client.from("package_feature")
                .insert({
                    package_id:parseInt(route.params.id),
                    feature_id:this.featureId ?? 0
                })

            if(savedService.error){
                return false
            }
            this.showForm = false
            this.featureId = null
            this.getFeature()
            return true
        },
        async deleteServices(){
            this.showDeleteLoading = true
            if(this.selectedFeature === null) {
                this.showDeleteLoading = false
                return false
            }

            const client = useSupabaseClient<Database>()


            const deleteData = await client.from('package_feature')
                .delete()
                .eq('feature_id',this.selectedFeature.feature_id ?? 0)
                .eq('package_id',this.selectedFeature.package_id ?? 0)


            this.showDeleteLoading = false

            if(deleteData.error) return false

            this.selectedFeature = null
            this.showDelete = false
            this.getFeature()
            return true
        }
    }
})