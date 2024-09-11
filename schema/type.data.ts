import type {User} from "@supabase/auth-js";

export type DataService = {
    created_at: string
    description: string | null
    icon: string | null
    id: number
    image: string | null
    name: string | null
    price: number | null
    slug: string | null
}

export type DataDetailService = {
    created_at: string
    description: string | null
    icon: string | null
    id: number
    image: string | null
    name: string | null
    price: number | null
    slug: string | null
    features:Array<DataDetailFeatureService>
}


export type DataFeatureService = {
    created_at: string
    description: string | null
    id: number
    image: string | null
    name: string | null
    service_id: number | null
}

export type DataDetailFeatureService = {
    created_at: string
    description: string | null
    id: number
    image: string | null
    name: string | null
    service_id: number | null,
    services:DataService|null
}
export type DataPackage = {
    created_at: string
    description: string | null
    feature_sub_title: string | null
    feature_title: string | null
    icon: string | null
    id: number
    image: string | null
    price: number | null
    slug: string | null
    subtitle: string | null
    title: string | null,
    recommendation: boolean | null
}
export type DataDetailPackage = {
    created_at: string
    description: string | null
    feature_sub_title: string | null
    feature_title: string | null
    icon: string | null
    id: number
    image: string | null
    price: number | null
    slug: string | null
    subtitle: string | null
    title: string | null,
    recommendation: boolean | null,
    features:Array<DataDetailFeaturePackage>
}

export type DataFeaturePackage={
    created_at: string
    feature_id: number | null
    package_id: number | null
}

export type DataDetailFeaturePackage={
    created_at: string
    feature_id: number | null
    package_id: number | null,
    package: DataPackage|null,
    feature:DataFeatureService|null
}

export type Business = {
    business_email: string | null
    business_name: string | null
    business_phone: string | null
    business_scale: string | null
    created_at: string
    id: number
    user_id: string | null
}

export type DataDetailBusiness = {
    business_email: string | null
    business_name: string | null
    business_phone: string | null
    business_scale: string | null
    created_at: string
    id: number
    user_id: string | null,
    user: User | null
}

export type Reservation = {
    book_at: string
    business_id: number | null
    created_at: string
    id: number
    location: string
    package_id: number | null
    service_id: number | null
}

export type DataDetailReservation = {
    book_at: string
    business_id: number | null
    created_at: string
    id: number
    location: string
    package_id: number | null
    service_id: number | null,
    business:Business|null,
    package:DataPackage|null,
    service:DataService|null,
}