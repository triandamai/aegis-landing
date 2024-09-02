import type {Database} from "~/types/database.types";

export default defineNuxtRouteMiddleware(async (to,from)=>{
    if (import.meta.server) return
    const client = useSupabaseClient<Database>()

    const isLoggedIn = await client.auth.getUser()
    if(isLoggedIn.error) return navigateTo("/admin/login")
    if(isLoggedIn.data.user == null) return navigateTo("/admin/login")

    const admin = await client.from('admin')
        .select("*")
        .eq("email",isLoggedIn.data.user.email ?? "")

    if(admin.error) return navigateTo("/admin/login")
    if(admin.data.length < 1) return navigateTo("/admin/login")
})