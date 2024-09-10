
export default function useFile() {
    return {
        publicServiceUrl:(fileName:string)=>"https://gjslwkyilsiafczjexti.supabase.co/storage/v1/object/public/"+fileName,
        getExt:(file:File|null)=>{
            if(file == null) return ""
            if(file.type.startsWith("image")){
                const imageName = file?.type.split("/") ?? []
                if(imageName.length <= 0) return ""
                const ext = imageName[1]
                if(ext.includes("+")){
                    return ext.split("+")[0]
                }
                return ext
            }
            return ""
        }
    }
}